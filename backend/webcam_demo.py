import cv2
from app.services.cv_utils import (
    resize_image,
    convert_to_gray,
    apply_blur,
    detect_edges,
    detect_faces,
    draw_face_boxes,
)

camera = cv2.VideoCapture(0)

while True:
    success, frame = camera.read()

    

    if not success:
        
        break

    

    frame = resize_image(frame)

    gray = convert_to_gray(frame)

    faces = detect_faces(gray)

    

    frame = draw_face_boxes(frame, faces)

    cv2.imshow("Face Detection", frame)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

camera.release()
cv2.destroyAllWindows()