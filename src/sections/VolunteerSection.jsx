export default function VolunteerSection() {
  return (
    <section className="relative bg-[#E67E22] py-16 my-10">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left illustration */}
          <div className="relative flex-shrink-0 md:mb-0 md:w-1/4">
            <img
              src="/assets/images/volunteer.svg"
              alt="Volunteer illustration"
              className="w-full max-w-[250px]"
            />
          </div>

          {/* Middle icons and right content */}
          <div className="flex flex-grow flex-col md:flex-row">
            {/* Middle icons */}
            <div className="relative mb-8 flex-shrink-0 md:mb-0 md:w-1/3">
              <div className="absolute left-14 top-0">
                <div className="flex flex-col items-center">
                  <div className="rounded-full ">
                    <img
                      src="/assets/images/heritage.svg"
                      alt="Heritage"
                      width={140}
                      height={120}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-1/3 -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="rounded-full">
                    <img
                      src="/assets/images/spirituality.svg"
                      alt="Spirituality"
                      width={160}
                      height={150}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-8 -bottom-12 ">
                <div className="flex flex-col items-center">
                  <div className="rounded-full">
                    <img
                      src="/assets/images/education.svg"
                      alt="Education"
                      width={180}
                      height={160}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="flex flex-grow flex-col justify-center space-y-6 md:w-2/3">
              <h2 className="text-5xl font-bold text-white">Volunteer</h2>
              <p className="text-lg text-white max-w-[60%]">
                Join us in making a difference. Your skills and enthusiasm can help us achieve our goals in Heritage, Education, Women's Empowerment, and Spiritual Development.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-transparent border rounded-3xl p-3 px-5 text-white hover:bg-white/10">
                  Learn More
                </button>
                <button className="bg-white text-[#E67E22] border rounded-3xl p-3 px-5 hover:bg-white/90">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border pattern */}
      <div className="absolute bottom-0 left-0 right-0 ml-10">
        <div
          className="h-8 w-full bg-repeat-x"
          style={{ backgroundImage: "url('/assets/images/logo.png')" }}
        />
      </div>

    </section>
  )
}

