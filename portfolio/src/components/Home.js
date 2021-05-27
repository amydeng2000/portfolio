import React from 'react'
import image from '../bgimg.png'

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="background img"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative justify-center flex-row min-h-screen pt-12 lg:pt-64 px-8 ">
        <h1 className="text-center text-6xl text-white font-bold cursive leading-none lg: leadning-snug home-name">
          Hey there!
        </h1>
        <h1 className="text-center text-6xl text-white font-bold cursive leading-none lg: leadning-snug home-name">
          I'm Amy
        </h1>
      </section>
    </main>
  )
}
