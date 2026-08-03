import {
  Brain,
  Camera,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  Boxes,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Product Classification",
    description:
      "Identify products instantly using deep learning image recognition.",
    icon: <ShoppingCart size={30} />,
    color: "bg-blue-600",
    link: "/product",
  },
  {
    title: "Face Recognition",
    description:
      "Recognize customers securely for personalized retail experiences.",
    icon: <Camera size={30} />,
    color: "bg-purple-600",
    link: "/face",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Analyze customer reviews and feedback using NLP models.",
    icon: <Brain size={30} />,
    color: "bg-green-600",
    link: "/sentiment",
  },
  {
    title: "Retail Chatbot",
    description:
      "AI assistant for recommendations and customer support.",
    icon: <MessageCircle size={30} />,
    color: "bg-orange-500",
    link: "/chatbot",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize sales, customer insights and AI predictions.",
    icon: <BarChart3 size={30} />,
    color: "bg-indigo-600",
    link: "/dashboard",
  },
  {
    title: "Inventory Intelligence",
    description:
      "Predict demand and optimize inventory automatically.",
    icon: <Boxes size={30} />,
    color: "bg-pink-600",
    link: "/dashboard",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#f5f8fc] py-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-md">
            🚀 Core AI Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            AI Powered Features
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore the intelligent modules that power
            Smart Retail AI, enabling automation,
            customer insights and data-driven retail decisions.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}