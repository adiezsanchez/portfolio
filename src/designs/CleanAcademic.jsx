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
import { doiHref, scrollToId, useHashScroll, useMobileNav, useRevealOnScroll } from '../lib/hooks.js'
import './CleanAcademic.css'

export default function CleanAcademic() {
  const { open, setOpen } = useMobileNav()
  useRevealOnScroll()
  useHashScroll()

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <div className="aca">
      <header className="aca-nav">
        <div className="aca-running">
          <Link to="/">Díez Sánchez</Link>
          <span>Curriculum Vitae</span>
          <span>v2</span>
        </div>
        <button
          className="aca-burger"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav className={open ? 'is-open' : ''} aria-label="Page">
          {sections.map((section) => (
            <button key={section.id} type="button" onClick={() => go(section.id)}>
              {section.label}
            </button>
          ))}
          <Link to="/">Designs</Link>
        </nav>
      </header>

      <main className="aca-sheet">
        <section className="aca-masthead" id="about">
          <img src={profileSrc} alt={`Portrait of ${person.name}`} width="148" height="148" />
          <div>
            <p className="aca-journal">Personal portfolio · Trondheim, Norway</p>
            <h1>
              {person.name}, <em>{person.degree}</em>
            </h1>
            <p className="aca-title">{person.title}</p>
            <p className="aca-tag">{person.tagline}</p>
            <p className="aca-summary">{person.summary}</p>
            <p className="aca-meta">
              <a href={`mailto:${person.email}`}>{person.email}</a>
              {' · '}
              <a href={person.phoneHref}>{person.phone}</a>
              {' · '}
              {person.location}
            </p>
            <p className="aca-meta">
              <a href={links.orcid} target="_blank" rel="noreferrer">
                ORCID
              </a>
              {' · '}
              <a href={links.ntnu} target="_blank" rel="noreferrer">
                NTNU profile
              </a>
              {' · '}
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              {' · '}
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </section>

        <section id="publications">
          <h2>Selected publications</h2>
          <ol className="aca-pubs">
            {publications.map((pub, index) => (
              <li key={pub.doi} data-reveal>
                <span className="aca-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <cite>
                    <a href={doiHref(pub.doi)} target="_blank" rel="noreferrer">
                      {pub.title}
                    </a>
                  </cite>
                  <p>
                    <em>{pub.journal}</em> ({pub.year})
                    {pub.firstAuthor ? '; first author' : ''}
                    {pub.cites ? `; ${pub.cites}` : ''}. doi:{' '}
                    <a href={doiHref(pub.doi)} target="_blank" rel="noreferrer">
                      {pub.doi}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={job.role} className="aca-entry" data-reveal>
              <header>
                <h3>{job.role}</h3>
                <p>
                  {job.org}, {job.place}. {job.dates}
                </p>
              </header>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          {education.map((item) => (
            <article key={item.degree} className="aca-entry" data-reveal>
              <header>
                <h3>{item.degree}</h3>
                <p>
                  {item.school}. {item.dates}
                </p>
              </header>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="projects">
          <h2>Selected projects</h2>
          <ul className="aca-projects">
            {projects.map((project) => (
              <li key={project.name} data-reveal>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                  {project.aka ? ` / ${project.aka}` : ''}
                </a>
                <span>
                  {project.featured ? 'Featured · ' : ''}
                  {project.stars != null ? `${project.stars}★` : ''}
                </span>
                <p>{project.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills">
          <h2>Skills & correspondence</h2>
          <p className="aca-skills" data-reveal>
            {skills.join(' · ')}
          </p>
          <p className="aca-meta" data-reveal>
            Correspondence: <a href={`mailto:${person.email}`}>{person.email}</a>,{' '}
            <a href={person.phoneHref}>{person.phone}</a>, {person.location}.
          </p>
        </section>
      </main>

      <footer className="aca-foot">
        <Link to="/">Compare all three designs</Link>
        <Link to="/v1">A · Scientific dark</Link>
        <Link to="/v3">C · Bold modern</Link>
      </footer>
    </div>
  )
}
