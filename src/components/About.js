import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'
import smoke from '../smoke.jpeg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage":image.asset->url
        }`,
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <img src={smoke} alt="background snoke" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-white bg-opacity-50 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-40 lg:w-64 lg:h-80 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl mb-4">
              Hey there! I'm <span className="text-black">{author.name}</span>.
            </h1>
            <div className="prose lg:prose-xl text-black">
              <BlockContent
                blocks={author.bio}
                projectId="t6ywgvw0"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
