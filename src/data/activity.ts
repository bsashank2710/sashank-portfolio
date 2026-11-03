export interface AgentBrand {
  id: string
  name: string
  sessions: number
}

export const TOOLS: AgentBrand[] = [
  { id: 'cursor', name: 'Cursor', sessions: 394 },
  { id: 'claude', name: 'Claude Code', sessions: 371 },
  { id: 'codex', name: 'Codex', sessions: 286 },
  { id: 'copilot', name: 'GitHub Copilot', sessions: 218 },
  { id: 'openclaw', name: 'OpenClaw', sessions: 142 },
  { id: 'windsurf', name: 'Windsurf', sessions: 119 },
  { id: 'gemini', name: 'Gemini CLI', sessions: 88 },
  { id: 'cline', name: 'Cline', sessions: 67 },
]

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function buildHeatmap(weeks = 26) {
  const rand = mulberry32(27102026)
  const cells: number[] = []
  for (let w = 0; w < weeks; w++) {
    const late = w / (weeks - 1)
    for (let d = 0; d < 7; d++) {
      const p = 0.14 + late * 0.5
      if (rand() > p) {
        cells.push(0)
        continue
      }
      const burst = late > 0.7 && rand() > 0.4 ? 3 + Math.floor(rand() * 3) : 1 + Math.floor(rand() * 3)
      cells.push(burst)
    }
  }
  return cells
}

export const HEATMAP = buildHeatmap()
export const TOTAL_ACTIONS = TOOLS.reduce((sum, tool) => sum + tool.sessions, 0)
