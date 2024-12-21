import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
export default function Mission() {
  return (
    <div className=" mx-auto bg-white rounded-3xl px-10 h-[33.75rem]">
      <div className="flex flex-row justify-between gap-12 items-center">
        <div className="max-w-2xl ml-4">
          <h2 className="font-display text-4xl mb-6 text-secondary">
            Our Mission
          </h2>
          <p className="text-lg text-[#808080]">
            The Chitrapur Heritage Foundation (CHF) envisions a thriving
            community that embraces its cultural and spiritual roots while
            fostering sustainable progress. By supporting personal growth and
            collective well-being, CHF aims to preserve heritage and wisdom for
            future generations, inspiring a fairer and better world.
          </p>
          <div className="flex gap-4 mt-10">
            <Link
              to="/join"
              className="bg-white/10 backdrop-blur-sm text-primary border-2 border-primary px-8 py-3 rounded-full hover:bg-white/20 transition"
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

        <img src={"/assets/images/about/Mission.png"} alt="Heritage" className="mission-img" />
      </div>
    </div>
  );
}
