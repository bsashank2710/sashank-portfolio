"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work",     href: "#projects" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [raised, setRaised] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setRaised(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#f8f6f1] transition-all duration-300 ${
      raised ? "border-b border-[#e8e4db]" : ""
    }`}>
      <div className="page-container h-[68px] flex items-center justify-between">

        <a href="#" className="text-[0.9rem] font-semibold text-[#1a1917] tracking-tight hover:opacity-70 transition-opacity">
          Sashank Badri Narayan
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-[#5c5a55] hover:text-[#1a1917] transition-colors font-medium">
              {label}
            </a>
          ))}
          <a
            href="mailto:bsashank2710@gmail.com"
            className="text-sm font-semibold text-[#1a1917] hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            Open to work
          </a>
        </nav>

        {/* Mobile */}
        <button className="md:hidden text-[#1a1917]" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#f8f6f1] border-b border-[#e8e4db] overflow-hidden"
          >
            <nav className="page-container py-5 flex flex-col gap-1">
              {LINKS.map(({ label, href }) => (
                <a key={href} href={href} onClick={() => setOpen(false)}
                  className="py-3 px-2 text-sm font-medium text-[#4a4743] hover:text-[#1a1917] transition-colors">
                  {label}
                </a>
              ))}
              <a href="mailto:bsashank2710@gmail.com" onClick={() => setOpen(false)}
                className="mt-2 pt-4 border-t border-[#e8e4db] py-3 px-2 text-sm font-semibold text-[#1a1917]">
                Get in touch →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
