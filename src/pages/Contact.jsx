import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiFreepik } from "react-icons/si";

const glowStyle =
  "hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-105 transition";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#1f1f2f] to-[#2c2c3f] text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Connect 🤍
      </motion.h2>

      {/* First Row: Email & LinkedIn */}
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-6 mb-8">
        <motion.a
          href="mailto:rahafjazz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            whileHover={{
              scale: 1.2,
              filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
            }}
            className="p-4 bg-pink-400/20 text-white rounded-full backdrop-blur-md shadow-md"
          >
            <FaEnvelope size={28} />
          </motion.span>
          rahafjazz@gmail.com
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/rahaf-al-jazzazi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            whileHover={{
              scale: 1.2,
              filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
            }}
            className="p-4 bg-blue-400/20 text-white rounded-full backdrop-blur-md shadow-md"
          >
            <FaLinkedin size={28} />
          </motion.span>
          LinkedIn
        </motion.a>
      </div>

      {/* Second Row: GitHub & Freepik */}
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-6">
        <motion.a
          href="https://github.com/RahafJ96"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            whileHover={{
              scale: 1.2,
              filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
            }}
            className="p-4 bg-gray-400/20 text-white rounded-full backdrop-blur-md shadow-md"
          >
            <FaGithub size={28} />
          </motion.span>
          GitHub
        </motion.a>

        <motion.a
          href="https://www.freepik.com/author/rahafja"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            whileHover={{
              scale: 1.2,
              filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
            }}
            className="p-4 bg-yellow-300/20 text-white rounded-full backdrop-blur-md shadow-md"
          >
            <SiFreepik size={28} />
          </motion.span>
          Freepik
        </motion.a>
      </div>
    </div>
  );
}
