# Image-Based Plant Disease Detection


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Python, basic ML concepts, image processing basics |
| Built by | PlantVillage, Plantix, Agrio, Google Lens |

**Skills you'll earn:** CNN architecture, transfer learning, data augmentation, model deployment (TFLite), image classification

Start with classifying one image. End with a field-ready plant disease detector.

## Step 1: Classify an image (~2-3 hours)

You have a photo of a leaf. You want to know if it's healthy or diseased.

- Download the [PlantVillage dataset](https://github.com/spMohanty/PlantVillage-Dataset) (labeled images of healthy and diseased plant leaves)
- Load an image and display it using [OpenCV](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html) or [Matplotlib](https://matplotlib.org/)
- Use a pre-trained model ([MobileNetV2](https://www.tensorflow.org/api_docs/python/tf/keras/applications/MobileNetV2) via TensorFlow/Keras) with transfer learning
- Train on a small subset: healthy vs. one disease. Evaluate accuracy.

**You now have:** A binary image classifier.

## Step 2: Multi-class classification (~3-4 hours)

Healthy vs. diseased isn't specific enough. Farmers need to know which disease.

- Expand to multiple classes: healthy, bacterial spot, early blight, late blight, etc.
- Use the full PlantVillage dataset with all its labels
- Fine-tune MobileNetV2: freeze early layers, train the classification head
- Evaluate with a confusion matrix to see which diseases are confused with each other

**You now have:** A multi-disease classifier.

## Step 3: Improve accuracy (~3-4 hours)

The model confuses similar diseases. Accuracy plateaus at 85%.

- Apply [data augmentation](https://www.tensorflow.org/tutorials/images/data_augmentation): random rotation, flip, zoom, brightness changes
- Unfreeze more layers and fine-tune with a lower learning rate
- Try a larger backbone ([ResNet50](https://www.tensorflow.org/api_docs/python/tf/keras/applications/ResNet50) or EfficientNet)
- Use a validation set properly — no data leakage

**You now have:** A more robust model.

## Step 4: Build a web interface (~3-4 hours)

The model runs in a Jupyter notebook. Farmers don't use Jupyter.

- Set up a [Flask](https://flask.palletsprojects.com/) or [FastAPI](https://fastapi.tiangolo.com/) server
- Create an upload endpoint that accepts an image
- Run inference on the uploaded image and return: disease name, confidence, and treatment suggestion
- Build a simple HTML frontend with a file upload form and result display

**You now have:** A web-based plant disease detector.

## Step 5: Mobile-friendly (~3-4 hours)

Farmers are in the field with a phone, not a laptop.

- Make the web UI responsive (works on mobile browsers)
- Add camera capture: let users take a photo directly from the app
- Optimize the model for mobile inference (quantize to TFLite or use [ONNX Runtime](https://onnxruntime.ai/))
- Keep inference under 2 seconds on a mid-range phone

**You now have:** A field-ready detection tool.

## Step 6: Treatment recommendations (~3-4 hours)

Identifying the disease is half the job. The farmer needs to know what to do.

- Build a knowledge base: disease → symptoms, causes, treatments, preventive measures
- Show treatment info alongside the diagnosis
- Include regional pesticide/fungicide recommendations
- Link to authoritative sources

**You now have:** Actionable diagnosis.

## Step 7: Multi-crop support (~3-4 hours)

- Train separate models or a single multi-label model for different crops (tomato, potato, corn, grape)
- Auto-detect the crop type, or let the user select
- Show crop-specific disease information

## Step 8: Offline mode (~3-4 hours)

- Export the model as TFLite and bundle it into a Progressive Web App
- Run inference client-side using [TensorFlow.js](https://www.tensorflow.org/js)
- Works without internet — critical for rural areas

## Useful Resources

- [PlantVillage Dataset](https://github.com/spMohanty/PlantVillage-Dataset)
- [TensorFlow Transfer Learning Tutorial](https://www.tensorflow.org/tutorials/images/transfer_learning)
- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [TensorFlow Lite for mobile](https://www.tensorflow.org/lite)
- [OpenCV Python tutorials](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html)

## Where to go from here

- Severity estimation (mild, moderate, severe)
- Time-series tracking (photograph the same plant over weeks)
- Community reporting: farmers share findings, build a regional disease map
- Drone integration for scanning entire fields
- Integration with weather data (predict disease risk based on humidity and temperature)
