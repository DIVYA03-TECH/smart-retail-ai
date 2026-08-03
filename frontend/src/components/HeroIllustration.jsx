import { motion } from "framer-motion";
import {
  Brain,
  Camera,
  ShoppingBag,
  MessageCircle,
  Smile,
  BarChart3,
  Store,
} from "lucide-react";

export default function HeroIllustration() {
  const modules = [
    {
      icon: Camera,
      title: "Face AI",
      color: "from-purple-500 to-indigo-500",
      x: 40,
      y: 20,
    },
    {
      icon: ShoppingBag,
      title: "Product AI",
      color: "from-orange-500 to-red-500",
      x: 420,
      y: 40,
    },
    {
      icon: Smile,
      title: "Sentiment",
      color: "from-green-500 to-emerald-500",
      x: 30,
      y: 320,
    },
    {
      icon: MessageCircle,
      title: "Chatbot",
      color: "from-cyan-500 to-blue-500",
      x: 420,
      y: 320,
    },
    {
      icon: BarChart3,
      title: "Analytics",
      color: "from-pink-500 to-purple-500",
      x: 225,
      y: -40,
    },
  ];

  return (
    <div className="relative hidden h-[520px] w-[560px] lg:block">

      {/* Connection Lines */}

      <svg className="absolute inset-0 h-full w-full">

        {modules.map((m, i) => (
          <line
            key={i}
            x1="280"
            y1="240"
            x2={m.x + 40}
            y2={m.y + 40}
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        ))}

      </svg>

      {/* AI Core */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_60px_rgba(59,130,246,.45)]"
      >
        <div className="text-center text-white">

          <Brain size={42} className="mx-auto" />

          <h3 className="mt-2 text-xl font-bold">
            AI Core
          </h3>

        </div>

      </motion.div>

      {/* Smart Store */}

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="absolute left-1/2 top-[72%] flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-xl"
      >

        <Store
          size={42}
          className="text-blue-600"
        />

      </motion.div>

      {/* AI Modules */}

      {modules.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.25,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
          >
            <div className="w-36 rounded-2xl bg-white p-5 shadow-xl">

              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white`}
              >
                <Icon size={28} />
              </div>

              <p className="mt-4 text-center font-semibold text-slate-700">
                {item.title}
              </p>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}