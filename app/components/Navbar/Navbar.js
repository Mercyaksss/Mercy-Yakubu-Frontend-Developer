'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.scss';

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Tech Stack', id: 'tech' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 100) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-inner">
          <Link href="/" className="nav-logo">
            Mercy<span>.</span>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={active === id ? 'active' : ''}
                >
                  {label}
                  <span className="link-underline" />
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a
              href="https://www.fiverr.com/s/Ayrj2RQ"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Hire Me <ArrowUpRight size={14} className="cta-arrow" />
            </a>

            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)} className={active === id ? 'active' : ''}>
                <span className="mobile-num">0{NAV_ITEMS.findIndex(i => i.id === id) + 1}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="https://www.fiverr.com/s/Ayrj2RQ"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
        >
          Hire Me on Fiverr <ArrowUpRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
        </a>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}