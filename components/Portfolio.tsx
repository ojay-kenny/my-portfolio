"use client";

import { useState } from "react";

type Project = {
    id: number;
    title: string;
    category: "Graphic Design" | "Digital Marketing" | "Logistics";
    description: string;
    tags: string[];
    imagePlaceholder: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Brand Identity & Promotional Flyer",
        category: "Graphic Design",
        description: "High-impact event flyers and visual identity collateral designed for modern brand recognition.",
        tags: ["Branding", "Flyer Design", "Visual Media"],
        imagePlaceholder: "🎨 Graphic Design Showcase",
    },
    {
        id: 2,
        title: "Multi-Channel Ad Campaign",
        category: "Digital Marketing",
        description: "Targeted ad creative combined with growth analytics to drive audience acquisition and conversion.",
        tags: ["Paid Ads", "Growth", "Analytics"],
        imagePlaceholder: "📈 Marketing Campaign",
    },
    {
        id: 3,
        title: "Supply Chain & Fleet Optimization",
        category: "Logistics",
        description: "Operational workflow redesign reducing delivery bottlenecks and streamlining inventory tracking.",
        tags: ["Operations", "Supply Chain", "Process Map"],
        imagePlaceholder: "📦 Logistics Case Study",
    },
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    return (
        <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#27272A]">
            {/* Section Title */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#F2F2F4] mb-3">Featured Work</h2>
                <p className="text-[#A1A1AA]">
                    Filter through my work across visual design, marketing campaigns, and logistics management.
                </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
                {["All", "Graphic Design", "Digital Marketing", "Logistics"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded text-xs font-bold tracking-wide uppercase transition-all ${selectedCategory === cat
                                ? "bg-[#F2F2F4] text-[#0A0A0C]"
                                : "bg-[#27272A]/50 text-[#A1A1AA] hover:text-[#F2F2F4] hover:bg-[#27272A]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-[#27272A]/20 border border-[#27272A] rounded-xl overflow-hidden hover:border-[#A1A1AA]/50 transition-all flex flex-col"
                    >
                        {/* Image Box Placeholder */}
                        <div className="h-52 bg-[#27272A]/40 flex items-center justify-center text-[#A1A1AA] font-mono text-xs border-b border-[#27272A]">
                            {project.imagePlaceholder}
                        </div>

                        {/* Content Details */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-bold tracking-widest text-[#A1A1AA] uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-[#F2F2F4] mt-1 mb-2">{project.title}</h3>
                                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">{project.description}</p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] bg-[#27272A] text-[#A1A1AA] px-2.5 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}