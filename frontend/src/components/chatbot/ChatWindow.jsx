import { Bot, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatWindow({
  messages,
  loading,
  bottomRef,
}) {
  return (
    <div className="overflow-hidden rounded-3xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-8 py-5 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">

            <Bot size={30} />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Smart Retail AI
            </h2>

            <p className="text-sm text-blue-100">
              Powered by Ollama • Qwen 2.5
            </p>

          </div>

        </div>

        <div className="hidden rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-100 md:block">
          ● Online
        </div>

      </div>

      {/* Messages */}

      <div className="h-[560px] space-y-6 overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-8">

        {messages.map((message) => (

          <motion.div
            key={message.id}
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`flex max-w-[82%] gap-3 ${
                message.sender === "user"
                  ? "flex-row-reverse"
                  : ""
              }`}
            >

              {/* Avatar */}

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    : "bg-gradient-to-r from-slate-200 to-slate-100"
                }`}
              >
                {message.sender === "user" ? (
                  <User size={20} />
                ) : (
                  <Sparkles
                    size={20}
                    className="text-blue-700"
                  />
                )}
              </div>

              {/* Bubble */}

              <div
                className={`rounded-3xl px-6 py-4 shadow-md ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    : "border border-slate-200 bg-white text-slate-800"
                }`}
              >

                <p className="whitespace-pre-wrap leading-8 text-[15px]">
                  {message.text}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

        {/* Typing Indicator */}

        {loading && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="flex items-start gap-3"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-slate-200 to-slate-100 shadow">

              <Sparkles
                className="text-blue-700"
              />

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow">

              <p className="mb-3 text-sm text-slate-500">
                AI is thinking...
              </p>

              <div className="flex gap-2">

                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600"></span>

                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
                  style={{
                    animationDelay: "0.15s",
                  }}
                ></span>

                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
                  style={{
                    animationDelay: "0.3s",
                  }}
                ></span>

              </div>

            </div>

          </motion.div>

        )}

        <div ref={bottomRef} />

      </div>

    </div>
  );
}