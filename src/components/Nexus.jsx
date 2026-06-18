import { useEffect, useRef } from 'react'

const SKILLS = [
  { name: 'Python',       x: 450, y: 240, r: 36, core: true },

  { name: 'Java',         x: 420, y: 80,  r: 24 },
  { name: 'DSA',          x: 560, y: 90,  r: 22 },

  { name: 'TensorFlow',   x: 620, y: 140, r: 28 },
  { name: 'Keras',        x: 700, y: 260, r: 24 },
  { name: 'ML',           x: 600, y: 320, r: 26 },
  { name: 'Deep\nLearning', x: 760, y: 160, r: 22 },

  { name: 'JavaScript',   x: 300, y: 140, r: 24 },
  { name: 'HTML/CSS',     x: 210, y: 220, r: 22 },
  { name: 'Flutter',      x: 200, y: 340, r: 26 },
  { name: 'Streamlit',    x: 320, y: 380, r: 20 },
  { name: 'Power BI',     x: 160, y: 160, r: 22 },
  { name: 'Git/GitHub',   x: 380, y: 120, r: 20 },
  { name: 'MySQL',        x: 530, y: 400, r: 20 },
  { name: 'Swagger',      x: 680, y: 400, r: 18 },
]

const EDGES = [
  [0,1],
  [0,2],
  [1,2],

  [0,3],
  [0,4],
  [3,4],
  [3,5],
  [4,5],

  [0,6],
  [6,7],
  [7,8],
  [0,8],
  [8,9],
  [0,9],

  [6,11],
  [7,10],
  [0,10],

  [0,12],
  [5,12],
  [4,13],
  [12,13]
]

export default function Nexus() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Draw edges
    const edgeEls = []
    EDGES.forEach(([a, b]) => {
      const sa = SKILLS[a], sb = SKILLS[b]
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', sa.x); line.setAttribute('y1', sa.y)
      line.setAttribute('x2', sb.x); line.setAttribute('y2', sb.y)
      line.setAttribute('stroke', 'rgba(212,175,55,0.18)')
      line.setAttribute('stroke-width', '1')
      svg.appendChild(line)
      edgeEls.push(line)
    })

    // Draw nodes
    SKILLS.forEach(s => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      g.setAttribute('transform', `translate(${s.x},${s.y})`)
      g.style.cursor = 'pointer'

      const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      glow.setAttribute('r', s.r + 12)
      glow.setAttribute('fill', 'rgba(212,175,55,0.04)')
      g.appendChild(glow)

      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      ring.setAttribute('r', s.r + 4); ring.setAttribute('fill', 'none')
      ring.setAttribute('stroke', 'rgba(212,175,55,0.2)'); ring.setAttribute('stroke-width', '1')
      g.appendChild(ring)

      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      c.setAttribute('r', s.r)
      c.setAttribute('fill', s.core ? 'rgba(212,175,55,0.25)' : 'rgba(212,175,55,0.1)')
      c.setAttribute('stroke', s.core ? '#d4af37' : 'rgba(212,175,55,0.5)')
      c.setAttribute('stroke-width', s.core ? '2' : '1')
      g.appendChild(c)

      const names = s.name.split('\n')
      names.forEach((ln, li) => {
        const t = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        t.setAttribute('text-anchor', 'middle')
        t.setAttribute('dy', names.length > 1 ? (li === 0 ? -6 : 10) : '4')
        t.setAttribute('fill', '#ffffff')
        t.setAttribute('font-family', 'Inter,sans-serif')
        t.setAttribute('font-size', s.core ? '12' : '10')
        t.setAttribute('font-weight', s.core ? '600' : '400')
        t.textContent = ln
        g.appendChild(t)
      })

      g.addEventListener('mouseenter', () => {
        c.setAttribute('fill', 'rgba(212,175,55,0.4)')
        c.setAttribute('stroke', '#f4d03f')
        glow.setAttribute('fill', 'rgba(212,175,55,0.12)')
      })
      g.addEventListener('mouseleave', () => {
        c.setAttribute('fill', s.core ? 'rgba(212,175,55,0.25)' : 'rgba(212,175,55,0.1)')
        c.setAttribute('stroke', s.core ? '#d4af37' : 'rgba(212,175,55,0.5)')
        glow.setAttribute('fill', 'rgba(212,175,55,0.04)')
      })

      svg.appendChild(g)
    })

    // Animate edges
    let et = 0
    let animId
    const animEdges = () => {
      et += 0.5
      edgeEls.forEach((l, i) => {
        const phase = (Math.sin(et / 30 + i * 0.5) + 1) / 2
        l.setAttribute('stroke', `rgba(212,175,55,${0.08 + 0.2 * phase})`)
      })
      animId = requestAnimationFrame(animEdges)
    }
    animEdges()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="nexus" style={{ flexDirection: 'column', alignItems: 'center' }}>
      <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="section-eyebrow">Chapter 02 — Knowledge Nexus</div>
        <h2 className="section-title">Living <span className="glow">Constellation</span><br />of Skills</h2>
      </div>
      <div className="constellation-container">
        <svg id="constellation-svg" ref={svgRef} viewBox="0 0 900 480" />
      </div>
    </section>
  )
}
