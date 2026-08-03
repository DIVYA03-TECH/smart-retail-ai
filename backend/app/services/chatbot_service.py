import ollama

from app.services.dashboard_service import add_chat

MODEL_NAME = "qwen2.5:1.5b"


def retail_chat(user_message: str):
    system_prompt = """
You are an AI Retail Shopping Assistant.

You help customers by:
- Answering product-related questions
- Giving shopping recommendations
- Explaining return policy
- Helping with payment and delivery queries

Keep responses short, clear and friendly.
"""

    response = ollama.chat(
        model=MODEL_NAME,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message},
        ],
    )

    ai_response = response["message"]["content"]

    print("========== CHAT ==========")
    print("Question:", user_message)
    print("Answer:", ai_response)

    add_chat(user_message, ai_response)

    print("Saved to dashboard.json")
    print("==========================")

    return {
        "status": "Success",
        "response": ai_response,
    }