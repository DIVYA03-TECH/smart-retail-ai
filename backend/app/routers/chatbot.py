from fastapi import APIRouter

from app.schemas import ChatRequest
from app.services.chatbot_service import retail_chat

router = APIRouter(
    prefix="/chatbot",
    tags=["Retail Chatbot"],
)


@router.post("/chat")
def chat(request: ChatRequest):
    return retail_chat(request.message)