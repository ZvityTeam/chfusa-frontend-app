import { useState, useEffect } from "react";
import Mission from "./Mission";
import Vision from "./Vision";

function VisionMissionCarousalSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-14 px-10 mx-10 relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="w-full flex-shrink-0">
            <Mission />
          </div>
          <div className="w-full flex-shrink-0">
            <Vision />
          </div>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          className={`h-3 w-3 rounded-full transition-colors ${
            activeIndex === 0 ? "bg-secondary" : "bg-gray-300"
          }`}
          onClick={() => setActiveIndex(0)}
          aria-label="Show mission"
        />
        <button
          className={`h-3 w-3 rounded-full transition-colors ${
            activeIndex === 1 ? "bg-secondary" : "bg-gray-300"
          }`}
          onClick={() => setActiveIndex(1)}
          aria-label="Show vision"
        />
      </div>
    </div>
  );
}

export default VisionMissionCarousalSection;
