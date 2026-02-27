# SVG Wave Generator


| | |
|---|---|
| Difficulty | Beginner |
| Team Size | Solo |
| Time | ~15-20 hours |
| Demo-ready by | Step 4 |
| Prerequisites | HTML, CSS, JavaScript, basic math (sine/cosine) |
| Built by | SVG Wave, Haikei, Get Waves, Shape Divider |

**Skills you'll earn:** SVG path generation, trigonometry, randomization, CSS export, responsive design

Start by drawing a sine wave with an SVG path. End with a layered wave generator that exports production-ready SVG.

(Assumes basic HTML/CSS/JS knowledge. Includes learning SVG path syntax and noise functions.)

## Step 1: Draw a sine wave (~1-2 hours)

You need a wavy line. SVG paths can do this.

- Generate points along a sine curve: `y = amplitude * Math.sin(frequency * x)`
- Convert points to an SVG `<path>` using cubic bezier curves or polyline
- Render it in an inline `<svg>` element
- Hardcode amplitude, frequency, and number of points for now

**You now have:** A static sine wave.

## Step 2: Make it configurable (~2-3 hours)

Hardcoded values are useless for a tool.

- Add sliders for amplitude, frequency, number of points, and vertical offset
- Re-render the wave on every input change
- Add a color picker for the stroke and fill
- Fill from the wave down to the bottom of the SVG to get that "wave section" look

**You now have:** An interactive wave editor.

## Step 3: Multiple layers (~2-3 hours)

One wave looks flat. Stacking them creates depth.

- Allow adding multiple wave layers, each with its own settings
- Render layers back-to-front with decreasing opacity
- Each layer gets its own color, amplitude, frequency, and offset
- Slight phase shifts between layers create a natural look

**You now have:** Layered, parallax-style waves.

## Step 4: Randomization (~2-3 hours)

Hand-tuning every parameter is tedious.

- Add a "Randomize" button that generates a pleasing random combination
- Constrain randomness: keep amplitudes proportional, colors from a palette
- Use Perlin noise or simplex noise for organic-looking wave distortion instead of pure sine

**You now have:** One-click wave generation.

## Step 5: Export (~2-3 hours)

The wave lives in your browser and nowhere else.

- Copy raw SVG markup to clipboard
- Download as `.svg` file
- Export as PNG at configurable resolution using a canvas intermediary
- Generate a CSS `background-image` using inline SVG data URI

**You now have:** Production-ready wave assets.

## Step 6: Presets and animation (~2-3 hours)

- Save and load preset configurations
- Animate waves by shifting phase over time with `requestAnimationFrame`
- Export animated SVG using `<animate>` elements or CSS keyframes

**You now have:** A full wave design tool.

## Useful Resources

- [MDN: SVG path element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
- [MDN: SVG path d attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
- [SVG Wave generators for inspiration (svgwave.in)](https://svgwave.in/)
- [simplex-noise (npm)](https://github.com/jwagner/simplex-noise.js)
- [MDN: SVG animate element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate)

## Where to go from here

- Blob/organic shape mode (closed wave paths)
- Gradient fills per layer
- Responsive wave that adapts to container width
- npm package that renders waves programmatically
