import torch
from flask import Flask, request, jsonify, send_file
from torchvision import transforms
from PIL import Image
import io
import pickle
import os

# Custom unpickler for CPU models
class CpuUnpickler(pickle.Unpickler):
    def find_class(self, module, name):
        if module == 'torch.storage' and name == '_load_from_bytes':
            return lambda b: torch.load(io.BytesIO(b), map_location='cpu')
        return super().find_class(module, name)

app = Flask(__name__)

device = torch.device("cpu")

# Load model safely
with open("backend/vit_skin.pkl", "rb") as f:
    model = CpuUnpickler(f).load()
model.to(device)
model.eval()

class_names = ["Eczema", "Psoriasis", "Acne", "Ringworm"]

# Image preprocessing
preprocess = transforms.Compose([
    transforms.Resize((384, 384)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

#  Serve upload.html directly (from parent directory)
@app.route("/")
def home():
    return send_file("../upload.html")


@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files["image"]
    img = Image.open(io.BytesIO(file.read())).convert("RGB")
    img_tensor = preprocess(img).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(img_tensor)
        probs = torch.softmax(outputs, dim=1)
        confidence, idx = torch.max(probs, 1)

    return jsonify({
        "disease": class_names[idx.item()],
        "confidence": round(float(confidence.item() * 100), 2)
    })

if __name__ == "__main__":
    app.run(debug=True)
