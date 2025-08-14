import React from "react";
import { Link } from "react-router-dom";

const Projects = () => (
  <section id="projects" className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-20 bg-white dark:bg-gray-900 scroll-mt-32">
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-indigo-600 mb-4">404</h2>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">These aren't the projects you're looking for.</p>
      <div className="flex justify-center">
        <Link to="/contact#contact-form"
          className="inline-block max-w-xs text-sm sm:text-base text-center rounded-2xl px-5 sm:px-6 py-3 bg-indigo-400 dark:bg-indigo-700 text-white hover:bg-indigo-600 dark:hover:bg-indigo-900 transition"
        >
          <span className="block sm:inline">Neither are they the droids you are looking for</span>
          <span className="hidden sm:inline"> — but you can still tell me about it</span>
          <span className="block sm:hidden mt-2 text-sm opacity-90">Tell me about your project</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
