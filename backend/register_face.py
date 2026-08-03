import cv2
import os
import time

name = input("Enter your name: ").strip()

save_dir = os.path.join("face_db", name)
os.makedirs(save_dir, exist_ok=True)

cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Cannot open camera")
    exit()

print("Capturing 15 images automatically...")
print("Please slowly turn your head left, right, up, and down.")

count = 0
last_save = time.time()

while count < 15:
    ret, frame = cap.read()
    if not ret:
        break

    cv2.imshow("Face Registration", frame)
    cv2.waitKey(1)

    if time.time() - last_save >= 1:
        filename = os.path.join(save_dir, f"{count}.jpg")
        cv2.imwrite(filename, frame)
        print(f"Saved: {filename}")
        count += 1
        last_save = time.time()

cap.release()
cv2.destroyAllWindows()

print("Registration completed.")