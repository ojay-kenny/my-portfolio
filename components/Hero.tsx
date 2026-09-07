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
                    {/* Main White CTA with explicit black text */}
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

            {/* Right Column: Headshot Frame */}
            <div className="w-full md:w-auto flex justify-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-xl overflow-hidden border border-[#27272A] bg-[#27272A]/20 flex items-center justify-center">
                    <div className="text-center p-6 space-y-2">
                        <div className="w-16 h-16 rounded-full bg-[#27272A] mx-auto flex items-center justify-center text-[#A1A1AA] text-2xl">
                            👤
                        </div>
                        <p className="text-xs text-[#A1A1AA] font-mono">Profile Image</p>
                        <p className="text-[10px] text-[#A1A1AA]/60 max-w-[180px]">
                            (We will link your actual photo file here in Phase 3)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}