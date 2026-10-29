import sys, subprocess
from playwright.sync_api import sync_playwright

FPS = 30
preview = len(sys.argv) > 1 and sys.argv[1] == "preview"

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1920, "height": 1080})
    pg.goto("file:///home/claude/video/video.html")
    pg.wait_for_timeout(500)
    dur = pg.evaluate("window.DUR")
    if preview:
        for t in [2.5, 5.6, 9.8, 13.5, 17.5, 21, 26.5, 31]:
            pg.evaluate(f"seek({t},{int(t*FPS)})")
            pg.screenshot(path=f"prev_{t}.jpg", type="jpeg", quality=80)
        sys.exit()
    n = int(dur * FPS)
    ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS),
                           "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18",
                           "-pix_fmt", "yuv420p", "silent.mp4"], stdin=subprocess.PIPE)
    for f in range(n):
        pg.evaluate(f"seek({f/FPS},{f})")
        ff.stdin.write(pg.screenshot(type="jpeg", quality=92))
    ff.stdin.close(); ff.wait()
    print("frames", n)
