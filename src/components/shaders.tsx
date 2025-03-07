import { Link } from "@tanstack/react-router";

// Dummy shaders data
const shadersData = [
  {
    id: 1,
    title: "Fluid Simulation",
    description:
      "Une simulation de fluide basée sur les équations de Navier-Stokes.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Raymarching",
    description: "Un shader de raymarching pour créer des scènes 3D complexes.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Fractal Noise",
    description:
      "Génération de textures fractales avec différentes couches de bruit.",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Audio Visualizer",
    description: "Visualisation audio réactive en temps réel.",
    thumbnail: "/placeholder.svg",
  },
];

export default function Shaders() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Shaders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shadersData.map((shader) => (
          <Link
            key={shader.id}
            to="/shaders/$shaderId"
            params={{ shaderId: shader.id.toString() }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow block"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-600 rounded-md mb-4 overflow-hidden">
              <img
                src={shader.thumbnail || "/placeholder.svg"}
                alt={shader.title}
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {shader.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {shader.description}
            </p>
            <div className="text-blue-600 dark:text-blue-400 inline-flex items-center">
              Voir le shader
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
