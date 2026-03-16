import Link from 'next/link'

interface FooterData {
  personal: {
    name: string
    email: string
  }
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

export default function PortfolioFooter({ data }: { data: FooterData }) {
  return (
    <footer className="bg-slate-950 px-6 md:px-12 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-slate-50 font-bold mb-4">About</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A passionate developer crafting beautiful and functional web experiences with a focus on quality and
              accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-50 font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-slate-400 text-sm hover:text-emerald-400 transition">
                About
              </a>
              <a href="#experience" className="block text-slate-400 text-sm hover:text-emerald-400 transition">
                Experience
              </a>
              <a href="#projects" className="block text-slate-400 text-sm hover:text-emerald-400 transition">
                Projects
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-50 font-bold mb-4">Get in Touch</h3>
            <Link href={`mailto:${data.personal.email}`} className="text-emerald-400 hover:text-emerald-300 transition text-sm">
              {data.personal.email}
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">&copy; 2024 {data.personal.name}. All rights reserved.</p>
          <p className="text-slate-500 text-xs">Crafted with care</p>
        </div>
      </div>
    </footer>
  )
}
