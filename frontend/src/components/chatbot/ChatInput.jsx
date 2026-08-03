import { useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({
  onSend,
  loading,
}) {
  const [message, setMessage] = useState("");

  const MAX_LENGTH = 500;

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <textarea
        rows={3}
        value={message}
        maxLength={MAX_LENGTH}
        placeholder="Ask anything about products, shopping, returns, payment, delivery..."
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
        className="w-full resize-none rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-blue-600"
      />

      <div className="mt-3 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          {message.length}/{MAX_LENGTH}
        </span>

        <button
          onClick={handleSend}
          disabled={loading || !message.trim()}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <SendHorizontal 
            size={18}
            className="mr-2 inline"
          />

          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
}