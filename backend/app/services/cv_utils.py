import cv2

# Load Haar Cascade once
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)
print("Cascade Loaded:", not face_cascade.empty())
print("Cascade Path:", cv2.data.haarcascades + "haarcascade_frontalface_default.xml")


def resize_image(image, width=640):
    h, w = image.shape[:2]
    ratio = width / w
    height = int(h * ratio)
    return cv2.resize(image, (width, height))


def convert_to_gray(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


def apply_blur(image):
    return cv2.GaussianBlur(image, (5, 5), 0)


def detect_edges(image):
    return cv2.Canny(image, 100, 200)


def detect_faces(image):
    faces = face_cascade.detectMultiScale(
        image,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(30, 30),
    )
    return faces


def draw_face_boxes(image, faces):
    for (x, y, w, h) in faces:
        cv2.rectangle(
            image,
            (x, y),
            (x + w, y + h),
            (0, 255, 0),
            2,
        )
    return image