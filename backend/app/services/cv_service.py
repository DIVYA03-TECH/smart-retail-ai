import numpy as np
import cv2

from app.services.dashboard_service import add_product
from app.services.pipeline import get_product_model

class_names = [
    "T-shirt/top",
    "Trouser",
    "Pullover",
    "Dress",
    "Coat",
    "Sandal",
    "Shirt",
    "Sneaker",
    "Bag",
    "Ankle Boot"
]


def classify_product(image_bytes):

    # models = get_models()
    # model = models["product_model"]
    model = get_product_model()
    image = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(image, cv2.IMREAD_GRAYSCALE)

    image = cv2.resize(image, (28, 28))
    image = image.astype("float32") / 255.0
    image = image.reshape(1, 28, 28, 1)

    prediction = model.predict(image, verbose=0)

    predicted_index = np.argmax(prediction)
    confidence = float(np.max(prediction) * 100)

    add_product(
        class_names[predicted_index],
        round(confidence, 2)
    )

    return {
        "status": "Success",
        "predicted_class": class_names[predicted_index],
        "confidence": round(confidence, 2),
    }