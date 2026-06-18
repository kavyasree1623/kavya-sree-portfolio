import { useEffect } from 'react'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Particles from './components/Particles'
import VerticalNav from './components/VerticalNav'
import Hero from './components/Hero'
import Origin from './components/Origin'
import Nexus from './components/Nexus'
import Realities from './components/Realities'
import Events from './components/Events'
import Artifacts from './components/Artifacts'
import Future from './components/Future'

export default function App() {
  // Scroll reveal for .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    // Re-run after a tick so dynamically rendered elements are included
    const tid = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 200)
    return () => { observer.disconnect(); clearTimeout(tid) }
  }, [])

  return (
    <>
      <Loader />
      <Cursor />
      <Particles />
      <div className="fog" />
      <VerticalNav />
      <main>
        <Hero />
        <Origin />
        <Nexus />
        <Realities />
        <Events />
        <Artifacts />
        <Future />
      </main>
    </>
  )
}
