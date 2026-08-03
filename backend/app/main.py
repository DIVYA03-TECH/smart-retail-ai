from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import APP_NAME, APP_VERSION
from app.routers import health
from app.routers import chatbot
from app.routers import nlp
from app.routers import dashboard
from app.routers.vision import router as vision_router

app = FastAPI(
    title=APP_NAME,
    version=APP_VERSION,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "*"  # remove later if you want stricter CORS
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Always keep health enabled
app.include_router(health.router)

# Enable ONE router, deploy, then enable the next.

# app.include_router(chatbot.router)
# app.include_router(nlp.router)
# app.include_router(dashboard.router)
# app.include_router(vision_router)

@app.get("/")
def home():
    return {
        "message": "Smart Retail AI Backend Running"
    }