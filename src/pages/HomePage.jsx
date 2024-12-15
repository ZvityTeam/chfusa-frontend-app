import React from 'react'
export default function HomePage() {
    return (
        <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/1920x1080?diwali,festival')"
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="pt-32 pb-20 min-h-screen flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Celebrating Diwali
                <br />
                With the Community
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors">
                  Join Us
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center transition-colors">
                  Donate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                className="w-2 h-2 rounded-full bg-white opacity-50 hover:opacity-100 focus:opacity-100"
                aria-label={`Go to slide ${dot}`}
              />
            ))}
          </div>
        </div>
      </div>
      )
}
