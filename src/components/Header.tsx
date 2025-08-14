import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-divider sticky top-0 z-30 bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 w-full">
      <header className="flex items-center justify-between px-4 md:px-8 py-8 bg-white/95 dark:bg-slate-900/95 shadow-lg w-full transition-colors duration-300 rounded-b-3xl backdrop-blur-md">
        <div className="flex items-center gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5 m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-200">Fatih Kaan Doğan</h1>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex flex-wrap gap-6 font-bold">
            <Link to="/" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">About</Link>
            <Link to="/projects" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">Projects</Link>
            <Link to="/skills" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">Skills</Link>
            <Link to="/contact" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">Contact</Link>
          </nav>

          <ThemeToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 px-2 rounded-md text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800">About</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="py-2 px-2 rounded-md text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800">Projects</Link>
            <Link to="/skills" onClick={() => setOpen(false)} className="py-2 px-2 rounded-md text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800">Skills</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 px-2 rounded-md text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800">Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
