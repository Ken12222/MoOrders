import { useState } from 'react'
import { XCircle } from 'lucide-react'
import { announcement } from '../content'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="announce">
      <p className="announce__text">
        {announcement.text} <span aria-hidden="true">|</span>{' '}
        <a href={announcement.href}>{announcement.cta} →</a>
      </p>
      <button
        type="button"
        className="announce__close"
        aria-label="Dismiss announcement"
        onClick={() => setOpen(false)}
      >
        <XCircle size={18} aria-hidden="true" />
      </button>
    </div>
  )
}
