from tensorflow.keras.models import load_model
from transformers import pipeline
import cv2

from app.services.chatbot_service import MODEL_NAME

# -----------------------------
# Product Classification Model
# -----------------------------

product_model = load_model(
    "app/models/product_classifier.keras"
)

# -----------------------------
# Sentiment Model
# -----------------------------

sentiment_model = pipeline(
    "sentiment-analysis",
    model="cardiffnlp/twitter-roberta-base-sentiment-latest"
)

# -----------------------------
# Face Recognition
# -----------------------------

face_detector = cv2.CascadeClassifier(
    cv2.data.haarcascades +
    "haarcascade_frontalface_default.xml"
)

face_recognizer = cv2.face.LBPHFaceRecognizer_create()

# -----------------------------
# Chatbot
# -----------------------------

chatbot_model = MODEL_NAME

# -----------------------------
# Getter
# -----------------------------

def get_models():

    return {
        "product_model": product_model,
        "sentiment_model": sentiment_model,
        "face_detector": face_detector,
        "face_recognizer": face_recognizer,
        "chatbot_model": chatbot_model,
    }