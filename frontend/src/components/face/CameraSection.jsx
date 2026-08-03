import { useEffect, useRef, useState } from "react";
import { Camera, CameraOff, RotateCcw, ScanFace } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function CameraSection({
  capturedImages,
  setCapturedImages,
  preview,
  setPreview,
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [captureCount, setCaptureCount] = useState(0);

  const streamRef = useRef(null);

  // -------------------------
  // Start Camera
  // -------------------------

const startCamera = async () => {
  try {

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    streamRef.current = stream;

    const video = videoRef.current;

    video.srcObject = stream;

    await new Promise((resolve) => {
      video.onloadedmetadata = () => {
        video.play();
        resolve();
      };
    });

    setCameraOn(true);

  } catch (err) {

    console.error(err);

    toast.error("Unable to access camera.");

  }
};

  // -------------------------
  // Stop Camera
  // -------------------------

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    setCameraOn(false);
  };

  // -------------------------
  // Capture 5 Images
  // -------------------------

  const captureImages = async () => {

    if (!cameraOn) return;

    setCapturing(true);
    setCaptureCount(0);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (
  !video ||
  video.videoWidth === 0 ||
  video.videoHeight === 0
) {
  toast.error("Camera is not ready.");
  setCapturing(false);
  return;
}
    const images = [];

    for (let i = 0; i < 5; i++) {

      await new Promise(resolve => setTimeout(resolve, 700));

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(video, 0, 0);

     const blob = await new Promise((resolve) => {
  canvas.toBlob(resolve, "image/jpeg", 0.95);
});

if (!blob) {
  console.error("Capture failed");
  continue;
}

images.push(blob);

setPreview(URL.createObjectURL(blob));

setCaptureCount(i + 1);
    }

    setCapturedImages(images);

    setCapturing(false);

    toast.success("5 images captured successfully.");
  };

  // -------------------------
  // Cleanup
  // -------------------------

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <div className="mb-6 flex items-center gap-3">

        <ScanFace className="text-blue-600" />

        <h2 className="text-3xl font-bold">
          Live Camera
        </h2>

      </div>

      {!preview ? (

        <div className="overflow-hidden rounded-3xl border bg-black">

          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="h-[420px] w-full object-cover"
          />

        </div>

      ) : (

        <img
          src={preview}
          alt="Preview"
          className="h-[420px] w-full rounded-3xl object-cover"
        />

      )}

      <canvas
        ref={canvasRef}
        className="hidden"
      />

      {capturing && (

        <p className="mt-4 text-center font-semibold text-blue-600">

          Capturing Image {captureCount}/5...

        </p>

      )}

      <div className="mt-8 grid grid-cols-2 gap-4">

        {!cameraOn ? (

          <button
            onClick={startCamera}
            className="rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
          >

            <Camera className="mr-2 inline" />

            Start Camera

          </button>

        ) : (

          <button
            onClick={stopCamera}
            className="rounded-xl bg-red-600 py-4 font-semibold text-white hover:bg-red-700"
          >

            <CameraOff className="mr-2 inline" />

            Stop Camera

          </button>

        )}

        <button
          onClick={captureImages}
          disabled={!cameraOn || capturing}
          className="rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
        >

          📸 {capturing ? "Capturing..." : "Capture 5 Images"}

        </button>

      </div>

      {preview && (

        <button
          onClick={() => {

            setCapturedImages([]);

            setPreview(null);

            setCaptureCount(0);

          }}
          className="mt-4 w-full rounded-xl border py-3 font-semibold hover:bg-slate-100"
        >

          <RotateCcw className="mr-2 inline" />

          Retake

        </button>

      )}

    </motion.div>
  );
}