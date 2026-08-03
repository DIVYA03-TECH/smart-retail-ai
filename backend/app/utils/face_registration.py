import cv2
import os
import time

def register_face(name, total_images=5):
    save_dir = os.path.join("face_db", name)
    os.makedirs(save_dir, exist_ok=True)

    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        raise Exception("Cannot open webcam")

    count = 0
    last_save = time.time()

    while count < total_images:

        ret, frame = cap.read()

        if not ret:
            break

        cv2.imshow("Face Registration", frame)
        cv2.waitKey(1)

        if time.time() - last_save > 0.8:

            filename = os.path.join(
                save_dir,
                f"{count}.jpg"
            )

            cv2.imwrite(filename, frame)

            count += 1
            last_save = time.time()

    cap.release()
    cv2.destroyAllWindows()

    return count