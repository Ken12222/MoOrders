import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { CheckBadge } from './Icons'
import HeroDemo from './HeroDemo'
import { hero, links } from '../content'
import './Hero.css'

export default function Hero() {
  const [runId, setRunId] = useState(0)
  const demoRef = useRef(null)

  const watch = () => {
    setRunId((n) => n + 1)
    demoRef.current?.scrollIntoView({ block: 'center' })
  }

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__panel">
        <h1 id="hero-title" className="hero__title">
          {hero.title}
        </h1>
        <p className="hero__lead">{hero.lead}</p>

        <div className="hero__actions">
          <a className="btn btn--lg btn--primary" href={links.demo}>
            {hero.primaryCta}
          </a>
          <button type="button" className="btn btn--lg btn--soft" onClick={watch}>
            <Play size={16} fill="currentColor" aria-hidden="true" />
            {hero.secondaryCta}
          </button>
        </div>

        <ul className="hero__trust">
          {hero.trust.map((text) => (
            <li key={text}>
              <CheckBadge size={16} />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__demo" ref={demoRef}>
        <HeroDemo runId={runId} onReplay={() => setRunId((n) => n + 1)} />
      </div>
    </section>
  )
}
