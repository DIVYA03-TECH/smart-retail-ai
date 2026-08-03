import { motion } from "framer-motion";

export default function StatCard({
  value,
  label,
  color = "text-blue-600",
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
    >
      <h2 className={`text-4xl font-bold ${color}`}>
        {value}
      </h2>

      <p className="mt-3 text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}