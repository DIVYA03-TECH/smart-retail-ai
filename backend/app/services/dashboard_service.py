import json
from pathlib import Path
from datetime import datetime

DATA_FILE = Path("data/dashboard.json")


def load_dashboard():
    if not DATA_FILE.exists():
        return {
            "products": [],
            "faces": [],
            "sentiments": [],
            "chats": []
        }

    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_dashboard(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)


def current_time():
    return datetime.now().strftime("%d-%m-%Y %H:%M:%S")

def add_product(product, confidence):

    data = load_dashboard()

    data["products"].insert(0, {
        "product": product,
        "confidence": confidence,
        "time": current_time()
    })

    save_dashboard(data)


def add_face(name, recognized, confidence):

    data = load_dashboard()

    data["faces"].insert(0, {
        "name": name,
        "recognized": recognized,
        "confidence": confidence,
        "time": current_time()
    })

    save_dashboard(data)


def add_sentiment(text, sentiment, confidence):

    data = load_dashboard()

    data["sentiments"].insert(0, {
        "review": text,
        "sentiment": sentiment,
        "confidence": confidence,
        "time": current_time()
    })

    save_dashboard(data)


def add_chat(question, answer):

    data = load_dashboard()

    data["chats"].insert(
        0,
        {
            "question": question,
            "answer": answer,
            "time": current_time(),
        },
    )

    save_dashboard(data)


def clear_dashboard():

    data = {
        "products": [],
        "faces": [],
        "sentiments": [],
        "chats": []
    }

    save_dashboard(data)

    return {
        "status": "Success",
        "message": "Dashboard cleared."
    }