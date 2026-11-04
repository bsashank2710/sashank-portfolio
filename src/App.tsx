import { useEffect, useState } from 'react'
import { TOOLS, TOTAL_ACTIONS } from './data/activity'
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
        <div>
          <p className="rail-kicker">New York · NYU CS ’26</p>
          <a className="identity" href={href('/')}>
            <span>Sashank</span>
            <span>Badri</span>
            <span>Narayan</span>
          </a>
          <p className="rail-tag">{SITE.tagline}</p>
        </div>
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
        <a className="rail-mail" href={SITE.email}>
          Email me
        </a>
      </aside>
      <main className="page">{children}</main>
    </div>
  )
}

function Home() {
  return (
    <div className="canvas">
      <header className="intro">
        <p>
          I sit in the customer’s stack, ship the integration, and measure whether the agent actually
          did the work. API clients, tool-calling pipelines, eval harnesses.
        </p>
      </header>

      <section>
        <div className="section-head">
          <h2>Agents</h2>
          <span>{TOTAL_ACTIONS.toLocaleString()} sessions</span>
        </div>
        <ul className="chips">
          {TOOLS.map((tool) => (
            <li key={tool.id}>
              <i style={{ background: tool.color }} />
              {tool.name}
              <b>{tool.sessions}</b>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-head">
          <h2>Notes</h2>
        </div>
        <div className="card-grid">
          {WRITINGS.map((w) => (
            <a key={w.slug} className="card" href={href(`/writings/${w.slug}`)}>
              <h3>{w.title}</h3>
              <p>{w.excerpt}</p>
              <span>
                {w.date} · {w.tags[0]}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

function WorkItemRow({ item }: { item: (typeof BUILDING)[number] }) {
  return (
    <li className="card work-card">
      <h3>{item.name}</h3>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </li>
  )
}

function Work() {
  return (
    <div className="canvas">
      <header className="intro">
        <h1>Work</h1>
        <p>What I am building now, and what already shipped.</p>
      </header>

      <section>
        <div className="section-head">
          <h2>Now</h2>
        </div>
        <ul className="card-grid">
          {BUILDING.map((item) => (
            <WorkItemRow key={item.name} item={item} />
          ))}
        </ul>
      </section>

      <section>
        <div className="section-head">
          <h2>Shipped</h2>
        </div>
        <ul className="card-grid">
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
    <div className="canvas">
      <header className="intro">
        <h1>Library</h1>
        <p>What I am reading, and what I want to read next.</p>
      </header>

      <section>
        <div className="section-head">
          <h2>Now</h2>
        </div>
        <ul className="book-grid">
          {CURRENTLY_READING.map((b) => (
            <li key={b.title} className="is-now">
              <strong>{b.title}</strong>
              <span>{b.author}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-head">
          <h2>Next</h2>
        </div>
        <ul className="book-grid">
          {LIBRARY.map((b) => (
            <li key={`${b.title}-${b.author}`}>
              <strong>{b.title}</strong>
              <span>{b.author}</span>
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
      <div className="canvas">
        <a className="back" href={href('/')}>
          All notes
        </a>
        <p>That piece isn't here.</p>
      </div>
    )
  }
  return (
    <article className="article">
      <a className="back" href={href('/')}>
        All notes
      </a>
      <span className="meta">{post.date}</span>
      <h1>{post.title}</h1>
      <p className="meta">{post.tags.join(' · ')}</p>
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
