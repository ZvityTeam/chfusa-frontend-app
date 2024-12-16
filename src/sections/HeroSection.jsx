import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Shirali_Math.jpg/800px-Shirali_Math.jpg"
          alt="Heritage Building"
          className="w-full h-full object-cover hero-bg"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 pt-32">
        <div className="max-w-3xl pt-20">
          <h1 className="font-display text-7xl text-white mb-6 leading-tight">
            Chitrapur Heritage Foundation
          </h1>
          <p className="text-white/90 text-xl mb-8 leading-relaxed">
            Founded in 2005, the Chitrapur Heritage Foundation (CHF) is a nonprofit organization
            dedicated to fostering sustainable development and preserving the rich cultural
            heritage of the Chitrapur Saraswat community. With a focus on Heritage, Education,
            Women's Empowerment and Spiritual Development
          </p>
          <div className="flex gap-4">
            <Link
              to="/join"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-3 rounded-full hover:bg-white/20 transition"
            >
              Join Us
            </Link>
            <Link
              to="/donate"
              className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2"
            >
              Donate <Heart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}