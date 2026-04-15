"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const RESUMES = [
  { track: "SWE / Backend Engineer",  file: "/resumes/Sashank_SWE_SDE.pdf" },
  { track: "AI / ML Engineer",        file: "/resumes/Sashank_AIML.pdf" },
  { track: "Cybersecurity Engineer",  file: "/resumes/Sashank_Cybersecurity.pdf" },
  { track: "Cloud / DevOps Engineer", file: "/resumes/Sashank_Cloud_DevOps.pdf" },
  { track: "Data Scientist",          file: "/resumes/Sashank_DataScience.pdf" },
];

export default function Resumes() {
  return (
    <section id="resumes" className="py-24 sm:py-32 border-t border-[#e8e4db]">
      <div className="page-container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5"
        >
          <p className="t-label mb-3">Resumes</p>
          <h2 className="t-title mb-3">Tailored for each role.</h2>
          <p className="t-body max-w-md">
            Five versions — each written for a specific discipline. Pick the one that matches your opening.
          </p>
        </motion.div>

        <div className="mt-12">
          {RESUMES.map((r, i) => (
            <motion.div
              key={r.track}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.055 }}
              className="flex items-center justify-between gap-6 py-5 border-t border-[#e8e4db] group"
            >
              <p className="font-medium text-[0.9375rem] text-[#1a1917]">{r.track}</p>
              <a
                href={r.file}
                download
                className="flex items-center gap-2 text-sm text-[#9c998f] hover:text-[#1a1917] transition-colors shrink-0"
              >
                <Download size={14} />
                Download
              </a>
            </motion.div>
          ))}
          <div className="border-t border-[#e8e4db]" />
        </div>
      </div>
    </section>
  );
}
