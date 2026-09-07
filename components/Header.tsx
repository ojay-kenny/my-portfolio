import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#0A0A0C]/80 backdrop-blur-md border-b border-[#27272A] px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-wider text-[#F2F2F4] hover:opacity-80">
                    YOUR NAME<span className="text-[#A1A1AA]">.</span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <a href="#work" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">
                        Work
                    </a>
                    <a href="#services" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">
                        Services
                    </a>
                    <a href="#about" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">
                        About
                    </a>
                    <a href="#contact" className="text-[#A1A1AA] hover:text-[#F2F2F4] transition-colors">
                        Contact
                    </a>
                </nav>

                {/* CTA Button with explicit black text */}
                <a
                    href="#contact"
                    className="bg-[#F2F2F4] text-[#0A0A0C] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:bg-[#A1A1AA] transition-colors"
                >
                    Get in Touch
                </a>
            </div>
        </header>
    );
}