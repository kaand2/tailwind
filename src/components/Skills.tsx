import React from "react";

const Skills = () => (
  <section id="skills" className="w-full py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-lg mt-12 scroll-mt-32">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">Skills</h2>
      <h3 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-200">Mobile Technologies &amp; Tools</h3>
      <div className="bg-white dark:bg-gray-800 border-4 border-indigo-300 dark:border-blue-800 rounded-3xl shadow p-10">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-gray-900 dark:text-gray-100 text-lg font-medium">
          <li>Swift &amp; Objective-C</li>
          <li>iOS SDK</li>
          <li>SwiftUI</li>
          <li>UIKit</li>
          <li>MVVM Architecture</li>
          <li>Responsive Design</li>
          <li>App Store</li>
          <li>Core Data</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
