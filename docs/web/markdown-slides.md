# Markdown-to-Slides Generator


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript, Markdown basics |
| Built by | Reveal.js, Slidev, Marp, Google Slides |

**Skills you'll earn:** Markdown parsing, CSS transitions, keyboard navigation, PDF export, theming architecture

Start with rendering markdown. End with a full presentation tool.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: Render markdown as slides (~2-3 hours)

You have a markdown file. You want each `---` separator to become a slide.

- One HTML page that loads a markdown string
- Split on `---` to get an array of slides
- Render the first slide using `marked` or `markdown-it`
- Add "Next" and "Previous" buttons to navigate

**You now have:** A basic slide viewer.

## Step 2: Keyboard navigation (~1-2 hours)

Clicking buttons during a talk is awkward.

- Add arrow key navigation (left/right)
- Add a slide counter: "3 / 12"
- Pressing Escape shows an overview of all slides as thumbnails

**You now have:** Keyboard-driven navigation.

## Step 3: Style the slides (~2-3 hours)

Your slides look like a web page, not a presentation.

- Center content vertically and horizontally
- Use large fonts, generous spacing
- Apply a clean theme: dark background with light text, or vice versa
- Make slides fill the viewport (100vw x 100vh)

**You now have:** Slides that look like slides.

## Step 4: Load from a file (~1-2 hours)

You're editing markdown in the HTML source. That's painful.

- Add a file input that accepts `.md` files
- Parse the file and generate slides
- Alternatively, accept a URL to a raw markdown file
- Add hot-reload: watch the file and update slides without refreshing

**You now have:** A file-based workflow.

## Step 5: Code blocks and syntax highlighting (~2 hours)

You're presenting about code. Your code blocks look plain.

- Integrate Prism.js or Highlight.js for syntax highlighting
- Support inline code and fenced code blocks
- Add a "copy" button on code blocks

**You now have:** Developer-friendly slides.

## Step 6: Speaker notes (~2-3 hours)

You need reminders about what to say, but the audience shouldn't see them.

- Use a convention: content after `???` in a slide becomes speaker notes
- Open a separate speaker window (presenter view) with notes, current slide, next slide, and a timer
- Use `window.open()` and cross-window messaging (`postMessage`)

**You now have:** A presenter mode.

## Step 7: Transitions and animations (~2-3 hours)

Slides snap from one to the next. You want some polish.

- Add CSS transitions between slides (fade, slide-in)
- Support incremental reveals: bullet points appear one at a time
- Use a markdown convention like `--` for fragment separators

**You now have:** Animated presentations.

## Step 8: Export to PDF (~2-3 hours)

Your professor wants a PDF. Your colleague doesn't have a browser.

- Use the browser's print stylesheet to lay out slides as pages
- Or use Puppeteer on the server to generate a PDF
- Each slide becomes one page, properly sized

## Step 9: Theming system (~2-3 hours)

- Support multiple built-in themes
- Let users define custom themes via CSS or frontmatter
- Add background images and gradients per-slide

## Step 10: Deploy as a service (~2-3 hours)

- Build a server that accepts markdown and returns a hosted presentation
- Generate a shareable URL for each deck
- Add CI/CD and containerize

## Useful Resources

- [marked (GitHub)](https://github.com/markedjs/marked) — Fast markdown parser for JavaScript
- [markdown-it (GitHub)](https://github.com/markdown-it/markdown-it) — Pluggable markdown parser
- [Prism.js](https://prismjs.com/) — Syntax highlighting for code blocks in slides
- [CSS Transitions — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions) — Animate slide transitions
- [Window.postMessage — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) — Cross-window communication for speaker notes
- [Reveal.js (GitHub)](https://github.com/hakimel/reveal.js) — Popular HTML presentation framework for inspiration

## Where to go from here

- Live audience interaction (polls, Q&A)
- Real-time collaboration on slide decks
- Embed iframes, videos, and interactive widgets in slides
- Export to PPTX
- Remote control from a phone
