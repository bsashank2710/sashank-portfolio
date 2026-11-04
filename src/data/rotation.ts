export interface RotationItem {
  id: string
  title: string
  year: string
  blurb: string
  tone: string
  ink: string
  tag: string
}

export const ROTATION: RotationItem[] = [
  {
    id: 'lights-out',
    title: 'Lights Out',
    year: '2026',
    tag: 'F1',
    blurb: 'Sunday afternoons. The lights go, the room goes quiet, and I stop pretending I am doing anything else.',
    tone: '#7a1f1f',
    ink: '#f4e7c8',
  },
  {
    id: 'wet-quali',
    title: 'Wet Quali',
    year: '2025',
    tag: 'F1',
    blurb: 'Intermediates, a drying line, and people on the timeline who have never seen rain.',
    tone: '#1d3d4a',
    ink: '#e8f2f4',
  },
  {
    id: 'long-game',
    title: 'The Long Game',
    year: '2025',
    tag: 'Poker',
    blurb: 'Small pots, bad beats, and the same measurement problem as production: the average hand is a press release.',
    tone: '#1f4a32',
    ink: '#e7f3ea',
  },
  {
    id: 'night-practice',
    title: 'Night Practice',
    year: '2024',
    tag: 'F1',
    blurb: 'Abu Dhabi lights, a laptop on the couch, telemetry in one window and the race in the other.',
    tone: '#2b2150',
    ink: '#f0e6ff',
  },
  {
    id: 'parc-ferme',
    title: 'Parc Fermé',
    year: '2024',
    tag: 'F1',
    blurb: 'The part after the noise. What actually happened, once the quotes cool off.',
    tone: '#c4a35a',
    ink: '#2a2114',
  },
  {
    id: 'sunday-swim',
    title: 'Sunday Swim',
    year: '2023',
    tag: 'Lap',
    blurb: 'A pool is honest. The wall is there. The time is there. No leaderboard required.',
    tone: '#4a7c8a',
    ink: '#eaf6f8',
  },
]
