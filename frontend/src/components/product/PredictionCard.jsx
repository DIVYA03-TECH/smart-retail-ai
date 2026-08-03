import { motion } from "framer-motion";
import {
  BrainCircuit,
  BadgeCheck,
  Package,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function PredictionCard({
  prediction,
  loading,
}) {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 rounded-3xl bg-white p-10 shadow-xl"
      >
        <div className="flex flex-col items-center">

          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          <h2 className="mt-6 text-2xl font-bold text-slate-800">
            AI is analyzing your product...
          </h2>

          <p className="mt-3 text-slate-500">
            Please wait a few seconds.
          </p>

        </div>
      </motion.div>
    );
  }

  if (!prediction) {
    return (
      <div className="mt-8 rounded-3xl bg-white p-10 shadow-xl">

        <div className="flex items-center gap-3">

          <BrainCircuit className="text-blue-600" />

          <h2 className="text-2xl font-bold">
            AI Prediction
          </h2>

        </div>

        <div className="mt-12 text-center">

          <Package
            size={70}
            className="mx-auto text-slate-300"
          />

          <h3 className="mt-5 text-xl font-semibold text-slate-700">
            No Prediction Yet
          </h3>

          <p className="mt-3 text-slate-500">
            Upload a product image and click
            <b> Predict Product </b>
            to get AI results.
          </p>

        </div>

      </div>
    );
  }

  const confidence = prediction.confidence ?? 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="mt-8 rounded-3xl bg-white p-8 shadow-xl"
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <BrainCircuit
            size={28}
            className="text-blue-600"
          />

          <h2 className="text-3xl font-bold">
            AI Prediction
          </h2>

        </div>

        <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">

          {prediction.status}

        </span>

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div className="rounded-2xl bg-slate-50 p-8">

          <Package
            size={70}
            className="text-blue-600"
          />

          <h3 className="mt-6 text-3xl font-bold">

            {prediction.predicted_class}

          </h3>

          <p className="mt-3 text-slate-500">

            Product identified successfully using
            Deep Learning image classification.

          </p>

        </div>

        {/* Right */}

        <div>

          <div className="flex justify-between">

            <span className="font-semibold">

              Confidence

            </span>

            <span className="font-bold text-blue-600">

              {confidence}%

            </span>

          </div>

          {/* Progress Bar */}

          <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${confidence}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
            />

          </div>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4 rounded-xl border p-5">

              <BadgeCheck
                className="text-green-600"
              />

              <div>

                <p className="text-sm text-slate-500">
                  Classification
                </p>

                <h3 className="font-bold">

                  Fashion MNIST Model

                </h3>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-xl border p-5">

              <ShieldCheck
                className="text-blue-600"
              />

              <div>

                <p className="text-sm text-slate-500">

                  Model Accuracy

                </p>

                <h3 className="font-bold">

                  Excellent

                </h3>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-xl border p-5">

              <Sparkles
                className="text-orange-500"
              />

              <div>

                <p className="text-sm text-slate-500">

                  AI Recommendation

                </p>

                <h3 className="font-bold">

                  Ready for Inventory Processing

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}