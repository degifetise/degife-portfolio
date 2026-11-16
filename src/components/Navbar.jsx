import { useState } from "react";
import { motion } from "framer-motion";
import { LibraryBig, Menu, User, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#161b22]/90 backdrop-blur border-b border-[#30363d]"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="p-1.5 bg-[#0d1117] border border-[#30363d] rounded-md text-white">
            <User className="h-5 w-5" />
          </div>
          <span className="font-semibold text-white tracking-wide text-base">
            degifetise
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md bg-[#0d1117] border border-[#30363d] text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#161b22] border-b border-[#30363d] px-4 py-4 flex flex-col gap-3 md:hidden shadow-xl">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-[#21262d] hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
