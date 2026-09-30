'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ManneShell, { SectionLabel } from '@/components/manne-shell'
import { PageHero } from '@/components/manne-content'

const projectTypes = ['Web development', 'Mobile app', 'AI / ML solution', 'UI/UX design', 'Digital marketing', 'Cybersecurity', 'Other']

export default function ContactPage() {
  const [selected, setSelected] = useState('')
  return <ManneShell><PageHero eyebrow="Contact / Let&apos;s make a start" index="05 / 05" title={<>Bring us the<br /><em>interesting problem.</em></>} description="Tell us what you are trying to make, change, or understand. We will come back with a thoughtful next step." />
    <section className="section-shell inquiry"><div className="contact__top"><SectionLabel>01 / Project inquiry</SectionLabel><span>Available for select projects</span></div><div className="contact__form-wrap"><div className="contact__prompt"><span>01</span><p>I&apos;m looking for...</p><div className="choice-list">{projectTypes.map((type) => <button className={selected === type ? 'choice choice--active' : 'choice'} key={type} onClick={() => setSelected(type)}>{type}<span>{selected === type ? 'Selected' : '+'}</span></button>)}</div><div className="availability-panel"><span>Current availability</span><strong>Taking on new conversations for Q3 2026.</strong><p>For partnerships, press, or anything else, email hello@manne.studio</p></div></div><form className="contact__fields" onSubmit={(event) => event.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>Company<input placeholder="Company name" /></label><div className="field-row"><label>Budget<select defaultValue=""><option value="" disabled>Select range</option><option>€10k — €25k</option><option>€25k — €50k</option><option>€50k+</option></select></label><label>Timeline<select defaultValue=""><option value="" disabled>Select timing</option><option>ASAP</option><option>1 — 3 months</option><option>3 — 6 months</option></select></label></div><label>Tell us about it<textarea placeholder="A little about the challenge..." rows={5} /></label><button type="submit" className="form-submit">Send inquiry <ArrowUpRight size={18} /></button></form></div></section></ManneShell>
}
