import { motion } from "framer-motion";

export default function WorkflowCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl"
    >
      {/* Step Number */}
      <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
        {number}
      </div>

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}