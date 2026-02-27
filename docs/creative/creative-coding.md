# Creative Coding Renderer


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~20-25 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, DOM APIs, basic math |
| Built by | p5.js, Processing, openFrameworks, Nannou |

**Skills you'll earn:** Rendering pipeline, DOM manipulation, animation loops, vector math, creative API design

Start with a draw loop. End with a p5.js-like framework built on DOM, not canvas.

(Assumes familiarity with HTML/CSS/JS. Includes time to learn requestAnimationFrame, DOM manipulation patterns, and npm publishing.)

## Step 1: A loop that draws (~1-2 hours)

You want something on screen that updates every frame. No canvas — just DOM elements.

- One HTML page with a `<div>` container
- Create a `setup()` function that runs once and a `draw()` function that runs every frame via `requestAnimationFrame`
- In `draw()`, create or update DOM elements (divs with absolute positioning)
- Draw 10 colored divs at random positions

**You now have:** A frame loop rendering DOM elements.

## Step 2: Primitive shapes as DOM elements (~2-3 hours)

You want an API like `circle(x, y, r)` and `rect(x, y, w, h)`.

- Implement helper functions that create styled `<div>` elements
- `circle(x, y, r)` creates a div with `border-radius: 50%`, positioned absolutely
- `rect(x, y, w, h)` creates a positioned div with the given dimensions
- `fill(color)` sets the current fill color for subsequent shapes
- Each call appends to the container

**You now have:** A shape API on top of DOM elements.

## Step 3: Frame clearing and element reuse (~2-3 hours)

After a few seconds, the page has thousands of divs. The browser freezes.

- At the start of each `draw()` call, clear the container (remove all children)
- Better: maintain a pool of reusable elements. Instead of creating and destroying, reposition and restyle existing ones
- Track how many elements are used per frame and recycle the rest

**You now have:** A performant render loop.

## Step 4: Input handling (~2-3 hours)

You want sketches that respond to the mouse and keyboard.

- Expose `mouseX`, `mouseY` variables that update on mousemove
- Expose `mousePressed` boolean
- Add `keyPressed()` and `mouseClicked()` callback hooks
- Make these available globally (like p5.js) or on a context object

**You now have:** Interactive sketches.

## Step 5: Transformations (~3-4 hours)

You want to rotate and scale shapes. DOM makes this easy.

- Add `rotate(angle)`, `scale(sx, sy)`, and `translate(dx, dy)` functions
- Maintain a transform stack (push/pop)
- Apply the current transform to each created element's CSS `transform` property
- Support nested transformations

**You now have:** A transform system.

## Step 6: Animation helpers (~2-3 hours)

- Add `lerp()`, `map()`, `random()`, `noise()` utility functions
- Add `frameCount` and `deltaTime` variables
- Support `frameRate(n)` to cap the FPS
- Add color utilities: `color(r, g, b)`, `lerpColor()`

**You now have:** A creative coding toolkit.

## Step 7: Package as a library (~3-4 hours)

- Bundle the framework as a single importable module
- API: `createSketch(container, { setup, draw })`
- Write documentation with examples
- Publish to npm

## Step 8: Text and images (~2 hours)

- Add `text(string, x, y)` that creates positioned text elements
- Add `image(src, x, y, w, h)` for images
- Support CSS transitions on elements for smooth animations

## Step 9: Gallery and sharing (~3-4 hours)

- Build a web editor where users write sketches in a code panel and see live output
- Save sketches with shareable URLs
- Community gallery of featured sketches

## Useful Resources

- [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
- [MDN: CSS transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [p5.js – the inspiration for this project](https://p5js.org/)
- [npm publishing guide](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Perlin noise explained (The Coding Train)](https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/perlin/intro-to-perlin-noise)

## Where to go from here

- WebGL renderer option for complex scenes
- Sound integration (Web Audio API)
- Record sketches as video
- SVG output mode
- Touch and mobile support
