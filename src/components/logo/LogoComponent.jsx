import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'
export default function LogoComponent() {
    return (
        <div className="flex flex-col items-center logo">
          <Link to="/" className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <div className="text-indigo-600 font-bold text-2xl">CHF</div>
          </Link>
          <div className="text-xs text-gray-600 mt-1">(JUNE 15, 2021)</div>
        </div>
      )
}
