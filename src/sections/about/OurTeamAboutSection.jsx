import { useState, useEffect, useRef } from "react";
import { boardMembers } from "../../utils/boardMembers";

export default function OurTeamAboutSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(boardMembers.length / itemsPerPage);
  const animationRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      animationRef.current = setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(timer);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [totalPages]);

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    return boardMembers.slice(start, start + itemsPerPage);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 bg-white rounded-3xl shadow-lg h-[37.313rem] my-20">
      <h2 className="text-[2.5rem] font-bold text-center mb-10">Our Team</h2>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mb-12 px-20 transition-opacity duration-1000 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {getCurrentPageItems().map((member, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src={member.img}
                alt={member.name}
                className="w-[7.5rem] h-[7.5rem] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm italic mt-0.5">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute flex justify-center space-x-2 bottom-2 right-1/2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentPage(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === index ? "bg-orange-500" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
