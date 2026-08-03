from transformers import pipeline

from app.services.dashboard_service import add_sentiment

# Load once when FastAPI starts
from app.services.pipeline import get_models

models = get_models()

sentiment_pipeline = models["sentiment_model"]




def analyze_sentiment(text: str):

    result = sentiment_pipeline(text)[0]

    label = result["label"]

    score = round(float(result["score"]) * 100, 2)

    # Save to dashboard
    add_sentiment(
        text,
        label,
        score
    )

    return {
        "status": "Success",
        "sentiment": label,
        "confidence": score
    }