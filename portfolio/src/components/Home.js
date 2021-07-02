import React, { useEffect, useState } from 'react'
import image from '../bgimg.png'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client.js'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function Home() {
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
    // <div className="w-full h-full">
    //   <img
    //     src={image}
    //     alt="background img"
    //     className="absolute object-cover w-full h-full"
    //   />
    //   <div className="relative justify-center flex-row min-h-full pt-12 lg:pt-64">
    //     <h1 className="text-center text-2xl text-white font-bold cursive leading-none lg:leadning-snug home-name">
    //       Hey there!
    //     </h1>
    //     <h1 className="text-center text-2xl text-white font-bold cursive leading-none lg:leadning-snug home-name">
    //       I'm Amy.
    //     </h1>
    //   </div>
    // </div>

    <div className="w-full h-full">
      {/* <img src={smoke} alt="background snoke" className="absolute w-full" /> */}
      <div className="p-10 container mx-auto relative">
        <section className="bg-white bg-opacity-50 rounded-lg shadow-2xl justify-center md:flex p-10 md:p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-45 h-60 mx-auto md:mx-8 md:w-72 md:h-96"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-3xl text-center md:text-4xl lg:text-6xl my-4">
              Hey! I'm <span className="text-black">{author.name}</span>.
            </h1>
            <div className="prose lg:prose-xl md:ml-8 text-black">
              <BlockContent
                blocks={author.bio}
                projectId="t6ywgvw0"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
