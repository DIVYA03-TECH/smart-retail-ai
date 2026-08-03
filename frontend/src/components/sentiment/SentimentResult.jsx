import { motion } from "framer-motion";
import {
  Smile,
  Meh,
  Frown,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export default function SentimentResult({ result }) {
  if (!result) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="text-blue-600" />
          <h2 className="text-3xl font-bold">
            Analysis Result
          </h2>
        </div>

        <div className="flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

          <BarChart3
            size={70}
            className="text-slate-400"
          />

          <h3 className="mt-5 text-xl font-semibold">
            No Analysis Yet
          </h3>

          <p className="mt-2 text-slate-500">
            Enter a review and click Analyze Sentiment.
          </p>

        </div>
      </div>
    );
  }

  const sentiment = result.sentiment.toLowerCase();

  let icon = <Meh size={70} />;
  let color = "text-yellow-500";
  let progress = "bg-yellow-500";

  if (sentiment.includes("positive")) {
    icon = <Smile size={70} />;
    color = "text-green-600";
    progress = "bg-green-600";
  }

  if (sentiment.includes("negative")) {
    icon = <Frown size={70} />;
    color = "text-red-600";
    progress = "bg-red-600";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <CheckCircle2 className="text-blue-600" />
        <h2 className="text-3xl font-bold">
          Analysis Result
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-50 p-8">

          <div className={color}>
            {icon}
          </div>

          <h3
            className={`mt-6 text-4xl font-bold ${color}`}
          >
            {result.sentiment}
          </h3>

          <p className="mt-3 text-slate-500">
            Customer Review Sentiment
          </p>

        </div>

        {/* Right */}

        <div className="rounded-2xl bg-slate-50 p-8">

          <div className="mb-8">

            <p className="text-sm text-slate-500">
              Status
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {result.status}
            </h3>

          </div>

          <div>

            <div className="mb-3 flex items-center justify-between">

              <span className="font-medium">
                Confidence
              </span>

              <span className="text-xl font-bold">
                {result.confidence}%
              </span>

            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-200">

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${result.confidence}%`,
                }}
                transition={{ duration: 1 }}
                className={`h-full rounded-full ${progress}`}
              />

            </div>

          </div>

          <div className="mt-8 rounded-xl bg-white p-5">

            <p className="text-sm text-slate-500">
              Interpretation
            </p>

            <p className="mt-3 leading-7">

              {sentiment.includes("positive") &&
                "The review expresses a positive customer experience and indicates satisfaction."}

              {sentiment.includes("neutral") &&
                "The review is balanced and does not strongly express positive or negative emotions."}

              {sentiment.includes("negative") &&
                "The review expresses dissatisfaction and highlights issues that may require attention."}

            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}