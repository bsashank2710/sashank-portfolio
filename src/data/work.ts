export interface WorkItem {
  name: string
  year: string
  icon: string
  points: [string, string, string]
}

export const EXPERIENCE: WorkItem[] = [
  {
    name: 'Graduate Assistant, NYU',
    year: '2025',
    icon: 'monitor',
    points: [
      'Linux labs for 120+ students',
      'Python autograders. Grading time cut in half',
      'FastAPI and React boards for uptime and latency',
    ],
  },
  {
    name: 'SDE Intern, ODStudio',
    year: '2025',
    icon: 'bolt',
    points: [
      'Partner APIs with retries, backoff, and rate limits',
      '10K+ events a day at 99.9% uptime',
      'Tool-calling agents cut manual support about 60%',
    ],
  },
  {
    name: 'Founder, HowdyDoo',
    year: '2023',
    icon: 'ticket',
    points: [
      'Live-event platform. 5,000+ users, 25+ events',
      'Technical point of contact from discovery to the door',
      'Automated ticketing and LLM recommendations',
    ],
  },
  {
    name: 'Blockchain / Backend, Softcons',
    year: '2024',
    icon: 'search',
    points: [
      'C++ engine on EVM mempool streams',
      'About 30% faster on the critical path',
      'Python replay and adversarial tests for integrators',
    ],
  },
  {
    name: 'Cybersecurity Analyst, Softcons',
    year: '2024',
    icon: 'check',
    points: [
      '20+ OWASP pentests',
      'Log triage. Four hours down to 90 minutes',
      'Traced attack paths, then tightened firewall rules',
    ],
  },
  {
    name: 'Software Intern, Tatva',
    year: '2023',
    icon: 'map',
    points: [
      'Logistics APIs and dashboards for 100+ distributors',
      'Routes cut cost about 25% and latency about 18%',
      '90% adoption in three months',
    ],
  },
]

export const PROJECTS: WorkItem[] = [
  {
    name: 'Agent harness profiler',
    year: '2026',
    icon: 'gauge',
    points: [
      'Log every model and tool call on Harbor tasks',
      'Measure TTFT, ITL, and throughput',
      'Compare reasoning models, subagents, and long-horizon tool use',
    ],
  },
  {
    name: 'Web research pipeline',
    year: '2025',
    icon: 'search',
    points: [
      'Plan queries, fetch with Playwright, return valid JSON',
      'Held-out accuracy above 90% with retries and citation checks',
      'Cut research time about 70%',
    ],
  },
  {
    name: 'Code review agent',
    year: '2025',
    icon: 'check',
    points: [
      'Static analysis plus a tool-using LLM on pull requests',
      'Automate about 70% of routine comments',
      'Cut review cycle time 45% in GitHub Actions',
    ],
  },
  {
    name: 'API gateway',
    year: '2025',
    icon: 'bolt',
    points: [
      'Go, Redis, Kubernetes. JWT and per-tenant rate limits',
      '10K+ RPS at 99.9% uptime',
      'Cut p99 latency about 30%',
    ],
  },
  {
    name: 'APEX F1',
    year: '2025',
    icon: 'flag',
    points: [
      'Expo app and FastAPI backend for Formula 1',
      'OpenF1, Ergast, and FastF1 data',
      'A bit of AI race intel on top',
    ],
  },
  {
    name: 'where2',
    year: '2025',
    icon: 'map',
    points: [
      'Live heatmap of Charleston nightlife',
      'See how busy a spot is before you walk in',
      'Web app. No account required',
    ],
  },
  {
    name: 'Lab PC status',
    year: '2025',
    icon: 'monitor',
    points: [
      'Real-time health for lab machines',
      'Uptime, load, and failure signals',
      'Built for NYU labs',
    ],
  },
  {
    name: 'agentic-payments',
    year: '2025',
    icon: 'ticket',
    points: [
      'Cross-chain payment analytics',
      'Hedera Agent Kit and Base',
      'Agents that can follow the money',
    ],
  },
]
