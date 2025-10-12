import React, { useState } from 'react';
import { ExternalLink, Github, Moon, Sun } from "lucide-react"

const projects = [
   {
    title: "StratoGL",
    description: "Simulateur effets météo : Nuages, pluie, orages, arcs-en-ciels",
    video: "/videos/StratoGL.mp4",
    link: "",
    titleSrc: "Source code",
    github: "https://github.com/KevinGL/StratoGL"
  },
  {
    title: "Ferro 1383",
    description: "Simulateur ferroviaire reproduisant une voie ferrée abandonnée, codé en C/C++ et utilisant OpenGL",
    video: "/videos/Ferro_1383.mp4",
    link: "",
    titleSrc: "Mon moteur physique ferroviaire",
    github: "https://github.com/KevinGL/Tchoutchou",
  }
];

export const OpenGL = () =>
{
    const [modalMedia, setModalMedia] = useState(null);
    
    return (
        
        <>
            <header className="py-12 text-center relative">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 max-w-full mb-8">
                    Projets OpenGL
                </h1>
            </header>
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="mb-4 relative group cursor-pointer" onClick={() => setModalMedia({desktop: project.video, mobile: project.image_mobile})}>
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

            {modalMedia && (
            <div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                onClick={() => setModalMedia(null)}
            >
                <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden shadow-lg">
                    <video
                        src={modalMedia.desktop}
                        className="w-full h-auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
            )}

        </>
    );
}