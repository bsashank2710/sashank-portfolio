export interface IndexItem {
  name: string
  year: string
  icon: string
}

export interface WorkItem {
  name: string
  points: [string, string, string]
}

export const EXPERIENCE_INDEX: IndexItem[] = [
  { name: 'Graduate Assistant, NYU', year: '2025', icon: 'monitor' },
  { name: 'SDE Intern, ODStudio', year: '2025', icon: 'bolt' },
  { name: 'Founder, HowdyDoo', year: '2023', icon: 'ticket' },
  { name: 'Blockchain / Backend, Softcons', year: '2024', icon: 'search' },
  { name: 'Cybersecurity Analyst, Softcons', year: '2024', icon: 'check' },
  { name: 'Software Intern, Tatva', year: '2023', icon: 'map' },
]

export const PROJECTS: IndexItem[] = [
  { name: 'Agent harness profiler', year: '2026', icon: 'gauge' },
  { name: 'Web research pipeline', year: '2025', icon: 'search' },
  { name: 'Code review agent', year: '2025', icon: 'check' },
  { name: 'API gateway', year: '2025', icon: 'bolt' },
  { name: 'APEX F1', year: '2025', icon: 'flag' },
  { name: 'where2', year: '2025', icon: 'map' },
  { name: 'Lab PC status', year: '2025', icon: 'monitor' },
  { name: 'agentic-payments', year: '2025', icon: 'ticket' },
]

export const EXPERIENCE: WorkItem[] = [
  {
    name: 'NYU, Graduate Assistant',
    points: [
      'Linux labs for 120+ students',
      'Python autograders. Grading time cut in half',
      'FastAPI and React boards for uptime and latency',
    ],
  },
  {
    name: 'ODStudio, SDE Intern',
    points: [
      'Partner APIs with retries, backoff, and rate limits',
      '10K+ events a day at 99.9% uptime',
      'Tool-calling agents cut manual support about 60%',
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
      'Log triage. Four hours down to 90 minutes',
      'Traced attack paths, then tightened firewall rules',
    ],
  },
  {
    name: 'Tatva Enterprises, Software Intern',
    points: [
      'Logistics APIs and dashboards for 100+ distributors',
      'Routes cut cost about 25% and latency about 18%',
      '90% adoption in three months',
    ],
  },
]

export const PROJECT_DETAILS: WorkItem[] = [
  {
    name: 'Coding Agent Harness Profiler',
    points: [
      'Log every model and tool call on Harbor tasks',
      'Measure TTFT, ITL, and throughput',
      'Compare reasoning models, subagents, and long-horizon tool use',
    ],
  },
  {
    name: 'Agentic Web Research Pipeline',
    points: [
      'Plan queries, fetch with Playwright, return valid JSON',
      'Held-out accuracy above 90% with retries and citation checks',
      'Cut research time about 70%',
    ],
  },
  {
    name: 'LLM Code Review Agent',
    points: [
      'Static analysis plus a tool-using LLM on pull requests',
      'Automate about 70% of routine comments',
      'Cut review cycle time 45% in GitHub Actions',
    ],
  },
  {
    name: 'High-Throughput API Gateway',
    points: [
      'Go, Redis, Kubernetes. JWT and per-tenant rate limits',
      '10K+ RPS at 99.9% uptime',
      'Cut p99 latency about 30%',
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
    name: 'where2',
    points: [
      'Live heatmap of Charleston nightlife',
      'See how busy a spot is before you walk in',
      'Web app. No account required',
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
