import subprocess, sys
from multiprocessing import Process
from playwright.sync_api import sync_playwright

FPS, W = 30, 4

def work(i, start, end):
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1920, "height": 1080})
        pg.goto("file:///home/claude/video/video.html")
        pg.wait_for_timeout(400)
        ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS),
                               "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "26",
                               "-pix_fmt", "yuv420p", f"seg{i}.mp4"], stdin=subprocess.PIPE)
        for f in range(start, end):
            pg.evaluate(f"seek({f/FPS},{f})")
            ff.stdin.write(pg.screenshot(type="jpeg", quality=85))
        ff.stdin.close(); ff.wait()

if __name__ == "__main__":
    n = int(34.3 * FPS)
    step = -(-n // W)
    ps = [Process(target=work, args=(i, i * step, min(n, (i + 1) * step))) for i in range(W)]
    [p.start() for p in ps]; [p.join() for p in ps]
    open("segs.txt", "w").write("".join(f"file 'seg{i}.mp4'\n" for i in range(W)))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", "segs.txt",
                    "-i", "pad.wav", "-c:v", "copy", "-c:a", "aac", "-b:a", "160k", "-shortest",
                    "-movflags", "+faststart", "Same18A_DifferentYou_1080p.mp4"], check=True)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", "Same18A_DifferentYou_1080p.mp4", "-vf", "scale=1280:-2",
                    "-c:v", "libx264", "-preset", "veryfast", "-crf", "31", "-c:a", "aac", "-b:a", "96k",
                    "-movflags", "+faststart", "film.mp4"], check=True)
    print("done")
