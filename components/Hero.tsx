export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        <div className="inline-block border border-[#27272A] bg-[#27272A]/30 px-3 py-1 rounded-full text-xs text-[#A1A1AA] tracking-wide uppercase">
          Graphic Design • Marketing • Logistics
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#F2F2F4]">
          Visuals that captivate. Strategies that scale. Operations that deliver.
        </h1>

        <p className="text-[#A1A1AA] text-base md:text-lg max-w-xl leading-relaxed">
          I bridge creative brand design, targeted growth campaigns, and efficient supply chain logistics to build and execute complete end-to-end solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          {/* Main White CTA */}
          <a
            href="#work"
            className="bg-[#F2F2F4] text-[#0A0A0C] font-bold px-6 py-3 rounded text-sm hover:bg-[#A1A1AA] transition-colors"
          >
            View My Work
          </a>
          {/* Secondary Outline CTA */}
          <a
            href="#contact"
            className="border border-[#27272A] text-[#F2F2F4] font-medium px-6 py-3 rounded text-sm hover:bg-[#27272A] transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Column: Headshot Frame with Name & Roles */}
      <div className="w-full md:w-auto flex flex-col items-center">
        {/* Photo Container */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-xl overflow-hidden border border-[#27272A] bg-[#27272A]/20 shadow-xl">
          <img
            src="/kenny 2.png" // 👈 YOUR IMAGE FILENAME (inside /public)
            alt="OJAY pics"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title Card Under Image */}
        <div className="mt-4 text-center space-y-1">
          <h3 className="text-lg font-bold text-[#F2F2F4] tracking-wide">
          Kehinde Ojeyemi{/* 👈 REPLACE WITH YOUR FULL NAME */}
          </h3>
          <p className="text-xs text-[#A1A1AA] font-mono">
            Graphic Designer • Marketing Specialist • Logistics Lead {/* 👈 REPLACE WITH YOUR DESIRED TITLES */}
          </p>
        </div>
      </div>
    </section>
  );
}