import { useEffect, useState } from 'react'
import { PROJECTS, BUILDING, ON_THE_WEB } from './data/work'
import { CURRENTLY_READING, LIBRARY } from './data/library'
import { WRITINGS, getWriting } from './data/writings'
import { ROTATION } from './data/rotation'
import { SITE } from './data/site'
import { Portrait, SignOff, TinyIcon } from './doodles'

function pathFromHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  return raw.startsWith('/') ? raw : `/${raw}`
}

function href(to: string) {
  return `#${to}`
}

function yearOf(date: string) {
  const match = date.match(/\d{4}/)
  return match ? match[0] : date
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sheet">
      {children}
      <footer className="foot">
        <SignOff />
        <p className="socials">
          <a href={href('/work')}>Work</a>
          <a href={href('/library')}>Library</a>
          <a href={SITE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={SITE.email}>Email</a>
        </p>
      </footer>
    </div>
  )
}

function Leader({
  icon,
  name,
  year,
  to,
}: {
  icon: string
  name: string
  year: string
  to?: string
}) {
  const inner = (
    <>
      <TinyIcon name={icon} />
      <span className="post-title">{name}</span>
      <span className="post-separator" />
      <span className="post-year">{year}</span>
    </>
  )
  return (
    <li className="post-item">
      {to ? (
        <a className="post-link" href={to}>
          {inner}
        </a>
      ) : (
        <div className="post-link">{inner}</div>
      )}
    </li>
  )
}

function Fan() {
  const [open, setOpen] = useState<string | null>(null)
  const active = ROTATION.find((item) => item.id === open)

  return (
    <div className="fan-wrap">
      <div className="fan">
        {ROTATION.map((item) => (
          <button
            key={item.id}
            className={`cover${open === item.id ? ' is-on' : ''}`}
            style={{ background: item.tone, color: item.ink }}
            onClick={() => setOpen(item.id)}
            type="button"
          >
            <span className="cover-tag">{item.tag}</span>
            <strong>{item.title}</strong>
            <em>{item.year}</em>
          </button>
        ))}
      </div>
      {active && (
        <div className="picked">
          <div className="picked-cover" style={{ background: active.tone, color: active.ink }}>
            <span>{active.tag}</span>
            <strong>{active.title}</strong>
          </div>
          <div className="picked-copy">
            <h3>{active.title}</h3>
            <p>
              {active.tag} · {active.year}
            </p>
            <p>{active.blurb}</p>
            <button type="button" onClick={() => setOpen(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Deck() {
  const [fast, setFast] = useState(false)
  const [on, setOn] = useState(true)
  return (
    <div className={`deck${on ? ' is-on' : ''}${fast ? ' is-fast' : ''}`}>
      <div className="sleeve">
        <span>Parc Fermé</span>
        <small>late night mix</small>
      </div>
      <div className="platter" aria-hidden="true">
        <span className="groove" />
        <span className="label">SBN</span>
      </div>
      <div className="arm" aria-hidden="true" />
      <div className="deck-ui">
        <button type="button" className={!fast ? 'is-set' : ''} onClick={() => setFast(false)}>
          33
        </button>
        <button type="button" className={fast ? 'is-set' : ''} onClick={() => setFast(true)}>
          45
        </button>
        <button type="button" onClick={() => setOn((v) => !v)}>
          {on ? 'pause' : 'play'}
        </button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="home">
      <header className="hello">
        <h1>
          <Portrait />
          <span>Hey, I’m Sashank.</span>
        </h1>
        <p className="intro">
          NYU CS ’26. I ship API integrations and LLM agents, then measure whether they actually did
          the work.
        </p>
        <p className="intro">
          I like <em>F1</em>, poker, swimming, and sitting in a customer’s stack until the 500s make
          sense.
        </p>
      </header>

      <section>
        <h2>Projects</h2>
        <ul className="post-list">
          {PROJECTS.map((item) => (
            <Leader key={item.name} icon={item.icon} name={item.name} year={item.year} />
          ))}
        </ul>
      </section>

      <section>
        <h2>Notes</h2>
        <ul className="post-list">
          {WRITINGS.map((w) => (
            <Leader
              key={w.slug}
              icon="note"
              name={w.title}
              year={yearOf(w.date)}
              to={href(`/writings/${w.slug}`)}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2>Recent flicks</h2>
        <Fan />
      </section>

      <section>
        <h2>Recent jams</h2>
        <Deck />
      </section>
    </div>
  )
}

function WorkItemRow({ item }: { item: (typeof BUILDING)[number] }) {
  return (
    <li className="work-item">
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
    <div className="home">
      <a className="back" href={href('/')}>
        Back
      </a>
      <h1>Work</h1>
      <p className="lede">What I am building now, and what already shipped.</p>
      <h2>Now</h2>
      <ul className="work-list">
        {BUILDING.map((item) => (
          <WorkItemRow key={item.name} item={item} />
        ))}
      </ul>
      <h2>Shipped</h2>
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
    <div className="home">
      <a className="back" href={href('/')}>
        Back
      </a>
      <h1>Library</h1>
      <p className="lede">What I am reading, and what I want to read next.</p>
      <h2>Now</h2>
      <ul className="post-list">
        {CURRENTLY_READING.map((b) => (
          <Leader key={b.title} icon="note" name={b.title} year={b.author} />
        ))}
      </ul>
      <h2>Next</h2>
      <ul className="post-list">
        {LIBRARY.map((b) => (
          <Leader key={b.title} icon="note" name={b.title} year={b.author} />
        ))}
      </ul>
    </div>
  )
}

function Writing({ slug }: { slug: string }) {
  const post = getWriting(slug)
  if (!post) {
    return (
      <div className="home">
        <a className="back" href={href('/')}>
          Back
        </a>
        <p className="intro">That piece isn't here.</p>
      </div>
    )
  }
  return (
    <article className="home article">
      <a className="back" href={href('/')}>
        Back
      </a>
      <h1>{post.title}</h1>
      <p className="meta">
        {post.date} · {post.tags.join(' · ')}
      </p>
      <div className="prose">
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
