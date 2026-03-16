interface SkillsData {
  skills: Array<{
    category: string
    items: string[]
  }>
}

export default function PortfolioSkills({ data }: { data: SkillsData }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-16">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.skills.map((skillGroup, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-emerald-400 mb-6">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, sidx) => (
                  <li key={sidx} className="text-slate-300 flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
