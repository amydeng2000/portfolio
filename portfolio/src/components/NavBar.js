import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className="bg-indigo-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-pink-300"
            className="inline-flex items-center py-6 px-3 mr-4 text-pink-100 hover:text-pink-300 text-4xl font-bold cursive tracking-widset"
          >
            Amy
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-indigo-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-pink-100 hover:text-white"
          >
            Writings
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-indigo-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-pink-100 hover:text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-indigo-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-pink-100 hover:text-white"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex px-3 py-3 my-6">
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
        </div>
      </div>
    </header>
  )
}
