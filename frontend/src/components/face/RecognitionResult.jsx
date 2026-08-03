import { useState } from "react";
import {
  ScanFace,
  UserCheck,
  UserX,
  Search,
  Upload,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { recognizeFace } from "../../services/faceApi";

export default function RecognitionResult({
  capturedImages,
  loading,
  setLoading,
  result,
  setResult,
  setHistory,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPreview, setSelectedPreview] = useState(null);

  const handleRecognition = async () => {
    let image = null;

    if (selectedImage) {
      image = selectedImage;
    } else if (capturedImages && capturedImages.length > 0) {
      image = capturedImages[capturedImages.length - 1];
    }

    if (!image) {
      toast.error("Capture or upload an image first.");
      return;
    }

    try {
      setLoading(true);

      const response = await recognizeFace(image);

      setResult(response);

      setHistory((prev) => [
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString(),
          ...response,
        },
        ...prev,
      ]);

      if (response.recognized) {
        toast.success(`Welcome ${response.name}`);
      } else {
        toast("Unknown Person");
      }
    } catch (err) {
      console.error(err);

      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Recognition failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <ScanFace className="text-blue-600" />

          <div>
            <h2 className="text-3xl font-bold">
              Face Recognition
            </h2>

            <p className="text-slate-500">
              Use camera or upload an image
            </p>
          </div>
        </div>

        <button
          onClick={handleRecognition}
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white hover:scale-105 disabled:opacity-50"
        >
          <Search className="mr-2 inline" />

          {loading ? "Recognizing..." : "Recognize Face"}
        </button>

      </div>

      {/* Upload */}

      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-6">

        <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

          <Upload size={20} />

          Upload Image

        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {

            if (!e.target.files.length) return;

            const file = e.target.files[0];

            setSelectedImage(file);

            setSelectedPreview(URL.createObjectURL(file));

          }}
          className="w-full rounded-lg border p-3"
        />

        {selectedPreview && (

          <img
            src={selectedPreview}
            alt="Preview"
            className="mt-5 h-60 w-full rounded-xl border object-cover"
          />

        )}

      </div>

      {!result ? (

        <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center">

          <ScanFace
            size={70}
            className="mx-auto text-slate-400"
          />

          <h3 className="mt-4 text-2xl font-semibold">
            No Recognition Yet
          </h3>

          <p className="mt-2 text-slate-500">
            Capture images or upload a photo and click
            <b> Recognize Face</b>.
          </p>

        </div>

      ) : (

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >

          <div className="rounded-2xl bg-slate-50 p-6">

            <h4 className="text-sm text-slate-500">
              Status
            </h4>

            <p className="mt-2 text-xl font-bold">
              {result.status}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-6">

            <h4 className="text-sm text-slate-500">
              Recognized
            </h4>

            <p className="mt-2 flex items-center gap-2 text-xl font-bold">

              {result.recognized ? (
                <>
                  <UserCheck className="text-green-600" />
                  Yes
                </>
              ) : (
                <>
                  <UserX className="text-red-600" />
                  No
                </>
              )}

            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-6">

            <h4 className="text-sm text-slate-500">
              Name
            </h4>

            <p className="mt-2 text-2xl font-bold">
              {result.name}
            </p>

          </div>

          {result.confidence !== undefined && (

            <div className="rounded-2xl bg-slate-50 p-6">

              <h4 className="text-sm text-slate-500">
                Confidence
              </h4>

              <p className="mt-2 text-2xl font-bold text-blue-600">
                {result.confidence.toFixed(2)}%
              </p>

              <div className="mt-4 h-3 rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{
                    width: `${Math.min(
                      result.confidence,
                      100
                    )}%`,
                  }}
                />

              </div>

            </div>

          )}

        </motion.div>

      )}

    </motion.div>
  );
}