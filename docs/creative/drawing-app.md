# Excalidraw-like Drawing App


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~30-40 hours |
| Demo-ready by | Step 4 |
| Prerequisites | HTML, CSS, JavaScript, Canvas API basics |
| Built by | Excalidraw, Figma, tldraw, Miro |

**Skills you'll earn:** Canvas 2D rendering, pointer events, shape manipulation, real-time collaboration, SVG export

Start by drawing a rectangle on a canvas. End with a collaborative whiteboard.

(Assumes basic HTML/CSS/JS and Canvas knowledge. Includes learning WebSocket, CRDTs, and Canvas hit-testing.)

## Step 1: Draw a rectangle on a canvas (~1-2 hours)

You need a surface to draw on. HTML Canvas gives you one.

- Create a `<canvas>` element, get its 2D context
- Listen for `mousedown`, `mousemove`, `mouseup`
- On drag, draw a rectangle from the start point to the current point
- Redraw every frame (clear canvas, draw all shapes)

**You now have:** A rectangle drawing tool.

## Step 2: Multiple shape tools (~3-4 hours)

One shape is boring.

- Add ellipses, lines, arrows, and freehand paths
- Build a toolbar that sets the current tool
- Each tool interprets mouse events differently (freehand collects points, line just needs start/end)
- Store every shape as an object: `{ type, x, y, width, height, points, ... }`

**You now have:** A shape toolkit.

## Step 3: Selection and manipulation (~4-5 hours)

You drew something wrong. You can't fix it.

- Add a selection tool that hit-tests shapes under the cursor
- Highlight selected shapes with handles
- Drag to move, drag handles to resize
- Delete key removes selected shapes

**You now have:** An editable canvas.

## Step 4: Styling controls (~2-3 hours)

Everything is black on white.

- Add stroke color, fill color, stroke width, opacity
- Store style properties on each shape object
- Build a properties panel that updates when a shape is selected
- Font size and family for text elements

**You now have:** Styled drawings.

## Step 5: Undo/redo (~3-4 hours)

One wrong move and you start over.

- Maintain a history stack of canvas states (or commands)
- Command pattern: each action is an object that can be applied and reversed
- Ctrl+Z pops the stack, Ctrl+Shift+Z re-applies

**You now have:** Non-destructive editing.

## Step 6: Layers (~3-4 hours)

Everything overlaps and you can't manage depth.

- Group shapes into named layers
- Layer panel: reorder, toggle visibility, lock
- Each layer renders in order; selection respects locked layers

**You now have:** Organized drawings.

## Step 7: Export and save (~3-4 hours)

Close the tab and everything is gone.

- Export to PNG via `canvas.toDataURL()`
- Export to SVG by converting shape objects to SVG elements
- Save project as JSON (all shapes, layers, styles)
- Load from JSON to restore state
- LocalStorage autosave

**You now have:** Persistent drawings.

## Step 8: Real-time collaboration (~6-8 hours)

You want two people drawing on the same canvas.

- Set up a WebSocket server
- When a user creates/moves/deletes a shape, broadcast the operation
- Other clients apply the operation to their local state
- Use CRDTs or operational transforms to handle conflicts

**You now have:** A collaborative whiteboard.

## Useful Resources

- [MDN: Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN: CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
- [Excalidraw (GitHub) – open source inspiration](https://github.com/excalidraw/excalidraw)
- [Command Pattern – refactoring.guru](https://refactoring.guru/design-patterns/command)
- [CRDTs explained – crdt.tech](https://crdt.tech/)
- [MDN: WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Where to go from here

- Infinite canvas with pan and zoom
- Image embedding and sticky notes
- Presentation mode (frame-by-frame)
- Plugin system for custom shape types
- End-to-end encryption for private boards
