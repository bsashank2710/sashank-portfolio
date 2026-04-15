"use client";

import { motion } from "framer-motion";

const ROLES = [
  {
    company: "ODStudio",
    role: "Software Development Engineer Intern",
    period: "2025",
    bullets: [
      "Built Go/C++ microservices on Kubernetes handling 10K+ events/day with gRPC inter-service communication.",
      "Reduced P99 latency by 22% through runtime profiling, goroutine pool tuning, and query optimization.",
      "Designed an internal observability stack using Prometheus and Grafana, cutting MTTR for production incidents by 35%.",
    ],
  },
  {
    company: "HowdyDoo",
    role: "Founder & CEO",
    period: "2023",
    bullets: [
      "Scaled an event discovery platform from zero to 5,000+ users across 25+ events in four months.",
      "Architected the full-stack system — Next.js frontend, Node.js API, PostgreSQL — and led a 4-person engineering team.",
      "Cut operational overhead by 40% through automated ticketing, check-in workflows, and vendor coordination tools.",
    ],
  },
  {
    company: "Softcons",
    role: "Blockchain Security Intern",
    period: "2023–2024",
    bullets: [
      "Built EVM packet sniffers and on-chain monitors identifying 50+ malicious smart contract signatures per quarter.",
      "Reduced forensic mean time to resolution by 33% through automated transaction graph analysis.",
      "Developed internal tooling for replay attack detection and abnormal gas usage profiling across EVM-compatible chains.",
    ],
  },
  {
    company: "ODStudio",
    role: "Cybersecurity Analyst Intern",
    period: "2023",
    bullets: [
      "Executed 20+ OWASP-based penetration tests across web and API surfaces, improving overall security posture by 65%.",
      "Automated incident response playbooks reducing resolution time from 4 hours to 90 minutes.",
      "Triaged and remediated SQLi, XSS, and IDOR vulnerabilities, producing detailed risk reports for engineering teams.",
    ],
  },
  {
    company: "Tatva Enterprises",
    role: "Software Developer Intern",
    period: "2022",
    bullets: [
      "Built a logistics management platform supporting $180K+ in annual revenue with real-time shipment tracking.",
      "Implemented graph-based route optimization reducing delivery costs by 25% across 300+ monthly dispatches.",
      "Developed RESTful APIs and an admin dashboard enabling non-technical ops staff to manage orders independently.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#e8e4db]">
      <div className="page-container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="t-label mb-3">Experience</p>
          <h2 className="t-title">Where I&apos;ve Worked</h2>
        </motion.div>

        <div>
          {ROLES.map((r, i) => (
            <motion.div
              key={`${r.company}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-12 py-8 border-t border-[#e8e4db] group"
            >
              {/* Left — company + year */}
              <div className="pt-0.5">
                <p className="font-semibold text-[0.9375rem] text-[#1a1917]">{r.company}</p>
                <p className="t-caption mt-1">{r.period}</p>
              </div>

              {/* Right — role + bullets */}
              <div>
                <p className="text-sm font-medium text-[#5c5a55] mb-3">{r.role}</p>
                <ul style={{ paddingLeft: "1rem", listStyle: "none" }}>
                  {r.bullets.map((b, j) => (
                    <li key={j} className="t-body text-[0.9375rem] leading-relaxed" style={{ position: "relative", paddingLeft: "0.875rem", marginBottom: "0.5rem" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.55em", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#9c998f", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#e8e4db]" />
        </div>
      </div>
    </section>
  );
}
