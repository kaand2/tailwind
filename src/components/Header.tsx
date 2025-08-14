

import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => (
  <div className="header-divider sticky top-0 z-30 bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 w-full">
    <header className="flex items-center justify-between px-4 md:px-8 py-8 bg-white/95 dark:bg-slate-900/95 shadow-lg w-full transition-colors duration-300 rounded-b-3xl backdrop-blur-md">
      <div className="flex items-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5 m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-200">Fatih Kaan Doğan</h1>
      </div>
      <div className="flex items-center gap-8">
        <nav className="flex flex-wrap gap-6 font-bold">
          <Link to="/" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">About</Link>
          <Link to="/projects" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">Projects</Link>
          <Link to="/skills" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">Skills</Link>
          <Link to="/contact" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-white transition drop-shadow-sm">Contact</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  </div>
);

export default Header;
