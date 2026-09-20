import { BadgeCheck, Languages, Moon, Timer } from 'lucide-react'
import { stats } from '../content'
import './StatsStrip.css'

const ICONS = { timer: Timer, moon: Moon, badge: BadgeCheck, languages: Languages }

export default function StatsStrip() {
  return (
    <section className="stats" aria-label="MoStock at a glance">
      {/* Decorative blocks peeking in from the left edge */}
      <svg className="stats__blocks" viewBox="0 0 122 341" aria-hidden="true" focusable="false">
        <rect x="0" y="0" width="75" height="42" />
        <rect x="0" y="49" width="75" height="219" />
        <rect x="81" y="49" width="41" height="219" />
        <rect x="0" y="274" width="75" height="42" />
      </svg>

      <ul className="inner stats__list">
        {stats.map(({ icon, value, label }) => {
          const Icon = ICONS[icon]
          return (
            <li key={label} className="stats__item">
              <span className="stats__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <strong className="stats__value">{value}</strong>
              <span className="stats__label">{label}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
