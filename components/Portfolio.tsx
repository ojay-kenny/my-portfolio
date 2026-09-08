"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: "Graphic Design" | "Digital Marketing" | "Logistics";
  description: string;
  fullDetails: string;
  tags: string[];
  imageSrc: string; // File path inside your /public folder
  imageAlt: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity & Promotional Flyer",
    category: "Graphic Design",
    description: "High-impact event flyers and visual identity collateral designed for modern brand recognition.",
    fullDetails: "Designed complete visual assets including print flyers, digital posters, and typography guides. Focused on visual hierarchy to maximize event attendance and brand awareness.",
    tags: ["Branding", "Flyer Design", "Visual Media"],
    imageSrc: "/minabite.jpeg", // 👈 PROJECT 1 IMAGE FILENAME (e.g., /minabite.jpeg)
    imageAlt: "Minabite Promotional Flyer",
  },
  {
    id: 2,
    title: "Multi-Channel Ad Campaign",
    category: "Digital Marketing",
    description: "Targeted ad creative combined with growth analytics to drive audience acquisition and conversion.",
    fullDetails: "Executed paid social ad campaigns across Instagram and LinkedIn. Delivered a 35% increase in conversion rates while optimizing cost-per-click across target demographics.",
    tags: ["Paid Ads", "Growth", "Analytics"],
    imageSrc: "/graphics.jpeg", // 👈 PROJECT 2 IMAGE FILENAME (Replace with your file name)
    imageAlt: "Digital Marketing Campaign Results",
  },
  {
    id: 3,
    title: "Supply Chain & Fleet Optimization",
    category: "Logistics",
    description: "Operational workflow redesign reducing delivery bottlenecks and streamlining inventory tracking.",
    fullDetails: "Restructured warehouse inventory mapping and vendor delivery routes. Reduced operational lead times by 22% and eliminated order fulfillment delays.",
    tags: ["Operations", "Supply Chain", "Process Map"],
    imageSrc: "/Services.jpeg", // 👈 PROJECT 3 IMAGE FILENAME (Replace with your file name)
    imageAlt: "Logistics Process Map",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#27272A]">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#F2F2F4] mb-3">Featured Work</h2>
        <p className="text-[#A1A1AA]">
          Click on any card to view detailed case studies, flyers, and project metrics.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["All", "Graphic Design", "Digital Marketing", "Logistics"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded text-xs font-bold tracking-wide uppercase transition-all ${
              selectedCategory === cat
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
            onClick={() => setActiveProject(project)}
            className="bg-[#27272A]/20 border border-[#27272A] rounded-xl overflow-hidden hover:border-[#A1A1AA]/50 transition-all flex flex-col cursor-pointer group"
          >
            {/* Card Thumbnail Image */}
            <div className="h-52 bg-[#27272A]/40 overflow-hidden relative border-b border-[#27272A]">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#A1A1AA] uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#F2F2F4] mt-1 mb-2 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

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

      {/* Lightbox / Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0A0A0C] border border-[#27272A] rounded-xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-[#A1A1AA] hover:text-[#F2F2F4] text-lg font-bold"
            >
              ✕
            </button>

            <span className="text-[10px] font-bold tracking-widest text-[#A1A1AA] uppercase">
              {activeProject.category}
            </span>
            <h3 className="text-2xl font-bold text-[#F2F2F4]">{activeProject.title}</h3>

            {/* Modal Image Display */}
            <div className="max-h-80 bg-[#27272A]/40 border border-[#27272A] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={activeProject.imageSrc}
                alt={activeProject.imageAlt}
                className="max-h-80 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">{activeProject.fullDetails}</p>

            <button
              onClick={() => setActiveProject(null)}
              className="w-full bg-[#F2F2F4] text-[#0A0A0C] font-bold text-xs uppercase tracking-wider py-2.5 rounded hover:bg-[#A1A1AA]"
            >
              Close Overview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}