import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'

export default function Project() {
  const [projectData, setProjectData] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
            title,
            date,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`,
      )
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-2">
          {' '}
          My Projects
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Here're some things that I've been working on!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                className="relative rounded-lg shadow-xl bg-white"
                key={index}
              >
                <img
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.alt}
                  className="rounded-lg"
                />
                <section className="ml-8 mr-8">
                  <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-pink-300">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-grey-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Date</strong>:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{' '}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-grey-700 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 font-bold hover:underline hover:text-pink-400"
                    >
                      View The Project{' '}
                    </a>
                    <span role="img" area-label="right-pointer">
                      👉
                    </span>
                  </div>
                </section>
              </article>
            ))}
        </section>
      </section>
    </main>
  )
}
