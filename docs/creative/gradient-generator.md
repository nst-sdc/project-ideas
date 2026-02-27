# Gradient Generator


| | |
|---|---|
| Difficulty | Beginner |
| Team Size | Solo |
| Time | ~18-22 hours |
| Demo-ready by | Step 4 |
| Prerequisites | HTML, CSS, JavaScript |
| Built by | CSS Gradient, Grabient, WebGradients, uiGradients |

**Skills you'll earn:** CSS gradients (linear/radial/conic), color interpolation, code generation, preset management

Start with two colors. End with a full CSS gradient design tool.

(Assumes basic HTML/CSS/JS knowledge. Includes learning CSS gradient syntax deeply and drag interactions.)

## Step 1: A linear gradient between two colors (~1 hour)

You need a gradient background for a section. You want to preview it instantly.

- One HTML page with a full-viewport `<div>`
- Two color pickers: start color and end color
- Apply a CSS `linear-gradient` to the div, updating on every change
- Show the CSS code below the preview

**You now have:** A two-color gradient previewer.

## Step 2: Direction control (~1-2 hours)

Your gradient goes left-to-right. You want it diagonal.

- Add a direction control: angle slider (0-360 degrees) or preset buttons (to top, to right, to bottom-right, etc.)
- Update the `linear-gradient` direction in real time
- Show a small compass or arrow indicating the current direction
- Display the updated CSS

**You now have:** Directional gradients.

## Step 3: Multiple color stops (~3-4 hours)

Two colors are limiting. You want complex gradients with three, four, or more stops.

- Show color stops on a gradient bar (like a ruler)
- Click the bar to add a new stop
- Drag stops to reposition them
- Click a stop to change its color
- Right-click to remove a stop

**You now have:** Multi-stop gradients.

## Step 4: Radial and conic gradients (~2-3 hours)

Linear isn't the only option.

- Add gradient type selector: linear, radial, conic
- For radial: let users set the center position (click on the preview to reposition)
- For conic: let users set the starting angle
- Update the CSS output for each type

**You now have:** All CSS gradient types.

## Step 5: Presets and randomization (~2-3 hours)

Starting from scratch every time is tedious.

- Build a gallery of preset gradients (curated, good-looking combinations)
- Add a "Random" button that generates a pleasant gradient
- Use color harmony rules to avoid ugly combinations
- Let users save custom gradients to localStorage

**You now have:** Presets and quick generation.

## Step 6: Copy and export (~2 hours)

- One-click copy of the CSS code
- Export as a CSS class, Tailwind config, or Sass mixin
- Export as a PNG or SVG image
- Generate a shareable URL with the gradient encoded in the hash

## Step 7: Background patterns (~3-4 hours)

- Combine gradients to create patterns (stripes, checkerboards, dots)
- Layer multiple gradients with transparency
- Show the combined CSS (multiple background layers)

## Step 8: Animation (~2-3 hours)

- Animate gradient transitions (shifting colors or rotating angles)
- Generate CSS `@keyframes` for the animation
- Preview the animation in the browser

## Step 9: Deploy (~1 hour)

- Deploy as a static site
- Add CI/CD

## Useful Resources

- [MDN: CSS linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
- [MDN: CSS radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [MDN: CSS conic-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)
- [CSS Gradient – interactive generator for inspiration](https://cssgradient.io/)
- [MDN: CSS @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

## Where to go from here

- Mesh gradients (non-uniform color blending)
- Extract gradient from an image
- Gradient text effects
- Integration with design tools (Figma plugin)
- Gradient accessibility: ensure sufficient contrast for text overlays
