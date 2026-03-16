import Link from 'next/link'
import Image from 'next/image'

interface ProjectsData {
  projects: Array<{
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    link: string
    featured: boolean
  }>
}

export default function PortfolioProjects({ data }: { data: ProjectsData }) {
  const featuredProjects = data.projects.filter((p) => p.featured)
  const otherProjects = data.projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-16">Projects</h2>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-50 mb-8 text-emerald-400">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
                <div className="group cursor-pointer">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-emerald-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-8 text-emerald-400">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Link href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
                  <div className="group cursor-pointer">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-50 mb-2 group-hover:text-emerald-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
