export default function Services() {
    const services = [
        {
            icon: "🎨",
            title: "Graphic Design",
            description: "Visual identity and high-converting marketing collateral tailored to capture brand essence.",
            deliverables: ["Brand Identity & Logos", "Event & Promo Flyers", "Social Media Graphics", "Print & Packaging Layouts"],
        },
        {
            icon: "📈",
            title: "Digital Marketing",
            description: "Strategic campaign planning, audience targeting, and data-driven growth strategies.",
            deliverables: ["Paid Social & Ad Campaigns", "Growth & Conversion Strategy", "Audience Segmentation", "Performance Analytics"],
        },
        {
            icon: "📦",
            title: "Logistics Management",
            description: "End-to-end supply chain oversight, process optimization, and inventory control.",
            deliverables: ["Supply Chain Optimization", "Inventory & Warehouse Tracking", "Fleet & Delivery Scheduling", "Process Workflow Diagrams"],
        },
    ];

    return (
        <section id="services" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#27272A]">
            {/* Section Title */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#F2F2F4] mb-3">Services</h2>
                <p className="text-[#A1A1AA]">
                    Comprehensive solutions ranging from creative visual design to execution and operational logistics.
                </p>
            </div>

            {/* 3-Column Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {services.map((s, index) => (
                    <div
                        key={index}
                        className="bg-[#27272A]/20 border border-[#27272A] rounded-xl p-6 flex flex-col justify-between hover:border-[#A1A1AA]/50 transition-all"
                    >
                        <div>
                            <div className="text-3xl mb-4">{s.icon}</div>
                            <h3 className="text-xl font-bold text-[#F2F2F4] mb-2">{s.title}</h3>
                            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">{s.description}</p>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold tracking-widest text-[#A1A1AA] uppercase mb-3">
                                Key Offerings
                            </p>
                            <ul className="space-y-2">
                                {s.deliverables.map((item, i) => (
                                    <li key={i} className="text-xs text-[#F2F2F4] flex items-center gap-2">
                                        <span className="text-[#A1A1AA]">▸</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Synergy Block ("Why Work With Me") */}
            <div id="about" className="bg-[#27272A]/30 border border-[#27272A] rounded-xl p-8 md:p-10">
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-bold tracking-widest text-[#A1A1AA] uppercase">
                        The Cross-Disciplinary Edge
                    </span>
                    <h3 className="text-2xl font-bold text-[#F2F2F4]">
                        Why design, marketing, and logistics belong together
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        Most businesses hire separate people to design promotional materials, run advertising campaigns, and manage inventory delivery. Having experience across all three means every graphic is built to market effectively, and every marketing campaign is backed by realistic operational logistics.
                    </p>
                </div>
            </div>
        </section>
    );
}