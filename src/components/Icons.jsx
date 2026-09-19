/** Solid circle with a white tick, used for check lists and trust points. */
export function CheckBadge({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M4.6 8.3l2.2 2.2 4.6-4.9"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
