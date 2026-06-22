import { useState } from 'react';
import { cv } from '../assets/docs/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#acerca-de-mi', label: 'Acerca de mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent text-xl font-semibold tracking-wider">
          LE
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-accent text-accent text-sm font-mono px-4 py-2 rounded hover:bg-accent-dim transition-colors duration-300"
            >
              Descargar CV
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary text-xl"
          aria-label="Menú de navegación"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-md border-b border-border-subtle">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-block border border-accent text-accent text-sm font-mono px-4 py-2 rounded hover:bg-accent-dim transition-colors duration-300"
              >
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
