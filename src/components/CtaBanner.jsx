import { closing, links } from '../content'
import './CtaBanner.css'

/** Translucent blocks that sit in the bottom corners of the banner. */
function Blocks({ flip = false }) {
  return (
    <svg
      className={`closing__blocks ${flip ? 'closing__blocks--right' : 'closing__blocks--left'}`}
      viewBox="0 0 209 166"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="22" y="0" width="154" height="28" />
      <rect x="22" y="33" width="154" height="133" />
      <rect x="0" y="33" width="18" height="133" />
      <rect x="181" y="33" width="28" height="133" />
    </svg>
  )
}

export default function CtaBanner() {
  return (
    <section className="closing" id={closing.id} aria-labelledby="closing-title">
      <div className="container closing__card">
        <Blocks />
        <Blocks flip />

        <h2 id="closing-title">{closing.title}</h2>
        <p className="closing__body">{closing.body}</p>
        <a className="btn btn--lg btn--white" href={links.signup}>
          {closing.cta}
        </a>
        <p className="closing__note">{closing.note}</p>
      </div>
    </section>
  )
}
