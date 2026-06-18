import { useEffect, useRef } from 'react'

const ARTIFACTS = [
  { icon: '🐍', title: 'Programming for Everybody', source: 'UNIVERSITY OF MICHIGAN — COURSERA', badge: '📜 Certified' },
  { icon: '📊', title: 'Data Analytics Job Simulation', source: 'DELOITTE US — VIRTUAL EXPERIENCE', badge: '📜 Certified' },
  { icon: '🔐', title: 'Cybersecurity Job Simulation', source: 'DELOITTE US — VIRTUAL EXPERIENCE', badge: '📜 Certified' },
  { icon: '🏆', title: 'Winner — SUNDANCE Competition', source: 'NEXORA \'25 — G. NARAYANAMMA INSTITUTE', badge: '🥇 Champion', highlight: true },
  { icon: '⚡', title: 'ARANI Hackathon', source: 'NEXORA \'25 — G. NARAYANAMMA INSTITUTE', badge: '🏁 Participant' },
  { icon: '🛡️', title: 'Cybersecurity Workshop', source: 'ST. PETER\'S ENGINEERING COLLEGE', badge: '🎓 Attended' },
]

export default function Artifacts() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
    }, { threshold: 0.15 })
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="artifacts">
      <div className="section-header reveal">
        <div className="section-eyebrow">Chapter 05 — Artifacts of the Journey</div>
        <h2 className="section-title">Relics From<br /><span className="glow">Every Timeline</span></h2>
      </div>
      <div className="artifacts-grid">
        {ARTIFACTS.map((a, i) => (
          <div
            key={i}
            className="artifact-card"
            ref={el => cardRefs.current[i] = el}
            style={a.highlight ? { borderColor: 'rgba(212,175,55,0.4)' } : {}}
          >
            <span className="artifact-icon">{a.icon}</span>
            <div className="artifact-title">{a.title}</div>
            <div className="artifact-source">{a.source}</div>
            <div className="artifact-badge">{a.badge}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
