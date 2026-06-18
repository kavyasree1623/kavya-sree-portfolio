import { useEffect, useRef } from 'react'

const NODES = [
  { year: '2023 — ORIGIN', event: 'B.Tech CSE Begins', desc: 'In 2023, the path diverged. At St. Peter\'s Engineering College, Hyderabad, a new timeline emerged—one shaped by curiosity, code, and countless unanswered questions. Every concept learned became a new possibility. Every challenge unlocked another reality. The machine awakens. The journey begins.' },
  { year: '2024 — EXPANSION', event: 'Programming Mastery', desc: 'Python becomes a language of thought. JavaScript, HTML, CSS. The foundation is laid for what comes next.' },
  { year: '2025 — EVOLUTION', event: 'Machine Learning Emerges', desc: 'TensorFlow, Keras, deep learning architectures. A medical imaging pipeline that sees what human eyes cannot. The ML Internship at LI-MAT Pvt Ltd.' },
  { year: '2026 — CONVERGENCE', event: 'Flutter & Cross-Platform', desc: 'Mobile applications. Power BI dashboards. Microsoft Elevate. The timelines converge into a full-stack vision.' },
  { year: '∞ — FUTURE', event: 'Software Engineer', desc: 'The timeline is not fixed. This node is still being written. The portal is open.' },
]

export default function Origin() {
  const nodeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis')
      })
    }, { threshold: 0.15 })
    nodeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="origin">
      <div className="section-header reveal">
        <div className="section-eyebrow">Chapter 01 — Origin Point</div>
        <h2 className="section-title">The <span className="glow">Timeline</span><br />Begins Here</h2>
      </div>
      <div className="timeline-track">
        <div className="timeline-line" />
        {NODES.map((node, i) => (
          <div key={i} className="timeline-node" ref={el => nodeRefs.current[i] = el}>
            <div className="timeline-year">{node.year}</div>
            <div className="timeline-event">{node.event}</div>
            <div className="timeline-desc">{node.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
