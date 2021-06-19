import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function Post() {
  const [postData, setPost] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`,
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])
  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-2">
          Journals &amp; Blogs
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12"></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-pink-200 hover:border-pink-300"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute filter brightness-75"
                    />
                    <span className="block relative h-full flex justify-center items-center pr-4 pl-4">
                      <h3 className="text-white text-2xl font-blog cursive text-center">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}
