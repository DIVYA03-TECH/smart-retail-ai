import { useState } from "react";
import { MessageSquareText, Send } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { analyzeSentiment } from "../../services/sentimentApi";

export default function ReviewInput({
  loading,
  setLoading,
  setResult,
  setHistory,
}) {
  const [review, setReview] = useState("");

  const handleAnalyze = async () => {
    if (!review.trim()) {
      toast.error("Please enter a customer review.");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeSentiment(review);

      setResult(response);

      setHistory((prev) => [
        {
          id: Date.now(),
          review,
          sentiment: response.sentiment,
          confidence: response.confidence,
          status: response.status,
          time: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);

      toast.success("Analysis completed");

    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.detail);
      } else {
        toast.error("Unable to analyze sentiment.");
      }

    } finally {
      setLoading(false);
    }
  };

  const sampleReviews = [
    "Excellent product quality. Highly recommended!",
    "Delivery was delayed and the packaging was damaged.",
    "Average experience. Product is okay.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <MessageSquareText className="text-blue-600" />
        <h2 className="text-3xl font-bold">
          Customer Review
        </h2>
      </div>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={7}
        maxLength={500}
        placeholder="Write or paste a customer review..."
        className="w-full rounded-2xl border border-slate-300 p-4 text-lg outline-none transition focus:border-blue-600"
      />

      <div className="mt-2 flex justify-between text-sm text-slate-500">
        <span>{review.length} / 500 characters</span>
        <span>
          {review.length === 0
            ? "Waiting for input..."
            : "Ready for analysis"}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {sampleReviews.map((text) => (
          <button
            key={text}
            onClick={() => setReview(text)}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:bg-blue-100"
          >
            {text}
          </button>
        ))}
      </div>

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send className="mr-2 inline" size={20} />

        {loading ? "Analyzing..." : "Analyze Sentiment"}
      </button>
    </motion.div>
  );
}