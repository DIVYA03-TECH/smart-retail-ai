import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeatureCard({
  icon,
  title,
  description,
  color,
  link,
}) {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl"
    >

      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${color} text-white`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">
        {description}
      </p>

      <button
        onClick={() => navigate(link)}
        className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
      >
        Learn More
        <ArrowRight size={18} />
      </button>

    </motion.div>
  );
}