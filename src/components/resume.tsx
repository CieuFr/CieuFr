export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mon CV</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Expérience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Développeur Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">Entreprise XYZ • 2020 - Présent</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Développement d'applications web avec React, TypeScript et TailwindCSS.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Développeur Web</h3>
            <p className="text-gray-600 dark:text-gray-300">Entreprise ABC • 2018 - 2020</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2">Création de sites web responsifs et optimisés.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Formation</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Master en Informatique</h3>
          <p className="text-gray-600 dark:text-gray-300">Université XYZ • 2016 - 2018</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Compétences</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "TailwindCSS", "JavaScript", "HTML", "CSS", "Node.js", "Git"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

