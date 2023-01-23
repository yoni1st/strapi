import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  const [navbar, setNavbar] = useState(true);
  return (
    <div className="relative bg-white font-semibold font-heading border-b-2 border-gray-100 ">
        <div className="flex items-center justify-between p-4 ">
          <div className="">
            <Link to="/">
              {/* <img className="h-8 w-auto sm:h-10" src="./cbe.png" alt="logo" /> */}
              <span className="ml-2">Icam Atm</span>
            </Link>            
          </div>
          <ul className="hidden sm:flex px-3 space-x-5">
            <Link to="/">Home</Link>
            <Link to="/signin">sign in</Link>
            <Link to="/signup">sign up</Link>
          </ul>

          <div className="sm:hidden">
            <button type="button"
              className={`items-center justify-center rounded-md bg-white p-2 
              text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 
              focus:ring-inset focus:ring-indigo-500 ${navbar ? "block" : "hidden"}`}
              onClick={() => setNavbar(!navbar)}>
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <button type="button"
              className={`items-center justify-center rounded-md bg-white p-2 
              text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 
              focus:ring-inset focus:ring-indigo-500 ${navbar ? "hidden" : "block"}`}
              onClick={() => setNavbar(!navbar)}>

              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

          </div>
        </div>
        <ul className={`flex-col items-center sm:hidden space-y-2 ${navbar ? "hidden" : "flex"}`}>
            <Link to="/">Home</Link>
            <Link to="/signin">sign in</Link>
            <Link to="/signup">sign up</Link>
          </ul>
    </div>
  )
}
