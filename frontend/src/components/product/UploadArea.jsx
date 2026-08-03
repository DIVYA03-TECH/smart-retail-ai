import { useRef, useState } from "react";
import { UploadCloud, ImagePlus, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadArea({
  selectedImage,
  setSelectedImage,
}) {
  const inputRef = useRef(null);

  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    setSelectedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragActive(false);

        if (e.dataTransfer.files.length > 0) {
          handleFile(e.dataTransfer.files[0]);
        }
      }}
      className={`rounded-3xl border-2 border-dashed p-10 shadow-xl transition-all duration-300 ${
        dragActive
          ? "border-blue-600 bg-blue-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-col items-center">

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">

          <UploadCloud
            size={55}
            className="text-white"
          />

        </div>

        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          Upload Product Image
        </h2>

        <p className="mt-3 max-w-md text-center text-slate-500">
          Drag & Drop your product image or browse from your computer.
          Our AI model supports high-quality product recognition.
        </p>

        <button
          type="button"
          onClick={() => inputRef.current.click()}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          <ImagePlus
            className="mr-2 inline"
            size={20}
          />
          Browse Image
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
            JPG
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
            PNG
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
            JPEG
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
            Max 10 MB
          </span>

        </div>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 w-full rounded-2xl bg-green-50 p-5"
          >

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-600" />

              <div>

                <p className="font-semibold text-green-700">
                  Image Selected Successfully
                </p>

                <p className="text-sm text-slate-600">
                  {selectedImage.file.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {(selectedImage.file.size / 1024).toFixed(1)} KB
                </p>

              </div>

            </div>

          </motion.div>

        )}

      </div>
    </motion.div>
  );
}