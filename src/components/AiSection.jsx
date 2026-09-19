import { useState } from 'react'
import { ChevronDown, Mic, Package, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { ai } from '../content'
import './AiSection.css'

const ICONS = { mic: Mic, package: Package, users: Users, shield: ShieldCheck }
const WAVE = [8, 14, 10, 20, 12, 24, 16, 10, 18, 26, 14, 8, 20, 12, 16, 10, 22, 14, 9, 15, 11, 18, 8, 12]

function Toggle({ checked, label, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className="toggle"
      onClick={onChange}
    >
      <span className="toggle__knob" />
    </button>
  )
}

export default function AiSection() {
  const [rules, setRules] = useState(() => ai.rules.items.map((r) => r.on))
  const flip = (i) => setRules((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  return (
    <section className="ai" id={ai.id} aria-labelledby="ai-title">
      <div className="inner ai__grid">
        <div className="ai__copy">
          <h2 id="ai-title">{ai.title}</h2>
          <p className="ai__body">{ai.body}</p>
          <ul className="ai__points">
            {ai.points.map(({ icon, text }) => {
              const Icon = ICONS[icon]
              return (
                <li key={text}>
                  <span className="ai__point-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  {text}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="ai__visual">
          <span className="ai__dots" aria-hidden="true" />

          <div className="ai__panel" aria-hidden="true">
            <div className="voice">
              <span className="voice__mic">
                <Mic size={18} />
              </span>
              <span className="voice__wave">
                {WAVE.map((h, i) => (
                  <i key={i} style={{ height: h }} />
                ))}
              </span>
              <span className="voice__time">{ai.voice.duration}</span>
            </div>

            <div className="transcript">
              <p className="transcript__label">
                <Sparkles size={13} />
                {ai.voice.transcriptLabel}
              </p>
              <p className="transcript__text">{ai.voice.transcript}</p>
            </div>

            <span className="ai__arrow">
              <ChevronDown size={16} />
            </span>

            <div className="matched">
              <p className="matched__title">{ai.matched.title}</p>
              <ul>
                {ai.matched.rows.map((row) => (
                  <li key={row.name}>
                    <span className="matched__name">{row.name}</span>
                    <span className="matched__qty">{row.qty}</span>
                    <span className={`chip chip--${row.tone}`}>{row.stock}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rules">
            <p className="rules__head">{ai.rules.title}</p>
            <ul>
              {ai.rules.items.map((rule, i) => {
                const Icon = ICONS[rule.icon]
                return (
                  <li key={rule.label}>
                    <span className="rules__icon">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span className="rules__label">{rule.label}</span>
                    <Toggle checked={rules[i]} label={rule.label} onChange={() => flip(i)} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <span className="ai__diamond" aria-hidden="true" />
    </section>
  )
}
