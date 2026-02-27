# Blog Platform (Medium Clone)

Start with rendering text. End with a publishing platform.

## Step 1: Render markdown as HTML

You have a markdown string. Convert it to HTML and display it on a page.

- One HTML file, one `<div>`
- Use a library like `marked` or `markdown-it` to convert markdown to HTML
- Paste markdown into a `<textarea>`, see it rendered live

**You now have:** A markdown previewer.

## Step 2: Save the content

You refresh the page. Your writing is gone.

- Save the textarea content to `localStorage` on every keystroke
- Load it back when the page opens

**You now have:** A persistent markdown editor.

## Step 3: Multiple posts

You want to write a second post. But there's only one slot in localStorage.

- Store an array of posts, each with a title and body
- Build a sidebar or list that shows all posts
- Click a post to load it into the editor

**You now have:** A multi-document editor.

## Step 4: Make it a server app

You want to access your posts from your phone. localStorage is device-local.

- Set up a Node.js server with Express
- Create API routes: `GET /posts`, `POST /posts`, `GET /posts/:id`
- Store posts in a JSON file on the server (or in-memory for now)
- Replace localStorage calls with `fetch()` calls

**You now have:** A blog with a backend.

## Step 5: Add a database

Your JSON file is getting unwieldy. What if the server crashes mid-write?

- Install MongoDB or PostgreSQL
- Replace the JSON file with database queries
- Add fields: `createdAt`, `updatedAt`, `slug`

**You now have:** Durable, queryable storage.

## Step 6: Rich text editing

Markdown is great, but your users want bold buttons and image uploads.

- Integrate a rich text editor (Tiptap, Quill, or ProseMirror)
- Store content as HTML or a structured document format
- Handle image uploads — save to disk or an object store, insert URL into content

**You now have:** A Medium-like writing experience.

## Step 7: User accounts

Everyone is writing to the same pool of posts. You need to know who wrote what.

- Add user registration and login (email + password)
- Hash passwords with bcrypt
- Issue JWT tokens or use sessions
- Associate each post with an author

**You now have:** Multi-user support.

## Step 8: Public pages

Posts exist in the database but nobody can read them without logging in.

- Create public URLs: `/blog/:slug`
- Server-side render the HTML (or serve a static page)
- Add meta tags for SEO: title, description, og:image
- Generate an RSS feed

**You now have:** A public blog.

## Step 9: Comments

Readers want to respond.

- Add a comments API: `POST /posts/:id/comments`, `GET /posts/:id/comments`
- Display comments below each post
- Require authentication to comment
- Add basic moderation: delete, hide

**You now have:** Reader engagement.

## Step 10: Make it look good

Your blog works but looks like a 1996 GeoCities page.

- Pick a clean layout: single column, readable width, good typography
- Style the editor, the post list, and the reading view
- Responsive design — test on mobile
- Add a dark mode toggle

**You now have:** Something you'd actually want to read.

## Step 11: Drafts and publishing workflow

You accidentally published a half-written post.

- Add a `status` field: `draft`, `published`
- Drafts are only visible to the author
- Add a "Publish" button that changes the status
- Show a "Last saved" indicator in the editor

**You now have:** A proper publishing workflow.

## Step 12: Search

You have 50 posts and can't find the one about JavaScript closures.

- Add full-text search (PostgreSQL `tsvector`, or MongoDB text index, or Elasticsearch)
- Add a search bar to the UI
- Highlight matching terms in results

## Step 13: Likes and recommendations

- Let users "clap" or like posts
- Track reading time and engagement
- Build a simple recommendation: "If you liked this, you might like..."
- Add a "Trending" or "Top posts" section

## Step 14: Notifications

- Notify authors when someone comments on their post
- Notify users when an author they follow publishes something
- Email notifications, or in-app notifications, or both

## Step 15: Deploy

- Containerize with Docker
- Deploy to the NST cluster
- Set up a domain, TLS, and Ingress
- Add CI/CD: push to main → deploy

## Where to go from here

- Custom domains per user
- Monetization (paid posts)
- Collaborative editing
- Newsletter integration
- Analytics dashboard for authors
