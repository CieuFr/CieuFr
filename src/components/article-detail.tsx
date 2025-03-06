"use client"

import { useParams } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

// Dummy article data (more detailed)
const articlesData = [
  {
    id: 1,
    title: "Introduction à React Hooks",
    description: "Découvrez comment les React Hooks peuvent simplifier votre code.",
    fullDescription: `Les React Hooks sont une fonctionnalité introduite dans React 16.8 qui vous permet d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes.

    Ils offrent une manière plus directe d'extraire la logique d'état d'un composant afin qu'elle puisse être testée indépendamment et réutilisée.

    Les Hooks permettent également de simplifier la structure des composants et de rendre le code plus lisible.`,
    date: "2023-06-15",
    readTime: "5 min",
    category: "React",
  },
  {
    id: 2,
    title: "Optimisation des performances avec React",
    description: "Techniques avancées pour améliorer les performances de vos applications React.",
    fullDescription: `L'optimisation des performances est cruciale pour offrir une expérience utilisateur fluide et réactive.

    Plusieurs techniques peuvent être utilisées, notamment la memoization avec React.memo, l'utilisation de useCallback et useMemo pour éviter les recalculs inutiles, et le lazy loading des composants.

    Il est également important de surveiller les performances avec des outils comme le React Profiler et de minimiser les rendus inutiles.`,
    date: "2023-05-22",
    readTime: "8 min",
    category: "Performance",
  },
  {
    id: 3,
    title: "Déploiement d'applications React avec Vercel",
    description: "Un guide étape par étape pour déployer facilement vos applications React.",
    fullDescription: `Vercel est une plateforme de déploiement cloud qui offre une intégration transparente avec les applications React.

    Le déploiement avec Vercel est simple et rapide, et la plateforme offre des fonctionnalités comme les déploiements instantanés, les aperçus en direct, et la mise à l'échelle automatique.

    Ce guide vous explique comment configurer votre application React pour le déploiement avec Vercel et comment déployer votre site en quelques clics.`,
    date: "2023-04-10",
    readTime: "6 min",
    category: "Déploiement",
  },
]

export default function ArticleDetail() {
  const { articleId } = useParams({ from: "/articles/$articleId" })
  const article = articlesData.find((a) => a.id === Number.parseInt(articleId))

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Article non trouvé</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">L'article que vous recherchez n'existe pas.</p>
        <Link
          to="/articles"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Retour aux articles
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/articles" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux articles
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>

      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readTime}</span>
        <span className="ml-auto px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">{article.category}</span>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{article.fullDescription}</p>
      </div>
    </div>
  )
}

