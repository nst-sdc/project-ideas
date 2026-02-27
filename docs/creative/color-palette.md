# Color Palette Generator


| | |
|---|---|
| Difficulty | Beginner |
| Team Size | Solo |
| Time | ~20-25 hours |
| Demo-ready by | Step 4 |
| Prerequisites | HTML, CSS, JavaScript |
| Built by | Coolors.co, Adobe Color, Paletton, Color Hunt |

**Skills you'll earn:** Color theory (HSL/RGB), color harmony algorithms, drag-and-drop, clipboard API, accessibility contrast

Start with random colors. End with a Coolors.co-style palette tool.

(Assumes basic HTML/CSS/JS knowledge. Includes learning time for color theory and algorithms.)

## Step 1: Generate random colors (~1-2 hours)

You need a color palette for a project. You have no inspiration.

- One HTML page that generates 5 random hex colors on load
- Display each color as a full-height vertical stripe across the page
- Show the hex code on each stripe
- Press spacebar to generate a new palette

**You now have:** A random palette generator.

## Step 2: Lock colors (~1-2 hours)

You like one color but want to re-roll the rest.

- Add a lock icon on each color stripe
- Locked colors stay when you press spacebar; unlocked ones randomize
- Store lock state in the component state
- Visual indication: a padlock icon that toggles on click

**You now have:** Selective randomization.

## Step 3: Copy color values (~1 hour)

You found the perfect blue. You need to paste it into your CSS.

- Click a hex code to copy it to the clipboard
- Show a brief "Copied!" toast notification
- Support multiple formats: hex, RGB, HSL
- Click to cycle through formats, or show all on hover

**You now have:** Quick color export.

## Step 4: Color harmony algorithms (~3-4 hours)

Random colors often clash. You want palettes that work together.

- Implement color harmony rules: complementary, analogous, triadic, split-complementary, monochromatic
- Let users pick a base color and a harmony rule
- Generate the palette based on color theory (rotate hue on the HSL wheel)
- Add a dropdown to switch between harmony modes

**You now have:** Theory-based palette generation.

## Step 5: Fine-tune colors (~2-3 hours)

The generated color is close but not quite right.

- Add a color picker for each stripe (click to open)
- Add HSL sliders: hue, saturation, lightness
- Dragging a slider updates the color in real time
- Show the color's name (approximate) using a nearest-color lookup

**You now have:** Manual color adjustments.

## Step 6: Contrast and accessibility (~3-4 hours)

Your palette looks great but fails WCAG contrast checks.

- Show contrast ratio between adjacent colors
- Check text-on-background contrast for each color (black and white text)
- Flag colors that fail WCAG AA or AAA
- Suggest adjusted colors that pass

**You now have:** Accessibility-aware palettes.

## Step 7: Save and share palettes (~3-4 hours)

- Save palettes to localStorage or to a backend with user accounts
- Generate a shareable URL encoding the palette in the hash
- Browse saved palettes and community-shared palettes
- Export as CSS variables, Tailwind config, or Sass variables

## Step 8: Extract from images (~3-4 hours)

- Upload an image and extract dominant colors using k-means clustering
- Build a palette from the extracted colors
- Show the source image alongside its palette

## Step 9: Deploy (~1-2 hours)

- Deploy as a static site to a CDN
- Add Open Graph images showing the palette preview
- Add CI/CD

## Useful Resources

- [MDN: CSS colors and color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- [HSL Color Picker – interactive tool](https://hslpicker.com/)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Color.js – color manipulation library](https://colorjs.io/)
- [Coolors.co – inspiration for the final product](https://coolors.co/)
- [k-means clustering explained (Wikipedia)](https://en.wikipedia.org/wiki/K-means_clustering)

## Where to go from here

- Gradient generator between palette colors
- Color blindness simulation (preview palette as seen by colorblind users)
- Palette trends and exploration feed
- Browser extension for extracting colors from any web page
- Design system export (Figma, Sketch tokens)
