from typing import List

from fastapi import APIRouter, File, Form, UploadFile

from app.services.cv_service import classify_product
from app.services.face_service import (
    register_face,
    recognize_face,
)

router = APIRouter(
    prefix="/vision",
    tags=["Computer Vision"],
)


# ---------------------------------
# Product Classification
# ---------------------------------
@router.post("/classify-product")
async def classify(file: UploadFile = File(...)):
    image_bytes = await file.read()
    return classify_product(image_bytes)


# ---------------------------------
# Face Registration
# ---------------------------------
@router.post("/register-face")
async def register(
    name: str = Form(...),
    files: List[UploadFile] = File(...)
):
    return register_face(name, files)


# ---------------------------------
# Face Recognition
# ---------------------------------
@router.post("/recognize-face")
async def recognize(
    file: UploadFile = File(...)
):
    return recognize_face(file)