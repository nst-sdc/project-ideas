# SVG Animator


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript, SVG basics |
| Built by | SVGator, Lottie, GreenSock (GSAP), Anime.js |

**Skills you'll earn:** SVG DOM manipulation, keyframe animation, easing functions, timeline editors, animation export

Start with moving a circle. End with a keyframe animation editor for SVG.

(Assumes basic HTML/CSS/JS and SVG knowledge. Includes learning SMIL animation, easing math, and timeline UI building.)

## Step 1: Animate an SVG element (~1-2 hours)

You have a circle. You want it to move across the screen.

- One HTML page with an inline SVG containing a `<circle>`
- Use `requestAnimationFrame` to update the circle's `cx` attribute on every frame
- Move it from left to right and loop back
- Control speed with a variable

**You now have:** A moving circle.

## Step 2: Easing functions (~2-3 hours)

The circle moves at a constant speed. It looks robotic.

- Implement easing functions: linear, ease-in, ease-out, ease-in-out, bounce
- Apply the easing to the animation progress (0 to 1)
- Add a dropdown to switch easing functions
- Visualize the easing curve in a small graph

**You now have:** Smooth, natural motion.

## Step 3: Multiple properties (~2-3 hours)

You can move position, but you also want to animate color, size, and rotation.

- Support animating any SVG attribute: `cx`, `cy`, `r`, `fill`, `opacity`, `transform`
- Interpolate between start and end values (number interpolation, color interpolation)
- Let the user pick which property to animate and set start/end values

**You now have:** Multi-property animation.

## Step 4: Timeline editor (~4-5 hours)

You're setting values in code. You want a visual timeline.

- Build a timeline bar at the bottom of the screen
- Show time (0 to N seconds) along the horizontal axis
- Each animated property gets a track (row) in the timeline
- Add keyframe markers (diamonds) on each track at specific times

**You now have:** A visual timeline.

## Step 5: Keyframe editing (~3-4 hours)

You want to set different values at different points in time, not just start and end.

- Click on the timeline to add a keyframe at that time
- Click a keyframe to select it and edit its property values in a panel
- The animation interpolates between keyframes
- Drag keyframes to change their timing

**You now have:** Multi-keyframe animation.

## Step 6: Multiple elements (~3-4 hours)

Animating one circle is not a real animation. You want to choreograph multiple shapes.

- Support adding multiple SVG elements: circles, rectangles, paths, text
- Each element has its own set of animated properties and keyframes
- The timeline shows all elements as separate groups
- Play/pause plays all animations simultaneously

**You now have:** Scene-level animation.

## Step 7: Export (~3-4 hours)

- Export as an SVG file with `<animate>` and `<animateTransform>` elements (SMIL)
- Export as CSS `@keyframes` animation
- Export as a GIF or MP4 using canvas recording
- Copy the SVG code to clipboard

## Step 8: Path animation (~3-4 hours)

- Animate an element along an SVG `<path>` (motion path)
- Let users draw or import the path
- Control speed and orientation along the path

## Step 9: Deploy (~1 hour)

- Deploy as a static site
- Add CI/CD

## Useful Resources

- [MDN: SVG element reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
- [MDN: SVG animation with SMIL](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
- [Easing Functions Cheat Sheet](https://easings.net/)
- [GreenSock (GSAP) – animation library for inspiration](https://gsap.com/)
- [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
- [Lottie by Airbnb (GitHub)](https://github.com/airbnb/lottie-web)

## Where to go from here

- Lottie export (for use in mobile apps and web)
- Import SVG files and animate their existing elements
- Physics-based animations (spring, gravity)
- Collaborative editing
- Template library of pre-built animations
