const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Python',
  'Docker',
  'GraphQL',
  'Prisma',
  'AWS',
]

export function TechStackSection() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // Stack
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Ferramentas e tecnologias
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            O conjunto de tecnologias que uso para construir sistemas rápidos,
            seguros e fáceis de manter.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/50"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="font-mono text-sm text-foreground">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
