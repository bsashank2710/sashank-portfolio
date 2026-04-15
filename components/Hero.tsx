"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const f = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section id="hero" className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div className="page-container">

        {/* Eyebrow — well below the navbar */}
        <motion.p {...f(0)} className="t-label mb-8">
          Software Engineer &nbsp;·&nbsp; M.S. NYU &nbsp;·&nbsp; New York
        </motion.p>

        {/* Name — smaller clamp so it fits on 2 lines max, not 3 */}
        <motion.h1
          {...f(0.1)}
          className="mb-10"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(2.6rem, 5.5vw, 4.75rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            paddingBottom: "0.35em",
            color: "#1a1917",
          }}
        >
          Sashank Badri Narayan
        </motion.h1>

        {/* Rule */}
        <motion.div {...f(0.18)} className="rule mb-10" />

        {/* Two-column: tagline left, CTAs right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          <motion.div {...f(0.24)}>
            <p className="text-lg sm:text-xl text-[#4a4743] leading-relaxed font-light max-w-md">
              I build distributed backend systems and cloud infrastructure
              for companies operating at scale — the kind that stays up,
              fails gracefully, and lets engineering teams ship without fear.
            </p>
            <p className="t-caption mt-5">
              F-1 OPT authorized &nbsp;·&nbsp; Available July 2026 &nbsp;·&nbsp; Sponsorship required
            </p>
          </motion.div>

          <motion.div {...f(0.32)} className="flex flex-col gap-7 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-dark">
                View My Work <ArrowRight size={15} />
              </a>
              <a href="/resumes/Sashank_SWE_SDE.pdf" download className="btn btn-outline">
                Resume
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/bsashank2710" target="_blank" rel="noopener noreferrer"
                className="t-caption hover:text-[#1a1917] transition-colors">GitHub</a>
              <span className="w-px h-3 bg-[#ccc8bc]" />
              <a href="https://linkedin.com/in/bsashank" target="_blank" rel="noopener noreferrer"
                className="t-caption hover:text-[#1a1917] transition-colors">LinkedIn</a>
              <span className="w-px h-3 bg-[#ccc8bc]" />
              <a href="mailto:bsashank2710@gmail.com"
                className="t-caption hover:text-[#1a1917] transition-colors">Email</a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
