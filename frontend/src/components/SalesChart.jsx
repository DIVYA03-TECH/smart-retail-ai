import { motion } from "framer-motion";

const bars = [60, 90, 75, 120, 100, 150, 130];

export default function SalesChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h3 className="mb-8 text-2xl font-semibold text-slate-900">
        Weekly AI Insights
      </h3>

      <div className="flex h-72 items-end justify-between gap-4">

        {bars.map((bar, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: `${bar}px` }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-indigo-400"
          />
        ))}

      </div>

      <div className="mt-5 flex justify-between text-sm text-slate-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

    </div>
  );
}