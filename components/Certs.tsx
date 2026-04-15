"use client";

import { motion } from "framer-motion";

export default function Certs() {
  return (
    <section id="credentials" className="py-24 sm:py-32 border-t border-[#e8e4db]">
      <div className="page-container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="t-label mb-3">Credentials</p>
          <h2 className="t-title">Certifications &amp; Research</h2>
        </motion.div>

        {/* Certs as clean rows */}
        <div className="mb-16">
          {[
            { name: "Cisco Certified Network Associate (CCNA)",            issuer: "Cisco" },
            { name: "Palo Alto Networks Certified Network Security Engineer (PCNSE)", issuer: "Palo Alto Networks" },
            { name: "Machine Learning Specialization",                     issuer: "Stanford University / Coursera" },
          ].map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-baseline justify-between gap-8 py-6 border-t border-[#e8e4db]"
            >
              <p className="font-medium text-[0.9375rem] text-[#1a1917]">{c.name}</p>
              <p className="t-caption shrink-0">{c.issuer}</p>
            </motion.div>
          ))}
          <div className="border-t border-[#e8e4db]" />
        </div>

        {/* Publication */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="t-label mb-5">Publication</p>
          <h3 className="font-serif italic text-xl text-[#1a1917] leading-snug mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            &ldquo;Prompt, Persist, Publish: Generative AI as a Learning Accelerator — A Bioinformatics Use Case&rdquo;
          </h3>
          <p className="t-body">
            Peer-reviewed research exploring how generative AI accelerates scientific
            learning in bioinformatics, demonstrating measurable productivity gains from
            practical LLM integration in academic workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
