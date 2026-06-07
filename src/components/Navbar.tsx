'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#tools', label: 'Ferramentas' },
  { href: '#experience', label: 'Experiência' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#education', label: 'Formação' },
  { href: '#contact', label: 'Contato' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const ids = LINKS.map((link) => link.href.slice(1));

    const updateActive = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = ids[0];

      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActiveId(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="page-header">
      <div className="container navbar">
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          Maria Clara <span>Gama</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? 'is-open' : ''}`}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              className={`nav-link ${activeId === link.href.slice(1) ? 'active' : ''}`}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
