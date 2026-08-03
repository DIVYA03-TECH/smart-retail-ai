from fastapi import APIRouter, HTTPException
import traceback

from app.schemas import ChatRequest
from app.services.chatbot_service import retail_chat

router = APIRouter(
    prefix="/chatbot",
    tags=["Retail Chatbot"],
)


@router.post("/chat")
def chat(request: ChatRequest):
    try:
        return retail_chat(request.message)
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )