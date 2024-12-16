import { Send } from "lucide-react"
import { useState } from "react"

export default function NewsLettersSection() {
    const [email, setEmail] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle newsletter signup
      console.log('Newsletter signup:', email)
      setEmail('')
    }
  
    return (
      <div className="relative min-h-[400px] overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
  
        {/* Curved Element */}
        <div className="absolute right-0 top-0 h-full w-1/3">
          <div className="absolute right-0 h-full w-[200%] translate-x-1/2 bg-white"
            style={{
              borderRadius: '50% 0 0 50%',
            }}>
            <span className="absolute bottom-32 left-8 -rotate-90 text-3xl tracking-[0.2em] text-blue-950 font-serif">
              Newsletter
            </span>
          </div>
        </div>
  
        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="mb-6 text-4xl font-bold text-white font-serif">
              Newsletter
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Be a catalyst—become a CHF member—and receive updated news about the programmes, 
              events and more. Inspire your friends, family members, colleagues and neighbors 
              to support the effort in your neighborhood, at your convenience.
            </p>
  
            <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-full rounded-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }