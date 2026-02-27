# Procedurally Generated Landforms


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-45 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, basic 3D math, linear algebra concepts |
| Built by | Minecraft, No Man's Sky, World Machine, Terragen |

**Skills you'll earn:** Perlin/Simplex noise, WebGL rendering, erosion simulation, biome systems, 3D terrain generation

Start by rendering a 2D heightmap with Perlin noise. End with 3D terrain with erosion, biomes, and WebGL rendering.

(Assumes basic JS knowledge. Includes significant time learning noise functions, WebGL/Three.js, and erosion algorithms.)

## Step 1: A 2D noise heightmap (~2-3 hours)

You need terrain. Noise functions generate it.

- Implement 2D Perlin noise (or use a library like simplex-noise)
- Sample the noise function across a grid and map values to grayscale pixels
- Render the heightmap to a canvas — black is low, white is high
- Add sliders for frequency, amplitude, and seed

**You now have:** A grayscale terrain map.

## Step 2: Octave layering (~2-3 hours)

Single-frequency noise looks like lumpy hills. Real terrain has detail at every scale.

- Layer multiple octaves of noise (fractal Brownian motion)
- Each octave doubles the frequency and halves the amplitude
- Control octave count, lacunarity, and persistence with sliders
- The result has both broad mountains and fine detail

**You now have:** Realistic heightmap terrain.

## Step 3: Color mapping and biomes (~3-4 hours)

Gray isn't useful. You need to see water, grass, mountains, and snow.

- Map height ranges to colors: blue for water, green for lowlands, brown for mountains, white for peaks
- Add moisture as a second noise layer
- Combine height and moisture to determine biome (desert, forest, tundra)
- Render the colored map to canvas

**You now have:** A biome map.

## Step 4: Hydraulic erosion (~5-6 hours)

The terrain is too smooth. Water carves valleys.

- Simulate water droplets: each starts at a random point, flows downhill
- The droplet picks up sediment from steep terrain and deposits it in flat areas
- Run thousands of droplets; the terrain develops rivers and valleys
- This is computationally heavy — show a progress bar

**You now have:** Eroded, natural-looking terrain.

## Step 5: 3D rendering with WebGL (~6-8 hours)

A top-down map hides the drama of the terrain.

- Build a mesh from the heightmap: each grid cell becomes two triangles
- Load it into a WebGL context (raw WebGL or Three.js)
- Apply the biome colors as vertex colors or a texture
- Add orbit camera controls to rotate and zoom

**You now have:** A 3D terrain viewer.

## Step 6: Lighting and water (~4-5 hours)

- Add directional lighting with normals computed from the heightmap
- Render a flat water plane at sea level with transparency
- Add fog for depth

## Step 7: Infinite terrain (~6-8 hours)

- Chunk the world into tiles, generate on demand as the camera moves
- Seed-based generation so chunks are deterministic
- Level-of-detail: distant chunks use fewer triangles

**You now have:** An infinite explorable world.

## Useful Resources

- [simplex-noise (npm) – noise function library](https://github.com/jwagner/simplex-noise.js)
- [Three.js documentation](https://threejs.org/docs/)
- [Red Blob Games: Terrain from Noise](https://www.redblobgames.com/maps/terrain-from-noise/)
- [Hydraulic Erosion – Sebastian Lague (YouTube)](https://www.youtube.com/watch?v=eaXk97ujbPQ)
- [The Book of Shaders](https://thebookofshaders.com/)
- [MDN: WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

## Where to go from here

- Vegetation placement (trees, rocks) based on biome
- Cave systems using 3D noise
- Export heightmap as a file for game engines
- Real-time erosion simulation on GPU with compute shaders
