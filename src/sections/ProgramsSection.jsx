import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'

const visionCards = [
  {
    id: 'education',
    title: 'Education & Grants',
    description: 'CHF supports 5 schools in India, impacting 3,000+ students through programs like scholarships, vocational training, infrastructure development, and digital learning, empowering them to break the poverty cycle.',
    image: 'https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    description: 'Our women empowerment initiatives focus on providing skills training, education, and economic opportunities to help women become self-reliant and contribute to their communities.',
    image: 'https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'heritage',
    title: 'Heritage Preservation',
    description: 'We work to preserve and promote Indian cultural heritage through various programs supporting traditional arts, dance, music, and cultural education initiatives.',
    image: 'https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default function ProgramsSection() {
  const [expandedId, setExpandedId] = useState('education')

  return (
    <div className="flex gap-6 p-6 justify-center">
      {visionCards.map((card) => {
        const isExpanded = card.id === expandedId
        
        return (
          <div
            key={card.id}
            className={`programs-card relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out ${
              isExpanded ? 'w-[750px]' : 'w-[380px] cursor-pointer'
            }`}
            onClick={() => !isExpanded && setExpandedId(card.id)}
          >
            <div className="relative h-[726px;]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                    <div className='flex flex-col space-y-2'>
                  <p className="text-2xl font-medium text-white max-w-[50%]">{card.title}</p>
                  <div className={`h-0.5 bg-white transition-all duration-500 ${
                      isExpanded ? 'w-full' : 'w-20'
                    }`} />
                    </div>
                  <div className='flex flex-row gap-4'>
                  {/* {isExpanded && <button className="rounded-full px-6 py-2 text-white border hover:bg-primary/90">
                          Learn More
                        </button>} */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedId(isExpanded ? '' : card.id)
                    }}
                    className={`rounded-full border border-white/50 p-2 text-white hover:bg-white/10  ${
                        isExpanded ? 'bg-secondary border-secondary' : ''
                      }`}
                  >
                    <ArrowUpRight className={`h-6 w-6 transition-transform duration-300 ${
                        isExpanded ? 'rotate-[175deg] ' : ''
                      }`} />
                  </button>
                  </div>
                </div>

                <div>
                  {isExpanded ? (
                    <div className='flex flex-col justify-center items-center'>
                    <div className={`h-2 rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[30rem]`} />
                    <div className="space-y-6 bg-white rounded-3xl p-6" style={{
                        // boxShadow: '0 -4px 0 0 #f97316'
                      }}>
                      <p className="text-md text-[#516072]">
                        {card.description}
                      </p>
                      <div className="flex items-center justify-end">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedId('')
                          }}
                          className="flex items-center gap-2 text-white hover:text-white/80"
                        >
                          <Minus className="h-8 w-8 border border-secondary rounded-full p-2 text-secondary bg-[#FBF3E8] font-bold" />
                        </button>
                      </div>
                    </div>
                    </div>
                  ) : (
                    <button 
                      className="flex items-center justify-between rounded-full bg-white gap-2 text-[#516072] w-full p-2 pl-6"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedId(card.id)
                      }}
                    >
                      READ MORE
                      <Plus className="h-8 w-8 border border-secondary rounded-full p-2 text-secondary bg-[#FBF3E8] font-bold" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}