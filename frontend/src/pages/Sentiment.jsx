import { useState } from "react";

import ReviewInput from "../components/sentiment/ReviewInput";
import SentimentResult from "../components/sentiment/SentimentResult";
import SentimentHistory from "../components/sentiment/SentimentHistory";
import SentimentStats from "../components/sentiment/SentimentStats";

export default function Sentiment()  {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState([]);

  return (
    <section className="min-h-screen bg-slate-50 py-12">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-slate-900">
            AI Sentiment Analysis
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            Analyze customer reviews using NLP and
            Transformer models.
          </p>

        </div>

        <ReviewInput
          loading={loading}
          setLoading={setLoading}
          setResult={setResult}
          setHistory={setHistory}
        />

        <div className="mt-8">

          <SentimentResult
            result={result}
          />

        </div>

        <div className="mt-8">

          <SentimentStats
            history={history}
          />

        </div>

        <div className="mt-8">

          <SentimentHistory
            history={history}
          />

        </div>

      </div>

    </section>
  );
}