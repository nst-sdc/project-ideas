---
layout: home
hero:
  name: Project Ideas
  text: Build from scratch. One step at a time.
  tagline: 64 real-world projects with guided roadmaps. No scaffolding. No magic. Just you, a problem, and the next tool you need.
  actions:
    - theme: brand
      text: Pick a Project
      link: '#categories'
    - theme: alt
      text: How This Works
      link: '#how-it-works'
---

<StatsBar />

<div class="motivation-quote">
  "The companies that built these products are worth billions. The only difference between their v1 and yours is that they started."
  <span class="author">— Now it's your turn.</span>
</div>

<h2 id="how-it-works" class="home-section-title">How this works</h2>
<p class="home-section-subtitle">Every project follows the same loop. There is no step where you just "read theory."</p>

<div class="how-it-works">
  <div class="how-step">
    <div class="how-step-number">1</div>
    <h4>Build the minimum</h4>
    <p>An input and a button. A canvas and a click. The smallest thing that works.</p>
  </div>
  <div class="how-step">
    <div class="how-step-number">2</div>
    <h4>Hit a wall</h4>
    <p>Your data disappears on reload. Your app is slow. It breaks on mobile. Good.</p>
  </div>
  <div class="how-step">
    <div class="how-step-number">3</div>
    <h4>Learn the tool</h4>
    <p>localStorage, WebSockets, Docker, databases — you learn them because you need them.</p>
  </div>
  <div class="how-step">
    <div class="how-step-number">4</div>
    <h4>Ship and repeat</h4>
    <p>Deploy it. Show it. Then find the next problem. The project never really ends.</p>
  </div>
</div>

<h2 id="categories" class="home-section-title">Pick a category</h2>
<p class="home-section-subtitle">Each project shows difficulty, estimated time, skills you'll earn, and which companies built the same thing.</p>

<CategoryGrid />

<h2 class="home-section-title">Featured projects</h2>
<p class="home-section-subtitle">Don't know where to start? These are crowd favorites.</p>

<div class="featured-grid">
  <ProjectCard
    title="Online Code Judge"
    description="Run code in sandboxed containers, check against test cases. Like LeetCode, but yours."
    difficulty="Intermediate"
    time="~35 hours"
    skills="Docker, sandboxing, queues, WebSocket"
    builtBy="LeetCode, HackerRank, Codeforces"
    href="/web/code-judge"
  />
  <ProjectCard
    title="Mini Cloud Platform"
    description="Not a UI. Not a deploy tool. An actual cloud — isolation, quotas, multi-tenancy."
    difficulty="Advanced"
    time="~50 hours"
    skills="Kubernetes, networking, multi-tenancy, API design"
    builtBy="AWS, GCP, DigitalOcean"
    href="/cluster/cloud-platform"
  />
  <ProjectCard
    title="Tetris"
    description="The classic. Rotation, wall kicks, scoring, levels. Pure logic, zero dependencies."
    difficulty="Beginner"
    time="~20 hours"
    skills="Canvas API, game loops, collision detection"
    builtBy="Every game developer ever"
    href="/games/tetris"
  />
  <ProjectCard
    title="Drawing App"
    description="Freehand drawing, shapes, layers. Real-time collaboration if you're ambitious."
    difficulty="Intermediate"
    time="~30 hours"
    skills="Canvas API, SVG, WebSocket, state management"
    builtBy="Excalidraw, Figma, Miro"
    href="/creative/drawing-app"
  />
  <ProjectCard
    title="Operating System"
    description="Boot from nothing. Print to screen. Manage memory. Schedule processes. Build a shell."
    difficulty="Advanced"
    time="~60 hours"
    skills="Assembly, C, memory management, process scheduling"
    builtBy="Linux, FreeBSD, SerenityOS"
    href="/systems/operating-system"
  />
  <ProjectCard
    title="Self-Service Hosting Portal"
    description="Push code, get a URL. Rollbacks, logs, audit trail. Your own Vercel."
    difficulty="Advanced"
    time="~45 hours"
    skills="Git integration, Docker, CI/CD, reverse proxies"
    builtBy="Vercel, Netlify, Railway"
    href="/cluster/hosting-portal"
  />
</div>

<div class="motivation-quote">
  "You don't learn localStorage because a textbook told you to. You learn it because your data disappeared when you hit refresh."
</div>

<h2 class="home-section-title">Why build from scratch?</h2>

Every tool in your stack exists because someone had a problem and solved it. When you install Express, you skip the problem. When you build a raw HTTP server first, you understand why Express exists — and you can debug it when it breaks.

These roadmaps simulate that journey. You start with nothing and add things as you need them. By the end, you don't just know *how* to use the tools — you know *why* they exist.

**What you'll walk away with:**
- A portfolio of real, deployed projects (not tutorial clones)
- Deep understanding of the tools you used (because you felt the pain they solve)
- Resume-worthy skills with specifics, not buzzwords
- The ability to build things that don't exist yet

<div style="text-align: center; margin: 3rem 0 1rem;">
  <a href="#categories" style="display: inline-block; padding: 0.75rem 2rem; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.05rem;">Start Building</a>
</div>

---

<div style="margin-top: 3rem; padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 12px; font-size: 0.9rem; color: var(--vp-c-text-2);">

<h3 style="margin: 0 0 0.75rem; font-size: 1rem; color: var(--vp-c-text-1);">Made with intent</h3>

These project ideas and roadmaps were curated by **[Krushn Dayshmookh](https://github.com/krushndayshmookh)** — Instructor, Full Stack Development at [Newton School of Technology](https://newtonschool.co/newton-school-of-technology), Ajeenkya DY Patil University. Six years of building software, now building the people who build software.

The roadmaps were written by **[Purple](https://openclaw.ai)**, an AI assistant powered by OpenClaw, working from Krushn's pedagogy: don't teach tools in isolation — let students discover them by building real things and hitting real walls.

Want to contribute? Fix a link, add a step, suggest a project — [open a PR](https://github.com/nst-sdc/project-ideas).

</div>
