import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="p-8 mt-0 flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
