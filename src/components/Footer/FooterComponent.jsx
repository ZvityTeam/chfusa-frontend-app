import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterComponent() {
  return (
    <footer className="bg-orange-500 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Support Us Column */}
        <div>
          <h2 className="text-2xl font-bold mb-2 pb-1 border-b border-white">Support Us</h2>
          <ul className="space-y-2 mt-4">
            <li><Link to="#" className="text-base font-bold no-underline">Become A Member</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Donate</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Volunteer</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Sponsor a Student</Link></li>
          </ul>
        </div>

        {/* CHF USA Column */}
        <div>
          <h2 className="text-2xl font-bold mb-2 pb-1 border-b border-white">CHF USA</h2>
          <ul className="space-y-2 mt-4">
            <li><Link to="#" className="text-base font-bold no-underline">Home</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">About CHF</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">CHF Projects</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">How You can Help</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">CHF Events & News</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Photo Gallery</Link></li>
          </ul>
        </div>

        {/* Contribute Column */}
        <div>
          <h2 className="text-2xl font-bold mb-2 pb-1 border-b border-white">Contribute</h2>
          <ul className="space-y-2 mt-4">
            <li><Link to="#" className="text-base font-bold no-underline">Education</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Community Development</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Cultural Preservation</Link></li>
            <li><Link to="#" className="text-base font-bold no-underline">Religious Activities</Link></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div>
          <h2 className="font-bold text-2xl mb-2 pb-1 border-b border-white">Contact Us</h2>
          <div className="space-y-2 mt-4">
            <p className="text-base font-bold"><Link to="#" className="no-underline">www.chfusa.org</Link><br />
              (215) 666-3200<br />
              <Link to="mailto:contactus@chfusa.org" className="no-underline">contactus@chfusa.org</Link><br />
              Chitrapur Heritage Foundation USA, Inc.<br />
              711 Daylily Drive,<br />Langhorne, PA 19047</p>

            <div className="mt-6">
              <p className="text-base font-bold">Mailing Address <br />
                Chitrapur Heritage Foundation<br />
                PO Box 1253,<br />
                Langhorne PA 19047</p>
            </div>

            <div className="mt-6">
              <p className="text-base mb-2">Subscribe to our newsletter</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-6 py-3 text-slate-600 text-base rounded-full bg-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full"
                  aria-label="Subscribe"
                >
                  <span className="rotate-90 inline-block text-gray-500">➤</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
