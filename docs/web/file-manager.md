# File Manager for the Web


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, HTML/CSS/JavaScript, file system basics |
| Built by | Finder, Windows Explorer, Files (GNOME), Filestash |

**Skills you'll earn:** File system APIs, drag-and-drop, file previews, upload/download streaming, access control

Start with listing files. End with a full Finder/Explorer in the browser.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: List files in a directory (~2 hours)

You want to see what's in a folder from a web page.

- Set up a Node.js server with Express
- Create an endpoint: `GET /files?path=/some/dir` that returns a JSON array of files and directories
- Use `fs.readdir` with `withFileTypes` to get names and types
- Build a frontend that displays the list

**You now have:** A directory listing.

## Step 2: Navigate directories (~2-3 hours)

You can see files, but you can't go into subdirectories.

- Make directory names clickable — clicking one updates the path and re-fetches the listing
- Add a breadcrumb bar showing the current path (each segment is clickable)
- Add a "back" button or navigate up by clicking a parent breadcrumb
- Show file icons (folder icon vs. file icon) based on type

**You now have:** A navigable file browser.

## Step 3: File metadata (~2 hours)

You see names but not sizes or dates.

- Use `fs.stat` to get size, modified time, and permissions for each entry
- Display them in a table with columns: name, size (human-readable), modified date, type
- Add column sorting (click a header to sort by that column)

**You now have:** A detailed file listing.

## Step 4: File operations (~4-5 hours)

You can look but you can't touch.

- Add API endpoints for: create directory, rename, delete, move, copy
- Build context menus (right-click) for file operations
- Add a "New Folder" button
- Add drag-and-drop to move files between directories
- Confirm before delete

**You now have:** Basic file management.

## Step 5: File upload and download (~3-4 hours)

You want to get files in and out.

- Add an upload endpoint that accepts multipart form data
- Drag-and-drop files onto the browser to upload them to the current directory
- Show upload progress for large files
- Click a file to download it (stream the file with proper Content-Disposition header)

**You now have:** File transfer.

## Step 6: Preview files (~3-4 hours)

You want to see what's inside without downloading.

- Preview images inline (thumbnail in the listing, full view on click)
- Render markdown and text files in a side panel
- Play audio and video files with the browser's native players
- Syntax-highlight code files

**You now have:** A file previewer.

## Step 7: Search (~2-3 hours)

You have thousands of files. Scrolling is not a strategy.

- Add a search bar that filters the current directory listing
- Add recursive search across subdirectories (server-side)
- Return results with their full paths
- Highlight matching text in filenames

**You now have:** File search.

## Step 8: Multi-select and bulk operations (~3-4 hours)

- Shift-click and Ctrl-click to select multiple files
- Bulk delete, move, copy, and download (as a zip)
- Show selection count in a toolbar

## Step 9: Authentication and permissions (~3-4 hours)

- Add user login
- Restrict each user to a home directory
- Read-only mode for shared folders

## Step 10: Deploy (~2-3 hours)

- Containerize the app
- Deploy behind TLS
- Never expose filesystem paths above the configured root

## Useful Resources

- [Node.js fs module](https://nodejs.org/api/fs.html) — File system operations in Node.js
- [Multer (GitHub)](https://github.com/expressjs/multer) — Multipart file upload middleware for Express
- [Drag and Drop API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) — Native browser drag-and-drop
- [Context Menu — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event) — Custom right-click menus
- [Express.js Static Files](https://expressjs.com/en/starter/static-files.html) — Serving files with Express
- [Archiver (npm)](https://www.npmjs.com/package/archiver) — Create zip archives in Node.js

## Where to go from here

- Tabs for multiple directories
- Split-pane view (two directories side by side, like Total Commander)
- Cloud storage integration (S3, Google Drive)
- Terminal integration (open a terminal at the current path)
- Version history for files
