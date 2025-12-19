import React, { useState } from 'react';
import { ExternalLink, Github, Moon, Sun, Menu, X } from "lucide-react";
import { Projects } from './Projets.jsx';
import { NextJS } from './Next.js';
import { OpenGL } from './OpenGL.jsx';
import { Skills } from './Skills.jsx';
import { Contacts } from './Contact.jsx';

const Portfolio = () =>
{
  const [page, setPage] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ["Home", "Projects", "Contacts"];
  
  return(
    <div>
  
        {/*<header className="sticky top-0 z-50 bg-white/40 dark:bg-gray-900/50 backdrop-blur-md shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Portfolio de Kévin Gay
            </h1>

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
        </header>*/}

        {
          page === "Home" &&
          
          <>
            <div className="py-6 sm:py-12 text-center">
              <h1 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                Développeur PHP / Next.js / 3D
              </h1>
            </div>

            <div className="py-6 sm:py-12 text-center">
              <h1 className="inline-block text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 bg-gradient-to-r from-cyan-200 to-violet-700 bg-clip-text text-transparent mx-auto">
                Applications web métiers et SaaS, messageries instantanées, e-commerce, social, blogs, sondages, simulations 3D
              </h1>
            </div>

            <img src="img/20230829_132432.jpg" alt="" className="w-4/5 sm:w-1/4 mx-auto rounded-full mb-20 shadow-[0_0_40px_rgba(255,0,255,0.75)]" />

            {/*<div className="flex justify-around w-full sm:w-1/2 mx-auto">
              <button className="text-cyan-200 text-lg sm:text-2xl font-bold bg-black px-4 py-2 rounded-xl border border-violet-700 border-4 hover:scale-110 transition duration-200" onClick={() => setPage("Projects")}>Voir les projets</button>
              <button className="text-cyan-200 text-lg sm:text-2xl font-bold bg-black px-4 py-2 rounded-xl border border-violet-700 border-4 hover:scale-110 transition duration-200">Me contacter</button>
            </div>*/}
          </>
        }

        <Projects />
        <Skills />
        <Contacts />

    </div>
  )
};

export default Portfolio;