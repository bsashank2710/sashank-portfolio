"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    name: "Multi-Region API Gateway",
    bullets: [
      "Built a Go-based API gateway with JWT auth, Redis rate limiting, and Hystrix-style circuit breakers deployed across AWS EKS regions.",
      "Sustained 10,000+ requests per second under load testing with zero cascade failures over six months in production.",
      "Implemented zero-downtime rolling deploys and distributed tracing with Prometheus, achieving 99.9% uptime SLA.",
    ],
    tech: ["Go", "Redis", "Kubernetes", "AWS EKS", "Prometheus"],
    link: "https://github.com/bsashank2710",
  },
  {
    num: "02",
    name: "LLM Code Review Assistant",
    bullets: [
      "Built a GitHub-integrated tool using RAG + GPT-4 to flag anti-patterns, security issues, and style violations on every pull request.",
      "Reduced review cycle time by 45% and automated 70% of routine checks across a 12-engineer team.",
      "Designed a retrieval pipeline over internal coding standards using LangChain and a FAISS vector store.",
    ],
    tech: ["Python", "LangChain", "GPT-4", "FastAPI", "FAISS"],
    link: "https://github.com/bsashank2710",
  },
  {
    num: "03",
    name: "Realtime CI/CD Dashboard",
    bullets: [
      "Full-stack observability platform with live Prometheus metrics, GraphQL subscriptions, and D3.js visualizations.",
      "Adopted by 3 engineering teams as the primary release gate — reduced build failures by 30% within the first month.",
      "Implemented role-based access, pipeline diff views, and Slack alert integrations for on-call workflows.",
    ],
    tech: ["React", "GraphQL", "Prometheus", "D3.js", "Node.js"],
    link: "https://github.com/bsashank2710",
  },
  {
    num: "04",
    name: "AI Incident Triage System",
    bullets: [
      "TensorFlow anomaly detector correlating logs, metrics, and traces to auto-classify incidents before the on-call is paged.",
      "Cut mean time to resolution by 40% and reduced false-positive pages by 60% across production services.",
      "Deployed as a sidecar on Kubernetes, ingesting 50K+ events/day through an Elasticsearch pipeline with MLflow model versioning.",
    ],
    tech: ["TensorFlow", "Elasticsearch", "MLflow", "Kubernetes"],
    link: "https://github.com/bsashank2710",
  },
];

const enter = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-[#e8e4db]">
      <div className="page-container">

        {/* Section header */}
        <motion.div {...enter(0)} className="flex items-baseline justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="t-label mb-3">Selected Work</p>
            <h2 className="t-title">What I&apos;ve Built</h2>
          </div>
          <a href="https://github.com/bsashank2710" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[#9c998f] hover:text-[#1a1917] transition-colors flex items-center gap-1.5">
            All projects <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* All projects — uniform rows */}
        <div className="flex flex-col">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              {...enter(0.1 + i * 0.07)}
              className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-7 border-t border-[#e8e4db] hover:bg-[#f2f0eb] -mx-4 sm:-mx-8 px-4 sm:px-8 rounded-lg transition-colors duration-200"
            >
              <span className="t-label shrink-0 pt-0.5">{p.num}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="t-subhead group-hover:underline underline-offset-2">{p.name}</h3>
                  <ArrowUpRight size={16} className="text-[#9c998f] group-hover:text-[#1a1917] transition-colors shrink-0 mt-0.5" />
                </div>
                <ul className="mt-2 mb-3" style={{ paddingLeft: "1rem", listStyle: "none" }}>
                  {p.bullets.map((b, j) => (
                    <li key={j} className="t-body text-sm" style={{ position: "relative", paddingLeft: "0.875rem", marginBottom: "0.375rem" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.55em", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#9c998f" }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
