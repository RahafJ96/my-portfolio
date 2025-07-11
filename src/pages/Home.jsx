import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 overflow-hidden"
    >
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-pink-300 opacity-30 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-32 h-32 bg-indigo-300 opacity-20 rounded-full"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hi, I'm Rahaf 🎨
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-xl px-4 drop-shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I design bold graphics & build animated web apps that tell a story.
        Scroll down to explore my world of design & code.
      </motion.p>
    </div>
  );
}
