import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const portalRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    const portal = portalRef.current
    const overlay = overlayRef.current

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      portal.style.left = mx + 'px'
      portal.style.top = my + 'px'
      overlay.style.setProperty('--px', (mx / window.innerWidth * 100) + '%')
      overlay.style.setProperty('--py', (my / window.innerHeight * 100) + '%')
      const hero = document.getElementById('hero')
      if (hero) {
        const r = hero.getBoundingClientRect()
        portal.style.opacity = (e.clientY > r.top && e.clientY < r.bottom) ? '0.9' : '0'
      }
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(animRing)
    }
    animRing()
    document.addEventListener('mousemove', onMove)

    const hoverEls = document.querySelectorAll('a,button,.reality-card,.artifact-card,.event-item')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'; cursor.style.height = '20px'
        ring.style.width = '60px'; ring.style.height = '60px'
        ring.style.borderColor = 'rgba(212,175,55,0.8)'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'; cursor.style.height = '12px'
        ring.style.width = '40px'; ring.style.height = '40px'
        ring.style.borderColor = 'rgba(212,175,55,0.5)'
      })
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor-portal" ref={portalRef}>FUTURE SELF</div>
      <div id="portal-overlay" ref={overlayRef} />
    </>
  )
}
