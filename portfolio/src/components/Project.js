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
        <h1 className="text-3xl flex justify-center cursive mb-2 lg:text-5xl md:text-4xl">
          {' '}
          My Projects
        </h1>
        <section className="grid lg:grid-cols-2 md:grid-cols-1 gap-16 mt-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative" key={index}>
                <span className="block h-54 md:h-96 relative rounded shadow leading-snug">
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                    className="w-full h-full rounded-lg transition ease-in duration-300 transform"
                  />
                </span>
                <section className="mt-4">
                  <h3 className="text-grey-800 text-2xl md:text-3xl font-bold mb-2">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-grey-500 text-s space-x-4 mb-2">
                    <span>
                      <strong className="font-bold">Date</strong>:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Description</strong>:{' '}
                      {project.description}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 font-bold hover:text-black"
                  >
                    View The Project ???
                  </a>
                </section>
              </article>
            ))}
        </section>
      </section>
    </main>
  )
}
