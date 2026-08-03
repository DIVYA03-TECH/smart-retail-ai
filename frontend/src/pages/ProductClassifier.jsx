import { useState } from "react";

import UploadArea from "../components/product/UploadArea";
import ImagePreview from "../components/product/ImagePreview";
import PredictionCard from "../components/product/PredictionCard";
import PredictionHistory from "../components/product/PredictionHistory";
export default function ProductClassifier() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [history, setHistory] = useState([]);
  const [prediction, setPrediction] = useState(null);
const [loading, setLoading] = useState(false);

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-slate-900">
            Product Classification
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            Upload a product image and let AI classify it.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <UploadArea
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

         <ImagePreview
  selectedImage={selectedImage}
  setSelectedImage={setSelectedImage}
  loading={loading}
  setLoading={setLoading}
  setPrediction={setPrediction}
  history={history}
  setHistory={setHistory}
/>

        </div>

        <PredictionCard
    prediction={prediction}
    loading={loading}
/>
<PredictionHistory history={history} />

      </div>
    </section>
  );
}