# Pokemon Open World Game


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, Canvas API, game design basics |
| Built by | Pokémon (Game Freak), PokeMMO, Pokémon Showdown, Temtem |

**Skills you'll earn:** Tile-based maps, sprite animation, turn-based combat, NPC AI, game state management, save systems

Start with a character on a tile map. End with an open-world Pokemon-like RPG.

(Assumes basic HTML/CSS/JS and Canvas knowledge; game design patterns learned along the way)

## Step 1: Render a tile map (~2-3 hours)

You need a world. Start with grass.

- One HTML page with a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) element
- Define a 2D array of tile IDs (0 = grass, 1 = water, 2 = path, 3 = tree)
- Load a tileset spritesheet image
- Draw each tile from the spritesheet at the correct grid position

**You now have:** A static tile map.

## Step 2: A moving character (~2-3 hours)

A map with no one on it isn't a game.

- Load a character spritesheet (4 directions, walk animation frames)
- Place the character at a grid position
- Move with arrow keys: update position one tile at a time
- Animate the walk cycle (swap sprite frames while moving)

**You now have:** A character walking on a map.

## Step 3: Camera scrolling (~2 hours)

Your map is 100x100 tiles but the screen shows 16x12. The character walks off-screen.

- Instead of moving the character on screen, move the map under the character
- Keep the character centered; offset all tile rendering by the camera position
- Clamp the camera at map edges so it doesn't show void

**You now have:** A scrolling world.

## Step 4: Collision (~2 hours)

The character walks through trees and over water.

- Add a collision layer to the map data (mark certain tiles as impassable)
- Before moving, check if the target tile is walkable
- Block movement into impassable tiles
- Different tile types can have different properties (water = impassable unless you have Surf)

**You now have:** Solid obstacles.

## Step 5: Wild encounters (~2 hours)

Walking on grass should occasionally trigger a battle.

- On each step onto a grass tile, roll a random chance (e.g., 10%)
- If triggered, transition to a battle screen
- For now, just show "A wild Pidgey appeared!" with a placeholder UI
- Add a transition effect (screen flash or fade to black)

**You now have:** Random encounters.

## Step 6: Turn-based battle system (~4-5 hours)

The encounter triggers but there's no battle.

- Build a battle screen: your Pokemon on the left, the wild Pokemon on the right
- Show HP bars, Pokemon names, and levels
- Implement a turn-based loop: player picks a move, then the opponent attacks
- Calculate damage using a simplified formula: `(attack / defense) * movePower * random`
- Battle ends when HP reaches 0

**You now have:** A working battle system.

## Step 7: Pokemon data and party (~3-4 hours)

You have one Pokemon with hardcoded stats.

- Define a Pokemon data structure: name, type, stats (HP, attack, defense, speed), moves, level, XP
- Create a party of up to 6 Pokemon
- Gain XP from battles; level up when XP exceeds a threshold
- Learn new moves at certain levels

**You now have:** Pokemon progression.

## Step 8: NPCs and dialogue (~3-4 hours)

The world is empty of people.

- Place NPC sprites on the map with fixed positions
- Interact with them (press a button when facing them)
- Show a dialogue box with text that advances on key press
- Some NPCs give items, others trigger events

## Step 9: Catching Pokemon (~3-4 hours)

- Add a "Bag" option in battle with Pokeballs
- Catch chance based on target HP and ball type
- Caught Pokemon join your party (or go to storage if party is full)
- Pokedex tracks which species you've seen and caught

## Step 10: Map editor (~4-5 hours)

- Build a tile-based map editor: paint tiles onto a grid
- Save maps as JSON
- Load maps into the game engine
- Design multiple areas (town, route, cave) and connect them with warp tiles

## Useful Resources

- [Canvas API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Game Programming Patterns](https://gameprogrammingpatterns.com/) — free online book
- [OpenGameArt.org](https://opengameart.org/) — free sprites and tilesets
- [Pokemon Damage Formula](https://bulbapedia.bulbagarden.net/wiki/Damage) — Bulbapedia
- [Tiled Map Editor](https://www.mapeditor.org/) — for designing tile maps

## Where to go from here

- Type effectiveness system (fire > grass > water > fire)
- Evolution system
- Multiplayer battles and trading via WebSocket
- Procedurally generated routes and Pokemon placement
- Save/load game state to a server
