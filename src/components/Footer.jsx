import Logo from './Logo'
import { brand, footer } from '../content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo tone="light" />
          <p>{brand.tagline}</p>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          {footer.columns.map((col) => (
            <div key={col.title} id={col.id}>
              <h2 className="footer__title">{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container footer__legal">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <ul>
          {footer.legal.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
