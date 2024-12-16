import React, { useState } from 'react'

export default function GalleryComponent() {
    const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Person working in tea garden wearing traditional dress",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Group performing martial arts or dance routine",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Large gathering in uniform formation",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Colorful display of packaged foods and snacks",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "People working in outdoor setting",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Indoor classroom or meeting setting",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Cultural performance with dancers in costumes",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/members/Neena_Karnad.jpeg",
      alt: "Community meeting with circular seating arrangement",
      width: 800,
      height: 600
    }
  ]

  return (
    <div className="min-h-screen bg-[#fdf6e9]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Photo Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full max-h-screen p-4">
            <div className="relative aspect-[4/3] w-full">
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              />
            </div>
            <p className="text-white text-center mt-4">{photos[selectedImage].alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}





