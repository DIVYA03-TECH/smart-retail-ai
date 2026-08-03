import cv2
import os
import json
import numpy as np
from pathlib import Path
from app.services.dashboard_service import add_face
# -----------------------------
# Paths
# -----------------------------

DATASET_DIR = Path("face_dataset")
TRAINER_DIR = Path("trainer")
TRAINER_FILE = TRAINER_DIR / "trainer.yml"
LABELS_FILE = Path("labels.json")

DATASET_DIR.mkdir(exist_ok=True)
TRAINER_DIR.mkdir(exist_ok=True)

# -----------------------------
# Face Detector
# -----------------------------

from app.services.pipeline import get_models

models = get_models()

CASCADE = models["face_detector"]

recognizer = models["face_recognizer"]

# -----------------------------
# LBPH Recognizer
# -----------------------------

try:
    recognizer = cv2.face.LBPHFaceRecognizer_create()
except AttributeError:
    raise RuntimeError(
        "OpenCV Contrib is not installed. Install opencv-contrib-python."
    )
# -----------------------------
# Labels
# -----------------------------

def load_labels():

    if LABELS_FILE.exists():

        with open(LABELS_FILE, "r") as f:
            return json.load(f)

    return {}


def save_labels(labels):

    with open(LABELS_FILE, "w") as f:
        json.dump(labels, f, indent=4)


# -----------------------------
# Face Detection
# -----------------------------

def detect_face(image):

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    faces = CASCADE.detectMultiScale(
        gray,
        scaleFactor=1.2,
        minNeighbors=5,
        minSize=(100, 100),
    )

    if len(faces) == 0:
        return None

    x, y, w, h = faces[0]

    face = gray[y:y+h, x:x+w]

    face = cv2.resize(face, (200, 200))

    return face
# -----------------------------
# Train Model
# -----------------------------

def train_model():

    faces = []
    ids = []

    labels = {}
    current_id = 0

    # Loop through every person folder
    for person_dir in DATASET_DIR.iterdir():

        if not person_dir.is_dir():
            continue

        labels[str(current_id)] = person_dir.name

        # Read all images
        for image_path in person_dir.glob("*.jpg"):

            image = cv2.imread(str(image_path))

            if image is None:
                continue

            face = detect_face(image)

            if face is None:
                continue

            faces.append(face)
            ids.append(current_id)

        current_id += 1

    # No training data
    if len(faces) == 0:
        
        return {
            "status": "Failed",
            "message": "No face images found."
        }

    recognizer.train(
        faces,
        np.array(ids, dtype=np.int32)
    )
    print("Training started...")

    recognizer.save(str(TRAINER_FILE))

    save_labels(labels)
    
    return {
        "status": "Success",
        "people": len(labels),
        "images": len(faces)
    }

# -----------------------------
# Register Face
# -----------------------------

def register_face(person_name, files):

    person_name = person_name.strip().lower()

    if person_name == "":
        return {
            "status": "Failed",
            "message": "Person name is required."
        }

    person_dir = DATASET_DIR / person_name
    person_dir.mkdir(parents=True, exist_ok=True)

    saved = 0

    for index, file in enumerate(files, start=1):

        image_bytes = file.file.read()

        image_array = np.frombuffer(
            image_bytes,
            np.uint8
        )

        image = cv2.imdecode(
            image_array,
            cv2.IMREAD_COLOR
        )

        if image is None:
            continue

        file_path = person_dir / f"{index}.jpg"

        cv2.imwrite(
            str(file_path),
            image
        )

        saved += 1

    if saved == 0:

        return {
            "status": "Failed",
            "message": "No valid images uploaded."
        }
    print(f"Saved {saved} images for {person_name}")
    training_result = train_model()

    return {
        "status": "Success",
        "message": "Face registered successfully.",
        "person": person_name,
        "images_saved": saved,
        "training": training_result
    }
# -----------------------------
# Recognize Face
# -----------------------------

def recognize_face(file):

    # Check if trained model exists
    if not TRAINER_FILE.exists():

        return {
            "status": "Failed",
            "message": "No trained model found. Register a face first."
        }

        recognizer.read(str(TRAINER_FILE))

    labels = load_labels()

    image_bytes = file.file.read()

    image_array = np.frombuffer(
        image_bytes,
        np.uint8
    )

    image = cv2.imdecode(
        image_array,
        cv2.IMREAD_COLOR
    )

    if image is None:
        return {
            "status": "Failed",
            "message": "Invalid image."
        }

    face = detect_face(image)

    if face is None:
        return {
            "status": "Failed",
            "message": "No face detected."
        }

    predicted_id, confidence = recognizer.predict(face)

    # Lower confidence = better match in LBPH
    if confidence > 70:

        add_face(
            "Unknown",
            False,
            round(float(confidence), 2)
        )

        return {
            "status": "Success",
            "recognized": False,
            "name": "Unknown",
            "confidence": round(float(confidence), 2)
        }

    name = labels.get(str(predicted_id), "Unknown")

    add_face(
        name,
        True,
        round(float(100 - confidence), 2)
    )

    return {
        "status": "Success",
        "recognized": True,
        "name": name,
        "confidence": round(float(100 - confidence), 2)
    }