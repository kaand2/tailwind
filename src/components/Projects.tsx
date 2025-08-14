import React from "react";
import { Link } from "react-router-dom";

const Projects = () => (
  <section id="projects" className="flex flex-col items-center justify-center text-center px-6 py-20 bg-white dark:bg-gray-900 scroll-mt-32">
    <h2 className="text-8xl font-extrabold text-indigo-600 mb-4">404</h2>
    <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Projects Not Found</p>
    <Link to="/contact#contact-form"
      className="rounded-2xl mt-2 px-6 py-2 bg-indigo-400 dark:bg-indigo-700 text-white hover:bg-indigo-600 dark:hover:bg-indigo-900 transition">
      Contact
    </Link>
  </section>
);

export default Projects;
