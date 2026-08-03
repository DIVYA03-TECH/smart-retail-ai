import { motion } from "framer-motion";

export default function WhyCard({
  icon,
  title,
  description,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:border-blue-200 hover:shadow-2xl"
    >
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${color} text-white`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}