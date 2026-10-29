# PROMPT.md

Paste the prompt below into Claude (or Claude Code inside this folder) to regenerate or extend the project. Read `CLAUDE.md` and `PRD.md` first, since this prompt assumes them.

---

## Master prompt

> You are building a creative entry for the Intel × Dayananda Sagar Institute of Technology infographic challenge. The brief: explain the difference between **Intel Core Ultra Series 3 (Panther Lake)** and **Intel Core Series 3 (Wildcat Lake)**, both built on Intel 18A, as a clear, memorable story about **choice**. The audience must be able to answer: (1) what both have in common, (2) their main differences, (3) which one suits me and why. **Do not make one processor the hero and the other the compromise.**
>
> **Concept:** "Same 18A. Different you." Rhea, 24, is a 3D artist, streamer and weekend gamer on Panther Lake (amber `#FF7A2F`, always on the left). Kabir, 19, is a commerce student who lives on video calls, on Wildcat Lake (teal `#22C3B0`, always on the right). Shared or 18A elements use Intel blue `#3A8FD9`. Dark neutral background `#0C0E11`.
>
> **Facts to use (always "up to"):**
> - Both: Intel 18A (RibbonFET, PowerVia), Cougar Cove P-cores, Darkmont LP E-cores, Xe3 graphics, NPU 5
> - Panther Lake: 16 cores (4P+8E+4LP-E), 12 Xe3 GPU cores (Arc B390), NPU 50 TOPS, 180 platform TOPS, LPDDR5X-9600 dual channel
> - Wildcat Lake: 6 cores (2P+4LP-E), 2 Xe3 GPU cores, NPU 17 TOPS, 40 platform TOPS, single-channel memory, aimed at value laptops
> - Don't invent prices, battery hours or benchmarks.
>
> **Hard rules:** no purple, no gradients (flat colors only; blur glows allowed as lighting). Wildcat Lake copy says "right-sized", "everyday AI", "friendlier price", never "budget" or "weak". Both families get equal card size, type size and screen time.
>
> **Build:**
> 1. **Film:** `video/video.html`, a 1920×1080 page with a paused GSAP timeline and `window.seek(t, frame)`. Five scenes over about 34 s: hook → shared chip splits in two → split-screen day (clock 9 AM → 11 PM, three pairs of spec callouts) → "So… which one is you?" cards → end slate. Add cinematic life computed only from `t`: letterbox, seeded film grain, dust motes, handheld drift, slow push, 3D chip tilt, parallax layers, typed notes, an active-speaker ring on the call. Render with Playwright in four parallel workers piped to ffmpeg (H.264, crf 26), add an ambient pad soundtrack, and export a 720p web copy under 15 MB.
> 2. **Website:** `website/index.html`, a single file with GSAP 3.12.5 and ScrollTrigger (cdnjs) and Lenis 1.1.13 (jsDelivr). Sections: hero with a per-character headline intro and the embedded film (click to play with sound) → Shared DNA (chip tiles light up on scroll) → One day, two needs (pinned sideways scroll, stacked on mobile) → numbers to scale (bars grow, counters tick) → Pick your day (8 toggles score toward a match) → closer → sources. Fonts: Archivo condensed for display, IBM Plex Sans for body, JetBrains Mono for labels. Responsive to 390 px, respects `prefers-reduced-motion`. The footer says it is a student concept, not an official Intel page.
>
> Check preview stills before a full render, and check every number against the fact list.

---

## Follow-up prompts

**A4 poster (the actual submission):**
> Using the same concept, palette and facts, make a single A4 portrait poster (2480×3508 PNG plus PDF). Top: "Same 18A. Different you." Then a shared-DNA strip with five traits. Middle: two equal columns, Rhea/Panther Lake (amber) and Kabir/Wildcat Lake (teal), each showing four moments of their day with one spec per moment. Bottom: a "Which one is you?" checklist for each and a QR code placeholder for the website. No purple, no gradients, and neither chip is the hero.

**Vertical reel cut:**
> Re-lay out `video/video.html` for 1080×1920 (9:16). Stack Rhea above Kabir instead of side by side, enlarge the text for phone viewing, keep the same timeline and facts, and render to `Same18A_reel_9x16.mp4`.

**Hindi or Kannada captions:**
> Add a caption track (SRT) in Hindi and Kannada for the film, translating only the on-screen lines. Keep spec numbers and product names in English.
