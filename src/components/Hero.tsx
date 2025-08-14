import React from "react";

const Hero = () => (
  <section id="hero" className="relative text-center py-24 px-6 bg-white dark:bg-gray-900">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 dark:text-blue-200">
      Hi, I'm Fatih Kaan Doğan
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
      Expert in modern mobile technologies and responsive design. Develops user-friendly mobile applications with Swift, Objective-C, and modern iOS technologies. Experienced in SwiftUI, UIKit, and modern iOS technologies.
    </p>
    <a 
      href="https://www.youtube.com/shorts/SXHMnicI6Pg" 
      target="_blank"
      className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-all duration-200" >
      View My Work
    </a>
  </section>
);

export default Hero;
