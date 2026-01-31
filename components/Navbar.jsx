'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo / Name */}
      <a href="#" className="navbar-logo">
        <img
          src="/images/logo.png"
          alt="S&S Logo"
          style={{ height: '45px', width: 'auto', borderRadius: '4px' }}
        />
        <span>S&S <span style={{ color: '#dc2626' }}>IMPRESA EDILE</span></span>
      </a>

      {/* Burger Button (nur auf Handy sichtbar) */}
      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <li>
          <a href="#servizi" onClick={() => setMenuOpen(false)}>Servizi</a>
        </li>
        <li>
          <a href="#progetti" onClick={() => setMenuOpen(false)}>Lavori</a>
        </li>
        <li>
          <a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>
        </li>
        <li>
          <a href="tel:3884293583" className="chiamaci-btn" onClick={() => setMenuOpen(false)}>
            Chiamaci
          </a>
        </li>
      </ul>
    </nav>
  )
}
