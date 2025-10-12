import React, { useState } from 'react';
import { ExternalLink, Github, Moon, Sun, Menu, X } from "lucide-react";
import { Symfony } from './symfony';
import { NextJS } from './Next.js';
import { OpenGL } from './OpenGL.jsx';

const Portfolio = () =>
{
  const [page, setPage] = useState("Symfony");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ["Symfony", "Next.js", "OpenGL"];
  
  return(
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 min-h-screen transition-colors duration-300">
    
        <header className="sticky top-0 z-50 bg-white/40 dark:bg-gray-900/50 backdrop-blur-md shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            
            {/* Left: Logo or title */}
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Portfolio de Kévin Gay
            </h1>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-6">
              {pages.map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    page === p
                      ? "text-purple-600 dark:text-purple-400 underline underline-offset-4"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-500"
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>

            {/* Right side: Theme toggle + mobile menu button */}
            <div className="flex items-center gap-3">

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-gray-800 dark:text-gray-100" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-800 dark:text-gray-100" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-3 space-y-2 border-t border-gray-200 dark:border-gray-700">
              {pages.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPage(p);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-3 rounded-lg font-medium ${
                    page === p
                      ? "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </header>
        
        {page === "Symfony" && <Symfony />}
        {page === "Next.js" && <NextJS />}
        {page === "OpenGL" && <OpenGL />}
      </div>
    </div>
  )
};

export default Portfolio;