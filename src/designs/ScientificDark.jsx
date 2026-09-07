import { Link } from 'react-router-dom'
import {
  education,
  experience,
  links,
  person,
  profileSrc,
  projects,
  publications,
  sections,
  skills,
} from '../content.js'
import Carousel from '../lib/Carousel.jsx'
import { doiHref, scrollToId, useHashScroll, useMobileNav, useRevealOnScroll } from '../lib/hooks.js'
import { GitHubIcon, LinkedInIcon, NtnuIcon, OrcidIcon } from '../lib/icons.jsx'
import './ScientificDark.css'

function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>
      <a href={links.github} target="_blank" rel="noreferrer">
        <GitHubIcon />
        <span>GitHub</span>
      </a>
      <a href={links.ntnu} target="_blank" rel="noreferrer">
        <NtnuIcon />
        <span>NTNU</span>
      </a>
      <a href={links.orcid} target="_blank" rel="noreferrer">
        <OrcidIcon />
        <span>ORCID</span>
      </a>
    </div>
  )
}

export default function ScientificDark() {
  const { open, setOpen } = useMobileNav()
  useRevealOnScroll()
  useHashScroll()

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <div className="sci">
      <div className="sci-grid" aria-hidden="true" />
      <header className="sci-nav">
        <Link className="sci-brand" to="/">
          ADS · v1
        </Link>
        <button
          className="sci-burger"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? 'is-open' : ''} aria-label="Page">
          {sections.map((section) => (
            <button key={section.id} type="button" onClick={() => go(section.id)}>
              {section.label}
            </button>
          ))}
          <Link to="/">All designs</Link>
        </nav>
      </header>

      <main>
        <section className="sci-hero" id="about">
          <p className="sci-kicker" data-reveal>
            CHANNEL / CMIC · NTNU · TRONDHEIM
          </p>
          <div className="sci-hero-grid">
            <div>
              <h1 data-reveal>
                {person.name}
                <em>, {person.degree}</em>
              </h1>
              <p className="sci-title" data-reveal>
                {person.title}
              </p>
              <p className="sci-tag" data-reveal>
                {person.tagline}
              </p>
              <p className="sci-summary" data-reveal>
                {person.summary}
              </p>
              <div className="sci-contacts" data-reveal>
                <a href={`mailto:${person.email}`}>{person.email}</a>
                <a href={person.phoneHref}>{person.phone}</a>
                <span>{person.location}</span>
              </div>
              <div data-reveal>
                <SocialLinks className="sci-links" />
              </div>
            </div>
            <figure className="sci-portrait" data-reveal>
              <img src={profileSrc} alt={`Portrait of ${person.name}`} width="360" height="360" />
              <figcaption>PROFILE · LIVE</figcaption>
            </figure>
          </div>
        </section>

        <section className="sci-section" id="experience">
          <header data-reveal>
            <span>01</span>
            <h2>Experience</h2>
          </header>
          <div data-reveal>
            <Carousel
              items={experience}
              ariaLabel="Experience"
              renderItem={(job) => (
                <article className="sci-card">
                  <p className="sci-when">
                    {job.dates} · {job.place}
                  </p>
                  <h3>{job.role}</h3>
                  <p className="sci-org">{job.org}</p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              )}
            />
          </div>
        </section>

        <section className="sci-section" id="projects">
          <header data-reveal>
            <span>02</span>
            <h2>Selected Projects</h2>
          </header>
          <div data-reveal>
            <Carousel
              items={projects}
              ariaLabel="Selected projects"
              renderItem={(project) => (
                <a className="sci-card sci-project" href={project.url} target="_blank" rel="noreferrer">
                  <span className="sci-when">
                    {project.featured ? 'Featured' : project.stars != null ? `${project.stars}★` : ''}
                  </span>
                  <h3>
                    {project.name}
                    {project.aka ? <small> / {project.aka}</small> : null}
                  </h3>
                  <p>{project.blurb}</p>
                </a>
              )}
            />
          </div>
        </section>

        <section className="sci-section" id="education">
          <header data-reveal>
            <span>03</span>
            <h2>Education</h2>
          </header>
          <div data-reveal>
            <Carousel
              items={education}
              ariaLabel="Education"
              renderItem={(item) => (
                <article className="sci-card">
                  <p className="sci-when">{item.dates}</p>
                  <h3>{item.degree}</h3>
                  <p className="sci-org">{item.school}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              )}
            />
          </div>
        </section>

        <section className="sci-section" id="publications">
          <header data-reveal>
            <span>04</span>
            <h2>Publications</h2>
          </header>
          <div data-reveal>
            <Carousel
              items={publications}
              ariaLabel="Publications"
              renderItem={(pub) => (
                <a className="sci-card sci-pub" href={doiHref(pub.doi)} target="_blank" rel="noreferrer">
                  <span className="sci-when">{pub.year}</span>
                  <h3>{pub.title}</h3>
                  <p>
                    {pub.journal}
                    {pub.firstAuthor ? ' · first author' : ''}
                    {pub.cites ? ` · ${pub.cites}` : ''}
                  </p>
                </a>
              )}
            />
          </div>
        </section>

        <section className="sci-section" id="skills">
          <header data-reveal>
            <span>05</span>
            <h2>Skills</h2>
          </header>
          <ul className="sci-skills" data-reveal>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="sci-section sci-last" id="contact">
          <header data-reveal>
            <span>06</span>
            <h2>Contact</h2>
          </header>
          <div className="sci-contact-grid" data-reveal>
            <a className="sci-card" href={`mailto:${person.email}`}>
              <p className="sci-when">Email</p>
              <h3>{person.email}</h3>
            </a>
            <a className="sci-card" href={person.phoneHref}>
              <p className="sci-when">Phone</p>
              <h3>{person.phone}</h3>
            </a>
            <article className="sci-card">
              <p className="sci-when">Location</p>
              <h3>{person.location}</h3>
            </article>
          </div>
          <SocialLinks className="sci-links sci-links-lg" />
        </section>
      </main>

      <footer className="sci-foot">
        <Link to="/">Compare designs</Link>
        <Link to="/v3">C · Bold</Link>
      </footer>
    </div>
  )
}
