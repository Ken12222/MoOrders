import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav, links } from '../content'
import './Header.css'

function Dropdown({ item, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className="nav__link dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown size={14} aria-hidden="true" className="dropdown__chevron" />
      </button>
      {open && (
        <ul className="dropdown__menu">
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                className="dropdown__item"
                href={child.href}
                onClick={() => {
                  setOpen(false)
                  onNavigate()
                }}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <div className="header__panel" id="site-menu" data-open={menuOpen}>
          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <Dropdown item={item} onNavigate={closeMenu} />
                  ) : (
                    <a className="nav__link" href={item.href} onClick={closeMenu}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            {/* <a className="btn btn--sm btn--soft" href={links.login}>
              Log in
            </a> */}
            <a className="btn btn--sm btn--primary" href={links.demo}>
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
