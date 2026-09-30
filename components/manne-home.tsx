'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Plus } from 'lucide-react'
import { ButtonLink, SectionLabel } from './manne-shell'
import { services, ProjectCard, process } from './manne-content'

const techGroups = [
  { name: 'Front end', words: ['React', 'Next.js', 'WebGL', 'Motion'] },
  { name: 'Back end', words: ['Node', 'Python', 'Postgres', 'APIs'] },
  { name: 'Intelligence', words: ['LLMs', 'Agents', 'Vision', 'Data'] },
]

export default function ManneHome() {
  const [activeService, setActiveService] = useState(0)
  const [activeTech, setActiveTech] = useState(0)
  return <>
    <section className="hero hero--new" id="top">
      <div className="hero__topline"><span>Independent studio / India + everywhere</span><span>Scroll to discover ↓</span></div>
      <div className="hero__visual" aria-hidden="true"><div className="hero__visual-grid" /><div className="hero__visual-orbit hero__visual-orbit--one" /><div className="hero__visual-orbit hero__visual-orbit--two" /><div className="hero__visual-m"><i /><i /><i /></div><span className="hero__visual-label">Signal / 001</span></div>
      <div className="hero__copy hero__copy--new"><p className="eyebrow">Manne / creative technology studio</p><h1>We build<br /><em>what&apos;s next.</em></h1><p className="hero__description">A design-led technology studio for ambitious ideas, digital products, and the systems that make them real.</p><ButtonLink href="/contact">Start a conversation</ButtonLink></div>
      <div className="hero__bottom"><span><span className="status-dot" /> Available for select projects</span><span>Manne IT Solutions / 2026</span></div>
    </section>

    <section className="statement section-shell statement--new"><SectionLabel>01 / Point of view</SectionLabel><div className="statement__body"><h2>We make<br /><span>the future</span><br />feel <em>obvious.</em></h2><div className="statement__aside"><p>MANNE exists at the intersection of creative thinking and technical depth. We turn early signals into clear directions, and clear directions into digital experiences people choose to use.</p><ButtonLink href="/about">Meet the studio</ButtonLink></div></div><div className="statement__marquee" aria-hidden="true"><span>IDEA → SIGNAL → SYSTEM → CULTURE → IDEA → SIGNAL → SYSTEM</span></div></section>

    <section className="home-services section-shell services--new"><div className="section-heading"><SectionLabel>02 / Capabilities</SectionLabel><h2>Many crafts.<br /><em>One point of view.</em></h2><p>Hover a discipline. The right mix of craft is already in the room.</p></div><div className="service-list service-list--new">{services.map(([number, name, description, tags], index) => <button className={activeService === index ? 'service-row service-row--active' : 'service-row'} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} key={name}><span className="service-number">{number}</span><span className="service-name">{name}</span><span className="service-description">{description}</span><span className="service-tags">{tags}</span><ArrowUpRight className="service-arrow" size={21} /></button>)}</div><div className="service-preview"><span>Currently exploring</span><span className="service-preview__line" /><strong>{services[activeService][1]}</strong></div></section>

    <section className="technology section-shell tech--new"><div className="tech-layout"><div><SectionLabel>03 / Technology</SectionLabel><h2 className="tech__title">The tools<br /><em>change.</em><br />The intent<br /><span>doesn&apos;t.</span></h2><p className="tech__note">We use the right technology for the right question. No cargo cults. No unnecessary complexity.</p></div><div className="tech-world"><div className="tech-tabs">{techGroups.map((group, index) => <button className={activeTech === index ? 'tech-tab tech-tab--active' : 'tech-tab'} onClick={() => setActiveTech(index)} key={group.name}>{group.name}<Plus size={17} /></button>)}</div><div className="tech-stage tech-stage--new"><span className="tech-stage__label">Stack / 0{activeTech + 1}</span><div className="tech-words">{techGroups[activeTech].words.map((word, index) => <span style={{ '--i': index } as React.CSSProperties} key={word}>{word}</span>)}</div><div className="tech-stage__footer"><span>Built to evolve</span><span>● Live system</span></div></div></div></div></section>

    <section className="work section-shell work--new"><div className="work__intro"><SectionLabel>04 / Selected work</SectionLabel><h2>Good work<br /><em>travels.</em></h2><p>Placeholder projects today. The next case study could be yours.</p></div><div className="project-stack project-stack--new"><ProjectCard number="01" title={<>Make the complex<br />feel simple.</>} type="Digital product / 2026" /><ProjectCard number="02" title={<>Give the idea<br />a point of view.</>} type="Brand experience / 2026" variant="violet" /></div><ButtonLink href="/work">Explore all work</ButtonLink></section>

    <section className="method section-shell method--new"><div className="method__head"><div><SectionLabel>05 / Process</SectionLabel><h2>Less theatre.<br /><em>More traction.</em></h2></div><p className="method__lede">A compact, collaborative process that keeps the thinking sharp and the work moving.</p></div><div className="process-list">{process.map(([number, title, description]) => <div className="process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowDownRight size={18} /></div>)}</div></section>

    <section className="why section-shell why--new"><SectionLabel>06 / Why Manne</SectionLabel><div className="why__statement"><h2>Built for the<br /><em>in-between.</em></h2><p>Where brand meets product. Where strategy meets shipping. Where a sharp point of view meets the patience to make it real.</p></div><div className="why__list">{['Small by design', 'Senior by default', 'Clarity over theatre', 'Curious by nature', 'Built to last'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></section>

    <section className="contact section-shell contact--new"><div className="contact__top"><span>07 / Make something</span><span>We&apos;re listening</span></div><h2>Bring us the<br /><em>interesting problem.</em></h2><div className="contact__form-wrap"><div className="contact__prompt"><span>Start here →</span><p>Tell us what you&apos;re thinking. The rough version is usually the most useful.</p><ButtonLink href="/contact" inverse>Open the brief</ButtonLink></div><div className="contact__signal" aria-hidden="true"><span>MANNE / OPEN CHANNEL</span><strong>+</strong><span>REPLY WITHIN 2–3 DAYS</span></div></div></section>
  </>
}
