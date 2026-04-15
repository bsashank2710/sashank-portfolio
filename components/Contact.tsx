"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-[#e8e4db]">
      <div className="page-container">

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="t-label mb-6">Contact</p>

            {/* Editorial closing statement */}
            <h2 className="t-display mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Let&apos;s build something great.
            </h2>

            <p className="t-body text-lg mb-12 max-w-md">
              I&apos;m looking for full-time engineering roles starting July 2026.
              If you&apos;re working on something meaningful, I&apos;d genuinely
              love to hear about it.
            </p>

            {/* Primary action */}
            <a
              href="mailto:bsashank2710@gmail.com?subject=Let's Talk"
              className="btn btn-dark mb-12 inline-flex"
            >
              bsashank2710@gmail.com
              <ArrowUpRight size={15} />
            </a>

            {/* Secondary links */}
            <div className="flex flex-wrap gap-6 t-caption">
              <a href="https://linkedin.com/in/bsashank" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#1a1917] transition-colors flex items-center gap-1">
                LinkedIn <ArrowUpRight size={11} />
              </a>
              <a href="https://github.com/bsashank2710" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#1a1917] transition-colors flex items-center gap-1">
                GitHub <ArrowUpRight size={11} />
              </a>
              <span>New York, NY</span>
              <span>Open to remote</span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-8 border-t border-[#e8e4db] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 t-caption"
        >
          <span className="font-medium text-[#1a1917] text-sm">Sashank Badri Narayan</span>
          <span>NYU Computer Science &rsquo;26</span>
          <span>© 2026</span>
        </motion.div>
      </div>
    </section>
  );
}
