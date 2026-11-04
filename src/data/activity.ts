export interface AgentBrand {
  id: string
  name: string
  sessions: number
  color: string
}

export const TOOLS: AgentBrand[] = [
  { id: 'cursor', name: 'Cursor', sessions: 394, color: '#1c1712' },
  { id: 'claude', name: 'Claude Code', sessions: 371, color: '#d97757' },
  { id: 'codex', name: 'Codex', sessions: 286, color: '#1f7a5c' },
  { id: 'copilot', name: 'GitHub Copilot', sessions: 218, color: '#6e40c9' },
  { id: 'openclaw', name: 'OpenClaw', sessions: 142, color: '#c45c26' },
  { id: 'windsurf', name: 'Windsurf', sessions: 119, color: '#0e8f8c' },
  { id: 'gemini', name: 'Gemini CLI', sessions: 88, color: '#3b6fd4' },
  { id: 'cline', name: 'Cline', sessions: 67, color: '#5b6abf' },
]

export const MAX_SESSIONS = Math.max(...TOOLS.map((tool) => tool.sessions))
export const TOTAL_ACTIONS = TOOLS.reduce((sum, tool) => sum + tool.sessions, 0)
