import React, { useState } from "react";
import { motion } from "framer-motion";
import designs from "../data/designs";

const categories = [
  { label: "All", icon: "🎨" },
  { label: "Logos", icon: "🔖" },
  { label: "Characters", icon: "👩‍🎨" },
  { label: "Vectors", icon: "🧩" },
  { label: "Illustrations", icon: "🖌️" },
  { label: "Others", icon: "✨" },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Shuffle designs to randomize display
  const shuffledDesigns = shuffleArray(designs);

  const filteredDesigns =
    selectedCategory === "All"
      ? shuffledDesigns.slice(0, 10)
      : shuffledDesigns.filter((item) => item.category === selectedCategory);

  return (
    <div
      id="design"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#D5A3FF] via-[#DFECFF] to-[#FDCBFF] "
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-purple-950 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎨 My Design Gallery
      </motion.h2>

      <motion.div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories?.map((cat) => (
          <motion.button
            key={cat.label}
            onClick={() => setSelectedCategory(cat.label)}
            whileTap={{ scale: 0.95 }}
            animate={
              selectedCategory === cat.label
                ? { boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)" }
                : {}
            }
            className={`px-5 py-2 rounded-full text-sm md:text-base group
    ${
      selectedCategory === cat.label
        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold"
        : "bg-white/20 text-white/90 border border-white/30 hover:bg-white/30 backdrop-blur-sm"
    }`}
          >
            <span className="mr-1 transition duration-200 group-hover:scale-110">
              {cat.icon}
            </span>
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto space-y-5">
        {filteredDesigns?.map((item, i) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <motion.div
              key={item.title}
              className="relative overflow-hidden rounded-2xl group cursor-pointer "
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold text-lg">{item.title}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}
