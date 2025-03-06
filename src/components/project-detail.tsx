"use client"

import { useParams } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

// Dummy project data (more detailed)
const projectsData = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Un site web portfolio créé avec React et TailwindCSS.",
    fullDescription: `Ce portfolio a été conçu pour présenter mes projets et compétences de manière élégante et interactive. 
    
    Développé avec React et TailwindCSS, il offre une expérience utilisateur fluide et responsive sur tous les appareils. 
    
    Le site utilise une architecture moderne basée sur des composants réutilisables et est optimisé pour les performances.`,
    image: "/placeholder.svg",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    id: 2,
    title: "Application de Gestion de Tâches",
    description: "Une application web pour gérer vos tâches quotidiennes.",
    fullDescription: `Cette application de gestion de tâches permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes.
    
    Elle intègre des fonctionnalités avancées comme les rappels, les tâches récurrentes, et les catégories personnalisables.
    
    Développée avec React et Redux pour la gestion d'état, elle utilise Firebase pour la persistance des données et l'authentification.`,
    image: "/placeholder.svg",
    technologies: ["React", "Redux", "Firebase", "Material-UI"],
    demoUrl: "https://example.com/todo",
    githubUrl: "https://github.com/example/todo-app",
  },
  {
    id: 3,
    title: "Visualisation de Données",
    description: "Un tableau de bord de visualisation de données interactif.",
    fullDescription: `Ce tableau de bord interactif transforme des données complexes en visualisations claires et exploitables.
    
    Il intègre diverses formes de graphiques (lignes, barres, secteurs) et permet aux utilisateurs de filtrer et explorer les données selon différents paramètres.
    
    Construit avec D3.js pour les visualisations et React pour l'interface utilisateur, il offre des performances optimales même avec de grands ensembles de données.`,
    image: "/placeholder.svg",
    technologies: ["D3.js", "SVG", "React", "TypeScript", "REST API"],
    demoUrl: "https://example.com/dataviz",
    githubUrl: "https://github.com/example/data-viz",
  },
]

export default function ProjectDetail() {
  const { projectId } = useParams({ from: "/projects/$projectId" })
  const project = projectsData.find((p) => p.id === Number.parseInt(projectId))

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projet non trouvé</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Le projet que vous recherchez n'existe pas.</p>
        <Link
          to="/projects"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux projets
        </Link>
      </div>

      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
        width={800}
        height={400}
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.fullDescription}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Voir la démo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors inline-flex items-center"
        >
          Code source
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

