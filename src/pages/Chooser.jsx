import { Link } from 'react-router-dom'
import { links, person, profileSrc, versions } from '../content.js'
import './Chooser.css'

export default function Chooser() {
  return (
    <div className="chooser">
      <div className="chooser-glow" aria-hidden="true" />
      <header className="chooser-top">
        <span className="chooser-mark">ADS</span>
        <nav>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.orcid} target="_blank" rel="noreferrer">
            ORCID
          </a>
        </nav>
      </header>

      <main className="chooser-main">
        <div className="chooser-intro">
          <img
            className="chooser-photo"
            src={profileSrc}
            alt={`Portrait of ${person.name}`}
            width="160"
            height="160"
          />
          <div>
            <p className="chooser-kicker">Three visual versions · one CV</p>
            <h1>
              {person.name}
              <span>, {person.degree}</span>
            </h1>
            <p className="chooser-role">{person.title}</p>
            <p className="chooser-lead">{person.tagline}</p>
            <p className="chooser-meta">
              {person.location} · Compare the designs below. Content is identical
              in every version.
            </p>
          </div>
        </div>

        <section className="chooser-grid" aria-label="Design versions">
          {versions.map((version) => (
            <Link
              key={version.id}
              className={`chooser-card chooser-card-${version.id}`}
              to={version.path}
            >
              <div className="chooser-preview" aria-hidden="true">
                <span className="chooser-preview-bar" />
                <span className="chooser-preview-hero" />
                <span className="chooser-preview-lines">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="chooser-card-body">
                <span className="chooser-letter">{version.letter}</span>
                <h2>{version.name}</h2>
                <p>{version.blurb}</p>
                <span className="chooser-cta">Open {version.id} →</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
