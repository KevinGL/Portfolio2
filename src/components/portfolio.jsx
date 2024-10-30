import React, { useState } from 'react';
import { ExternalLink, Github, Moon, Sun } from "lucide-react"

const projects = [
  {
    title: "Visiomatch",
    description: "Application de rencontre par speed dating vidéo en cours de développement, codé en Typescript, application Next.js",
    image: "/img/visiomatch.jpg",
    link: "https://visiomatch.vercel.app/",
    titleSrc: "Source code",
    titleLink: "Version bêta",
    github: "https://github.com/KevinGL/Visiomatch",
    type: "web"
  },
  {
    title: "Ferro 1383",
    description: "Simulateur ferroviaire reproduisant une voie ferrée abandonnée, codé en C/C++ et utilisant OpenGL",
    video: "/videos/Ferro_1383.mp4",
    link: "",
    titleSrc: "Mon moteur physique ferroviaire",
    titleLink: "View Project",
    github: "https://github.com/KevinGL/Tchoutchou",
    type: "3d"
  },
  {
    title: "Transactor",
    description: "Application de gestion des dépenses et revenus en temps réel, codé en Typescript avec Next.js et BDD Firebase",
    image: "/img/Transactor.jpg",
    link: "",
    titleSrc: "Source code",
    titleLink: "View Project",
    github: "https://github.com/KevinGL/Transactor",
    type: "web"
  },
  {
    title: "Job and Go",
    description: "Gestionnaire de recherche d'emploi avec date de relance, codé en PHP avec Symfony et BDD MySQL",
    image: "/img/Job_and_go.jpg",
    link: "",
    titleSrc: "Source code",
    titleLink: "View Project",
    github: "https://github.com/KevinGL/Job-and-go",
    type: "web"
  },
  {
    title: "Tower Defense",
    description: "Projet réalisé lors de ma dernière mission Freelance, codé en Javascript",
    image: "/img/Tower_defense.jpg",
    link: "https://tower-defense-pink.vercel.app/",
    titleSrc: "Source code",
    titleLink: "Accès au jeu",
    github: "https://github.com/KevinGL/Tower_defense",
    type: "web"
  },
  {
    title: "Bones",
    description: "Projet réalisé lors de ma dernière mission Freelance, reprise d'un jeu Opensource",
    image: "/img/Bones.jpg",
    link: "https://alpha.playbones.xyz/",
    titleSrc: "Source code",
    titleLink: "Accès au jeu",
    github: "",
    type: "web"
  }
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 min-h-screen transition-colors duration-300">
        <header className="py-12 text-center relative">
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300">
            Développeur C/C++/3D/Web motivé et disponible
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            J'ai découvert la passion du code en 2011 et je ne m'en suis jamais lassé. À la base codeur en C j'ai rapidement réalisé des projets 3D OpenGL, évolué vers le C++ et effectué en 2022 une formation Epitech me permettant de réaliser des projets web
          </p>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4 relative group">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    ) : (
                      <video
                        src={project.video}
                        className="w-full h-48 object-cover rounded-md"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {
                      project.link != "" &&
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.titleLink}
                      </a>
                    }
                    {
                      project.github != "" &&
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {project.titleSrc}
                      </a>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;