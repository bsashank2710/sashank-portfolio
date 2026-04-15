"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    area: "Backend Systems",
    desc: "Go, Python, C++, TypeScript · REST APIs, gRPC, Microservices, Event-Driven Architecture · FastAPI, Node.js",
  },
  {
    area: "Cloud & Infrastructure",
    desc: "AWS (EC2, Lambda, S3, EKS), GCP (GKE, Vertex AI) · Kubernetes, Docker, Terraform, Helm · CI/CD pipelines at scale",
  },
  {
    area: "Security",
    desc: "Penetration testing, OWASP · PKI, Applied Cryptography · Threat Modeling, IDS/IPS, SIEM · CCNA, PCNSE certified",
  },
  {
    area: "AI & Applied ML",
    desc: "LLMs, RAG pipelines, LangChain · PyTorch, TensorFlow, HuggingFace · MLflow, TensorRT · Production model deployment",
  },
  {
    area: "Observability",
    desc: "Prometheus, Grafana, OpenTelemetry · ELK Stack, Distributed Tracing · DataDog · Production incident response",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#e8e4db]">
      <div className="page-container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="t-label mb-3">Capabilities</p>
          <h2 className="t-title">What I Work With</h2>
        </motion.div>

        <div>
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-16 py-7 border-t border-[#e8e4db]"
            >
              <p className="font-semibold text-[0.9375rem] text-[#1a1917] pt-0.5">{c.area}</p>
              <p className="t-body text-[0.9375rem] leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
          <div className="border-t border-[#e8e4db]" />
        </div>
      </div>
    </section>
  );
}
