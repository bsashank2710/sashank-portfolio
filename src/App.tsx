import { useEffect, useState } from 'react'
import { HEATMAP, TOOLS, TOTAL_ACTIONS } from './data/activity'
import { BUILDING, ON_THE_WEB } from './data/work'
import { CURRENTLY_READING, LIBRARY } from './data/library'
import { WRITINGS, getWriting } from './data/writings'
import { SITE } from './data/site'

function pathFromHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  return raw.startsWith('/') ? raw : `/${raw}`
}

function href(to: string) {
  return `#${to}`
}

function Brand({ id }: { id: string }) {
  const fills: Record<string, string> = {
    cursor: '#111',
    claude: '#d97757',
    codex: '#10a37f',
    copilot: '#6e40c9',
    openclaw: '#c45c26',
    windsurf: '#0e8f8c',
    gemini: '#4285f4',
    cline: '#5b6abf',
  }
  const fill = fills[id] ?? '#888'
  if (id === 'openclaw') {
    return (
      <svg className="brand" viewBox="0 0 12 12" aria-hidden="true">
        <circle cx="6" cy="6" r="5.2" fill={fill} />
      </svg>
    )
  }
  if (id === 'gemini') {
    return (
      <svg className="brand" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M6 1.1 10.9 6 6 10.9 1.1 6Z" fill={fill} />
      </svg>
    )
  }
  return (
    <svg className="brand" viewBox="0 0 12 12" aria-hidden="true">
      <rect width="12" height="12" rx="2" fill={fill} />
    </svg>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  const path = pathFromHash()
  return (
    <div className="shell">
      <main className="page">
        <header className="masthead">
          <h1>
            <a href={href('/')}>{SITE.name}</a>
          </h1>
          <nav className="nav">
            <a className={path === '/work' ? 'is-active' : ''} href={href('/work')}>
              Work
            </a>
            <a className={path === '/library' ? 'is-active' : ''} href={href('/library')}>
              Library
            </a>
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </header>
        <p className="tagline">{SITE.tagline}</p>
        {children}
        <footer className="site-footer">
          <p className="kicker">© 2026 {SITE.name}</p>
          <p className="footer-links">
            <a href={SITE.email}>Email</a>
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}

function Heatmap() {
  const level = (n: number) => (n <= 0 ? '' : n === 1 ? 'l1' : n === 2 ? 'l2' : n === 3 ? 'l3' : 'l4')
  return (
    <div className="heatmap" role="img" aria-label="Recent build activity">
      {HEATMAP.map((n, i) => (
        <span key={i} className={`heat-cell ${level(n)}`} title={`${n} sessions`} />
      ))}
    </div>
  )
}

function Home() {
  return (
    <div className="stack">
      <p className="bio">
        NYU CS ’26. I sit in the customer’s stack, ship the integration, and measure whether the agent
        actually did the work. API clients, tool-calling pipelines, eval harnesses. New York.
      </p>

      <section>
        <div className="activity">
          <span className="activity-head">
            <span className="kicker">Build activity</span>
            <span className="activity-count">{TOTAL_ACTIONS.toLocaleString()} sessions</span>
          </span>
          <Heatmap />
        </div>
        <ul className="agents">
          {TOOLS.map((a) => (
            <li key={a.id}>
              <Brand id={a.id} />
              <span>{a.name}</span>
              <span className="n">{a.sessions}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="kicker" style={{ marginBottom: '1.1rem' }}>
          Writings
        </h2>
        <div className="writings">
          {WRITINGS.map((w) => (
            <article key={w.slug}>
              <a className="writing-title" href={href(`/writings/${w.slug}`)}>
                {w.title}
              </a>
              <p className="writing-excerpt">{w.excerpt}</p>
              <p className="writing-meta">
                {w.date}
                {'  ·  '}
                {w.tags.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function WorkItemRow({ item }: { item: (typeof BUILDING)[number] }) {
  return (
    <li className="work-item">
      <span className="work-name">{item.name}</span>
      <ul className="work-points">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </li>
  )
}

function Work() {
  return (
    <div>
      <h2 className="page-title">Work</h2>
      <p className="lede">What I am building now, and what already shipped.</p>

      <h3 className="section-title">Building</h3>
      <ul className="work-list">
        {BUILDING.map((item) => (
          <WorkItemRow key={item.name} item={item} />
        ))}
      </ul>

      <h3 className="section-title">On the web</h3>
      <ul className="work-list">
        {ON_THE_WEB.map((item) => (
          <WorkItemRow key={item.name} item={item} />
        ))}
      </ul>
    </div>
  )
}

function Library() {
  return (
    <div>
      <h2 className="page-title">Library</h2>
      <p className="lede">What I am reading, and what I want to read next.</p>

      <h3 className="section-title">Currently reading</h3>
      <ul className="book-list">
        {CURRENTLY_READING.map((b) => (
          <li key={b.title}>
            {b.title}, <span className="author">{b.author}</span>
          </li>
        ))}
      </ul>

      <h3 className="section-title">To read</h3>
      <ul className="book-list">
        {LIBRARY.map((b) => (
          <li key={`${b.title}-${b.author}`}>
            {b.title}, <span className="author">{b.author}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Writing({ slug }: { slug: string }) {
  const post = getWriting(slug)
  if (!post) {
    return (
      <div>
        <a className="back" href={href('/')}>
          ← Writings
        </a>
        <p className="lede">That piece isn't here.</p>
      </div>
    )
  }
  return (
    <article className="article">
      <a className="back" href={href('/')}>
        ← Writings
      </a>
      <h1>{post.title}</h1>
      <p className="writing-meta">
        {post.date}
        {'  ·  '}
        {post.tags.join(' · ')}
      </p>
      <div className="body">
        {post.body.split(/\n\n+/).map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
    </article>
  )
}

export default function App() {
  const [path, setPath] = useState(pathFromHash)

  useEffect(() => {
    const onHash = () => setPath(pathFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const writing = path.match(/^\/writings\/([^/]+)/)
  const writingSlug = writing ? decodeURIComponent(writing[1]) : null
  const writingPost = writingSlug ? getWriting(writingSlug) : undefined

  useEffect(() => {
    if (path === '/work') document.title = `Work · ${SITE.name}`
    else if (path === '/library') document.title = `Library · ${SITE.name}`
    else if (writingPost) document.title = `${writingPost.title} · ${SITE.name}`
    else document.title = SITE.title
  }, [path, writingPost])

  let inner = <Home />
  if (path === '/work') inner = <Work />
  else if (path === '/library') inner = <Library />
  else if (writingSlug) inner = <Writing slug={writingSlug} />

  return <Layout>{inner}</Layout>
}
