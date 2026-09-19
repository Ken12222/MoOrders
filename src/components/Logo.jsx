import { brand } from '../content'

/** The MoOrders mark: a solid square framed by four slim bars. */
export function LogoMark({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 111 111"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="19" y="0" width="73" height="12" />
      <rect x="19" y="99" width="73" height="12" />
      <rect x="0" y="19" width="12" height="73" />
      <rect x="99" y="19" width="12" height="73" />
      <rect x="19" y="19" width="73" height="73" />
    </svg>
  )
}

export default function Logo({ tone = 'dark' }) {
  return (
    <a className={`logo logo--${tone}`} href="#top" aria-label={`${brand.name} home`}>
      <LogoMark size={24} />
      <span className="logo__word">{brand.name}</span>
    </a>
  )
}
