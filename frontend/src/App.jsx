import { Routes, Route } from "react-router-dom";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import ProductClassifier from "./pages/ProductClassifier";
import FaceRecognition from "./pages/FaceRecognition";
import Sentiment from "./pages/Sentiment";
import Chatbot from "./pages/Chatbot";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<ProductClassifier />} />
        <Route path="/face" element={<FaceRecognition />} />
        <Route path="/sentiment" element={<Sentiment />} />
        <Route path="/dashboard" element={<AnalyticsDashboard />}/>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/face-recognition"element={<FaceRecognition />}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}