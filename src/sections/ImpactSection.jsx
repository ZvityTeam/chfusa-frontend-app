import { useState } from 'react'
import { ArrowUpRight, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


const impactCards = [
  {
    id: 'education',
    title: 'Project Name',
    subtitle: 'Education',
    description: 'CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, Mangalore, and Gokarn), scholarships to needy students, etc.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
  },
  {
    id: 'temple',
    title: 'Temple',
    subtitle: 'Construction',
    description: 'CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, Mangalore, and Gokarn), scholarships to needy students, etc. CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, and Gokarn), scholarships to needy students, etc.',
    image: 'https://media.istockphoto.com/id/108348556/photo/hindu-temple-in-goa.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hsvqml0mJlacGwAnVI-OhQyH5evXG5ZKWCrYUqlgNxs='
  },
  {
    id: 'food1',
    title: 'Food Donation',
    subtitle: 'Drive',
    description: 'CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, Mangalore, and Gokarn), scholarships to needy students, etc. CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, and Gokarn), scholarships to needy students, etc.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80'
  },
  {
    id: 'food2',
    title: 'Food Donation',
    subtitle: 'Drive',
    description: 'CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, Mangalore, and Gokarn), scholarships to needy students, etc. CHF supports school construction in underserved areas in and around Shirali and locations near our Math sites (Karla, and Gokarn), scholarships to needy students, etc.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80'
  }
]

export default function ImpactSection() {
  const [activeCard, setActiveCard] = useState(impactCards[0])

  const handleCardClick = (card) => {
    if (card.id !== activeCard.id) {
      setActiveCard(card)
    }
  }

  return (
    <div className="p-8 bg-cream mx-14">
      <h2 className="text-4xl font-display text-gray-900 mb-8">Our Impact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Card */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[420px] rounded-3xl overflow-hidden"
            >
              <img 
                src={activeCard.image} 
                alt={activeCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  <div className="space-y-2">
                    <div>
                    <p className="text-white text-2xl font-medium">{activeCard.title}</p>
                    {activeCard.subtitle && (
                      <p className="text-white/90 text-xl">{activeCard.subtitle}</p>
                    )}
                    </div>
                    <div className="h-0.5 bg-white transition-all duration-500  w-[150%]" />
                  </div>
                  <div className="flex gap-4">
                  <button className="rounded-full px-6 py-2 text-white border hover:bg-primary/90">
                          Learn More
                        </button>
                    <button className="bg-secondary border-secondary rounded-full flex items-center p-2 text-white ">
                      <ArrowUpRight className="h-6 w-6  text-white rounded-full rotate-[175deg]" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                <div className={`h-2 z-[99] rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[50rem]`} />
                  <div 
                    className="bg-white rounded-[20px] p-6 w-full  relative min-h-[150px]"
                  >
                    <p className="text-md text-[#516072]">{activeCard.description}</p>
                    <button className="absolute bottom-6 right-6 px-6 py-2  bg-secondary text-white rounded-full flex items-center gap-2 shadow-md">
                      Donate <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Cards */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="grid grid-cols-6 gap-2 text-center mb-4">
              {['5', '0', '0', '0', '0', '0'].map((digit, i) => (
                <>
                <h3 
                  key={i}
                  className={`text-4xl font-bold text-[#0066FF] relative ${i < 5 ? 'digit-separator' : ''}`}
                >
                  {digit}
                </h3>

                </>
              ))}
            </div>
            <div className="flex justify-between text-sm mx-5">
              <h5 className="text-[#02306A]">Target Donation <span className='text-[#C7C7C7]'>(in $)</span></h5>
              <span className="text-[#f97316]">1000+ Donors</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 grid grid-cols-2 gap-4 shadow-md">
            
              <div className='bg-[#F4F5F7] p-6 flex flex-col space-y-2 items-center justify-center rounded-xl'>
                <div className="text-3xl font-bold text-[#f97316]">10,000+</div>
                <div className="text-sm text-[#666666]">Children Educated</div>
              </div>
              <div className='bg-[#F4F5F7] p-6 flex flex-col space-y-2 items-center justify-center rounded-xl'>
                <div className="text-3xl font-bold text-[#0066FF]">100+</div>
                <div className="text-sm text-[#666666]">Schools Connected</div>
              </div>
            
              <div className='bg-[#F4F5F7] p-6 flex flex-col space-y-2 items-center justify-center rounded-xl'>
                <div className="text-2xl font-bold text-[#02306A]">95% - 99%</div>
                <div className="text-sm text-[#666666]">Student Graduation Rate</div>
              </div>
              <div className='bg-[#F4F5F7] p-6 flex flex-col space-y-2 items-center justify-center rounded-xl'>
                <div className="text-3xl font-bold text-[#0066FF]">100+</div>
                <div className="text-sm text-[#666666]">Fifth Parameter</div>
              </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {impactCards.slice(1).map((card) => (
          <motion.div
            key={card.id}
            className={`relative h-[275px] rounded-3xl overflow-hidden cursor-pointer ${
              activeCard.id === card.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleCardClick(card)}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <div>
                  <p className="text-white text-xl font-medium">{card.title}</p>
                  {card.subtitle && (
                    <p className="text-white/90 text-md">{card.subtitle}</p>
                  )}
                  </div>
                  <div className={`h-0.5 bg-white transition-all duration-500 ${
                    activeCard.id === card.id ? 'w-full' : 'w-24'
                  }`} />
                </div>
                <ArrowUpRight className="h-8 w-8 transition-transform duration-300 text-white rounded-full border border-white p-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

