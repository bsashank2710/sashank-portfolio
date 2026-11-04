import { useEffect, useState } from 'react'
import { MAX_SESSIONS, TOOLS, TOTAL_ACTIONS } from './data/activity'
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

function Layout({ children }: { children: React.ReactNode }) {
  const path = pathFromHash()
  const onNotes = path === '/' || path.startsWith('/writings/')
  return (
    <div className="shell">
      <aside className="rail">
        <a className="mark" href={href('/')}>
          SBN
        </a>
        <nav className="nav">
          <a className={onNotes ? 'is-active' : ''} href={href('/')}>
            Notes
          </a>
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
        <p className="rail-meta">New York</p>
      </aside>
      <main className="page">
        {children}
        <footer className="site-footer">
          <span>© 2026 {SITE.name}</span>
          <a href={SITE.email}>Email</a>
        </footer>
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="stack">
      <header className="hero">
        <p className="dateline">New York · NYU CS ’26</p>
        <h1>
          Sashank
          <br />
          Badri Narayan
        </h1>
        <p className="tagline">{SITE.tagline}</p>
        <p className="bio">
          I sit in the customer’s stack, ship the integration, and measure whether the agent actually
          did the work. API clients, tool-calling pipelines, eval harnesses.
        </p>
      </header>

      <section className="panel">
        <div className="panel-head">
          <h2>Sessions</h2>
          <span>{TOTAL_ACTIONS.toLocaleString()}</span>
        </div>
        <ul className="session-bars">
          {TOOLS.map((tool) => (
            <li key={tool.id}>
              <span className="session-name">{tool.name}</span>
              <span className="bar-track">
                <span
                  className="bar-fill"
                  style={{
                    width: `${(tool.sessions / MAX_SESSIONS) * 100}%`,
                    background: tool.color,
                  }}
                />
              </span>
              <span className="session-n">{tool.sessions}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Notes</h2>
        </div>
        <ol className="notes">
          {WRITINGS.map((w, i) => (
            <li key={w.slug}>
              <span className="note-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <a className="writing-title" href={href(`/writings/${w.slug}`)}>
                  {w.title}
                </a>
                <p className="writing-excerpt">{w.excerpt}</p>
                <p className="writing-meta">
                  {w.date}
                  {' · '}
                  {w.tags.join(' · ')}
                </p>
              </div>
            </li>
          ))}
        </ol>
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
    <div className="stack inner">
      <header className="page-head">
        <p className="dateline">Selected work</p>
        <h1 className="page-title">Work</h1>
        <p className="lede">What I am building now, and what already shipped.</p>
      </header>

      <section className="panel">
        <div className="panel-head">
          <h2>Now</h2>
        </div>
        <ul className="work-list">
          {BUILDING.map((item) => (
            <WorkItemRow key={item.name} item={item} />
          ))}
        </ul>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Shipped</h2>
        </div>
        <ul className="work-list">
          {ON_THE_WEB.map((item) => (
            <WorkItemRow key={item.name} item={item} />
          ))}
        </ul>
      </section>
    </div>
  )
}

function Library() {
  return (
    <div className="stack inner">
      <header className="page-head">
        <p className="dateline">On the desk</p>
        <h1 className="page-title">Library</h1>
        <p className="lede">What I am reading, and what I want to read next.</p>
      </header>

      <section className="panel">
        <div className="panel-head">
          <h2>Now</h2>
        </div>
        <ul className="shelf">
          {CURRENTLY_READING.map((b) => (
            <li key={b.title} className="is-now">
              <span className="book-title">{b.title}</span>
              <span className="author">{b.author}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Next</h2>
        </div>
        <ul className="shelf cols">
          {LIBRARY.map((b) => (
            <li key={`${b.title}-${b.author}`}>
              <span className="book-title">{b.title}</span>
              <span className="author">{b.author}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Writing({ slug }: { slug: string }) {
  const post = getWriting(slug)
  if (!post) {
    return (
      <div className="stack inner">
        <a className="back" href={href('/')}>
          Back to notes
        </a>
        <p className="lede">That piece isn't here.</p>
      </div>
    )
  }
  return (
    <article className="article">
      <a className="back" href={href('/')}>
        Back to notes
      </a>
      <p className="dateline">{post.date}</p>
      <h1>{post.title}</h1>
      <p className="writing-meta">{post.tags.join(' · ')}</p>
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
