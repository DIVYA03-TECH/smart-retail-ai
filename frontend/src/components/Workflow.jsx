import {
  Upload,
  ScanSearch,
  Brain,
  Sparkles,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import WorkflowCard from "./WorkflowCard";

const steps = [
  {
    number: "1",
    icon: <Upload size={30} />,
    title: "Upload Data",
    description:
      "Upload product images, customer faces, or review text into the platform.",
  },
  {
    number: "2",
    icon: <ScanSearch size={30} />,
    title: "AI Detection",
    description:
      "Our AI models analyze the uploaded data using Computer Vision and NLP.",
  },
  {
    number: "3",
    icon: <Brain size={30} />,
    title: "Smart Prediction",
    description:
      "Deep learning predicts products, customer identity, and sentiment.",
  },
  {
    number: "4",
    icon: <Sparkles size={30} />,
    title: "Recommendations",
    description:
      "Generate personalized product recommendations and business insights.",
  },
  {
    number: "5",
    icon: <BarChart3 size={30} />,
    title: "Dashboard",
    description:
      "Visualize AI predictions and monitor retail performance in real time.",
  },
];

export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-[#f5f8fc] py-24">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-md">
            ⚙️ AI Workflow
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How Smart Retail AI Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A seamless AI-powered workflow that transforms
            raw retail data into intelligent predictions,
            recommendations, and actionable business insights.
          </p>

        </div>

        {/* Workflow */}

        <div className="mt-20 grid gap-10 lg:grid-cols-5">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className="relative"
            >

              <WorkflowCard {...step} />

              {index !== steps.length - 1 && (

                <div className="absolute right-[-30px] top-1/2 hidden -translate-y-1/2 lg:block text-blue-500">

                  <ArrowRight
                    size={28}
                    strokeWidth={2.5}
                  />

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}