'use client';
import { useEffect } from 'react';

const load = src => new Promise(r => { const s = document.createElement('script'); s.src = src; s.onload = s.onerror = r; document.head.appendChild(s); });

export default function Effects() {
  useEffect(() => {
    if (window.__same18a) return; // StrictMode runs effects twice in dev
    window.__same18a = true;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // picker
    const opts = [...document.querySelectorAll('.opt')];
    function score() {
      let p = 0, w = 0; opts.forEach(o => { if (o.getAttribute('aria-pressed') === 'true') { o.dataset.w === 'p' ? p++ : w++ } });
      const r = document.getElementById('result'), rt = document.getElementById('rt'), rd = document.getElementById('rd'), rk = document.getElementById('rk');
      document.getElementById('mp').style.flexGrow = p; document.getElementById('mw').style.flexGrow = (p + w) ? w : 0;
      if (p + w === 0) { rt.textContent = 'Tap a few'; rt.style.color = ''; rd.textContent = 'Choose what your day looks like and the match appears here.'; r.style.borderTopColor = 'var(--mute)'; rk.textContent = 'Your match'; return }
      if (p > w) { rt.textContent = 'Core Ultra Series 3'; rt.style.color = 'var(--pan)'; r.style.borderTopColor = 'var(--pan)'; rk.textContent = 'Your match · Panther Lake';
        rd.textContent = 'You push your laptop hard. Panther Lake gives you up to 16 cores, up to 12 Xe3 GPU cores and up to 180 platform TOPS for creation, gaming and local AI.' }
      else if (w > p) { rt.textContent = 'Core Series 3'; rt.style.color = 'var(--wild)'; r.style.borderTopColor = 'var(--wild)'; rk.textContent = 'Your match · Wildcat Lake';
        rd.textContent = 'Your day is about getting things done smoothly. Wildcat Lake gives you Intel 18A, the same P-core design and on-device AI for calls, at a friendlier price.' }
      else { rt.textContent = 'Either fits'; rt.style.color = 'var(--ink)'; r.style.borderTopColor = 'var(--si)'; rk.textContent = 'Your match · a tie';
        rd.textContent = 'Your needs sit in the middle. If the heavy tasks are weekly, lean Panther Lake. If they are rare and price matters, lean Wildcat Lake.' }
      if (window.gsap && !reduce) gsap.fromTo(rt, { y: 16, opacity: .4 }, { y: 0, opacity: 1, duration: .5, ease: 'power3.out' });
    }
    opts.forEach(o => o.addEventListener('click', () => { o.setAttribute('aria-pressed', o.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); score() }));
    score();

    // film
    const vid = document.getElementById('vid'), play = document.getElementById('play');
    const seek = () => { try { vid.currentTime = 19.8 } catch (e) { } };
    if (vid.readyState >= 1) seek(); else vid.addEventListener('loadedmetadata', seek);
    play.addEventListener('click', () => { vid.currentTime = 0; vid.muted = false; vid.controls = true; vid.play().catch(() => { }); play.hidden = true });

    if (reduce) return;
    (async () => {
      await load('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
      await load('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');
      await load('https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js');
      if (!window.gsap) return;
      gsap.registerPlugin(ScrollTrigger);
      // smooth scroll
      if (window.Lenis) { const lenis = new Lenis({ duration: 1.15, smoothWheel: true }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
        document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const el = document.querySelector(a.getAttribute('href')); if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -60 }) } })); }

      // hero load sequence
      ['#h1a', '#h1b'].forEach(sel => { const el = document.querySelector(sel);
        const walk = n => { [...n.childNodes].forEach(c => { if (c.nodeType === 3) { const f = document.createDocumentFragment(); [...c.textContent].forEach(ch => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch === ' ' ? ' ' : ch; f.appendChild(s) }); c.replaceWith(f) } else walk(c) }) }; walk(el) });
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
      intro.from('#h1a .ch', { yPercent: 110, duration: 1.1, stagger: .035 })
        .from('#h1b .ch', { yPercent: 110, duration: 1.1, stagger: .035 }, '-=.85')
        .from('.hero .meta', { y: 24, duration: .8 }, '-=.6')
        .from('.film', { y: 60, scale: .96, duration: 1.2 }, '-=.7');

      // film parallax
      gsap.to('#vid', { scale: 1.06, ease: 'none', scrollTrigger: { trigger: '#film', start: 'top bottom', end: 'bottom top', scrub: true } });

      // DNA: tiles light up, traits highlight in sequence
      const tiles = gsap.utils.toArray('#die i');
      const dtl = gsap.timeline({ scrollTrigger: { trigger: '#dna .dna-grid', start: 'top 70%', end: 'bottom 45%', scrub: .6 } });
      dtl.to(tiles, { backgroundColor: '#3A8FD9', borderColor: '#3A8FD9', stagger: { each: .02, from: 'random' }, duration: .2 }, 0)
        .from('#die', { rotate: -6, scale: .9, duration: 1 }, 0)
        .from('#traits li', { x: 40, stagger: .15, duration: .4 }, 0)
        .from('#traits .dot', { scale: 0, stagger: .15, duration: .3 }, 0);

      // day: horizontal pin on wide screens
      ScrollTrigger.matchMedia({
        '(min-width: 821px)': () => {
          const track = document.getElementById('track');
          const dist = () => track.scrollWidth - track.parentElement.clientWidth;
          gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '#day', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: .8, invalidateOnRefresh: true } });
        },
        '(max-width: 820px)': () => {
          gsap.utils.toArray('.slot').forEach(s => gsap.from(s, { y: 50, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: s, start: 'top 88%' } }));
        }
      });

      // compare: bars grow from zero, numbers count
      gsap.utils.toArray('#cmp .row').forEach(row => {
        const st = { trigger: row, start: 'top 85%' };
        gsap.from(row.querySelectorAll('.b span'), { scaleX: 0, duration: 1.3, ease: 'expo.out', stagger: .12, scrollTrigger: st });
        row.querySelectorAll('.n').forEach(n => { const tn = n.firstChild, v = +n.dataset.v, o = { v: 0 };
          gsap.to(o, { v, duration: 1.3, ease: 'expo.out', scrollTrigger: st, onUpdate: () => tn.textContent = Math.round(o.v) }) });
      });

      // section headings rise
      gsap.utils.toArray('section h2').forEach(h => gsap.from(h, { y: 60, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%' } }));
      gsap.from('.closer h2', { scale: .9, ease: 'none', scrollTrigger: { trigger: '.closer', start: 'top bottom', end: 'center center', scrub: true } });
    })();
  }, []);
  return null;
}
