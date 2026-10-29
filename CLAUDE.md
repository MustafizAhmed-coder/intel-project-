# CLAUDE.md — Same 18A, Different You

Guide for Claude (or any AI coding assistant) working in this repo.

## What this is
A creative entry for the **Intel × Dayananda Sagar Institute of Technology infographic challenge**. It explains the difference between two Intel laptop processor families through one story about choice:

- **Intel Core Ultra Series 3** (codename **Panther Lake**): demanding creation, gaming, productivity and local AI
- **Intel Core Series 3** (codename **Wildcat Lake**): modern computing and right-sized AI for price-sensitive laptops

The characters are **Rhea, 24** (3D artist, streamer, weekend gamer) on Panther Lake and **Kabir, 19** (commerce student who lives on video calls) on Wildcat Lake. The tagline is **"Same 18A. Different you."**

## Repo layout
```
CLAUDE.md                 this file
PRD.md                    product requirements
PROMPT.md                 one-shot prompt to regenerate or extend the project
video/
  video.html              the film, a paused GSAP timeline driven by seek(t, frame)
  render_fast.py          parallel frame renderer (Playwright → ffmpeg), 4 workers
  render.py               single-worker renderer; `python3 render.py preview` saves stills
  gsap.min.js             local GSAP 3 used by video.html
  Same18A_DifferentYou_1080p.mp4   final film (34.3 s, 1920×1080, 30 fps)
website/
  index.html              GSAP + ScrollTrigger + Lenis site
  film.mp4                720p web copy of the film, referenced as "film.mp4"
```

## Commands
```bash
# Preview stills at key timestamps (prev_*.jpg)
cd video && python3 render.py preview

# Full render (needs pad.wav; see the soundtrack command below)
cd video && python3 render_fast.py

# Soundtrack (A-minor ambient pad, 34.3 s)
ffmpeg -y -f lavfi -i "aevalsrc='0.10*sin(2*PI*110*t)*(0.6+0.4*sin(2*PI*0.25*t))+0.07*sin(2*PI*164.81*t)+0.06*sin(2*PI*220*t)*(0.5+0.5*sin(2*PI*0.5*t))+0.04*sin(2*PI*261.63*t)+0.03*sin(2*PI*329.63*t)*(0.5+0.5*sin(2*PI*0.125*t))':s=48000:d=34.3" -af "lowpass=f=1800,afade=t=in:d=2,afade=t=out:st=31.5:d=2.8,aecho=0.8:0.7:400:0.3" pad.wav

# Serve the website locally
cd website && python3 -m http.server 8000
```
Requirements: Python 3 with `playwright` (Chromium installed), ffmpeg, and the Inter font for the video.

## Hard rules (do not break)
1. **No purple. No gradients.** This means no CSS `linear-gradient`/`radial-gradient` and no gradient fills. Use flat colors only. Blur glows (`filter: blur`, `box-shadow`) are allowed as lighting.
2. **Neither chip is the hero.** Never call Wildcat Lake "budget", "weaker" or "the compromise". Its words are "right-sized", "everyday", "friendlier price". Panther Lake's words are "headroom", "push hard", "demanding".
3. **Equal visual weight.** Each family gets the same card size, the same type size and its own color. Panther Lake is amber `#FF7A2F` and always on the left. Wildcat Lake is teal `#22C3B0` and always on the right. Shared or 18A elements use Intel blue `#3A8FD9` (`#0071C5` in the video).
4. **Facts only from the table below.** Say "up to" for every spec. Don't invent battery hours, prices or benchmarks.
5. **The website uses GSAP.** Load GSAP 3.12.5 and ScrollTrigger from cdnjs and Lenis 1.1.13 from jsDelivr. Every animation respects `prefers-reduced-motion`.
6. **The video stays deterministic.** All motion goes on the GSAP timeline or is computed from `t` inside `life(t)`/`dyn(t)`. Never use `Math.random()`, wall-clock time or CSS animations, or frames will jitter between renders.

## Verified facts
| | Core Ultra Series 3 (Panther Lake) | Core Series 3 (Wildcat Lake) |
|---|---|---|
| Process | Intel 18A | Intel 18A |
| P-cores | Cougar Cove | Cougar Cove |
| Low-power E-cores | Darkmont | Darkmont |
| CPU cores (max) | 16 (4P + 8E + 4LP-E) | 6 (2P + 4LP-E) |
| GPU | Xe3, up to 12 cores (Arc B390) | Xe3, up to 2 cores |
| NPU | NPU 5, up to 50 TOPS | NPU 5, up to 17 TOPS |
| Platform AI | up to 180 TOPS | up to 40 TOPS |
| Memory | up to LPDDR5X-9600, dual channel | up to LPDDR5X-7467 / DDR5-6400, single channel |
| Target | creators, gamers, AI, heavy multitasking | value laptops, students, office, edge |

18A technologies: **RibbonFET** (gate-all-around transistors) and **PowerVia** (backside power delivery).

Sources: Liliputing, HotHardware, Tom's Hardware and CNX Software (links are in the website footer).

## Design tokens
- Background `#0C0E11` (site) / `#0B0D10` (video), surface `#14171C`, line `#262A31`, ink `#EEEAE2`, muted `#8D939C`
- Fonts on the site: Archivo (display, condensed, uppercase), IBM Plex Sans (body), JetBrains Mono (labels and numbers)
- Font in the video: Inter (installed locally, no network)

## Video timeline (seconds)
| Scene | Time | Content |
|---|---|---|
| s1 | 0–3.6 | Letterbox in; "Two people. Two laptops. One question." |
| s2 | 3.5–11.2 | 18A chip builds, splits into two colored chips, five shared-DNA pills |
| s3 | 11.1–23.5 | Split-screen day, clock 9 AM → 11 PM, three pairs of spec callouts |
| s4 | 23.5–29.2 | "So… which one is you?" with two equal cards |
| s5 | 29.2–34.3 | "Same 18A. Different you." end slate, letterbox closes |

Ambient motion lives in `life(t)`: handheld drift, slow push, 3D chip tilt, parallax, typed notes, speaker ring and dust. Note that the shipped MP4 was rendered before this motion pass was added, so re-run `render_fast.py` to get the more animated cut.

## When editing
- After changing `video.html`, run `render.py preview` and look at the stills before doing a full render.
- Keep the film under 15 MB for `website/film.mp4` (720p, crf 31).
- The challenge submission itself must be **one A4 PPT, PDF, JPG or PNG**. The video and website are supporting social assets.
