import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react';
export default function FooterComponent() {
  return (
    <footer className="relative bg-secondary px-8 py-12 text-white"  >
    {/* Background graphic overlay */}
     <div className="absolute top-14 bottom-0 left-0 right-0 -z-9 overflow-hidden">
      <img src="/assets/images/footerbg.svg" alt="Mountain" className='h-[700px] w-full' style={{objectFit:"contain"}} />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {/* First Column: Support Us + Useful Links */}
        <div className="space-y-12">
          {/* Support Us Section */}
          <div className="space-y-4">
            <h3 className="border-b border-white pb-2 text-3xl font-light">Support Us</h3>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:underline">Become A Member</Link></li>
              <li><Link to="#" className="hover:underline">Donate</Link></li>
              <li><Link to="#" className="hover:underline">Volunteer</Link></li>
              <li><Link to="#" className="hover:underline">Sponsor a Student</Link></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="border-b border-white pb-2 text-3xl font-light">Useful Links</h3>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:underline">Chitrapur Math Website</Link></li>
              <li><Link to="#" className="hover:underline">Chitrapur Ebook</Link></li>
              <li><Link to="#" className="hover:underline">Parijnan Foundation</Link></li>
              <li><Link to="#" className="hover:underline">Samvit Sudha</Link></li>
              <li><Link to="#" className="hover:underline">Parimochan Project</Link></li>
            </ul>
          </div>
        </div>

        {/* CHF USA Column */}
        <div className="space-y-4">
          <h3 className="border-b border-white pb-2 text-3xl font-light">CHF USA</h3>
          <ul className="space-y-1">
            <li><Link to="#" className="hover:underline">Home</Link></li>
            <li><Link to="#" className="hover:underline">About CHF</Link></li>
            <li><Link to="#" className="hover:underline">CHF Projects</Link></li>
            <li><Link to="#" className="hover:underline">How You can Help</Link></li>
            <li><Link to="#" className="hover:underline">CHF Events & News</Link></li>
            <li><Link to="#" className="hover:underline">Photo Gallery</Link></li>
          </ul>
        </div>

        {/* Contribute Column */}
        <div className="space-y-4">
          <h3 className="border-b border-white pb-2 text-3xl font-light">Contribute</h3>
          <ul className="space-y-1">
            <li><Link to="#" className="hover:underline">Education</Link></li>
            <li><Link to="#" className="hover:underline">Community Development</Link></li>
            <li><Link to="#" className="hover:underline">Cultural Preservation</Link></li>
            <li><Link to="#" className="hover:underline">Religious Activities</Link></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="space-y-4">
          <h3 className="border-b border-white pb-2 text-3xl font-light">Contact Us</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="flex-shrink-0" />
              <Link to="http://www.chfusa.org" className="hover:underline">www.chfusa.org</Link>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <Link to="tel:+12156663200" className="hover:underline">(215) 666-3200</Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="flex-shrink-0" />
              <Link to="mailto:contactus@chfusa.org" className="hover:underline">contactus@chfusa.org</Link>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span className="text-sm">
                Chitrapur Heritage Foundation USA, Inc. 711 Daylily Drive, Langhorne, PA 19047
              </span>
            </li>
            <li className="mt-6 pt-6">
              <p className="font-normal">Mailing Address</p>
              <p className=" text-sm">
                Chitrapur Heritage Foundation<br />
                PO Box 1253,<br />
                Langhorne PA 19047
              </p>
            </li>
            <li className="pt-6">
              <p className="mb-2">Subscribe to our newsletter</p>
              <form className="flex items-center gap-2 bg-white rounded-full">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 rounded-full px-4 py-2 text-sm font-thin text-gray-800 placeholder:text-gray-400 hover:border-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white h-10 w-10 p-3 flex text-secondary items-center justify-center hover:bg-white/20"
                >
                  →
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}
