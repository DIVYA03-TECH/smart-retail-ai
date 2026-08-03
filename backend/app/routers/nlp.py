from fastapi import APIRouter
from pydantic import BaseModel

from app.services.nlp_service import analyze_sentiment

router = APIRouter(
    prefix="/nlp",
    tags=["NLP"]
)

class Review(BaseModel):
    text: str

@router.post("/sentiment")
def sentiment(review: Review):
    return analyze_sentiment(review.text)