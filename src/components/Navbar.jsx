import { useState } from "react";
import { motion } from "framer-motion";

import { LibraryBig, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#161b22]/90 backdrop-blur border-b border-[#30363d] px-4 lb:px-8 py-3 flex items-center justify-center"
    >
      <div className="flex items-center gap-3">
        <LibraryBig className="h-8 w-8 text-white fill-current" />
        <span className="font-semibold text-white tracking-wide">
          degifetise
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#overview" className="hover:text-white transition">
          Overview
        </a>
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#education" className="hover:text-white transition">
          Education
        </a>
        <a href="#services" className="hover:text-white transition">
          Services
        </a>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#tech" className="hover:text-white transition">
          Tech Stack
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-300 hover:text-white"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#161b22] border-b border-[#30363d] px-4 py-4 flex flex-col gap-3 md:hidden">
          <a href="overview" onClick={() => setMobileMenuOpen(false)}>
            Overview
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)}>
            Education
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)}>
            Tech Stack
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
}
