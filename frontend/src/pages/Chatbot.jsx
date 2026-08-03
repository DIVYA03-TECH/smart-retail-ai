import { useEffect, useRef, useState } from "react";

import ChatWindow from "../components/chatbot/ChatWindow";
import ChatInput from "../components/chatbot/ChatInput";
import SuggestedQuestions from "../components/chatbot/SuggestedQuestions";

import { sendMessage } from "../services/chatbotApi";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hello! I'm your AI Retail Shopping Assistant. Ask me about products, shopping, returns, payments or delivery.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);

      const result = await sendMessage(text);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: result.response,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "bot",
          text: "Unable to contact the AI assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
  <section className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-8">

    <div className="mx-auto max-w-7xl px-6">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">

            <span className="text-3xl">🤖</span>

          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Smart Retail AI
            </h1>

            <p className="mt-1 text-slate-500">
              AI Shopping Assistant powered by Ollama (Qwen 2.5)
            </p>

          </div>

        </div>

        <div className="hidden items-center gap-2 rounded-full bg-green-100 px-5 py-2 md:flex">

          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="font-medium text-green-700">
            Online
          </span>

        </div>

      </div>

      {/* Quick Features */}

      <div className="mb-6 flex flex-wrap gap-3">

        <div className="rounded-full bg-white px-5 py-3 shadow-md">
          🛍 Product Recommendations
        </div>

        <div className="rounded-full bg-white px-5 py-3 shadow-md">
          📦 Delivery Support
        </div>

        <div className="rounded-full bg-white px-5 py-3 shadow-md">
          💳 Payment Help
        </div>

        <div className="rounded-full bg-white px-5 py-3 shadow-md">
          🔄 Return Policy
        </div>

      </div>

      {/* Suggested Questions */}

      <SuggestedQuestions
        onQuestionClick={handleSend}
      />

      {/* Chat Window */}

      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

        <ChatWindow
          messages={messages}
          loading={loading}
          bottomRef={bottomRef}
        />

      </div>

      {/* Chat Input */}

      <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">

        <ChatInput
          onSend={handleSend}
          loading={loading}
        />

      </div>

    </div>

  </section>
);
}