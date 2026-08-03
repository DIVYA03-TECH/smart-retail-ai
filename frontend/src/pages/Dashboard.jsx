import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
// import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { clearDashboard } from "../services/dashboardApi";

export default function Dashboard() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <AnimatedBackground />
        <Hero />
      </div>

      <Stats />

      <Features />

      <Workflow />

      {/* <WhyChoose /> */}
      <Footer />
    </>
  );
}
