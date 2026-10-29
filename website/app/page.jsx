import Effects from './effects';

export default function Page() {
  return (
    <>
<nav><div className="wrap">
  <a className="mark" href="#top"><i></i><i></i>Same 18A</a>
  <ul><li><a href="#film">Film</a></li><li><a href="#dna">Shared DNA</a></li><li><a href="#day">A day</a></li><li><a href="#compare">Compare</a></li><li><a href="#pick">Pick yours</a></li></ul>
</div></nav>

<header className="hero" id="top"><div className="wrap">
  <p className="label">Intel Core Ultra Series 3 &nbsp;·&nbsp; Intel Core Series 3</p>
  <h1><span className="row" id="h1a">Same 18A.</span><span className="row" id="h1b"><span className="pan">Different</span> <span className="wild">you.</span></span></h1>
  <div className="meta">
    <div className="chipline"><span className="tagpill pan">Panther Lake</span><span className="tagpill wild">Wildcat Lake</span></div>
    <p className="lede" style={{ margin: 0 }}>Two processor families built on the same Intel 18A process. One is tuned for heavy creation, gaming and local AI. The other brings the same modern design to everyday laptops at a friendlier price. Neither is the lesser choice.</p>
  </div>
  <div className="film" id="film">
    <video id="vid" src="/film.mp4" playsInline muted preload="metadata"></video>
    <button className="playbtn" id="play" type="button"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.5v13l11-6.5z" /></svg>Watch the film · 34s</button>
  </div>
  <div className="filmcap"><span className="label">Rhea &amp; Kabir · one day in Bengaluru</span><span className="label">Sound on</span></div>
</div></header>

<section id="dna"><div className="wrap">
  <p className="label">01 · What they have in common</p>
  <h2>Same <span className="si">silicon</span> DNA</h2>
  <p className="lede">Both families share the same foundation. The difference is how much of it each chip carries.</p>
  <div className="dna-grid">
    <div className="die" id="die" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i}></i>)}</div>
    <ul className="traits" id="traits">
      <li><i className="dot"></i><div><b>Intel 18A process</b><span>RibbonFET transistors and PowerVia backside power delivery</span></div></li>
      <li><i className="dot"></i><div><b>Cougar Cove P-cores</b><span>The same performance-core design in both families</span></div></li>
      <li><i className="dot"></i><div><b>Darkmont LP E-cores</b><span>Low-power efficiency cores for light background work</span></div></li>
      <li><i className="dot"></i><div><b>Xe3 graphics</b><span>The newest Intel integrated GPU architecture</span></div></li>
      <li><i className="dot"></i><div><b>NPU 5</b><span>A dedicated AI engine for on-device features</span></div></li>
    </ul>
  </div>
</div></section>

<section className="day" id="day"><div className="wrap">
  <p className="label">02 · Where they differ</p>
  <h2>One day, <span className="pan">two</span> <span className="wild">needs</span></h2>
  <p className="lede">Rhea renders and streams. Kabir studies and lives on video calls. Follow their day and watch which chip fits which moment.</p>
  <div className="track" id="track">
    <article className="slot"><div className="t"><span>9:00 AM</span><span className="label">Morning</span></div>
      <div className="side L"><div className="who pan">Rhea · Panther Lake</div><h3>Opens a 3D scene</h3><p>Viewport, timeline and reference images all open at once.</p><div className="spec pan">Up to 16 cores · 4P + 8E + 4LP-E</div></div>
      <div className="side R"><div className="who wild">Kabir · Wildcat Lake</div><h3>Takes lecture notes</h3><p>Docs, a browser and a PDF. Fast to open, quiet all morning.</p><div className="spec wild">Up to 6 cores · 2P + 4LP-E</div></div></article>
    <article className="slot"><div className="t"><span>1:30 PM</span><span className="label">Afternoon</span></div>
      <div className="side L"><div className="who pan">Rhea · Panther Lake</div><h3>Tests a game build</h3><p>Plays her client&apos;s game on integrated graphics, no separate GPU.</p><div className="spec pan">Up to 12 Xe3 cores · Intel Arc B390</div></div>
      <div className="side R"><div className="who wild">Kabir · Wildcat Lake</div><h3>Streams a recorded class</h3><p>Video playback and browsing are smooth on modern Xe3 graphics.</p><div className="spec wild">Up to 2 Xe3 cores</div></div></article>
    <article className="slot"><div className="t"><span>6:00 PM</span><span className="label">Evening</span></div>
      <div className="side L"><div className="who pan">Rhea · Panther Lake</div><h3>Runs AI upscaling locally</h3><p>Her footage never leaves the laptop. CPU, GPU and NPU share the load.</p><div className="spec pan">Up to 180 platform TOPS · NPU up to 50</div></div>
      <div className="side R"><div className="who wild">Kabir · Wildcat Lake</div><h3>Group project call</h3><p>Background blur, live captions and noise removal run on-device.</p><div className="spec wild">Up to 40 platform TOPS · NPU up to 17</div></div></article>
    <article className="slot"><div className="t"><span>11:00 PM</span><span className="label">Night</span></div>
      <div className="side L"><div className="who pan">Rhea · Panther Lake</div><h3>Exports in 4K</h3><p>Heavy work done. She paid for headroom and used all of it.</p><div className="spec pan">Built for demanding creators &amp; gamers</div></div>
      <div className="side R"><div className="who wild">Kabir · Wildcat Lake</div><h3>Submits the assignment</h3><p>Everything he needed, without paying for power he would never use.</p><div className="spec wild">Built for value laptops &amp; everyday AI</div></div></article>
  </div>
</div></section>

<section id="compare"><div className="wrap">
  <p className="label">03 · The numbers, to scale</p>
  <h2>More, or <span className="wild">right-sized</span></h2>
  <p className="lede">Top configurations of each family. Bars in each row share one scale.</p>
  <div className="cmp" id="cmp">
    <div className="cmp-head"><span></span><span className="label pan">Core Ultra Series 3</span><span className="label wild">Core Series 3</span></div>
    <div className="row"><div className="k">CPU cores<small>P + E + LP-E</small></div>
      <div className="bar bp"><div className="n" data-v="16">16<em>4P · 8E · 4LP-E</em></div><div className="b"><span style={{ width: '100%' }}></span></div></div>
      <div className="bar bw"><div className="n" data-v="6">6<em>2P · 4LP-E</em></div><div className="b"><span style={{ width: '37.5%' }}></span></div></div></div>
    <div className="row"><div className="k">Xe3 GPU cores<small>Integrated graphics</small></div>
      <div className="bar bp"><div className="n" data-v="12">12<em>Arc B390</em></div><div className="b"><span style={{ width: '100%' }}></span></div></div>
      <div className="bar bw"><div className="n" data-v="2">2</div><div className="b"><span style={{ width: '16.67%' }}></span></div></div></div>
    <div className="row"><div className="k">NPU TOPS<small>Dedicated AI engine</small></div>
      <div className="bar bp"><div className="n" data-v="50">50</div><div className="b"><span style={{ width: '100%' }}></span></div></div>
      <div className="bar bw"><div className="n" data-v="17">17</div><div className="b"><span style={{ width: '34%' }}></span></div></div></div>
    <div className="row"><div className="k">Platform TOPS<small>CPU + GPU + NPU</small></div>
      <div className="bar bp"><div className="n" data-v="180">180</div><div className="b"><span style={{ width: '100%' }}></span></div></div>
      <div className="bar bw"><div className="n" data-v="40">40</div><div className="b"><span style={{ width: '22.2%' }}></span></div></div></div>
    <p className="cmp-note">Shorter bars are not a weakness here. Core Series 3 drops the extra cores, graphics and packaging that a student or office laptop would never use, which is what lets it reach more price-sensitive laptops.</p>
  </div>
</div></section>

<section id="pick"><div className="wrap">
  <p className="label">04 · Which one suits you</p>
  <h2>Pick your <span className="pan">day</span></h2>
  <p className="lede">Tap everything that sounds like you. We picked two to start.</p>
  <div className="picker">
    <div className="opts" id="opts">
      <button type="button" className="opt" data-w="p" aria-pressed="false">Edit video or 3D</button>
      <button type="button" className="opt" data-w="p" aria-pressed="false">Play games</button>
      <button type="button" className="opt" data-w="p" aria-pressed="false">Run AI models locally</button>
      <button type="button" className="opt" data-w="p" aria-pressed="false">Heavy multitasking</button>
      <button type="button" className="opt" data-w="w" aria-pressed="true">Notes &amp; assignments</button>
      <button type="button" className="opt" data-w="w" aria-pressed="true">Video calls</button>
      <button type="button" className="opt" data-w="w" aria-pressed="false">Streaming &amp; browsing</button>
      <button type="button" className="opt" data-w="w" aria-pressed="false">Budget comes first</button>
    </div>
    <div className="result" id="result" aria-live="polite">
      <p className="label" id="rk">Your match</p>
      <h3 id="rt">Core Series 3</h3>
      <p id="rd">Your day is about getting things done smoothly. Wildcat Lake gives you Intel 18A, the same P-core design and on-device AI for calls, at a friendlier price.</p>
      <div className="meter"><span id="mp" style={{ background: 'var(--pan)', flexGrow: 0 }}></span><span id="mw" style={{ background: 'var(--wild)', flexGrow: 1 }}></span></div>
    </div>
  </div>
</div></section>

<section className="closer"><div className="wrap">
  <p className="label">Neither is the compromise</p>
  <h2>Same 18A.<br /><span className="pan">Different</span> <span className="wild">you.</span></h2>
  <p className="lede">The right processor is the one built for your day.</p>
</div></section>

<footer><div className="wrap">
  <span className="label">Sources</span>
  <ol>
    <li><a href="https://liliputing.com/intel-launches-core-ultra-series-3-panther-lake-mobile-chips/">Liliputing · Core Ultra Series 3 launch</a></li>
    <li><a href="https://hothardware.com/news/intel-ces-2026-panther-lake-is-a-go">HotHardware · Panther Lake at CES 2026</a></li>
    <li><a href="https://tomshardware.com/tech-industry/intel-launches-wildcat-lake-as-core-series-3">Tom&apos;s Hardware · Wildcat Lake as Core Series 3</a></li>
    <li><a href="https://www.cnx-software.com/2026/04/17/intel-core-series-3-wildcat-lake-processor-family-launched-for-entry-level-laptops-and-edge-ai-systems/">CNX Software · Core Series 3 SKUs</a></li>
  </ol>
  <p style={{ marginTop: 20 }}>A student concept for the Intel × Dayananda Sagar infographic challenge. Not an official Intel page.</p>
</div></footer>


<Effects />
    </>
  );
}
