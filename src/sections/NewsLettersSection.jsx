import { Send } from "lucide-react"
import { useState } from "react"

export default function NewsLettersSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <section
      className="relative  flex w-full flex-row items-center justify-center"
      style={{
        backgroundImage: `url(assets/images/newsletterImg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container overflow-hidden">
        <div className="">
          {/* Left Content */}

          <div className="h-[460px] flex flex-col lg:flex-row items-center justify-left pl-20">
            <div className="flex flex-col justify-center space-y-6 px-10 max-w-[50%] lg:pr-8">
              <h2 className="text-5xl md:text-6xl text-white mb-4">
                Newsletter
              </h2>

              <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl pb-10">
                Be a catalyst—become a CHF member—and receive updated news about
                the programmes, events and more. Inspire your friends, family
                members, colleagues and neighbors to support the effort in your
                neighborhood, at your convenience.
              </p>

              <form onSubmit={handleSubmit} className="relative max-w-xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-2/3 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-[12.5rem] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 transition-colors p-2.5 rounded-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }