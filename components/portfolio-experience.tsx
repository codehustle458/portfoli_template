interface ExperienceData {
  experience: Array<{
    period: string
    title: string
    company: string
    description: string
    skills: string[]
  }>
}

export default function PortfolioExperience({ data }: { data: ExperienceData }) {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-12 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-16">Experience</h2>

        <div className="space-y-12">
          {data.experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-emerald-400 pb-8 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-emerald-400 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Period */}
                <div className="md:col-span-1">
                  <p className="text-emerald-400 font-semibold text-sm tracking-wider">{exp.period}</p>
                </div>

                {/* Job details */}
                <div className="md:col-span-3 space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50">{exp.title}</h3>
                    <p className="text-slate-300 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
