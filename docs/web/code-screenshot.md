# Code Screenshot Generator

Start with syntax highlighting. End with beautiful, shareable code images.

## Step 1: Highlight code in the browser

You have a code snippet. You want it to look like it does in your editor.

- One HTML page with a `<textarea>` for input and a `<div>` for output
- Use a syntax highlighting library (Prism.js or Highlight.js)
- Detect the language or let the user pick from a dropdown
- Render the highlighted code in real time

**You now have:** A browser-based syntax highlighter.

## Step 2: Make it look like an editor window

Highlighted code in a div doesn't look shareable. You want that macOS-window aesthetic.

- Wrap the code block in a styled container with a title bar
- Add the three colored dots (close, minimize, maximize)
- Add padding, border-radius, and a background color behind the window
- Let the user set a filename in the title bar

**You now have:** A code block that looks like a screenshot of an editor.

## Step 3: Export as an image

You can see it in the browser, but you can't paste it into a tweet.

- Use `html2canvas` or the `dom-to-image` library to capture the styled div as a PNG
- Add a "Download" button
- Make sure the exported image has proper resolution (2x for retina)

**You now have:** Downloadable code screenshots.

## Step 4: Theming

Your friend likes dark mode. Your professor wants light mode.

- Build a theme system with multiple color schemes (Dracula, One Dark, Solarized, GitHub Light)
- Store themes as CSS custom property sets
- Let the user switch themes from a dropdown
- Also let them change the background gradient behind the window

**You now have:** Customizable themes.

## Step 5: Customization controls

Users want to tweak font size, padding, and window style.

- Add controls for: font size, font family, line height, padding, border radius
- Add toggle for line numbers
- Add toggle for window shadow
- Store preferences in localStorage

**You now have:** A fully configurable screenshot tool.

## Step 6: Move it to a server

You want to generate screenshots programmatically — for docs, for CI, for bots.

- Build a Node.js API endpoint that accepts code, language, and theme
- Use Puppeteer to render the styled HTML and capture a screenshot server-side
- Return the image as a PNG response
- Support query parameters for all customization options

**You now have:** A screenshot API.

## Step 7: Copy to clipboard

Downloading and then uploading is two steps too many.

- Add a "Copy to clipboard" button using the Clipboard API
- Copy the image blob directly (not a URL)
- Show a brief confirmation when copied

## Step 8: Share links

- Encode the code, language, and settings into a URL (base64 or URL params)
- Opening the link reconstructs the exact screenshot
- Add an Open Graph image so the link preview shows the code screenshot

## Step 9: Deploy

- Containerize the frontend and the screenshot API
- Deploy behind a CDN for the static frontend
- Rate-limit the API to prevent abuse
- Add CI/CD

## Where to go from here

- VS Code extension that sends selected code to your service
- CLI tool for generating screenshots from the terminal
- Animated code screenshots (typing effect, line-by-line reveal)
- Diff view — highlight changes between two snippets
- Watermarks and branding options
