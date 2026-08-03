import { motion } from "framer-motion";

export default function MetricCard({
  title,
  value,
  change,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl bg-white p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-green-600 font-medium">
            {change}
          </p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${color} text-white`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}