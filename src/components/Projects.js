'use client'

import { useEffect, useRef } from 'react'
import { FaBook, FaBookOpen } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { IoMdAppstore } from 'react-icons/io'

// Your GitHub projects - React projects and other notable ones
// Add more or update links as you build new projects!
const projects = [
  {
    title: 'BookNest',
    description:
      'BookNest is an online book borrowing platform where you can borrow books digitally. Built with Next.js, TailwindCSS, BetterAuth, and MongoDB.',
    tags: ['NextJS', 'TailwindCSS'],
    emoji: <FaBookOpen />,
    github: 'https://github.com/neya-mul/Assignment-8',
    color: '#f97316',
  },
  {
    title: 'App Store',
    description:
      'The App Store project is a practice assignment from my web development course, "AI Powered Future Ready Web Dev (Batch-13)" by Programming Hero.',
    tags: ['ReacrJS', 'TailwindCSS'],
    emoji: <IoMdAppstore />,
    github: 'https://github.com/neya-mul/App-Store',
    color: '#3b82f6',
  },
  {
    title: 'Book Vibe',
    description:
      'Book-Vibe is a clean, modern React web application that lets users browse books, save favorites, and manage a personal reading list. It focuses on a smooth UI/UX with reusable components and responsive design.',
    tags: ['ReactJS', 'TailwindCSS'],
    emoji: <FaBookOpen />,
    github: 'https://github.com/neya-mul/Book-Vibe',
    color: '#10b981',
  },
  {
    title: 'Ai Model Hub',
    description:
      'AI-Model-Hub is a centralized repository for collecting, organizing, and sharing artificial intelligence models, tools, and resources. ',
    tags: ['ReactJS', 'TailwindCSS'],
    emoji: <GiArtificialIntelligence />,
    github: 'https://github.com/neya-mul/AI-Model-Hub',
    color: '#ec4899',
  },
  {
    title: 'Neon Heart Animation',
    description:
      'A pure CSS/JS animation project with a glowing neon heart effect. A showcase of creative CSS animation skills.',
    tags: ['JavaScript', 'CSS'],
    emoji: '💜',
    github: 'https://github.com/neya-mul/Neon-heart-animation',
    color: '#a78bfa',
  },
  {
    title: 'CSS Animations',
    description:
      'A collection of creative CSS animations and effects. Demonstrates advanced CSS keyframe animations and transitions.',
    tags: ['HTML', 'CSS'],
    emoji: '✨',
    github: 'https://github.com/neya-mul/Animation',
    color: '#facc15',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  // Reveal cards as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Here are some of my projects from GitHub. Each one helped me learn something new!
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View all on GitHub button */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/neya-mul"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 border border-purple-700 text-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All Repos on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

// Individual project card
function ProjectCard({ project, index }) {
  return (
    <div
      className="card-hover bg-card rounded-2xl p-6 flex flex-col reveal"
    // style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Emoji + title */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{project.emoji}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          title="View on GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Colored line accent */}
      <div
        className="h-0.5 w-12 rounded mb-4"
        style={{ backgroundColor: project.color }}
      />

      <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
