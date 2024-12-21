import { useState } from 'react'
import { ArrowUpRight, Heart } from 'lucide-react'



const projects = [
  {
    id: '1',
    title: 'Vantiga',
    tag: 'Education',
    status: 'Ongoing',
    images: ['https://images.unsplash.com/photo-1461603950871-cd64bcf7acf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRpb24lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D']
  },
  {
    id: '2',
    title: 'Samvit Sudha',
    tag: 'Women Empowerment',
    status: 'Ongoing',
    images: [
      'https://media.istockphoto.com/id/1473466236/photo/senior-man-piggybacking-grandson-in-park-during-weekend.webp?a=1&b=1&s=612x612&w=0&k=20&c=mjDlykHVoERZ7gvb2DwHq-S_Cz65OJ7LFjOKxhAYuaM=',
      'https://media.istockphoto.com/id/1295213888/photo/senior-man-sitting-at-park-bench.webp?a=1&b=1&s=612x612&w=0&k=20&c=tHfhqX88nslAu6T7Ghc6MV-XsptZZ_AvMv6c7ZaLwNY='
    ]
  },
  {
    id: '3',
    title: 'SPEVC School',
    tag: 'Education',
    status: 'Ongoing',
    images: ['https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWElMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D']
  },
  {
    id: '4',
    title: 'Parijanashram Vidyalaya',
    tag: 'Education',
    status: 'Ongoing',
    images: ['https://images.unsplash.com/photo-1574758324765-a29c77fb9c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhJTIwc2Nob29sfGVufDB8fDB8fHww']
  }
]

export default function FeaturedProjectsSeton({
  title = "Featured Projects",
}) {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="p-8 mx-14">
      <h2 className="mb-8 text-4xl font-display text-gray-900">{title}</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-500 text-sm text-gray-600">
            <th className="pb-4 text-left font-normal">Title</th>
            <th className="pb-4 text-left font-normal">Tags</th>
            <th className="pb-4 text-left font-normal">Status</th>
            <th className="pb-4 w-72"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            const isHovered = project.id === hoveredId;

            return (
              <tr
                key={project.id}
                className="border-b border-gray-500 transition-colors duration-200"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <td className="py-7">
                  <span
                    className={`text-lg font-medium transition-colors duration-200 ${isHovered ? "text-secondary" : "text-gray-900"
                      }`}
                  >
                    {project.title}
                  </span>
                </td>
                <td>
                  <span
                    className={`inline-flex rounded-full px-4 py-1 text-sm transition-all duration-200 ${isHovered
                        ? "bg-secondary text-white border border-secondary"
                        : "border border-gray-500 text-gray-600"
                      }`}
                  >
                    {project.tag}
                  </span>
                </td>
                <td>
                  <span
                    className={`text-lg transition-colors duration-200 ${isHovered ? "text-secondary" : "text-gray-600"
                      }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="relative">
                  <div className="flex items-center justify-end gap-4">
                    {isHovered && project.images && (
                      <div className="absolute right-40 flex items-center">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className="absolute"
                            style={{
                              right: `${index * 60}px`,
                              transform:
                                index === 1 ? "rotate(6deg)" : "rotate(-3deg)",
                              zIndex: project.images.length - index,
                            }}
                          >
                            <div className="h-20 w-28 overflow-hidden rounded-lg border-2 border-white shadow-md">
                              <img
                                src={image}
                                alt={`${project.title} image ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                      className={`rounded-full p-2 transition-all duration-200 ${isHovered
                          ? "bg-secondary border border-secondary text-white"
                          : "border border-gray-200 text-gray-400"
                        }`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                    <button
                      className={`rounded-full p-2 transition-all duration-200 ${isHovered
                          ? "bg-secondary border border-secondary text-white"
                          : "border border-gray-200 text-gray-400"
                        }`}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

