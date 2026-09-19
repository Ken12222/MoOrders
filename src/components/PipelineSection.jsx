import { Box, Server, Zap } from 'lucide-react'
import { CheckBadge } from './Icons'
import { pipeline } from '../content'
import './PipelineSection.css'

/* Diagram coordinates live in a 500 x 296 box so it scales as one piece. */
const PATH_OUT = 'M280 42 H484 Q490 42 490 48 V140 Q490 146 484 146 H470'
const PATH_BACK = 'M70 250 H20 Q14 250 14 244 V152 Q14 146 20 146 H190'
const DOTS = [
  [280, 42],
  [470, 146],
  [190, 146],
  [70, 250],
]

export default function PipelineSection() {
  const { nodes } = pipeline

  return (
    <section className="container pipe" id={pipeline.id} aria-labelledby="pipe-title">
      <header className="pipe__head">
        <h2 id="pipe-title">{pipeline.title}</h2>
        <p>{pipeline.lead}</p>
      </header>

      <div className="pipe__body">
        <div className="pipe__copy">
          <h3>{pipeline.heading}</h3>
          <p className="pipe__text">{pipeline.body}</p>

          <p className="pipe__list-title">{pipeline.listTitle}</p>
          <ul className="pipe__list">
            {pipeline.list.map((item) => (
              <li key={item}>
                <CheckBadge size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flow" role="img" aria-label={pipeline.diagramLabel}>
          <div className="flow__stage" aria-hidden="true">
            <span className="flow__plate" />

            <svg className="flow__lines" viewBox="0 0 500 296" preserveAspectRatio="none">
              <path d={PATH_OUT} />
              <path d={PATH_BACK} />
            </svg>

            {/* {DOTS.map(([x, y]) => (
              <span
                key={`${x}-${y}`}
                className="flow__dot"
                style={{ left: `${(x / 500) * 100}%`, top: `${(y / 296) * 100}%` }}
              />
            ))} */}

            <div className="node node--start">
              <div className="node__row">
                <span className="node__icon node__icon--green">
                  <Zap />
                </span>
                <span className="node__title">{nodes.start.title}</span>
              </div>
              <div className="node__chips">
                <span className="chip chip--sky">{nodes.start.chips[0]}</span>
                <span className="node__joiner">{nodes.start.joiner}</span>
                <span className="chip chip--sky">{nodes.start.chips[1]}</span>
              </div>
            </div>

            <div className="node node--confirm">
              <div className="node__row">
                <span className="node__icon">
                  <Box />
                </span>
                <span className="node__title">{nodes.confirm.title}</span>
              </div>
              <div className="node__chips">
                <span className="chip chip--lav chip--code">{nodes.confirm.chip}</span>
              </div>
            </div>

            <div className="node node--send">
              <div className="node__row">
                <span className="node__icon">
                  <Server />
                </span>
                <span className="node__title">{nodes.send.title}</span>
              </div>
              <div className="node__chips">
                <span className="chip chip--sky chip--code">{nodes.send.chip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
