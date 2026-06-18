import { useEffect, useState } from 'react'

export default function Loader() {
  const [vis, setVis] = useState({})
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const seq = [
      { key: 'l1', delay: 400 }, { key: 'y1', delay: 400 },
      { key: 'l2', delay: 1200 }, { key: 'y2', delay: 1200 },
      { key: 'l3', delay: 2000 }, { key: 'y3', delay: 2000 },
      { key: 'l4', delay: 2800 }, { key: 'y4', delay: 2800 },
      { key: 'lportal', delay: 3600 },
      { key: 'lenter', delay: 4200 },
    ]
    const timers = seq.map(({ key, delay }) =>
      setTimeout(() => setVis(v => ({ ...v, [key]: true })), delay)
    )
    const hideTimer = setTimeout(() => {
      setHidden(true)
      document.body.classList.add('hero-active')
    }, 5000)
    return () => { timers.forEach(clearTimeout); clearTimeout(hideTimer) }
  }, [])

  if (hidden) return null

  return (
    <div id="loader">
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className={`loader-line${vis.l1 ? ' vis' : ''}`}>LOCATING ORIGIN...</div>
        <div className={`loader-year${vis.y1 ? ' vis' : ''}`}>2023</div>
        <div className={`loader-line${vis.l2 ? ' vis' : ''}`}>TRACING DECISIONS...</div>
        <div className={`loader-year${vis.y2 ? ' vis' : ''}`}>2024</div>
        <div className={`loader-line${vis.l3 ? ' vis' : ''}`}>ANALYZING POSSIBILITIES...</div>
        <div className={`loader-year${vis.y3 ? ' vis' : ''}`}>2025</div>
        <div className={`loader-line${vis.l4 ? ' vis' : ''}`}>BUILDING FUTURES...</div>
        <div className={`loader-year${vis.y4 ? ' vis' : ''}`}>2026</div>
        <div style={{ height: 40 }} />
        <div className={`loader-portal${vis.lportal ? ' vis' : ''}`} />
        <div className={`loader-enter${vis.lenter ? ' vis' : ''}`}>ENTERING TIMELINE</div>
      </div>
    </div>
  )
}
