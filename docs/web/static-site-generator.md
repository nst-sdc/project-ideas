# Static Site Generator with Markdown

Start with converting one file. End with a full publishing pipeline.

## Step 1: Convert markdown to HTML

You have a markdown file. You want an HTML page.

- Write a Node.js script that reads a `.md` file
- Use `marked` or `markdown-it` to convert it to HTML
- Wrap the output in a basic HTML template (head, body, title)
- Write the result to an `.html` file

**You now have:** A one-file converter.

## Step 2: Process a directory

You have ten markdown files. Running the script ten times is tedious.

- Scan a `content/` directory for all `.md` files
- Convert each one and write to a `dist/` directory
- Preserve the directory structure (subdirectories become subdirectories)
- Add a clean step that empties `dist/` before building

**You now have:** A batch converter.

## Step 3: Add a layout template

Every page has the same raw HTML wrapper. You want a consistent header, nav, and footer.

- Create a layout template using a templating engine (Handlebars, EJS, or even string replacement)
- Inject the converted markdown body into the template
- Add a site title, navigation links, and a footer

**You now have:** Templated pages.

## Step 4: Frontmatter

You need per-page metadata: title, date, description. Hardcoding is not an option.

- Parse YAML frontmatter at the top of each markdown file using `gray-matter`
- Use the extracted title in the `<title>` tag and the `<h1>`
- Use the date for sorting, description for meta tags

**You now have:** Metadata-driven pages.

## Step 5: Generate an index page

You have pages but no way to find them. You need a homepage listing all posts.

- After processing all files, generate an `index.html`
- List all pages sorted by date, with title and description
- Link each item to its HTML page
- Optionally group by year or category

**You now have:** An auto-generated index.

## Step 6: Dev server with live reload

Rebuilding and refreshing the browser manually is slow.

- Serve the `dist/` directory with a local HTTP server
- Watch the `content/` directory for file changes
- Rebuild on change and reload the browser (use WebSocket or a tool like `livereload`)

**You now have:** A development workflow.

## Step 7: Styling and themes

Your site works but looks like 1995.

- Add a CSS file to the layout template
- Build a clean, readable theme (good typography, max-width, spacing)
- Support dark mode with `prefers-color-scheme`
- Let users switch themes via frontmatter or a config file

**You now have:** A good-looking static site.

## Step 8: Asset pipeline

- Copy images and other static files from `content/` to `dist/`
- Optimize images during the build (resize, compress)
- Add cache-busting hashes to filenames

## Step 9: RSS and sitemap

- Generate an RSS feed from your posts
- Generate a `sitemap.xml` for search engines
- Add Open Graph meta tags for social sharing

## Step 10: Deploy

- Build the site in CI and deploy to GitHub Pages, Netlify, or your own server
- Add a custom domain and TLS
- Containerize the build step for reproducibility

## Where to go from here

- Plugin system (custom markdown extensions, shortcodes)
- Pagination for the index page
- Tag and category pages
- Full-text search (client-side with Lunr.js or Pagefind)
- Incremental builds (only rebuild changed files)
- CMS layer (admin UI for editing content)
