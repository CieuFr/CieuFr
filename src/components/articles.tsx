import { Link } from "@tanstack/react-router";

// Dummy articles data
const articlesData = [
  {
    id: 1,
    title: "Introduction à React Hooks",
    description:
      "Découvrez comment les React Hooks peuvent simplifier votre code.",
    date: "2023-06-15",
    readTime: "5 min",
    category: "React",
  },
  {
    id: 2,
    title: "Optimisation des performances avec React",
    description:
      "Techniques avancées pour améliorer les performances de vos applications React.",
    date: "2023-05-22",
    readTime: "8 min",
    category: "Performance",
  },
  {
    id: 3,
    title: "Déploiement d'applications React avec Vercel",
    description:
      "Un guide étape par étape pour déployer facilement vos applications React.",
    date: "2023-04-10",
    readTime: "6 min",
    category: "Déploiement",
  },
];

export default function Articles() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Articles
      </h1>
      <div className="grid gap-6">
        {articlesData.map((article) => (
          <Link
            key={article.id}
            to="/articles/$articleId"
            params={{ articleId: article.id.toString() }}
            className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span className="ml-auto px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">
                {article.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {article.description}
            </p>
            <div className="text-blue-600 dark:text-blue-400 inline-flex items-center">
              Lire l'article
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
