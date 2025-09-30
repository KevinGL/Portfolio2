import React, { useState } from 'react';
import { ExternalLink, Github, Moon, Sun } from "lucide-react"

const projects = [
  {
    title: "TaskFlow",
    description: "Une application conçue pour la répartition des tâches entre travailleurs, les admins créent les tâches et les répartissent, et les utilisateurs traitent et valident les tâches au fur et à mesure",
    image: "/img/TaskFlow.jpg",
    image_mobile: "/img/TaskFlow_mobile.jpg",
    link: "https://taskflow-om36.onrender.com",
    titleSrc: "Source code",
    titleLink: "Démo ici",
    github: "https://github.com/KevinGL/TaskFlow",
    type: "web"
  },
  {
    title: "BlogSphere",
    description: "Mini-blog, possibilité d'ajouter des articles, commenter, liker. Les admins peuvent modifier ou supprimer tous les articles et gérer les utilisateurs",
    image: "/img/BlogSphere.jpg",
    image_mobile: "/img/BlogSphere_mobile.jpg",
    link: "https://blogsphere-rvmy.onrender.com/",
    titleSrc: "Source code",
    titleLink: "Démo ici",
    github: "https://github.com/KevinGL/BlogSphere",
    type: "web"
  },
  {
    title: "Pollify",
    description: "Site de sondages avec statistiques et graphes, un utilisateur peut modifier ses propres sondages uniquement si celui-ci n'a pas encore démarré, les admins peuvent modifier tous les sondages, gérer les utilisateurs et en promouvoir admin",
    image: "/img/Pollify.jpg",
    image_mobile: "/img/Pollify_mobile.jpg",
    link: "https://pollify-yya8.onrender.com",
    titleSrc: "Source code",
    titleLink: "Démo ici",
    github: "https://github.com/KevinGL/Pollify",
    type: "web"
  },
  {
    title: "Gradebook",
    description: "Gestionnaire de résultats scolaires, trois type d'utilisateurs : Enseignant, élève et admin. Les enseignants peuvent ajouter ou modifier notes et appréciations par trimestre, les élèves peuvent visualiser notes et moyennes, les admins peuvent changer les classes des élèves et les matières des enseignants, ajouter / supprimer élève ou enseignant. Il n'y a pas d'inscription afin d'éviter qu'un élève s'inscrive en tant qu'enseignant et ait accès à des données sensibles",
    image: "/img/Gradebook.jpg",
    image_mobile: "/img/Gradebook_mobile.jpg",
    link: "https://gradebook-hlvs.onrender.com",
    titleSrc: "Source code",
    titleLink: "Démo ici",
    github: "https://github.com/KevinGL/Gradebook",
    type: "web"
  },
  {
    title: "ShopLite",
    description: "Mini-site e-commerce, affichage des produits par catégorie et recherche par mots-clés, possibilité d'ajouter des produits au panier, de passer des commandes avec adresse de livraison, de visualiser ses commandes passées. Les admins peuvent gérer manuellement produits, catégories et commandes",
    image: "/img/ShopLite.jpg",
    image_mobile: "/img/ShopLite_mobile.jpg",
    link: "https://shoplite-ipc3.onrender.com",
    titleSrc: "Source code",
    titleLink: "Démo ici",
    github: "https://github.com/KevinGL/ShopLite",
    type: "web"
  }
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modalMedia, setModalMedia] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 min-h-screen transition-colors duration-300">
        <header className="py-12 text-center relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 max-w-full mb-8">
            Développeur PHP / Symfony
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto mb-4">
            Je suis développeur spécialisé en backend et particulièrement en Symfony, une technologie qui m'a séduit dès mes premières expérimentations.
          </p>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto mb-4">
            J'aime le backend car c'est le cœur d'une application web, là où se joue toute la logique métier et les échanges de données. Symfony rend ce travail à la fois puissant et élégant : Des classes pour représenter les tables en BDD, des contrôleurs pour jongler entre BDD et vues, un moteur de templates pour construire les pages web, un CLI pour générer du code, une authentification simple et sécurisée ...
          </p>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto">
            Pour profiter au mieux de toutes ces fonctionnalités j'ai créé plusieurs projets Symfony, que je vous invite à découvrir avec le compte démo (login : Recruteur / mot de passe : recruteur)
          </p>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4 relative group cursor-pointer" onClick={() => setModalMedia({desktop: project.image, mobile: project.image_mobile})}>
                    {project.image ? (
                      <picture>
                        <source srcSet={project.image_mobile} media="(max-width: 640px)" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      </picture>
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

      {modalMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalMedia(null)}
        >
          <div className="max-w-7xl max-h-[90vh]">
            <picture>
              <source srcSet={modalMedia.mobile} media="(max-width: 640px)" />
              <img
                src={modalMedia.desktop}
                alt="preview"
                className="max-h-[90vh] rounded-lg shadow-lg"
              />
            </picture>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;