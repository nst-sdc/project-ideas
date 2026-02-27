# Offline-First Notes App


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript, browser storage concepts |
| Built by | Notion, Obsidian, Apple Notes, Standard Notes |

**Skills you'll earn:** Service Workers, IndexedDB, PWA architecture, rich text editing, offline-first sync, CRDTs

Start with a text input. End with a syncing, offline-capable notes app.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: Write and save a note (~1-2 hours)

You want to jot something down in the browser and not lose it.

- One HTML page with a `<textarea>` and a "Save" button
- Save the content to `localStorage`
- Load it back when the page opens
- Auto-save on every keystroke (debounced)

**You now have:** A persistent single note.

## Step 2: Multiple notes (~2-3 hours)

You want more than one note.

- Store an array of notes in localStorage, each with an ID, title, body, and timestamp
- Build a sidebar listing all notes, sorted by last modified
- Click a note to load it into the editor
- Add "New Note" and "Delete Note" buttons

**You now have:** A multi-note editor.

## Step 3: Make it a PWA (~2-3 hours)

You open the app on the bus. No internet. The page won't load.

- Add a service worker that caches the app shell (HTML, CSS, JS)
- Add a `manifest.json` with app name, icons, and theme color
- The app now loads from cache when offline
- Add an "install" prompt so users can add it to their home screen

**You now have:** An installable offline app.

## Step 4: Rich text editing (~3-4 hours)

Plain text is limiting. You want headings, bold, lists.

- Replace the textarea with a rich text editor (Tiptap, Quill, or ContentEditable with commands)
- Support markdown shortcuts (type `# ` to create a heading)
- Store content as HTML or a structured document format
- Keep it fast — no loading spinners for typing

**You now have:** A rich notes editor.

## Step 5: IndexedDB storage (~2-3 hours)

localStorage has a 5-10MB limit. You have hundreds of notes with images.

- Migrate storage to IndexedDB (use a wrapper like Dexie.js or idb)
- Store notes as structured objects with indexes on title and updatedAt
- Support storing binary data (images) alongside notes
- Migration: move existing localStorage notes to IndexedDB on first load

**You now have:** Scalable local storage.

## Step 6: Full-text search (~2-3 hours)

You have 200 notes. You can't find the one about "project deadlines."

- Build a search index over note titles and bodies
- Use a client-side search library (Lunr.js, MiniSearch, or FlexSearch)
- Update the index when notes are created or modified
- Show results ranked by relevance

**You now have:** Instant search, fully offline.

## Step 7: Cloud sync (~4-5 hours)

You write on your laptop. You want to read on your phone.

- Set up a simple sync server with Express and a database
- Each note has a `version` or `updatedAt` timestamp
- On sync: push local changes to server, pull remote changes
- Handle conflicts: if both sides changed, keep both versions and let the user pick

**You now have:** Multi-device sync.

## Step 8: Tags and organization (~2-3 hours)

- Add tags to notes
- Filter the sidebar by tag
- Add folders or notebooks for hierarchical organization

## Step 9: Collaboration (~4-5 hours)

- Share a note via a link
- Real-time collaborative editing using CRDTs (Yjs or Automerge)
- Show collaborator cursors

## Step 10: Deploy (~2 hours)

- Deploy the PWA to a CDN
- Deploy the sync server behind TLS
- Add CI/CD

## Useful Resources

- [Service Worker API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) — Offline caching and PWA foundation
- [IndexedDB API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) — Client-side structured storage
- [Dexie.js](https://dexie.org/) — Friendly wrapper around IndexedDB
- [Tiptap](https://tiptap.dev/) — Headless rich text editor for the web
- [MiniSearch (GitHub)](https://github.com/lucaong/minisearch) — Tiny full-text search engine in JavaScript
- [Yjs (GitHub)](https://github.com/yjs/yjs) — CRDT framework for real-time collaboration

## Where to go from here

- End-to-end encryption (encrypt notes before syncing)
- Markdown export/import
- Daily notes and journaling features
- Web clipper (save content from other pages)
- Kanban view for task-oriented notes
