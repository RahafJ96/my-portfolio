import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-b from-indigo-100 to-[#cbdfff] py-20 px-6"
    >
      <motion.h2
        className="text-5xl font-extrabold text-center text-indigo-700 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💻 My Web Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, screenshots, link }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % screenshots.length);
  const prev = () =>
    setCurrent((current - 1 + screenshots.length) % screenshots.length);

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-xl border border-indigo-200"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative mb-4 rounded-xl overflow-hidden">
        <img
          src={screenshots[current]}
          alt={title}
          className="rounded-xl object-cover h-60 w-full transition duration-300"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-gray-700 rounded-full p-3 shadow-md hover:bg-white hover:scale-110 transition-transform"
        >
          <MdArrowBackIosNew size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-gray-700 rounded-full p-3 shadow-md hover:bg-white hover:scale-110 transition-transform"
        >
          <MdArrowForwardIos size={20} />
        </button>
      </div>

      <h3 className="text-xl font-bold text-indigo-700">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
      <a
        href={link}
        className="inline-block mt-3 text-indigo-500 hover:underline font-medium"
      >
        View Project →
      </a>
    </motion.div>
  );
}
