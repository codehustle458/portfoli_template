interface AboutData {
  about: {
    title: string
    sections: string[]
  }
  personal: {
    currentRole: string
    currentRoleDescription: string
  }
}

export default function PortfolioAbout({ data }: { data: AboutData }) {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-16">{data.about.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            {data.about.sections.map((section, idx) => (
              <p key={idx} className="text-lg text-slate-300 leading-relaxed">
                {section}
              </p>
            ))}
          </div>

          {/* Current role card */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
              <p className="text-emerald-400 font-semibold text-sm tracking-wider mb-3">CURRENT ROLE</p>
              <h3 className="text-xl font-bold text-slate-50 mb-3">{data.personal.currentRole}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{data.personal.currentRoleDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
