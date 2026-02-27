# Particle System Library


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~18-22 hours |
| Demo-ready by | Step 4 |
| Prerequisites | JavaScript, Canvas API, basic physics concepts |
| Built by | particles.js, tsParticles, Proton, Three.js particles |

**Skills you'll earn:** Particle physics simulation, Canvas performance optimization, npm publishing, API design, requestAnimationFrame

Start by animating a few dots on a canvas. End with a configurable, interactive particle library published to npm.

(Assumes basic JS and Canvas knowledge. Includes learning physics simulation, npm packaging, and bundler tooling.)

## Step 1: Animate some dots (~1-2 hours)

You need particles. Start with the simplest version.

- Create a canvas, spawn 100 particle objects with random positions
- Each particle has `x`, `y`, `vx`, `vy`
- On each frame, update positions by velocity, draw circles at each position
- Wrap particles around screen edges

**You now have:** Moving dots.

## Step 2: Physics and lifetime (~2-3 hours)

Particles that drift forever aren't useful.

- Add gravity (constant downward acceleration)
- Add friction/drag to slow particles over time
- Give each particle a lifespan — fade opacity as it ages, remove when dead
- Spawn new particles continuously from an emitter point

**You now have:** A particle emitter with physics.

## Step 3: Configuration (~2-3 hours)

Hardcoded values make a demo, not a library.

- Define a config object: particle count, colors, size range, speed range, gravity, shapes (circle, square, triangle, image)
- Accept the config on initialization
- Validate and merge with sensible defaults

**You now have:** A configurable system.

## Step 4: Mouse interaction (~3-4 hours)

Particles that ignore the user are boring.

- Repel particles from the cursor (calculate distance, apply force inversely proportional to distance)
- Attract particles to the cursor on click
- Connect nearby particles with lines (the classic particles.js effect)
- Connection opacity based on distance

**You now have:** Interactive particles.

## Step 5: Multiple emitter shapes (~3-4 hours)

Point emitters are one option.

- Line emitter: particles spawn along a line
- Circle emitter: spawn on the perimeter of a circle
- Rectangle emitter: spawn within a rectangular area
- Burst mode: emit N particles at once, then stop

**You now have:** Flexible emission patterns.

## Step 6: Package it for npm (~4-5 hours)

- Structure the code as an ES module with TypeScript types
- API: `createParticles(canvas, config)` returns a controller with `start()`, `stop()`, `updateConfig()`
- Bundle with Rollup or esbuild (ESM + CJS + UMD)
- Write a README with usage examples
- Publish to npm

**You now have:** A distributable particle library.

## Useful Resources

- [MDN: Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [particles.js (GitHub) – classic inspiration](https://github.com/VincentGarreau/particles.js)
- [The Nature of Code – Daniel Shiffman (particle systems chapter)](https://natureofcode.com/particles/)
- [esbuild – fast JS bundler](https://esbuild.github.io/)
- [npm publishing guide](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)

## Where to go from here

- WebGL renderer for 100k+ particles
- Noise-based flow fields
- Preset library (snow, fire, confetti, starfield)
- React/Vue wrapper components
