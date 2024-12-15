import React from 'react'
import LogoComponent from '../logo/LogoComponent'
import { Link, NavLink } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <LogoComponent />
        <nav className="hidden md:block">
          <div className="bg-white rounded-full px-4 py-3 shadow-sm">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/about" className="text-gray-700 hover:text-gray-900">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-700 hover:text-gray-900">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contribute" className="text-gray-700 hover:text-gray-900">
                  Contribute
                </NavLink>
              </li>
              <li>
                <a 
                  href="/events" 
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  Events & News
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full px-4 py-3 shadow-sm flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center transition-colors">
            Donate
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}
