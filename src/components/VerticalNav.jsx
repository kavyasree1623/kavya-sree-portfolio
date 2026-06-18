import { useEffect, useState } from 'react'
import {
  Clock3,
  User,
  Brain,
  FolderKanban,
  Briefcase,
  Trophy,
  Mail
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'hero', label: 'Timeline', icon: Clock3 },
  { id: 'origin', label: 'Origin', icon: User },
  { id: 'nexus', label: 'Knowledge Nexus', icon: Brain },
  { id: 'realities', label: 'Alternate Realities', icon: FolderKanban },
  { id: 'events', label: 'Timeline Events', icon: Briefcase },
  { id: 'artifacts', label: 'Artifacts', icon: Trophy },
  { id: 'future', label: 'Future Timeline', icon: Mail },
]

export default function VerticalNav() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = NAV_ITEMS.findIndex(
              item => item.id === entry.target.id
            )
            if (idx >= 0) setActive(idx)
          }
        })
      },
      { threshold: 0.4 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav id="vnav">
      {NAV_ITEMS.map((item, i) => {
        const Icon = item.icon

        return (
          <div
            key={item.id}
            className={`vnav-item${active === i ? ' active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            <Icon size={18} className="vnav-icon" />
            <div className="vnav-label">{item.label}</div>
          </div>
        )
      })}
    </nav>
  )
}