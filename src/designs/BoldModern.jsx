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
import './BoldModern.css'

export default function BoldModern() {
  const { open, setOpen } = useMobileNav()
  useRevealOnScroll()
  useHashScroll()

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <div className="bold">
      <header className="bold-nav">
        <Link className="bold-logo" to="/">
          ADS
        </Link>
        <button
          className="bold-burger"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? 'is-open' : ''} aria-label="Page">
          {sections.map((section) => (
            <button key={section.id} type="button" onClick={() => go(section.id)}>
              {section.label}
            </button>
          ))}
          <Link to="/">All three</Link>
        </nav>
      </header>

      <section className="bold-hero" id="about">
        <p className="bold-kicker" data-reveal>
          {person.title}
        </p>
        <h1 data-reveal>
          Alberto
          <br />
          Díez
          <br />
          Sánchez<span>.</span>
        </h1>
        <div className="bold-hero-row">
          <img src={profileSrc} alt={`Portrait of ${person.name}`} width="280" height="280" data-reveal />
          <div>
            <p className="bold-tag" data-reveal>
              {person.tagline}
            </p>
            <p className="bold-summary" data-reveal>
              {person.summary}
            </p>
            <div className="bold-chips" data-reveal>
              <a href={`mailto:${person.email}`}>{person.email}</a>
              <a href={person.phoneHref}>{person.phone}</a>
              <span>{person.location}</span>
            </div>
            <div className="bold-chips" data-reveal>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={links.ntnu} target="_blank" rel="noreferrer">
                NTNU
              </a>
              <a href={links.orcid} target="_blank" rel="noreferrer">
                ORCID
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bold-block" id="experience">
        <h2 data-reveal>Experience</h2>
        <div className="bold-cards">
          {experience.map((job) => (
            <article key={job.role} data-reveal>
              <p>
                {job.dates} · {job.place}
              </p>
              <h3>{job.role}</h3>
              <p className="bold-org">{job.org}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bold-block" id="education">
        <h2 data-reveal>Education</h2>
        <div className="bold-edu">
          {education.map((item) => (
            <article key={item.degree} data-reveal>
              <p>{item.dates}</p>
              <h3>{item.degree}</h3>
              <p className="bold-org">{item.school}</p>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bold-block" id="projects">
        <h2 data-reveal>Selected projects</h2>
        <div className="bold-projects">
          {projects.map((project) => (
            <a key={project.name} href={project.url} target="_blank" rel="noreferrer" data-reveal>
              <span>
                {project.featured ? 'Featured' : project.stars != null ? `${project.stars}★` : ''}
              </span>
              <h3>
                {project.name}
                {project.aka ? <i> / {project.aka}</i> : null}
              </h3>
              <p>{project.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bold-block" id="publications">
        <h2 data-reveal>Publications</h2>
        <div className="bold-pubs">
          {publications.map((pub) => (
            <a key={pub.doi} href={doiHref(pub.doi)} target="_blank" rel="noreferrer" data-reveal>
              <b>
                {pub.year} · {pub.journal}
              </b>
              <span>{pub.title}</span>
              <small>
                {pub.firstAuthor ? 'First author' : ''}
                {pub.firstAuthor && pub.cites ? ' · ' : ''}
                {pub.cites || ''}
              </small>
            </a>
          ))}
        </div>
      </section>

      <section className="bold-block bold-last" id="skills">
        <h2 data-reveal>Skills & contact</h2>
        <div className="bold-skills" data-reveal>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <div className="bold-chips" data-reveal>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.phoneHref}>{person.phone}</a>
          <span>{person.location}</span>
        </div>
      </section>

      <footer className="bold-foot">
        <Link to="/">Compare</Link>
        <Link to="/v1">A Scientific</Link>
        <Link to="/v2">B Academic</Link>
      </footer>
    </div>
  )
}
