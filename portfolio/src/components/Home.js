import React from 'react'
import image from '../bgimg.png'

export default function Home() {
  return (
    <div className="w-full h-full">
      <img
        src={image}
        alt="background img"
        className="absolute object-cover w-full h-full"
      />
      <div className="relative justify-center flex-row min-h-full pt-12 lg:pt-64">
        <h1 className="text-center text-2xl text-white font-bold cursive leading-none lg:leadning-snug home-name">
          Hey there!
        </h1>
        <h1 className="text-center text-2xl text-white font-bold cursive leading-none lg:leadning-snug home-name">
          I'm Amy.
        </h1>
      </div>
    </div>
  )
}
