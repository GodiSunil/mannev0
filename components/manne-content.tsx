import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { ButtonLink, SectionLabel } from './manne-shell'

export const services = [
  ['01', 'Digital marketing', 'Make the right people stop, look, and remember.', 'Strategy, content, growth'],
  ['02', 'Graphic design', 'Visual systems with clarity, character, and intent.', 'Identity, campaigns, art direction'],
  ['03', 'UI/UX design', 'Interfaces that feel obvious in the best possible way.', 'Research, product, prototyping'],
  ['04', 'Web development', 'Fast, expressive digital experiences built to move.', 'Websites, platforms, commerce'],
  ['05', 'Mobile development', 'Product thinking, carried into every pocket.', 'iOS, Android, cross-platform'],
  ['06', 'MCP development', 'Connected tools and intelligent workflows for modern teams.', 'Agents, integrations, automation'],
  ['07', 'AI and ML development', 'Useful intelligence shaped around the work that matters.', 'Models, copilots, data systems'],
  ['08', 'Cybersecurity', 'Quiet confidence for the systems behind the surface.', 'Audits, hardening, monitoring'],
  ['09', 'Video editing', 'Motion, rhythm, and stories that hold attention.', 'Launch films, social, explainers'],
]

export const process = [
  ['01', 'Discover', 'Ask better questions before making anything.'],
  ['02', 'Define', 'Find the signal, the shape, and the opportunity.'],
  ['03', 'Design', 'Turn strategy into something people can feel.'],
  ['04', 'Develop', 'Build with precision, flexibility, and momentum.'],
  ['05', 'Deploy', 'Launch the work into the real world.'],
  ['06', 'Evolve', 'Keep improving long after the first release.'],
]

export function PageHero({ eyebrow, title, description, index }: { eyebrow: string; title: React.ReactNode; description: string; index: string }) {
  return <section className="route-hero"><div className="route-hero__top"><span>{eyebrow}</span><span>{index}</span></div><div className="route-hero__grid"><div className="route-hero__orb"><span className="hero-ring hero-ring--a" /><span className="hero-ring hero-ring--b" /><span className="hero-cross">+</span></div><div className="route-hero__copy"><p className="eyebrow">Manne / creative technology studio</p><h1>{title}</h1><p className="route-hero__description">{description}</p></div></div><div className="route-hero__bottom"><span>Scroll to explore <ArrowDownRight size={16} /></span><span>Manne IT Solutions / 2026</span></div></section>
}

export function ProjectCard({ number, title, type, variant = 'blue' }: { number: string; title: React.ReactNode; type: string; variant?: string }) {
  return <article className={`project project--${variant}`}><span className="project__number">{number}</span><div className="project__visual"><div className={variant === 'violet' ? 'visual-grid' : 'visual-lines'} /><span>Selected project<br />visual system</span></div><div className="project__meta"><span>{type}</span><h3>{title}</h3></div></article>
}

export function CTA() { return <section className="cta-band section-shell"><SectionLabel>Next move</SectionLabel><div className="cta-band__body"><h2>Bring us the<br /><em>interesting problem.</em></h2><ButtonLink href="/contact">Start a conversation</ButtonLink></div></section> }
