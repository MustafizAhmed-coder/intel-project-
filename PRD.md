# PRD — Same 18A, Different You

**Owner:**1.Likhit Midithana,2.Mustafiz Ahmed · **Status:** v1 shipped (film and website) · **Date:** 29 Oct 2026

## 1. Problem
Intel Core Ultra Series 3 (Panther Lake) and Intel Core Series 3 (Wildcat Lake) are both built on Intel 18A, but they serve different users. Buyers find the difference confusing. The names differ by one word, and spec sheets don't say who each chip is for.

## 2. Goal
Turn the technical difference into a clear, memorable story about **choice**. After seeing it, a viewer can answer three questions:
1. What do both processor families have in common?
2. What are their main differences?
3. Which one would suit my needs, and why?

**Constraint from the brief:** neither processor is the hero and neither is the compromise.

## 3. Audience
- College students and young professionals in India buying their first or next laptop
- Challenge judges scoring creativity (3), persuasive impact (3), factual accuracy (3) and shareability (1)

## 4. Concept
**"Same 18A. Different you."** Two people share one day in Bengaluru, shown side by side:
- **Rhea, 24**, a 3D artist, streamer and weekend gamer, on **Panther Lake** (amber, left)
- **Kabir, 19**, a commerce student who lives on video calls, on **Wildcat Lake** (teal, right)

The shared chip is the common ground. Their different days carry the difference. The ending hands the choice to the viewer.

## 5. Deliverables

### 5.1 Film (shipped)
- 34.3 s, 1920×1080, 30 fps, MP4 (H.264 + AAC), ambient soundtrack
- Five scenes: hook → shared silicon → split-screen day → "which one is you?" → end slate
- Cinematic treatment: letterbox, film grain, dust, handheld drift, parallax, screen glow, a 9 AM → 11 PM lighting change
- Must work with the sound off; all key information is on screen as text

### 5.2 Website (shipped)
| Section | Answers | Interaction |
|---|---|---|
| Hero and film | Hook | Character-split headline intro, click-to-play film with sound |
| 01 Shared DNA | Q1 | Chip tiles light up as you scroll; five traits stagger in |
| 02 One day, two needs | Q2 | Pinned sideways scroll through four time slots (stacks on mobile) |
| 03 The numbers, to scale | Q2 | Bars grow and counters tick; each row shares one scale |
| 04 Pick your day | Q3 | Eight toggles score toward a match; the meter and result update live |
| Closer and sources | — | Scrubbed scale-in headline; source links |

Technical: a single HTML file, GSAP 3.12.5 with ScrollTrigger, Lenis smooth scroll, responsive down to 390 px, respects reduced motion, no purple, no gradients.

### 5.3 Poster (next)
- One A4 PNG or PDF, which is the required submission format
- Reuses the split layout: shared-DNA strip at the top, Rhea and Kabir columns, "Which one is you?" checklist, tagline
- A QR code linking to the website for shareability

## 6. Content requirements
- Every spec comes from the verified table in `CLAUDE.md` and is phrased "up to"
- Wildcat Lake copy: "right-sized", "everyday AI", "friendlier price". Never "budget", "weak" or "lite".
- Panther Lake copy: "push hard", "headroom", "demanding work"
- No battery-hour, price or benchmark claims
- The footer states that this is a student concept, not an official Intel page

## 7. Design requirements
- Flat colors only: amber `#FF7A2F`, teal `#22C3B0`, Intel blue `#3A8FD9`, dark neutrals
- Equal card size, type size and screen time for both families
- Panther Lake is always on the left and Wildcat Lake always on the right, everywhere

## 8. Success criteria
- A viewer can name one shared trait and one difference after a single watch
- The picker gives a sensible match for both a creator profile and a student profile
- The film's square or vertical cut-downs work as an Instagram reel (stretch goal)
- No factual errors when checked against the sources

## 9. Out of scope (v1)
- Official Intel logos or trademarked artwork
- Price comparisons for specific laptop models
- Photoreal live-action footage. The film is code-rendered motion graphics.

## 10. Next steps
1. A4 poster (the submission)
2. 9:16 vertical cut of the film for reels
3. A QR code on the poster pointing to the website
