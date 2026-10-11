import { Terminal, Database, Cpu, Globe, Server, Smartphone, Code2, Braces, Layers } from 'lucide-react'

const techCategories = [
  {
    category: 'Front-end & Mobile',
    tools: [
      { name: 'JavaScript', icon: Globe },
      { name: 'TypeScript', icon: Braces },
      { name: 'Swift', icon: Smartphone },
      { name: 'Kotlin', icon: Smartphone },
    ]
  },
  {
    category: 'Back-end Core',
    tools: [
      { name: 'Java', icon: Server },
      { name: 'C#', icon: Layers },
      { name: 'Go', icon: Server },
      { name: 'Python', icon: Code2 },
      { name: 'PHP', icon: Globe },
      { name: 'C', icon: Cpu },
      { name: 'C++', icon: Cpu },
      { name: 'Rust', icon: Cpu },
    ]
  },
  {
    category: 'Dados & Infraestrutura',
    tools: [
      { name: 'SQL', icon: Database },
      { name: 'R', icon: Database },
      { name: 'Bash / Shell', icon: Terminal },
    ]
  }
]

export function ToolsSection() {
  return (
    <section id="ferramentas" className="relative py-24 md:py-40 bg-background">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-6 block">
            Core Technologies
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Stack <span className="text-primary">Tecnológico</span>
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-slate-400">
            Linguagens e ecossistemas de alto nível adotados para construir soluções de <span className="text-white font-medium">ponta a ponta</span>, aliando performance, escalabilidade e robustez.
          </p>
        </div>

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {techCategories.map((group) => (
            <div key={group.category} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-border/40 pt-10">
              <h3 className="w-full md:w-64 shrink-0 text-lg font-bold tracking-tight text-white uppercase text-balance mt-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4 w-full">
                {group.tools.map((tool) => {
                  const Icon = tool.icon
                  return (
                    <div
                      key={tool.name}
                      className="group flex items-center gap-2.5 rounded-md border border-slate-800/80 bg-[#0a1420]/50 px-5 py-2 hover:bg-[#0f1f33] hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      <Icon className="h-4 w-4 text-slate-500 group-hover:text-primary transition-colors duration-300" />
                      <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
