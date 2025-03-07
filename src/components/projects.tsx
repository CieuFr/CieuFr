import { Link } from "@tanstack/react-router";

// Dummy project data
const projectsData = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Un site web portfolio créé avec React et TailwindCSS.",
    image: "/placeholder.svg",
    tags: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Application de Gestion de Tâches",
    description: "Une application web pour gérer vos tâches quotidiennes.",
    image: "/placeholder.svg",
    tags: ["React", "Redux", "Firebase"],
  },
  {
    id: 3,
    title: "Visualisation de Données",
    description: "Un tableau de bord de visualisation de données interactif.",
    image: "/placeholder.svg",
    tags: ["D3.js", "SVG", "React"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Projets
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            to="/projects/$projectId"
            params={{ projectId: project.id.toString() }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow block"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
              width={400}
              height={200}
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-blue-600 dark:text-blue-400 inline-flex items-center">
              Voir le projet
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
