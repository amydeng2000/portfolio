import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  console.log(window.innerWidth)
  return (
    <header className="bg-indigo-400">
      <div className="container mx-auto flex">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-pink-300"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-pink-300 text-4xl font-bold cursive tracking-widset"
          >
            Amy
          </NavLink>
        </nav>
        {window.innerWidth > 540 ? (
          <div className="flex px-3 py-3 my-6 flex justify-between w-full">
            <nav className="">
              <NavLink
                to="/post"
                activeClassName="text-white"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-pink-300"
              >
                Writings
              </NavLink>
              <NavLink
                to="/project"
                activeClassName="text-white"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-pink-300"
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-white"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-pink-300"
              >
                About
              </NavLink>
            </nav>
            <nav className="inline-flex items-center">
              <SocialIcon
                url="https://twitter.com/amydeng_"
                className="ml-6"
                target="_blank"
                fgColor="#fff"
                bgColor="#F9A8D4"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/amykexindeng/"
                className="ml-6"
                target="_blank"
                fgColor="#fff"
                bgColor="#F9A8D4"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://www.facebook.com/amy.deng.16"
                className="ml-6"
                target="_blank"
                fgColor="#fff"
                bgColor="#F9A8D4"
                style={{ height: 35, width: 35 }}
              />
            </nav>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  )
}
