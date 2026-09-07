export default function About() {
    const competencies = [
        {
            category: "Graphic Design",
            skills: ["Brand Identity & Guidelines", "Flyers & Visual Collateral", "Social Media Asset Design", "Typography & Layout"],
        },
        {
            category: "Digital Marketing",
            skills: ["Ad Campaign Management", "Target Audience Strategy", "Social Media Growth", "Analytics & Conversion Tracking"],
        },
        {
            category: "Logistics Management",
            skills: ["Supply Chain Coordination", "Inventory & Stock Tracking", "Vendor & Carrier Relations", "Operational Workflow Mapping"],
        },
    ];

    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#27272A]">
            {/* Section Header */}
            <div className="mb-12">
                <span className="text-xs font-bold tracking-widest text-[#A1A1AA] uppercase">
                    About Me
                </span>
                <h2 className="text-3xl font-bold text-[#F2F2F4] mt-2 mb-4">
                    Where Creative Vision Meets Operational Precision
                </h2>
                <p className="text-[#A1A1AA] text-sm md:text-base max-w-3xl leading-relaxed">
                    I operate at the intersection of creative design, growth marketing, and supply chain management. Rather than treating these as separate roles, I combine them to manage projects from initial concept to marketing campaign and final fulfillment.
                </p>
            </div>

            {/* Narrative Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#27272A]/20 border border-[#27272A] rounded-xl p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#F2F2F4]">The Creative & Strategic Edge</h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        Great visual design gets attention, but targeted marketing converts that attention into results. My graphic design expertise allows me to craft high-impact promotional flyers and visual assets, while my marketing knowledge ensures every graphic communicates a clear brand strategy.
                    </p>
                </div>

                <div className="bg-[#27272A]/20 border border-[#27272A] rounded-xl p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#F2F2F4]">The Operational Backbone</h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        A successful campaign relies heavily on execution. With my background in logistics management, I understand how to manage inventory, coordinate vendors, and optimize operational workflows so products and events run seamlessly without supply chain delays.
                    </p>
                </div>
            </div>

            {/* Technical Competencies Matrix */}
            <div className="bg-[#27272A]/30 border border-[#27272A] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#F2F2F4] mb-6">Core Skills & Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {competencies.map((c, idx) => (
                        <div key={idx} className="space-y-3">
                            <h4 className="text-xs font-bold tracking-wider text-[#F2F2F4] uppercase border-b border-[#27272A] pb-2">
                                {c.category}
                            </h4>
                            <ul className="space-y-2">
                                {c.skills.map((skill, i) => (
                                    <li key={i} className="text-xs text-[#A1A1AA] flex items-center gap-2">
                                        <span className="text-[#F2F2F4]">✓</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}