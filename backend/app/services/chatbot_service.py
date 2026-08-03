import os
from dotenv import load_dotenv
from google import genai

from app.services.dashboard_service import add_chat

# Load .env
load_dotenv()

MODEL_NAME = "gemini-3.5-flash"


def retail_chat(user_message: str):

    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        raise Exception("GEMINI_API_KEY not found in environment variables.")

    client = genai.Client(api_key=api_key)

    system_prompt = """
You are an AI Retail Shopping Assistant.

You help customers by:
- Answering product-related questions
- Giving shopping recommendations
- Explaining return policy
- Helping with payment and delivery queries.

Keep responses short, clear and friendly.
"""

    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=f"{system_prompt}\n\nUser: {user_message}"
        )

        ai_response = response.text

        add_chat(user_message, ai_response)

        return {
            "status": "Success",
            "response": ai_response
        }

    except Exception as e:
        raise Exception(f"Gemini Error: {str(e)}")