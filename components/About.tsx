"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#e8e4db]">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24">

          {/* Left — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="t-label mb-6">About</p>
            <h2 className="t-title mb-8">
              Engineering that holds<br />under real pressure.
            </h2>
            <div className="space-y-5 t-body">
              <p>
                I&apos;m a software engineer finishing my M.S. in Computer Science at NYU,
                graduating in May 2026. My work sits at the intersection of backend systems,
                cloud infrastructure, and security — the layer where reliability is earned,
                not assumed.
              </p>
              <p>
                Over the past three years I&apos;ve shipped services handling tens of thousands
                of events per day, profiled and fixed production latency regressions, and built
                platforms from scratch that reached thousands of real users. I care deeply
                about systems that don&apos;t just work — but work when it matters most.
              </p>
              <p>
                I&apos;m authorized to work in the U.S. on F-1 OPT from{" "}
                <span className="font-medium text-[#1a1917]">July 6, 2026</span>, with
                no immediate sponsorship required.
              </p>
            </div>
          </motion.div>

          {/* Right — clean facts */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 pt-0 lg:pt-12"
          >
            {/* Education */}
            <div>
              <p className="t-label mb-5">Education</p>
              <div className="space-y-6">
                {[
                  { school: "New York University", degree: "M.S. Computer Science", period: "2024 – 2026", note: "Distributed Systems · Cryptography · Cloud" },
                  { school: "SRM Institute of S&T", degree: "B.Tech. Computer Science", period: "2020 – 2024", note: "" },
                ].map((e) => (
                  <div key={e.school} className="pb-6 border-b border-[#e8e4db] last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <p className="font-semibold text-[0.9375rem] text-[#1a1917]">{e.school}</p>
                      <p className="t-caption shrink-0">{e.period}</p>
                    </div>
                    <p className="text-sm text-[#5c5a55] mt-1">{e.degree}</p>
                    {e.note && <p className="t-caption mt-1.5">{e.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics — inline text, no boxes */}
            <div>
              <p className="t-label mb-5">At a glance</p>
              <div className="grid grid-cols-2 gap-y-6">
                {[
                  { v: "5+",    l: "Internships" },
                  { v: "5,000+", l: "Users scaled" },
                  { v: "10K+",  l: "Events / day" },
                  { v: "99.9%", l: "Uptime shipped" },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <p className="text-2xl font-bold text-[#1a1917] leading-none">{v}</p>
                    <p className="t-caption mt-1.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
