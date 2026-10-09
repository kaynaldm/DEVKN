import { Terminal, Database, Cpu, Globe, Server, Smartphone, Code2, Braces, Layers } from 'lucide-react'

const tools = [
  { name: 'JavaScript', icon: Globe },
  { name: 'TypeScript', icon: Braces },
  { name: 'Java', icon: Server },
  { name: 'PHP', icon: Globe },
  { name: 'C#', icon: Layers },
  { name: 'Python', icon: Code2 },
  { name: 'R', icon: Database },
  { name: 'SQL', icon: Database },
  { name: 'C', icon: Cpu },
  { name: 'C++', icon: Cpu },
  { name: 'Rust', icon: Cpu },
  { name: 'Swift', icon: Smartphone },
  { name: 'Kotlin', icon: Smartphone },
  { name: 'Go', icon: Server },
  { name: 'Bash / Shell Script', icon: Terminal },
]

export function ToolsSection() {
  return (
    <section id="ferramentas" className="relative py-12 md:py-24">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl text-white">
            Stack Tecnológico
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-slate-400">
            As principais linguagens e ferramentas que utilizo no meu dia a dia para construir soluções de ponta a ponta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.name}
                className="group flex items-center gap-2.5 rounded-full border border-slate-800/60 bg-[#06101c]/40 px-5 py-2.5 md:px-6 md:py-3 hover:bg-[#081525] hover:border-[#007BFF]/50 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(0,123,255,0.15)]"
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5 text-slate-500 group-hover:text-[#007BFF] transition-colors duration-300" />
                <span className="text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
