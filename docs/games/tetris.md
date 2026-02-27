# Tetris


| | |
|---|---|
| Difficulty | Beginner |
| Team Size | Solo |
| Time | ~20-25 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript |
| Built by | Tetris (original), Jstris, Tetr.io, Puyo Puyo Tetris |

**Skills you'll earn:** Game loop, collision detection, 2D grid manipulation, keyboard input handling, scoring systems

Start with a falling block. End with a full Tetris game.

(Assumes basic HTML/CSS/JS knowledge; game development concepts learned along the way)

## Step 1: Draw a grid (~1 hour)

You need a playfield. Tetris uses a 10-wide, 20-tall grid.

- One HTML page with a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) element
- Draw a 10x20 grid of cells
- Each cell is a square (e.g., 30x30 pixels)
- Store the grid as a 2D array: 0 = empty, non-zero = filled with a color

**You now have:** An empty Tetris board.

## Step 2: A falling piece (~2-3 hours)

A static grid isn't a game. You need a block that falls.

- Define the 7 tetromino shapes (I, O, T, S, Z, J, L) as 2D arrays of offsets
- Spawn a random piece at the top center
- Use [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) or `requestAnimationFrame` to move it down one row per tick
- Redraw the canvas each frame: grid + active piece

**You now have:** A falling tetromino.

## Step 3: Collision detection (~2-3 hours)

The piece falls through the floor and off the screen.

- Before moving down, check if the new position overlaps with filled cells or the grid boundary
- If collision detected: lock the piece into the grid (write its cells into the 2D array)
- Spawn a new random piece at the top
- If the new piece immediately collides, the game is over

**You now have:** Stacking pieces.

## Step 4: Player controls (~2-3 hours)

The piece falls in one column. You can't move or rotate it.

- Add keyboard controls: left/right arrows to move, up arrow to rotate, down arrow to soft drop
- For rotation: rotate the piece's shape matrix 90 degrees clockwise
- Check collision after each move/rotation — if invalid, revert
- Add hard drop (spacebar): instantly move the piece to the lowest valid position

**You now have:** A playable game.

## Step 5: Line clearing (~2 hours)

Lines fill up but never clear. The board fills in 30 seconds.

- After locking a piece, scan every row
- If a row is completely filled, remove it
- Shift all rows above it down by one
- Add a brief visual flash when lines clear

**You now have:** The core Tetris mechanic.

## Step 6: Scoring and levels (~1-2 hours)

You're clearing lines but there's no score and no increasing challenge.

- Score points for line clears: 1 line = 100, 2 = 300, 3 = 500, 4 (Tetris) = 800
- Track total lines cleared
- Every 10 lines, increase the level (reduce the tick interval — pieces fall faster)
- Display score and level on screen

**You now have:** A scoring system with progression.

## Step 7: Next piece preview and hold (~2 hours)

You can't plan ahead. You don't know what's coming.

- Show the next piece in a small preview box beside the board
- Use a bag randomizer: shuffle all 7 pieces, deal them in order, repeat (prevents drought)
- Add a hold slot: press C to hold the current piece and swap with the held piece

**You now have:** Strategic play.

## Step 8: Ghost piece (~1 hour)

You can't tell where the piece will land.

- Draw a translucent "ghost" piece at the position where the current piece would land if hard-dropped
- Update the ghost on every move or rotation

## Step 9: Polish (~3-4 hours)

- Add sound effects (move, rotate, drop, line clear, game over) using the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- Add a start screen and game over screen
- Save high scores to localStorage
- Add pause (press P or Escape)

## Step 10: Mobile support (~2-3 hours)

- Add touch controls or on-screen buttons
- Swipe left/right to move, swipe down to drop, tap to rotate

## Useful Resources

- [Tetris Guideline](https://tetris.wiki/Tetris_Guideline) — official rules and mechanics
- [Canvas API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Game Loop Patterns](https://gameprogrammingpatterns.com/game-loop.html) — Game Programming Patterns (book, free online)
- [Tetris rotation systems explained](https://tetris.wiki/SRS) — Super Rotation System

## Where to go from here

- Multiplayer (send garbage lines to opponents via WebSocket)
- Marathon mode, sprint mode, ultra mode
- Replay system (record inputs, replay games)
- AI player (beam search or heuristic-based)
- Custom skins and themes
