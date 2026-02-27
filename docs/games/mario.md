# Mario Platformer


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript, basic physics concepts |
| Built by | Super Mario Bros, Celeste, Hollow Knight, Megaman |

**Skills you'll earn:** Physics engine, platformer mechanics, sprite sheets, level editors, parallax scrolling, camera systems

Start with a rectangle that jumps. End with a side-scrolling platformer.

(Assumes basic HTML/CSS/JS and Canvas knowledge; physics and game feel learned along the way)

## Step 1: A box on a floor (~1-2 hours)

You need gravity and ground.

- One HTML page with a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) element
- Draw a colored rectangle (the player) and a floor line
- Apply gravity: increase the player's vertical velocity each frame
- Stop the player when it hits the floor (set velocity to 0, snap to floor Y)

**You now have:** A box affected by gravity.

## Step 2: Jump (~1-2 hours)

The box sits on the floor. You need it to jump.

- On spacebar or up arrow, set a negative vertical velocity (upward impulse)
- Gravity pulls it back down
- Only allow jumping when the player is on the ground (prevent infinite jumps)
- Tune the jump height and gravity until it feels right — this is the most important feel in a platformer

**You now have:** Jumping.

## Step 3: Horizontal movement (~1 hour)

The player jumps in place. You need to run left and right.

- Left/right arrow keys set horizontal velocity
- Releasing the key sets velocity to 0 (or add friction for a slide)
- Update the player's X position each frame
- Cap the speed so the player doesn't teleport

**You now have:** Running and jumping.

## Step 4: Platforms and collision (~3-4 hours)

There's only one floor. You need platforms to jump between.

- Define platforms as an array of rectangles: `{ x, y, width, height }`
- On each frame, check if the player is colliding with any platform
- Use [AABB collision detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection): check overlap on both axes
- Resolve vertically: landing on top of a platform stops the fall; hitting the bottom stops the jump

**You now have:** A platforming level.

## Step 5: Scrolling camera (~2 hours)

Your level is wider than the screen. The player walks off the edge.

- Move the camera instead of the player when the player passes the screen center
- Offset all rendering by the camera position
- Clamp the camera so it doesn't scroll past level boundaries
- The player stays roughly centered

**You now have:** A scrolling level.

## Step 6: Enemies (~3-4 hours)

The level is safe. It needs threats.

- Add enemy objects that move back and forth on platforms (patrol behavior)
- If the player touches an enemy from the side, they take damage (or die)
- If the player lands on top of an enemy, the enemy is defeated
- Add a simple state: alive/dead, with a squish animation on defeat

**You now have:** Enemies and combat.

## Step 7: Collectibles and scoring (~2 hours)

- Place coins throughout the level
- Collect on touch (remove the coin, increment score)
- Add a score display and a coin counter
- Play a sound effect on collection using the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## Step 8: Sprites and animation (~3-4 hours)

- Replace rectangles with sprite images
- Animate the player: idle, run (cycle frames), jump, fall
- Animate enemies: walk cycle, defeat
- Add parallax scrolling backgrounds for depth

## Step 9: Level editor (~4-5 hours)

- Build a simple editor: click to place tiles, platforms, enemies, and coins on a grid
- Save levels as JSON
- Load and play any saved level
- Share levels as files or URLs

## Step 10: Polish (~3-4 hours)

- Add a start screen, lives system, and game over screen
- Add power-ups (mushroom = grow, star = invincibility)
- Add checkpoints and multiple levels

## Useful Resources

- [Canvas API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [2D Collision Detection — MDN](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [Game Programming Patterns](https://gameprogrammingpatterns.com/) — game loop, state machines
- [OpenGameArt.org](https://opengameart.org/) — free platformer sprites
- [How to Make a Platformer Feel Good](https://www.youtube.com/watch?v=yorTG9at90g) — game feel reference

## Where to go from here

- Multiplayer (split screen or networked co-op)
- Procedurally generated levels
- Wall jumping and dashing mechanics
- Boss battles
- Mobile touch controls
