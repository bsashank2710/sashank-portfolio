export interface AgentBrand {
  id: string
  name: string
  sessions: number
  color: string
}

export const TOOLS: AgentBrand[] = [
  { id: 'cursor', name: 'Cursor', sessions: 394, color: '#111111' },
  { id: 'claude', name: 'Claude Code', sessions: 371, color: '#d97757' },
  { id: 'codex', name: 'Codex', sessions: 286, color: '#10a37f' },
  { id: 'copilot', name: 'GitHub Copilot', sessions: 218, color: '#6e40c9' },
  { id: 'openclaw', name: 'OpenClaw', sessions: 142, color: '#c45c26' },
  { id: 'windsurf', name: 'Windsurf', sessions: 119, color: '#0e8f8c' },
  { id: 'gemini', name: 'Gemini CLI', sessions: 88, color: '#4285f4' },
  { id: 'cline', name: 'Cline', sessions: 67, color: '#5b6abf' },
]

export interface HeatCell {
  level: number
  tool?: AgentBrand
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pickTool(rand: () => number) {
  const total = TOOLS.reduce((sum, tool) => sum + tool.sessions, 0)
  let n = rand() * total
  for (const tool of TOOLS) {
    n -= tool.sessions
    if (n <= 0) return tool
  }
  return TOOLS[TOOLS.length - 1]
}

const LEVEL_MIX = [0, 48, 68, 86, 100]

export function cellColor(cell: HeatCell) {
  if (!cell.tool || cell.level <= 0) return undefined
  return `color-mix(in srgb, ${cell.tool.color} ${LEVEL_MIX[cell.level]}%, transparent)`
}

export function buildHeatmap(weeks = 26) {
  const rand = mulberry32(27102026)
  const cells: HeatCell[] = []
  for (let w = 0; w < weeks; w++) {
    const late = w / (weeks - 1)
    for (let d = 0; d < 7; d++) {
      const p = 0.16 + late * 0.52
      if (rand() > p) {
        cells.push({ level: 0 })
        continue
      }
      const level = late > 0.7 && rand() > 0.35 ? 3 + Math.floor(rand() * 2) : 1 + Math.floor(rand() * 3)
      cells.push({ level, tool: pickTool(rand) })
    }
  }
  return cells
}

export const HEATMAP = buildHeatmap()
export const TOTAL_ACTIONS = TOOLS.reduce((sum, tool) => sum + tool.sessions, 0)
