import { ArrowUpRight } from 'lucide-react'
import ManneShell, { ButtonLink, SectionLabel } from '@/components/manne-shell'
import { CTA, PageHero, process, services } from '@/components/manne-content'

export default function ServicesPage() {
  return <ManneShell><PageHero eyebrow="Capabilities / Built around the brief" index="02 / 05" title={<>One team.<br /><em>Many disciplines.</em></>} description="A flexible studio model for brand, product, engineering, and the intelligence connecting it all." />
    <section className="section-shell services-directory"><div className="section-heading"><SectionLabel>01 / The directory</SectionLabel><h2>Choose your<br /><em>starting point.</em></h2><p>Good work does not fit into neat boxes. Every engagement gets the combination it needs.</p></div><div className="service-cards">{services.map(([number, name, description, tags]) => <article className="service-card" key={name}><div className="service-card__top"><span>{number}</span><ArrowUpRight size={20} /></div><h3>{name}</h3><p>{description}</p><span className="service-card__tags">{tags}</span></article>)}</div></section>
    <section className="section-shell service-method"><div className="method__head"><SectionLabel>02 / How it comes together</SectionLabel><h2>Strategy<br /><em>in motion.</em></h2></div><div className="process-list">{process.map(([number, name, description]) => <div className="process-row" key={name}><span>{number}</span><h3>{name}</h3><p>{description}</p><ArrowUpRight size={19} /></div>)}</div></section><CTA />
  </ManneShell>
}
