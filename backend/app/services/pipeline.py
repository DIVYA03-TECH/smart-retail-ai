from tensorflow.keras.models import load_model
from transformers import pipeline
import cv2

product_model = None
sentiment_model = None
face_detector = None
face_recognizer = None


def get_product_model():
    global product_model

    if product_model is None:
        product_model = load_model(
            "app/models/product_classifier.keras"
        )

    return product_model


def get_sentiment_model():
    global sentiment_model

    if sentiment_model is None:
        sentiment_model = pipeline(
            "sentiment-analysis",
            model="cardiffnlp/twitter-roberta-base-sentiment-latest"
        )

    return sentiment_model


def get_face_detector():
    global face_detector

    if face_detector is None:
        face_detector = cv2.CascadeClassifier(
            cv2.data.haarcascades +
            "haarcascade_frontalface_default.xml"
        )

    return face_detector


def get_face_recognizer():
    global face_recognizer

    if face_recognizer is None:
        face_recognizer = cv2.face.LBPHFaceRecognizer_create()

    return face_recognizer