import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`,
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>

  return (
    <main className="bg-blue-100 min-h-screen p-8 md:p-12">
      <article className="container shadow-lg mx-auto bg-white rounded-xl">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="rounded-xl p-5 md:p-12">
              {/* bg-white bg-opacity-75  */}
              <h1 className="cursive text-2xl text-center md:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-grey-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-xl md:text-2xl">
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full h-40 md:h-80 object-cover rounded-t-xl"
            // style={{ height: '400px' }}
          />
        </header>
        <div className="px-10 py-6 md:px-16 md:py-12 lg:px-48 lg:py-20 prose-sm md:prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="t6ywgvw0"
            dataset="production"
          />
        </div>
      </article>
    </main>
  )
}
