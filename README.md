# 🛒 Smart Retail AI

An AI-powered retail analytics platform that combines **Computer Vision**, **Natural Language Processing**, **Machine Learning**, and an **LLM-powered chatbot** into a single application. The platform helps retailers automate product classification, analyze customer sentiment, recognize customers using facial recognition, and gain business insights through an interactive analytics dashboard.

---

# 📌 Features

## 🛍️ Product Classification
- Classifies retail products using a CNN model trained on the Fashion-MNIST dataset.
- Upload product images for real-time prediction.
- Displays predicted category with confidence score.

## 😊 Customer Sentiment Analysis
- Performs sentiment analysis on customer reviews using the **CardiffNLP RoBERTa** model.
- Predicts Positive, Neutral, or Negative sentiment.
- Stores sentiment history for dashboard analytics.

## 👤 Face Recognition
- Register customers using a webcam.
- Detect and recognize registered customers.
- Built using OpenCV Haar Cascade and LBPH Face Recognizer.

## 💬 AI Retail Chatbot
- Powered by Ollama and a local LLM.
- Answers retail-related queries.
- Provides product recommendations and customer assistance.

## 📊 Analytics Dashboard
- Product prediction statistics
- Sentiment analysis summary
- Face recognition history
- Chatbot activity
- Business insights with charts

## 🎨 Modern Frontend
- Responsive React interface
- Interactive dashboard
- Real-time API integration
- Clean and modern UI

---

# 🏗️ System Architecture

```text
Frontend (React + Vite)
        │
        ▼
FastAPI Backend
        │
 ├── Product Classification (TensorFlow CNN)
 ├── Sentiment Analysis (RoBERTa)
 ├── Face Recognition (OpenCV)
 ├── AI Chatbot (Ollama)
 └── Dashboard Analytics
```

---

# 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- FastAPI
- Python
- Uvicorn

### AI & Machine Learning
- TensorFlow
- Hugging Face Transformers
- CardiffNLP RoBERTa
- OpenCV
- NumPy
- Scikit-learn

### LLM
- Ollama

### Tools
- Docker
- Git
- GitHub

---

# 📂 Project Structure

```text
smart-retail-ai/
│
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── schemas.py
│   │   └── main.py
│   │
│   ├── data/
│   ├── face_db/
│   ├── face_dataset/
│   ├── trainer/
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .dockerignore
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── datasets/
├── notebooks/
├── .gitignore
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/smart-retail-ai.git

cd smart-retail-ai
```

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend:

```
http://localhost:8000
```

Swagger API:

```
http://localhost:8000/docs
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# 🐳 Docker

Build Image

```bash
docker build -t smart-retail-ai .
```

Run Container

```bash
docker run -p 8000:8000 smart-retail-ai
```


---

# 🚀 Future Enhancements

- Barcode Scanner Integration
- Inventory Management
- Sales Forecasting
- Recommendation System
- JWT Authentication
- Cloud Deployment
- Database Integration
- Real-time Inventory Tracking

---

# 📄 License

This project is developed for educational and learning purposes.

---

# 👩‍💻 Developed By

**Divya Lokwani**

B.Tech Computer Science Engineering

GitHub: **https://github.com/DIVYA03-TECH**
