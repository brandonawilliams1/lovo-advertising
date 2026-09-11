import { useState } from 'react';
import { Icon } from './Icon';
import { NAV_LINKS } from '../data/content';
import { useScrolled } from '../hooks/useScrollReveal';
import '../styles/header.css';

export default function Header({ onNavigateAbout, onNavigateHome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    onNavigateHome();
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigateAbout();
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="logo" onClick={handleLogoClick}>
          <img
            src="/lovo_logo1_bkgrd_removed.PNG"
            alt="LoVo Advertising"
            className="logo-image"
          />
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-line top"></span>
            <span className="hamburger-line middle"></span>
            <span className="hamburger-line bottom"></span>
          </span>
        </button>

        {menuOpen && (
          <nav className="dropdown-menu animate-scale-in" role="menu">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    role="menuitem"
                  >
                    <span className="dropdown-num">0{NAV_LINKS.indexOf(link) + 1}</span>
                    <span className="dropdown-label">{link.label}</span>
                    <Icon name="arrow" size={16} className="dropdown-arrow" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#about"
                  onClick={handleAboutClick}
                  role="menuitem"
                >
                  <span className="dropdown-num">06</span>
                  <span className="dropdown-label">About Us</span>
                  <Icon name="arrow" size={16} className="dropdown-arrow" />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
