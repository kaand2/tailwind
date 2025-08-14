import React from "react";


const Footer = () => (
  <footer id="contact" className="bg-gray-50 dark:bg-slate-900 text-sm py-4">
    <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between">
      <div className="text-left space-y-2">
        <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Contact</h2>
        <p className="text-gray-800 dark:text-gray-100 font-medium">+90 (535) 011-6825</p>
        <a href="mailto:kaandogan267@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-block">
          kaandogan267@gmail.com
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11778.868443559382!2d-83.99476353087526!3d42.43375598897514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88233457814253ed%3A0xafb6105a07160a8f!2sHell%2C%20MI%2048169%2C%20USA!5e0!3m2!1sen!2str!4v1754317152861!5m2!1sen!2str"
        width="375" height="250" style={{border:0}} allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <p className="text-gray-700 dark:text-gray-200 text-center mt-4">© 2025 Fatih Kaan Doğan.</p>
  </footer>
);

export default Footer;
