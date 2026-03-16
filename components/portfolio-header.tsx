import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

interface PortfolioData {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
  }
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
}

export default function PortfolioHeader({ data }: { data: PortfolioData }) {
  return (
    <header className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 md:px-12 py-12 md:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and nav */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-4 tracking-tight">
              {data.personal.name}
            </h1>
            <p className="text-xl text-emerald-400 font-medium mb-8">{data.personal.title}</p>
            <p className="text-slate-300 mb-12 text-lg leading-relaxed max-w-md">
              {data.personal.tagline}
            </p>

            {/* Navigation */}
            <nav className="space-y-4 border-l-2 border-emerald-400 pl-6">
              <a href="#about" className="block text-slate-400 hover:text-emerald-400 transition font-medium">
                ↓ ABOUT
              </a>
              <a href="#experience" className="block text-slate-400 hover:text-emerald-400 transition font-medium">
                ↓ EXPERIENCE
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-emerald-400 transition font-medium">
                ↓ PROJECTS
              </a>
            </nav>
          </div>

          {/* Right side - Bio */}
          <div className="text-slate-300 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a developer passionate about crafting beautiful and functional web experiences. I specialize in modern
              web technologies and focus on creating products that are both visually appealing and technically sound.
            </p>
            <p className="text-lg leading-relaxed">
              Currently, I'm working on projects that push the boundaries of what's possible on the web, always keeping
              accessibility and performance at the forefront.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with social links */}
      <div className="max-w-6xl mx-auto w-full mt-20">
        <div className="flex items-center gap-6">
          {data.social.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap]
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition"
                aria-label={link.name}
              >
                {Icon && <Icon size={24} />}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
