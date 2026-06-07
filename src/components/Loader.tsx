"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Brand Terminal Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M4 17l6-6-6-6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.line
              x1="12"
              y1="19"
              x2="20"
              y2="19"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Developer Name */}
        <div className="text-center">
          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-sans font-extrabold text-2xl tracking-tight text-white mb-2"
          >
            Ayush Kumar Jha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest"
          >
            Software Engineer
          </motion.p>
        </div>

        {/* Premium Progress Bar */}
        <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden relative mt-2">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
