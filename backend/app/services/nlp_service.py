from app.services.dashboard_service import add_sentiment
from app.services.pipeline import get_sentiment_model

# Load lazily (first time only)
sentiment_pipeline = None


def analyze_sentiment(text: str):
    global sentiment_pipeline

    if sentiment_pipeline is None:
        sentiment_pipeline = get_sentiment_model()

    result = sentiment_pipeline(text)[0]

    label = result["label"]
    score = round(float(result["score"]) * 100, 2)

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