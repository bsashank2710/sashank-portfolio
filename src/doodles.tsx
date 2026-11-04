export function Portrait() {
  return (
    <svg className="portrait" viewBox="0 0 108 100" aria-hidden="true">
      <g className="say-hi">
        <path
          d="M76 20c0-8 7-14 16-14s16 6 16 14-7 14-16 14c-2.4 0-4.6-.4-6.5-1.2L80 38l2.2-6.4C77.4 29 76 25 76 20z"
          fill="var(--color-bg)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <text x="92" y="24.5" textAnchor="middle" className="say-hi-text">
          hi
        </text>
      </g>
      <path
        d="M28 80c2-14 6-24 16-28 11-4 22 2 26 14 2 8 3 16 3 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 40c2-16 12-28 26-28 12 0 22 8 24 20 1 7-2 14-8 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M30 24c6-8 16-12 26-8 6 2 12 8 14 16M22 36c4-2 8 1 8 6M64 34c5 0 8 4 8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <g className="blink">
        <circle cx="40" cy="42" r="1.4" fill="currentColor" />
        <circle cx="56" cy="42" r="1.4" fill="currentColor" />
      </g>
      <path d="M44 50c3 3 8 3 11 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M34 72c8 8 22 8 32-1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <g className="wave-arm">
        <path
          d="M70 62c9 3 14 11 15 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M84 80c3 3 7 3 9-1M85 78c4 4 8 2 9-2M83 77c2-4 7-5 10-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export function SignOff() {
  return (
    <svg className="sign" viewBox="0 0 180 48" aria-hidden="true">
      <path
        d="M8 30c12-16 18-4 14 6 8-18 18-22 22-8 6-14 16-18 20-4 8-16 22-14 26 2 10-20 28-10 32 6 12-22 36-18 44 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ICONS: Record<string, string> = {
  gauge: 'M4 14a8 8 0 1 1 8-8M12 12l3-3',
  search: 'M11 11l3.5 3.5M7 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z',
  check: 'M3 9l3.5 3.5L13 5',
  bolt: 'M9 2L4 10h5l-1 6 6-9H9z',
  flag: 'M3 14V3h8l-1.5 3L11 9H3',
  map: 'M3 4l4-1 4 1 4-1v11l-4 1-4-1-4 1zM7 3v11M11 4v11',
  ticket: 'M3 6h12v8H3zM3 10h12',
  monitor: 'M3 4h12v8H3zM7 14h4',
  note: 'M5 3h7l3 3v9H5z',
}

export function TinyIcon({ name }: { name: string }) {
  return (
    <svg className="tiny" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={ICONS[name] ?? ICONS.note}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
