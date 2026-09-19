import { cards } from '../content'
import './FeatureCards.css'

export default function FeatureCards() {
  return (
    <section className="cards" id={cards.id} aria-label="Key features">
      {/* Decorative stepped blocks behind the second card */}
      {/* <svg className="cards__pixels" viewBox="0 0 355 198" aria-hidden="true" focusable="false">
        <path d="M315 0H355V40H315Z" />
        <path d="M285 40H315V80H355V198H315V158H79V198H0V127H285Z" />
      </svg> */}

      <div className="inner cards__grid">
        {cards.items.map((card) => (
          <article key={card.title} className="card">
            <p className="card__tag">{card.tag}</p>
            <h3 className="card__title">{card.title}</h3>
            <p className="card__body">{card.body}</p>
            {/* <a className="btn btn--primary card__cta" href={card.href}>
              {card.cta}
            </a> */}
          </article>
        ))}
      </div>
    </section>
  )
}
