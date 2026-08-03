from deepface import DeepFace

from deepface import DeepFace

result = DeepFace.find(
    img_path="face_db/divya/0.jpg",
    db_path="face_db",
    enforce_detection=False
)

print(result)

