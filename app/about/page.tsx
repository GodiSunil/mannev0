import { ArrowUpRight } from 'lucide-react'
import ManneShell, { ButtonLink, SectionLabel } from '@/components/manne-shell'
import { CTA, PageHero } from '@/components/manne-content'

const principles = ['Curiosity over certainty', 'Clarity over decoration', 'Useful over impressive', 'Momentum over perfection']

export default function AboutPage() {
  return <ManneShell><PageHero eyebrow="About / A studio with range" index="04 / 05" title={<>Make room<br /><em>for better.</em></>} description="Manne is an independent creative technology studio built for the space between an idea and the world it wants to change." />
    <section className="section-shell about-story"><SectionLabel>01 / Our point of view</SectionLabel><div className="about-story__grid"><h2>Good work<br /><span>has a pulse.</span></h2><div><p>We bring designers, developers, strategists, and curious minds together early. That proximity makes the work sharper, the decisions faster, and the final thing more human.</p><p>We are small by design, with the range to take on large questions. No layers between the thinking and the making.</p></div></div></section>
    <section className="section-shell principles"><div className="section-heading"><SectionLabel>02 / The principles</SectionLabel><h2>What we<br /><em>believe.</em></h2></div><div className="principle-grid">{principles.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><ArrowUpRight size={17} /></article>)}</div></section>
    <section className="section-shell operating-model"><div className="method__head"><SectionLabel>03 / The operating model</SectionLabel><h2>Close to<br /><em>the work.</em></h2></div><div className="operating-model__panel"><div><span>01 / Core team</span><strong>One accountable group from first conversation to final launch.</strong></div><div><span>02 / Flexible bench</span><strong>Specialists join when the problem asks for their perspective.</strong></div><div><span>03 / Long view</span><strong>We make systems that can keep getting better after handoff.</strong></div></div></section><CTA />
  </ManneShell>
}
