import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-300 opacity-20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-purple-300 opacity-20 blur-3xl"
      />

    </div>
  );
}