'use client'

import { useEffect, useRef, useState } from 'react'

// Your skill data - update the levels anytime!
const skills = [
  { name: 'HTML',       level: 85, color: '#f97316' },
  { name: 'CSS',        level: 80, color: '#3b82f6' },
  { name: 'JavaScript', level: 65, color: '#facc15' },
  { name: 'React.js',   level: 60, color: '#61dafb' },
  { name: 'Tailwind CSS', level: 70, color: '#38bdf8' },
  { name: 'Git & GitHub', level: 60, color: '#f97316' },
]

// Tech tools shown as badges
const tools = [
  'VS Code', 'GitHub', 'Figma', 'Chrome DevTools',
  'npm', 'Vite', 'React Router', 'Vercel',
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  // Trigger bar animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true)
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left - skill bars */}
          <div className="reveal">
            <h3 className="text-xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} animated={animated} />
              ))}
            </div>
          </div>

          {/* Right - tools and extra info */}
          <div className="reveal">
            <h3 className="text-xl font-bold text-white mb-8">Tools & Technologies</h3>

            {/* Tool badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-card border border-purple-700/20 text-gray-300 text-sm px-4 py-2 rounded-full hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Currently learning box */}
            <div className="card-hover bg-card rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Currently Learning
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span> Next.js & Server Components
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span> Advanced React Patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span> Backend with Node.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Individual skill bar with animation
function SkillBar({ skill, animated }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium text-sm">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      {/* Gray background track */}
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* Colored fill that animates when visible */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${skill.level}%` : '0%',
            backgroundColor: skill.color,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </div>
  )
}
