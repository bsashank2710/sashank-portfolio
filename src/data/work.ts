export interface WorkItem {
  name: string
  points: [string, string, string]
}

export const BUILDING: WorkItem[] = [
  {
    name: 'Coding Agent Harness Profiler',
    points: [
      'Log every model and tool call on Harbor tasks',
      'Measure TTFT, ITL, and throughput',
      'Compare reasoning models, parallel subagents, and long-horizon tool use',
    ],
  },
  {
    name: 'Agentic Web Research Pipeline',
    points: [
      'Plan queries, fetch with Playwright, return schema-validated JSON',
      'Held-out accuracy above 90% with RAG, retries, and citation checks',
      'Cut research time about 70%',
    ],
  },
  {
    name: 'LLM Code Review Agent',
    points: [
      'Pair static analysis with a tool-using LLM on pull requests',
      'Automate about 70% of routine comments',
      'Cut review cycle time 45% in GitHub Actions',
    ],
  },
  {
    name: 'High-Throughput API Gateway',
    points: [
      'Go, Redis, Kubernetes, with JWT and per-tenant rate limits',
      '10K+ RPS at 99.9% uptime',
      'Cut p99 latency about 30%',
    ],
  },
  {
    name: 'where2',
    points: [
      'Live heatmap of Charleston nightlife',
      'See how busy a spot is before you walk in',
      'Web app. No account required',
    ],
  },
  {
    name: 'APEX F1',
    points: [
      'Expo app and FastAPI backend for Formula 1',
      'OpenF1, Ergast, and FastF1 data',
      'A bit of AI race intel on top',
    ],
  },
  {
    name: 'NYU Lab PC Status',
    points: [
      'Real-time health for lab machines',
      'Uptime, load, and failure signals',
      'Built for NYU labs',
    ],
  },
  {
    name: 'agentic-payments',
    points: [
      'Cross-chain payment analytics',
      'Hedera Agent Kit and Base',
      'Agents that can follow the money',
    ],
  },
]

export const ON_THE_WEB: WorkItem[] = [
  {
    name: 'NYU, Graduate Assistant',
    points: [
      'Linux labs for 120+ students',
      'Python autograders that cut grading about 50%',
      'FastAPI and React boards for uptime and latency',
    ],
  },
  {
    name: 'ODStudio, SDE Intern',
    points: [
      'Partner APIs with retries, backoff, idempotency, and rate limits',
      '10K+ events a day at 99.9% uptime',
      'LLM agents with tool calling that cut manual support about 60%',
    ],
  },
  {
    name: 'HowdyDoo, Founder',
    points: [
      'Live-event platform. 5,000+ users, 25+ events',
      'Technical point of contact from discovery to the door',
      'Automated ticketing and LLM recommendations',
    ],
  },
  {
    name: 'Softcons, Blockchain / Backend',
    points: [
      'C++ engine on EVM mempool streams',
      'About 30% faster on the critical path',
      'Python replay and adversarial tests for integrators',
    ],
  },
  {
    name: 'Softcons, Cybersecurity Analyst',
    points: [
      '20+ OWASP pentests',
      'Python log triage that took incident response from 4 hours to 90 minutes',
      'Traced attack paths with Wireshark and Nmap, then tightened firewall rules',
    ],
  },
  {
    name: 'Tatva Enterprises, Software Intern',
    points: [
      'Logistics APIs and dashboards for 100+ distributors',
      'Route optimization cut cost about 25% and latency about 18%',
      '90% adoption in three months from sitting with operators',
    ],
  },
]
