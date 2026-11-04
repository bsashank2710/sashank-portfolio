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
  const onIndex = path === '/' || path.startsWith('/writings/')
  return (
    <div className="frame">
      <header className="top">
        <a className="top-mark" href={href('/')}>
          S.B.N
        </a>
        <nav>
          <a className={onIndex ? 'is-on' : ''} href={href('/')}>
            Notes
          </a>
          <a className={path === '/work' ? 'is-on' : ''} href={href('/work')}>
            Work
          </a>
          <a className={path === '/library' ? 'is-on' : ''} href={href('/library')}>
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
      {children}
      <footer className="colophon">
        <a href={SITE.email}>{SITE.email.replace('mailto:', '')}</a>
        <span>New York, 2026</span>
      </footer>
    </div>
  )
}

function Home() {
  return (
    <div>
      <section className="cover">
        <p className="place">New York · NYU CS ’26</p>
        <h1 className="poster">
          <em>Sashank</em>
          <span>Badri Narayan</span>
        </h1>
        <p className="standfirst">
          I sit in the customer’s stack, ship the integration, and measure whether the agent actually
          did the work. API clients, tool-calling pipelines, eval harnesses.
        </p>
      </section>

      <section className="credits">
        <p className="label">
          Sessions <i>{TOTAL_ACTIONS.toLocaleString()}</i>
        </p>
        <p className="credit-line">
          {TOOLS.map((tool, i) => (
            <span key={tool.id}>
              {tool.name} {tool.sessions}
              {i < TOOLS.length - 1 ? '  /  ' : ''}
            </span>
          ))}
        </p>
      </section>

      <section className="spread">
        <p className="label">Notes</p>
        <ol className="toc">
          {WRITINGS.map((w, i) => (
            <li key={w.slug}>
              <a href={href(`/writings/${w.slug}`)}>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="toc-body">
                  <strong>{w.title}</strong>
                  <em>{w.excerpt}</em>
                  <small>
                    {w.date} · {w.tags[0]}
                  </small>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

function WorkItemRow({ item }: { item: (typeof BUILDING)[number] }) {
  return (
    <li className="piece">
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
    <div className="spread page-spread">
      <header className="page-open">
        <p className="label">Selected work</p>
        <h1>Work</h1>
        <p className="standfirst">What I am building now, and what already shipped.</p>
      </header>
      <div className="split">
        <section>
          <p className="label">Now</p>
          <ul className="pieces">
            {BUILDING.map((item) => (
              <WorkItemRow key={item.name} item={item} />
            ))}
          </ul>
        </section>
        <section>
          <p className="label">Shipped</p>
          <ul className="pieces">
            {ON_THE_WEB.map((item) => (
              <WorkItemRow key={item.name} item={item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

function Library() {
  return (
    <div className="spread page-spread">
      <header className="page-open">
        <p className="label">On the desk</p>
        <h1>Library</h1>
        <p className="standfirst">What I am reading, and what I want to read next.</p>
      </header>
      <div className="split">
        <section>
          <p className="label">Now</p>
          <ul className="shelf">
            {CURRENTLY_READING.map((b) => (
              <li key={b.title}>
                <em>{b.title}</em>
                <span>{b.author}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="label">Next</p>
          <ul className="shelf">
            {LIBRARY.map((b) => (
              <li key={`${b.title}-${b.author}`}>
                <em>{b.title}</em>
                <span>{b.author}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

function Writing({ slug }: { slug: string }) {
  const post = getWriting(slug)
  if (!post) {
    return (
      <div className="spread page-spread">
        <a className="index-link" href={href('/')}>
          Index
        </a>
        <p className="standfirst">That piece isn't here.</p>
      </div>
    )
  }
  return (
    <article className="essay">
      <a className="index-link" href={href('/')}>
        Index
      </a>
      <p className="label">{post.date}</p>
      <h1>{post.title}</h1>
      <p className="label">{post.tags.join(' · ')}</p>
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
