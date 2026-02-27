# TinkerCad Clone


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, 3D math (vectors/matrices), WebGL basics |
| Built by | TinkerCAD, Onshape, Fusion 360, OpenSCAD |

**Skills you'll earn:** Three.js/WebGL, CSG (boolean operations), 3D transforms, STL export, mesh manipulation

Start with a cube in the browser. End with a browser-based 3D modeling tool.

## Step 1: Render a 3D cube

You want a 3D shape in the browser.

- One HTML page with a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) element
- Set up a [Three.js](https://threejs.org/docs/) scene with a camera, renderer, and lighting
- Add a `BoxGeometry` mesh with a colored material
- Render the scene

**You now have:** A 3D cube in the browser.

## Step 2: Orbit camera

The cube sits at a fixed angle. You need to look around it.

- Add [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) from Three.js
- Click and drag to rotate the view, scroll to zoom, right-click to pan
- Add a grid floor for spatial reference
- Show axis indicators (X = red, Y = green, Z = blue)

**You now have:** An interactive 3D viewport.

## Step 3: Add primitive shapes

One cube isn't modeling. You need a library of shapes.

- Add a toolbar with primitives: cube, sphere, cylinder, cone, torus, plane
- Click a shape to add it at the scene origin
- Each shape is a separate mesh in the scene
- Keep a scene graph (array of objects with their properties)

**You now have:** Primitive shape placement.

## Step 4: Select and transform objects

Shapes are placed but you can't move, rotate, or resize them.

- Click a mesh to select it (use raycasting: [`Raycaster`](https://threejs.org/docs/#api/en/core/Raycaster))
- Show a transform gizmo on the selected object ([TransformControls](https://threejs.org/docs/#examples/en/controls/TransformControls))
- Toggle between translate, rotate, and scale modes (T, R, S keys)
- Show the selected object's properties in a side panel (position, rotation, scale)

**You now have:** Object manipulation.

## Step 5: Boolean operations (CSG)

Real modeling requires combining shapes: union, subtract, intersect.

- Integrate a CSG library ([three-bvh-csg](https://github.com/gkjohnson/three-bvh-csg) or [csg.js](https://evanw.github.io/csg.js/))
- Select two objects, choose an operation: union (merge), subtract (cut one from another), intersect (keep only the overlap)
- Replace the two source objects with the resulting mesh
- This is TinkerCad's core workflow: combine simple shapes into complex ones

**You now have:** Constructive solid geometry.

## Step 6: Color and materials

Everything is the same gray.

- Add a color picker in the properties panel
- Apply colors per-object
- Support basic material properties: metallic, roughness, transparency
- Add environment lighting for realistic reflections

**You now have:** Styled 3D objects.

## Step 7: Save and load projects

- Serialize the scene (objects, transforms, materials, CSG history) as JSON
- Save to localStorage or a backend
- Load projects from JSON
- Export as glTF/GLB using [Three.js GLTFExporter](https://threejs.org/docs/#examples/en/exporters/GLTFExporter)

## Step 8: STL export for 3D printing

- Export the scene (or selected object) as STL
- Validate the mesh is watertight (no holes — required for 3D printing)
- Show the object's dimensions in real-world units (mm)

## Step 9: Undo/redo

- Command stack for all operations
- Ctrl+Z / Ctrl+Shift+Z

## Useful Resources

- [Three.js documentation](https://threejs.org/docs/)
- [Three.js fundamentals](https://threejs.org/manual/) — official tutorial
- [three-bvh-csg](https://github.com/gkjohnson/three-bvh-csg) — Boolean operations for Three.js
- [glTF format specification](https://www.khronos.org/gltf/)
- [TinkerCad](https://www.tinkercad.com/) — reference for UX and workflow

## Where to go from here

- Snap and alignment tools (snap to grid, align centers)
- Text tool (3D extruded text)
- Import STL/OBJ files
- Collaborative editing (WebSocket)
- VR mode for immersive modeling
