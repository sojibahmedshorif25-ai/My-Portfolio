'use client'

import { useEffect, useRef } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaBookOpen } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { IoMdAppstore } from 'react-icons/io'
import { MdOutlineAnimation } from 'react-icons/md'

const projects = [
  {
    title: 'Digitools Platform',
    description:
      'A comprehensive platform for digital tools and resources.',
    tags: ['NextJS', 'TailwindCSS'],
    emoji: <CgWebsite />,
    github:
      'https://github.com/sojibahmedshorif25-ai/digitools-platfrom-1.git',
    color: '#f97316',
  },
  {
    title: 'Github Issue Tracker',
    description:
      'A simple issue tracker for managing GitHub issues.',
    tags: ['ReactJS', 'TailwindCSS'],
    emoji: <IoMdAppstore />,
    github:
      'https://github.com/sojibahmedshorif25-ai/github-issue-tracker.git',
    color: '#3b82f6',
  },
  {
    title: 'Book-Platfrom',
    description:
      'A platform for browsing and managing books.',
    tags: ['ReactJS', 'TailwindCSS'],
    emoji: <FaBookOpen />,
    github:
      'https://github.com/sojibahmedshorif25-ai/Books-Platfrom.git',
    color: '#10b981',
  },
  {
    title: 'Job tracker',
    description:
      'A simple job tracking application for managing job applications and interviews.',
    tags: ['ReactJS', 'TailwindCSS'],
    emoji: <GiArtificialIntelligence />,
    github:
      'https://github.com/sojibahmedshorif25-ai/batch13-phjobtrackerassignment.git',
    color: '#ec4899',
  },
  {
    title: 'TechWave',
    description:
      'A pure responsive project made by HTML5 and CSS3.',
    tags: ['HTML5', 'CSS3'],
    emoji: <MdOutlineAnimation />,
    github: '',
    color: '#a78bfa',
  },
  {
    title: 'Keen Keepers',
    description:
      'A pure responsive landing practice project',
    tags: ['HTML5', 'CSS3'],
    emoji: <CgWebsite />,
    github:
      'https://github.com/sojibahmedshorif25-ai/keenkeper-website.git',
    color: '#facc15',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

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

    const reveals =
      sectionRef.current?.querySelectorAll('.reveal')

    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 reveal">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Here are some of my projects from GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div className="card-hover bg-card rounded-2xl p-6 flex flex-col reveal">

      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">
          {project.emoji}
        </span>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>

      <div
        className="h-0.5 w-12 rounded mb-4"
        style={{
          backgroundColor: project.color,
        }}
      />

      <h3 className="text-white font-bold text-lg mb-2">
        {project.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

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