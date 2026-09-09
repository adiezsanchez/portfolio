import {
  conferences,
  education,
  experience,
  links,
  person,
  profiles,
  projects,
  publications,
  sections,
  skills,
} from '../content.js'
import { doiHref, scrollToId, useHashScroll, useMobileNav, useRevealOnScroll, useTheme } from '../lib/hooks.js'
import { GitHubIcon, LinkedInIcon, MoonIcon, NtnuIcon, OrcidIcon, SunIcon } from '../lib/icons.jsx'
import './BoldModern.css'

function pillThumbStyle(src) {
  return src ? { '--pill-thumb': `url("${src}")` } : undefined
}

function KeywordLine({ keywords }) {
  return (
    <span className="bold-keywords">
      {keywords.map((keyword, index) => (
        <span key={keyword}>
          {index > 0 ? <i aria-hidden="true">·</i> : null}
          {keyword}
        </span>
      ))}
    </span>
  )
}

function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <LinkedInIcon />
        LinkedIn
      </a>
      <a href={links.github} target="_blank" rel="noreferrer">
        <GitHubIcon />
        GitHub
      </a>
      <a href={links.ntnu} target="_blank" rel="noreferrer">
        <NtnuIcon />
        NTNU
      </a>
      <a href={links.orcid} target="_blank" rel="noreferrer">
        <OrcidIcon />
        ORCID
      </a>
    </div>
  )
}

export default function BoldModern() {
  const { open, setOpen } = useMobileNav()
  const { dark, toggleTheme } = useTheme()
  useRevealOnScroll()
  useHashScroll()

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <div className="bold">
      <header className="bold-nav">
        <a className="bold-logo" href="#about" onClick={(event) => { event.preventDefault(); go('about') }}>
          ADS
        </a>
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
          <button
            type="button"
            className="bold-theme"
            aria-pressed={dark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <section className="bold-hero" id="about">
        <p className="bold-kicker" data-reveal>
          {person.title}
        </p>
        <h1 data-reveal>
          {person.name}, {person.degree}
        </h1>
        <div className="bold-hero-row">
          <img
            src={dark ? profiles.dark : profiles.light}
            alt={`Portrait of ${person.name}`}
            width="280"
            height="280"
            data-reveal
          />
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
            <div data-reveal>
              <SocialLinks className="bold-chips bold-social" />
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

      <section className="bold-block" id="projects">
        <h2 data-reveal>Selected projects</h2>
        <div className="bold-projects">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className={
                index === Math.ceil(projects.length / 2)
                  ? 'bold-media-pill print-page-break'
                  : 'bold-media-pill'
              }
              style={pillThumbStyle(project.image)}
            >
              <KeywordLine keywords={project.keywords} />
              <h3>
                {project.name}
                {project.aka ? <i> / {project.aka}</i> : null}
              </h3>
              <p>{project.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bold-block" id="conferences">
        <h2 data-reveal>Conferences and Workshops</h2>
        <div className="bold-conferences">
          {conferences.map((talk) => (
            <a
              key={talk.url}
              href={talk.url}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="bold-media-pill"
              style={pillThumbStyle(talk.image)}
            >
              <span>{talk.venue}</span>
              <h3>{talk.title}</h3>
            </a>
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

      <section className="bold-block print-page-break" id="publications">
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

      <section className="bold-block" id="skills">
        <h2 data-reveal>Skills</h2>
        <div className="bold-skills" data-reveal>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="bold-block bold-last" id="contact">
        <h2 data-reveal>Contact</h2>
        <div className="bold-chips" data-reveal>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.phoneHref}>{person.phone}</a>
          <span>{person.location}</span>
        </div>
        <div data-reveal>
          <SocialLinks className="bold-chips bold-social" />
        </div>
      </section>

      <footer className="bold-foot">
        <span>
          {person.name}, {person.degree}
        </span>
      </footer>
    </div>
  )
}
