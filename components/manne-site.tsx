'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'

const services = [
  ['01', 'Digital Marketing', 'Make the right people stop, look, and remember.'],
  ['02', 'Graphic Design', 'Visual systems with clarity, character, and intent.'],
  ['03', 'UI/UX Design', 'Interfaces that feel obvious in the best possible way.'],
  ['04', 'Web Development', 'Fast, expressive digital experiences built to move.'],
  ['05', 'Mobile Development', 'Product thinking, carried into every pocket.'],
  ['06', 'MCP Development', 'Connected tools and intelligent workflows for modern teams.'],
  ['07', 'AI and ML Development', 'Useful intelligence shaped around the work that matters.'],
  ['08', 'Cybersecurity', 'Quiet confidence for the systems behind the surface.'],
  ['09', 'Video Editing', 'Motion, rhythm, and stories that hold attention.'],
]

const technologyGroups = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Motion'],
  Backend: ['Node.js', 'APIs', 'Python', 'Data'],
  Intelligence: ['AI systems', 'ML workflows', 'MCPs', 'Automation'],
  Foundations: ['Cloud', 'Security', 'DevOps', 'Databases'],
}

const process = [
  ['01', 'Discover', 'Ask better questions before making anything.'],
  ['02', 'Define', 'Find the signal, the shape, and the opportunity.'],
  ['03', 'Design', 'Turn strategy into something people can feel.'],
  ['04', 'Develop', 'Build with precision, flexibility, and momentum.'],
  ['05', 'Deploy', 'Launch the work into the real world.'],
  ['06', 'Evolve', 'Keep improving long after the first release.'],
]

function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? 'manne-mark manne-mark--small' : 'manne-mark'} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span className="section-label__dot" />{children}</p>
}

function MagneticButton({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <a className={inverse ? 'magnetic-button magnetic-button--inverse' : 'magnetic-button'} href="#contact">{children}<ArrowUpRight size={17} strokeWidth={1.6} /></a>
}

export default function ManneSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(3)
  const [activeTech, setActiveTech] = useState<keyof typeof technologyGroups>('Frontend')
  const [projectType, setProjectType] = useState('')

  return (
    <main className="manne-page">
      <div className="grain" aria-hidden="true" />
      <header className={menuOpen ? 'site-header site-header--open' : 'site-header'}>
        <a className="brand" href="#top" aria-label="Manne home"><Mark small /><span>MANNE</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {['Services', 'Technologies', 'Work', 'About'].map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{['Services', 'Technologies', 'Work', 'About', 'Contact'].map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={18} /></a>)}</nav>}

      <section className="hero" id="top">
        <div className="hero__topline"><span>MANNE IT SOLUTIONS PRIVATE LIMITED</span><span>Digital technology studio / 2026</span></div>
        <div className="hero__content">
          <div className="hero__mark-wrap"><Mark /><span className="hero__orbit hero__orbit--one" /><span className="hero__orbit hero__orbit--two" /></div>
          <div className="hero__copy"><p className="eyebrow">Creative technology for what&apos;s next</p><h1>We build<br /><em>what&apos;s next.</em></h1><p className="hero__description">A design-led technology studio for ambitious ideas, digital products, and the systems that make them real.</p><MagneticButton>Start a project</MagneticButton></div>
        </div>
        <div className="hero__bottom"><span>Scroll to explore <ArrowDownRight size={16} /></span><span>01 / 09</span></div>
      </section>

      <section className="statement section-shell" id="about">
        <SectionLabel>01 / The point of view</SectionLabel>
        <div className="statement__body"><h2>We design.<br /><span>We develop.</span><br />We engineer.<br /><em>We evolve.</em></h2><div className="statement__aside"><p>MANNE exists at the intersection of creative thinking and technical depth. We turn early signals into clear directions, and clear directions into digital experiences people choose to use.</p><a href="#contact">More about Manne <ArrowUpRight size={16} /></a></div></div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading"><SectionLabel>02 / What we do</SectionLabel><h2>One team.<br /><em>Many disciplines.</em></h2><p>From a first sketch to a living system, the right mix of craft is already in the room.</p></div>
        <div className="service-list">{services.map(([number, name, description], index) => <button className={activeService === index ? 'service-row service-row--active' : 'service-row'} key={name} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)}><span className="service-number">{number}</span><span className="service-name">{name}</span><span className="service-description">{description}</span><ArrowUpRight className="service-arrow" size={21} /></button>)}</div>
        <div className="service-preview"><span>Currently exploring</span><strong>{services[activeService][1]}</strong><span className="service-preview__line" /></div>
      </section>

      <section className="technology section-shell" id="technologies"><div className="section-heading"><SectionLabel>03 / The toolkit</SectionLabel><h2>The technology<br /><em>behind the ideas.</em></h2></div><div className="tech-layout"><div className="tech-tabs" role="tablist" aria-label="Technology categories">{Object.keys(technologyGroups).map((group) => <button className={activeTech === group ? 'tech-tab tech-tab--active' : 'tech-tab'} key={group} onClick={() => setActiveTech(group as keyof typeof technologyGroups)} role="tab" aria-selected={activeTech === group}>{group}<ArrowUpRight size={14} /></button>)}</div><div className="tech-stage"><div className="tech-stage__label">{activeTech} / Selected capabilities</div><div className="tech-words">{technologyGroups[activeTech].map((tech, index) => <span key={tech} style={{ '--i': index } as React.CSSProperties}>{tech}</span>)}</div><div className="tech-stage__footer"><span>Capabilities are shaped around the brief.</span><span>Not a logo wall.</span></div></div></div></section>

      <section className="work section-shell" id="work"><div className="work__intro"><SectionLabel>04 / Selected work</SectionLabel><h2>Work with<br /><em>intent.</em></h2><p>Every engagement starts with a question. The projects below are placeholders for the work Manne is here to make with you.</p></div><div className="project-stack"><article className="project project--blue"><span className="project__number">01</span><div className="project__visual"><div className="visual-lines" /><span>Replace with<br />project visual</span></div><div className="project__meta"><span>Digital product / 2026</span><h3>Make the complex<br />feel simple.</h3></div></article><article className="project project--violet"><span className="project__number">02</span><div className="project__visual"><div className="visual-grid" /><span>Replace with<br />project visual</span></div><div className="project__meta"><span>Brand experience / 2026</span><h3>Give the idea<br />a point of view.</h3></div></article></div></section>

      <section className="method section-shell"><div className="method__head"><SectionLabel>05 / The Manne method</SectionLabel><h2>From idea<br /><em>to impact.</em></h2></div><div className="process-list">{process.map(([number, name, description]) => <div className="process-row" key={name}><span>{number}</span><h3>{name}</h3><p>{description}</p><ArrowUpRight size={19} /></div>)}</div></section>

      <section className="why section-shell"><SectionLabel>06 / Why Manne</SectionLabel><div className="why__statement"><h2>Ideas are easy.<br /><em>Execution is everything.</em></h2><p>We bring the creative ambition, technical discipline, and follow-through to take good ideas somewhere worth going.</p></div><div className="why__list">{['Creative thinking', 'Technical depth', 'End-to-end execution', 'Design-led development', 'Long-term partnership'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></section>

      <section className="contact section-shell" id="contact"><div className="contact__top"><SectionLabel>07 / Start a conversation</SectionLabel><span>Available for select projects</span></div><h2>Let&apos;s build<br /><em>something extraordinary.</em></h2><div className="contact__form-wrap"><div className="contact__prompt"><span>01</span><p>I&apos;m looking for...</p><div className="choice-list">{['Web development', 'Mobile app', 'AI / ML solution', 'UI/UX design', 'Digital marketing', 'Cybersecurity', 'Other'].map((type) => <button className={projectType === type ? 'choice choice--active' : 'choice'} key={type} onClick={() => setProjectType(type)}>{type}<span>{projectType === type ? 'Selected' : '+'}</span></button>)}</div></div><form className="contact__fields" onSubmit={(event) => event.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>Company<input placeholder="Company name" /></label><label>Tell us about it<textarea placeholder="A little about the challenge..." rows={3} /></label><button type="submit" className="form-submit">Start a conversation <ArrowUpRight size={18} /></button></form></div></section>

      <footer className="site-footer"><div className="footer__top"><a className="brand" href="#top"><Mark small /><span>MANNE</span></a><p>Creative technology<br />for what&apos;s next.</p><a className="footer-up" href="#top">Back to top <ArrowUpRight size={16} /></a></div><div className="footer-word">MANNE</div><div className="footer__bottom"><span>© MANNE IT SOLUTIONS PRIVATE LIMITED</span><span>Built for the next idea.</span></div></footer>
    </main>
  )
}
