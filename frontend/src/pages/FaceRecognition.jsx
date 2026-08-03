import { useState } from "react";

import CameraSection from "../components/face/CameraSection";
import RegisterFaceCard from "../components/face/RegisterFaceCard";
import RecognitionResult from "../components/face/RecognitionResult";
import RecognitionHistory from "../components/face/RecognitionHistory";

export default function FaceRecognition() {

  // Captured Images (5 photos)
  const [capturedImages, setCapturedImages] = useState([]);

  // Preview of last captured image
  const [preview, setPreview] = useState(null);

  // Person name
  const [personName, setPersonName] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);

  // Recognition Result
  const [result, setResult] = useState(null);

  // Recognition History
  const [history, setHistory] = useState([]);

  return (

    <section className="min-h-screen bg-slate-50 py-12">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-slate-900">
            Face Recognition
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            Register new faces and recognize people using
            AI-powered facial recognition.
          </p>

        </div>

        {/* Camera + Registration */}

        <div className="grid gap-8 lg:grid-cols-2">

          <CameraSection
            capturedImages={capturedImages}
            setCapturedImages={setCapturedImages}
            preview={preview}
            setPreview={setPreview}
          />

          <RegisterFaceCard
            personName={personName}
            setPersonName={setPersonName}
            capturedImages={capturedImages}
            setCapturedImages={setCapturedImages}
            preview={preview}
            setPreview={setPreview}
            loading={loading}
            setLoading={setLoading}
          />

        </div>

        {/* Recognition */}

        <div className="mt-8">

          <RecognitionResult
            capturedImages={capturedImages}
            loading={loading}
            setLoading={setLoading}
            result={result}
            setResult={setResult}
            setHistory={setHistory}
          />

        </div>

        {/* History */}

        <div className="mt-8">

          <RecognitionHistory
            history={history}
          />

        </div>

      </div>

    </section>

  );

}