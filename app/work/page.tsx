'use client'

import { useState } from 'react'
import ManneShell, { ButtonLink, SectionLabel } from '@/components/manne-shell'
import { CTA, PageHero, ProjectCard } from '@/components/manne-content'

const filters = ['All work', 'Digital product', 'Brand experience', 'Intelligent systems']
const projects = [
  { number: '01', title: <>Make the complex<br />feel simple.</>, type: 'Digital product / 2026', variant: 'blue', category: 'Digital product' },
  { number: '02', title: <>Give the idea<br />a point of view.</>, type: 'Brand experience / 2026', variant: 'violet', category: 'Brand experience' },
  { number: '03', title: <>Build a system<br />that learns.</>, type: 'Intelligent systems / 2026', variant: 'orange', category: 'Intelligent systems' },
]

export default function WorkPage() {
  const [filter, setFilter] = useState('All work')
  const visible = projects.filter((project) => filter === 'All work' || project.category === filter)
  return <ManneShell><PageHero eyebrow="Selected work / Ideas with intent" index="03 / 05" title={<>Work that<br /><em>moves things.</em></>} description="A growing archive of digital products, brand worlds, and intelligent systems shaped with ambitious teams." />
    <section className="section-shell work-index"><div className="work-index__top"><SectionLabel>01 / Project archive</SectionLabel><div className="filter-list" role="tablist">{filters.map((item) => <button className={filter === item ? 'filter-pill filter-pill--active' : 'filter-pill'} key={item} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div></div><div className="project-stack project-stack--rich">{visible.map((project) => <ProjectCard key={project.number} {...project} />)}</div></section><section className="case-feature section-shell"><div className="case-feature__art"><span>CASE STUDY<br />COMING SOON</span></div><div className="case-feature__copy"><SectionLabel>02 / Featured direction</SectionLabel><h2>The next<br /><em>chapter.</em></h2><p>We are currently selecting a small number of partnerships for the next season of Manne work.</p><ButtonLink href="/contact">Discuss your project</ButtonLink></div></section><CTA /></ManneShell>
}
