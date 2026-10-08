"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#27272A]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Direct Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#F2F2F4]">Let’s Work Together</h2>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                        Have a project in mind, need operational consultation, or want to elevate your brand’s visual identity? Send a message and let’s discuss options.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-lg">📧</span>
                            <span className="text-sm text-[#F2F2F4]">ojaykenny576@gmail.com .com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-lg">📍</span>
                            <span className="text-sm text-[#F2F2F4]">Available Remotely & Worldwide</span>
                        </div>
                    </div>

                    <div className="pt-6">
                        <p className="text-xs font-bold tracking-widest text-[#A1A1AA] uppercase mb-3">
                            Connect
                        </p>
                        <div className="flex space-x-4 text-xs">
                            <a href="https://www.linkedin.com/in/kehinde-ojeyemi-445b61438" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">LinkedIn</a>
                            <a href="#" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">Behance</a>
                            <a href="https://www.instagram.com/ojay.kenny/" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Form */}
                <div className="bg-[#27272A]/20 border border-[#27272A] p-8 rounded-xl">
                    {submitted ? (
                        <div className="text-center py-12 space-y-3">
                            <div className="text-3xl">✅</div>
                            <h3 className="text-xl font-bold text-[#F2F2F4]">Message Received</h3>
                            <p className="text-xs text-[#A1A1AA]">
                                Thank you for reaching out. I will review your message and reply shortly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-4 text-xs text-[#F2F2F4] underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-medium text-[#A1A1AA] mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your full name"
                                    className="w-full bg-[#0A0A0C] border border-[#27272A] rounded px-4 py-2.5 text-sm text-[#F2F2F4] focus:outline-none focus:border-[#A1A1AA]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#A1A1AA] mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full bg-[#0A0A0C] border border-[#27272A] rounded px-4 py-2.5 text-sm text-[#F2F2F4] focus:outline-none focus:border-[#A1A1AA]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#A1A1AA] mb-2">Service Needed</label>
                                <select
                                    required
                                    className="w-full bg-[#0A0A0C] border border-[#27272A] rounded px-4 py-2.5 text-sm text-[#F2F2F4] focus:outline-none focus:border-[#A1A1AA]"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="logistics">Logistics Management</option>
                                    <option value="all-three">All Three (Full Service)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#A1A1AA] mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-[#0A0A0C] border border-[#27272A] rounded px-4 py-2.5 text-sm text-[#F2F2F4] focus:outline-none focus:border-[#A1A1AA]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#F2F2F4] text-[#0A0A0C] font-bold text-xs uppercase tracking-wider py-3 rounded hover:bg-[#A1A1AA] transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}