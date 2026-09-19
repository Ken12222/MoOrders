import { useEffect, useRef, useState } from 'react'
import { RotateCcw, Server, Sparkles } from 'lucide-react'
import useReducedMotion from '../hooks/useReducedMotion'
import { demo } from '../content'
import './HeroDemo.css'

/**
 * The hero animation plays a WhatsApp order from first message to backend.
 * Each number is the time (ms) at which the next "stage" is reached.
 * Messages in content.js use `at` to say which stage they appear on.
 */
const TIMELINE = [400, 1500, 2700, 4400, 5300, 6300, 8000, 8800, 9600, 10600]
const FINAL = TIMELINE.length
const TYPING_STAGES = [2, 5, 8]

function Skeleton({ width = '70%' }) {
  return <span className="skel" style={{ width }} />
}

export default function HeroDemo({ runId, onReplay }) {
  const reduced = useReducedMotion()
  const frameRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [stage, setStage] = useState(reduced ? FINAL : 0)

  // The demo sits below the fold on many screens, so wait until people can see it.
  useEffect(() => {
    const el = frameRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      // fire once the top of the demo is in the upper 60% of the screen
      { rootMargin: '0px 0px -40% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (reduced) {
      setStage(FINAL)
      return undefined
    }
    setStage(0)
    if (!visible) return undefined
    const timers = TIMELINE.map((ms, i) => setTimeout(() => setStage(i + 1), ms))
    return () => timers.forEach(clearTimeout)
  }, [runId, reduced, visible])

  const { messages, order } = demo
  const running = stage < FINAL
  const confirmed = stage >= 9
  const sent = stage >= FINAL

  let syncText = 'Waiting for confirmation'
  if (stage >= 9) syncText = 'Sending to your dashboard…'
  if (sent) syncText = 'Sent to your dashboard'

  return (
    <div className="demo-frame" ref={frameRef}>
      <p className="sr-only">{demo.screenReaderSummary}</p>

      <div className="demo" aria-hidden="true">
        <div className="demo__stage">
          {/* ---------- Customer's WhatsApp chat ---------- */}
          <div className="phone">
            <div className="phone__head">
              <span className="phone__avatar">SB</span>
              <div>
                <p className="phone__name">{demo.shopName}</p>
                <p className="phone__status">{demo.shopStatus}</p>
              </div>
            </div>

            <div className="phone__chat">
              {messages
                .filter((m) => stage >= m.at)
                .map((m) => (
                  <div key={m.at} className={`bubble bubble--${m.from}`}>
                    {m.text}
                    <span className="bubble__time">{m.time}</span>
                  </div>
                ))}
              {TYPING_STAGES.includes(stage) && (
                <div className="bubble bubble--ai typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <div className="phone__input">
              <span>Message</span>
            </div>
          </div>

          {/* ---------- AI hand-off ---------- */}
          <div className="link" data-running={running}>
            <span className="link__badge">
              <Sparkles size={20} />
            </span>
            <span className="link__label">AI builds the order</span>
          </div>

          {/* ---------- Structured order ---------- */}
          <div className="order">
            <div className="order__head">
              <h3 className="order__title">New order</h3>
              <span className={`chip ${confirmed ? 'chip--ok' : 'chip--lav'}`}>
                {confirmed ? 'Confirmed' : 'Drafting'}
              </span>
            </div>

            <dl className="order__rows">
              <div className="order__row">
                <dt>Customer</dt>
                <dd>{stage >= 1 ? <span className="reveal">{order.customer}</span> : <Skeleton />}</dd>
              </div>

              <div className="order__row">
                <dt>Items</dt>
                <dd>
                  {stage >= 3 ? (
                    <ul className="order__items reveal">
                      {order.items.map((item) => (
                        <li key={item.name}>
                          <span>
                            {item.qty} × {item.name}
                          </span>
                          <span>{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="order__skels">
                      <Skeleton />
                      <Skeleton width="55%" />
                    </span>
                  )}
                </dd>
              </div>

              <div className="order__row">
                <dt>Delivery</dt>
                <dd>{stage >= 6 ? <span className="reveal">{order.delivery}</span> : <Skeleton width="80%" />}</dd>
              </div>

              <div className="order__row order__row--total">
                <dt>Total</dt>
                <dd>
                  {stage >= 6 ? (
                    <span className="order__total reveal">{order.total}</span>
                  ) : (
                    <Skeleton width="28%" />
                  )}
                </dd>
              </div>
            </dl>

            <div className={`order__sync ${sent ? 'is-sent' : ''}`}>
              <Server size={16} />
              <span>{syncText}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Outside aria-hidden so keyboard and screen reader users can replay it */}
      {!reduced && (
        <button
          type="button"
          className={`btn btn--sm btn--white demo__replay ${sent ? 'is-visible' : ''}`}
          onClick={onReplay}
          tabIndex={sent ? 0 : -1}
        >
          <RotateCcw size={14} aria-hidden="true" />
          Replay demo
        </button>
      )}
    </div>
  )
}
