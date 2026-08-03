import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef7ff] via-[#dfefff] to-[#d7ebff]">

      {/* Background Blur */}

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"></div>

      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-between gap-20 px-6 py-20 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex-1"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 shadow-md">

            <Sparkles
              size={16}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold text-blue-700">
              AI Powered Retail Intelligence
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">

            Smart Retail

            <br />

            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">

              AI Platform

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">

            Empower modern retail stores using Artificial
            Intelligence.

            Detect products, recognize customers,
            analyze customer sentiment and provide
            intelligent shopping assistance—all from
            one unified platform.

          </p>

          {/* AI Modules */}

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-5 py-3 shadow-md">
              📦 Product AI
            </span>

            <span className="rounded-full bg-white px-5 py-3 shadow-md">
              👤 Face Recognition
            </span>

            <span className="rounded-full bg-white px-5 py-3 shadow-md">
              😊 Sentiment Analysis
            </span>

            <span className="rounded-full bg-white px-5 py-3 shadow-md">
              🤖 AI Chatbot
            </span>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/product"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >

              Explore Platform

              <ArrowRight size={20} />

            </Link>

            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl">

              <PlayCircle size={20} />

              Live Demo

            </button>

          </div>

          {/* Statistics */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >

              <h2 className="text-4xl font-bold text-blue-600">
                95%
              </h2>

              <p className="mt-2 text-slate-500">
                AI Accuracy
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >

              <h2 className="text-4xl font-bold text-blue-600">
                4
              </h2>

              <p className="mt-2 text-slate-500">
                AI Modules
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >

              <h2 className="text-4xl font-bold text-blue-600">
                24/7
              </h2>

              <p className="mt-2 text-slate-500">
                AI Assistant
              </p>

            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-1 justify-center"
        >

          <HeroIllustration />

        </motion.div>

      </div>

    </section>
  );
}