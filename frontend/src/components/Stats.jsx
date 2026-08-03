import {
  ShieldCheck,
  Brain,
  Zap,
  BarChart3,
  Cloud,
  Cpu,
} from "lucide-react";

import WhyCard from "./WhyCard";

const benefits = [
  {
    title: "AI Powered",
    description:
      "Advanced Machine Learning models provide intelligent retail insights.",
    icon: <Brain size={30} />,
    color: "bg-blue-600",
  },
  {
    title: "High Accuracy",
    description:
      "Product classification and customer recognition with excellent accuracy.",
    icon: <ShieldCheck size={30} />,
    color: "bg-green-600",
  },
  {
    title: "Lightning Fast",
    description:
      "Real-time predictions with optimized AI inference.",
    icon: <Zap size={30} />,
    color: "bg-orange-500",
  },
  {
    title: "Advanced Analytics",
    description:
      "Monitor KPIs, trends and customer behavior through AI dashboards.",
    icon: <BarChart3 size={30} />,
    color: "bg-purple-600",
  },
  {
    title: "Cloud Ready",
    description:
      "Deploy securely with scalable cloud infrastructure.",
    icon: <Cloud size={30} />,
    color: "bg-cyan-600",
  },
  {
    title: "Smart Automation",
    description:
      "Automate retail operations using intelligent AI workflows.",
    icon: <Cpu size={30} />,
    color: "bg-pink-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24">

      {/* Soft Background Blur */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-md">
            ✨ Why Choose Smart Retail AI
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Intelligent Retail Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Smart Retail AI combines Computer Vision,
            NLP, Deep Learning and Intelligent Automation
            into one seamless retail ecosystem.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item) => (
            <WhyCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}