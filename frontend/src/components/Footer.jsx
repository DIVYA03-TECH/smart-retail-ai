import {
  ShoppingBag,
  Globe,
  
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-600 p-3">
                <ShoppingBag className="text-white" size={24} />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Smart Retail AI
              </h2>

            </div>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered retail platform for product recognition,
              face detection, sentiment analysis, and intelligent
              customer assistance.
            </p>
          </div>

          {/* Platform */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Platform
            </h3>

            <ul className="space-y-3">
              <li>Dashboard</li>
              <li>Product Classifier</li>
              <li>Face Recognition</li>
              <li>Sentiment Analysis</li>
              <li>Retail Chatbot</li>
            </ul>
          </div>

          {/* Technologies */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Technologies
            </h3>

            <ul className="space-y-3">
              <li>React + Vite</li>
              <li>FastAPI</li>
              <li>TensorFlow</li>
              <li>OpenCV</li>
              <li>Machine Learning</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>smartretail@example.com</span>
              </div>

              <div className="flex gap-4 pt-3">

                <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600">
                  <Globe size={20} />
                </button>

                {/* <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600">
                  <Linkedin size={20} />
                </button> */}

              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Smart Retail AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}