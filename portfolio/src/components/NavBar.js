import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { slide as Menu } from 'react-burger-menu'

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  // return (
  //   <>
  //     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
  //       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
  //         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
  //           <a
  //             className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
  //             href="#pablo"
  //           >
  //             red Tailwind Starter Kit
  //           </a>
  //           <button
  //             className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
  //             type="button"
  //             onClick={() => setNavbarOpen(!navbarOpen)}
  //           >
  //             <i class="fa fa-bars" aria-hidden="true"></i>
  //           </button>
  //         </div>
  //         <div
  //           className={
  //             'lg:flex flex-grow items-center' +
  //             (navbarOpen ? ' flex' : ' hidden')
  //           }
  //           id="example-navbar-danger"
  //         >
  //           <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
  //             <li className="nav-item">
  //               <a
  //                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Share</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Tweet</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Pin</span>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // )

  return (
    //bg-indigo-400
    <header className="shadow">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-4 px-4 mr-4 text-black hover:text-gray-500 text-4xl font-bold cursive tracking-widset"
          >
            Amy
          </NavLink>
        </nav>
        {window.innerWidth > 540 ? (
          <div className="flex px-3 py-3 justify-between w-full">
            <nav className="">
              <NavLink
                to="/post"
                className="inline-flex items-center py-3 px-3 my-4 rounded text-black font-bold hover:text-gray-500"
              >
                Writings
              </NavLink>
              <NavLink
                to="/project"
                className="inline-flex items-center py-3 px-3 my-4 rounded text-black font-bold hover:text-gray-500"
              >
                Projects
              </NavLink>
              {/* <NavLink
                to="/about"
                activeClassName="text-white"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-pink-300"
              >
                About
              </NavLink> */}
            </nav>
            <nav className="inline-flex items-center">
              <SocialIcon
                url="https://twitter.com/amydeng_"
                className="ml-6"
                target="_blank"
                fgColor="#fff"
                bgColor="#6b7280"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/amykexindeng/"
                className="ml-6"
                target="_blank"
                fgColor="#fff"
                bgColor="#6b7280"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://www.facebook.com/amy.deng.16"
                className="ml-6"
                target="_blank"
                fgColor="#fff"
                bgColor="#6b7280"
                style={{ height: 35, width: 35 }}
              />
            </nav>
          </div>
        ) : (
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        )}
      </div>
      {navbarOpen ? (
        <div
          className="lg:flex flex-grow items-center flex"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <NavLink
                to="/post"
                activeClassName="text-gray-500"
                onClick={() => setNavbarOpen(false)}
                className="px-6 py-2 flex items-center text-xs font-bold leading-snug text-black hover:text-gray-500"
              >
                Writings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                activeClassName="text-gray-500"
                onClick={() => setNavbarOpen(false)}
                className="px-6 py-2 flex items-center text-xs font-bold leading-snug text-black hover:text-gray-500"
              >
                Projects
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="text-white"
                onClick={() => setNavbarOpen(false)}
                className="px-6 py-2 flex items-center text-xs font-bold leading-snug text-white hover:text-gray-500"
              >
                About
              </NavLink>
            </li> */}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  )
}
