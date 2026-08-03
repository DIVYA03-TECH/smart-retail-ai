import {
  ImageIcon,
  Trash2,
  Sparkles,
  RotateCcw,
  ScanSearch,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import { predictProduct } from "../../services/productApi";

export default function ImagePreview({
  selectedImage,
  setSelectedImage,
  loading,
  setLoading,
  setPrediction,
  history,
  setHistory,
}) {
  const handlePredict = async () => {
  if (!selectedImage) return;

  try {
    setLoading(true);

    const result = await predictProduct(selectedImage.file);

    setPrediction(result);

    setHistory((prev) => [
      {
        id: Date.now(),
        predicted_class: result.predicted_class,
        confidence: result.confidence,
        status: result.status,
        time: new Date().toLocaleTimeString(),
      },
      ...prev,
    ]);
  } catch (err) {
    console.error(err);
    alert("Prediction failed");
  } finally {
    setLoading(false);
  }
};
     

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <ScanSearch className="text-blue-600" />
        <h2 className="text-3xl font-bold">
          Image Preview
        </h2>
      </div>

      {!selectedImage ? (
        <div className="flex h-[550px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">

          <ImageIcon
            size={80}
            className="text-slate-400"
          />

          <h3 className="mt-6 text-2xl font-semibold text-slate-700">
            No Image Selected
          </h3>

          <p className="mt-3 text-center text-slate-500">
            Upload an image to preview it here.
          </p>

        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-3xl border">

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.preview}
              alt="preview"
              className="h-[380px] w-full object-cover"
            />

          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-slate-100 p-4">

              <p className="text-sm text-slate-500">
                File Name
              </p>

              <h3 className="mt-2 font-semibold truncate">
                {selectedImage.file.name}
              </h3>

            </div>

            <div className="rounded-xl bg-slate-100 p-4">

              <p className="text-sm text-slate-500">
                File Size
              </p>

              <h3 className="mt-2 font-semibold">
                {(selectedImage.file.size / 1024).toFixed(1)} KB
              </h3>

            </div>

          </div>

          <div className="mt-6 rounded-2xl bg-blue-50 p-5">

            <div className="flex gap-3">

              <Info className="text-blue-600" />

              <div>

                <h3 className="font-semibold">
                  AI Analysis
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Our AI model will analyze the uploaded
                  product image and identify its class with
                  a confidence score.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() => setSelectedImage(null)}
              className="flex flex-1 items-center justify-center rounded-xl border border-red-300 py-4 font-semibold text-red-600 transition hover:bg-red-50"
            >
              <Trash2
                className="mr-2"
                size={18}
              />
              Remove
            </button>

            <button
              onClick={() => window.location.reload()}
              className="flex flex-1 items-center justify-center rounded-xl border py-4 font-semibold transition hover:bg-slate-100"
            >
              <RotateCcw
                className="mr-2"
                size={18}
              />
              Reset
            </button>

          </div>

          <button
            onClick={handlePredict}
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-5 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-50"
          >
            <Sparkles
              className="mr-2 inline"
            />

            {loading
              ? "Analyzing Product..."
              : "Predict Product"}
          </button>
        </>
      )}
    </motion.div>
  );
}