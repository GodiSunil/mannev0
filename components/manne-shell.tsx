'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export function Mark({ small = false }: { small?: boolean }) {
  return <span className={small ? 'manne-mark manne-mark--small' : 'manne-mark'} aria-hidden="true"><span /><span /><span /></span>
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span className="section-label__dot" />{children}</p>
}

export function ButtonLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return <Link className={inverse ? 'magnetic-button magnetic-button--inverse' : 'magnetic-button'} href={href}>{children}<ArrowUpRight size={17} strokeWidth={1.6} /></Link>
}

export default function ManneShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <main className="manne-page"><div className="grain" aria-hidden="true" /><div className="cursor-glow" aria-hidden="true" />
    <header className={`${menuOpen ? 'site-header site-header--open' : 'site-header'}${scrolled ? ' site-header--scrolled' : ''}`}>
      <Link className="brand" href="/" aria-label="Manne home"><Mark small /><span>MANNE</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link className={pathname === link.href ? 'nav-active' : ''} href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <Link className="header-contact" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
    </header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[...links, { href: '/contact', label: 'Contact' }].map((link) => <Link href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={18} /></Link>)}</nav>}
    {children}
    <footer className="site-footer"><div className="footer__top"><Link className="brand" href="/"><Mark small /><span>MANNE</span></Link><p>Creative technology<br />for what&apos;s next.</p><Link className="footer-up" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div><div className="footer-word">MANNE</div><div className="footer__bottom"><span>© MANNE IT SOLUTIONS PRIVATE LIMITED</span><span>Built for the next idea.</span></div></footer>
  </main>
}
