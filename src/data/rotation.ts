export interface RotationItem {
  id: string
  title: string
  year: string
  blurb: string
  poster: string
}

export const ROTATION: RotationItem[] = [
  {
    id: 'interstellar',
    title: 'Interstellar',
    year: '2014',
    poster: 'flicks/interstellar.jpg',
    blurb: 'Time dilation, dust, and a watch. Measurement as love story.',
  },
  {
    id: 'shutter-island',
    title: 'Shutter Island',
    year: '2010',
    poster: 'flicks/shutter-island.jpg',
    blurb: 'The logs were there the whole time. We just did not want to read them.',
  },
  {
    id: 'nayakan',
    title: 'Nayakan',
    year: '1987',
    poster: 'flicks/nayakan.jpg',
    blurb: 'Mani Ratnam. Tamil. The one I put on when I need a film to sit with me.',
  },
  {
    id: 'departed',
    title: 'The Departed',
    year: '2006',
    poster: 'flicks/departed.jpg',
    blurb: 'Rats, wires, and a city that never tells you who is inside.',
  },
  {
    id: 'la-la-land',
    title: 'La La Land',
    year: '2016',
    poster: 'flicks/la-la-land.png',
    blurb: 'The ending is the honest part. Most demos never get there.',
  },
  {
    id: 'superbad',
    title: 'Superbad',
    year: '2007',
    poster: 'flicks/superbad.png',
    blurb: 'Still the funniest thing I put on after a long week in the stack.',
  },
]
