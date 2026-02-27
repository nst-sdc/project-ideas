# Gesture-Based Computer Control


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Python, OpenCV basics, basic ML concepts |
| Built by | Leap Motion, Google MediaPipe, Ultraleap, Kinect |

**Skills you'll earn:** Computer vision, MediaPipe hand tracking, gesture classification, OS input simulation, real-time inference

Start by detecting a hand in a webcam feed. End with a system that maps hand gestures to mouse movement, clicks, and keyboard shortcuts.

(Assumes basic Python knowledge. Includes learning OpenCV, MediaPipe, and OS input injection.)

## Step 1: Capture webcam frames (~1 hour)

You need a live video feed before you can detect anything.

- Open the default camera with [OpenCV](https://docs.opencv.org/4.x/d8/dfe/classcv_1_1VideoCapture.html)
- Display frames in a window at 30fps
- Print frame dimensions and FPS to confirm the pipeline works

**You now have:** A live video feed.

## Step 2: Detect a hand (~2-3 hours)

A raw frame is just pixels. You need to find the hand in it.

- Use [MediaPipe Hands](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker) (or train a simple skin-color segmentation as a baseline)
- Draw the 21 hand landmarks on each frame
- Print landmark coordinates for the index finger tip

**You now have:** Real-time hand tracking.

## Step 3: Map finger position to mouse movement (~3-4 hours)

Landmark coordinates are in camera space. The mouse lives in screen space.

- Map the index finger tip (landmark 8) to screen coordinates
- Scale camera resolution to screen resolution
- Move the system cursor using [pyautogui](https://pyautogui.readthedocs.io/en/latest/) or platform APIs
- Add smoothing (rolling average of last N positions) to eliminate jitter

**You now have:** Gesture-controlled mouse movement.

## Step 4: Detect gestures for clicks (~3-4 hours)

Moving the cursor is useless without clicking.

- Define gestures: pinch (thumb + index close) = left click, pinch (thumb + middle) = right click
- Measure distance between fingertips to detect a pinch
- Add a cooldown period to prevent rapid-fire clicks
- Visual feedback: draw a circle on the frame when a click triggers

**You now have:** Click detection.

## Step 5: Scroll and drag (~3-4 hours)

- Fist gesture = drag mode (hold left click while moving)
- Two-finger spread/pinch = scroll up/down
- Track gesture state transitions: idle → dragging → idle

**You now have:** Full mouse replacement.

## Step 6: Keyboard shortcuts via gestures (~4-5 hours)

- Map specific hand poses to actions: open palm = play/pause, thumbs up = volume up
- Build a gesture classifier: extract finger angles from landmarks, classify into N poses
- Make the mapping configurable via a JSON file

## Step 7: Reduce latency and improve accuracy (~4-5 hours)

- Run detection in a separate thread from rendering
- Reduce camera resolution to 640x480 for speed
- Add a deadzone in the center to prevent drift when the hand is still
- Profile and optimize: target under 50ms per frame

## Useful Resources

- [MediaPipe Hand Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker)
- [OpenCV Python Tutorials](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html)
- [pyautogui Documentation](https://pyautogui.readthedocs.io/en/latest/)
- [MediaPipe GitHub](https://github.com/google-ai-edge/mediapipe)

## Useful Resources

- [MediaPipe Hands – Google](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
- [OpenCV Python documentation](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html)
- [PyAutoGUI documentation](https://pyautogui.readthedocs.io/)
- [MediaPipe GitHub repo](https://github.com/google-ai-edge/mediapipe)
- [Real-time hand tracking tutorial (LearnOpenCV)](https://learnopencv.com/hand-tracking-using-mediapipe/)

## Where to go from here

- Two-hand gestures (zoom, rotate)
- Custom gesture training (let users define their own)
- OS integration (virtual touchpad driver instead of pyautogui hacks)
- Presentation mode (next slide, laser pointer, annotations)
