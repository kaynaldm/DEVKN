function SystemIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="8" y="12" width="36" height="24" rx="2" />
      <path d="M26 36v6" />
      <path d="M14 42h24" />
      <path d="M14 18h16" />
      <path d="M14 24h24" />
      <path d="M14 30h10" />
      <ellipse cx="48" cy="30" rx="10" ry="4" />
      <path d="M38 30v12c0 2.2 4.5 4 10 4s10-1.8 10-4V30" />
      <path d="M38 36c0 2.2 4.5 4 10 4s10-1.8 10-4" />
    </svg>
  )
}

function BotWorkflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="24" y="24" width="16" height="16" rx="3" />
      <path d="M29 30v2" />
      <path d="M35 30v2" />
      <path d="M30 36h4" />
      <path d="M32 24v-6" />
      <circle cx="32" cy="16" r="2" />
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M20 14h8" />
      <rect x="44" y="8" width="12" height="12" rx="2" />
      <path d="M44 14h-8" />
      <rect x="8" y="44" width="12" height="12" rx="2" />
      <path d="M20 50h8v-10" />
      <rect x="44" y="44" width="12" height="12" rx="2" />
      <path d="M44 50h-8v-10" />
    </svg>
  )
}

function InventoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M32 12L12 22v20l20 10 20-10V22L32 12z" />
      <path d="M12 22l20 10 20-10" />
      <path d="M32 32v20" />
      <circle cx="48" cy="48" r="10" fill="hsl(var(--background))" />
      <circle cx="48" cy="48" r="10" />
      <path d="M55 55l5 5" />
      <path d="M48 43v10" />
      <path d="M45 46h6" />
      <path d="M45 50h6" />
      <path d="M48 45c-2 0-3 .7-3 2s1.5 2 3 2 3 .7 3 2-1 2-3 2" />
    </svg>
  )
}

const services = [
  {
    id: '01',
    title: 'Desenvolvimento de Sistemas e MVPs',
    description:
      'Criação de aplicações web funcionais e responsivas, integrando interfaces modernas com bancos de dados estruturados para sistemas de gestão, dashboards e plataformas de conteúdo.',
    icon: SystemIcon,
  },
  {
    id: '02',
    title: 'Automação de Processos e Bots',
    description:
      'Desenvolvimento de robôs para coleta de dados (web scraping), integração de APIs e automação de fluxos de mensagens para otimizar campanhas de marketing de afiliados e atendimento.',
    icon: BotWorkflowIcon,
  },
  {
    id: '03',
    title: 'Soluções Administrativas e de Estoque',
    description:
      'Estruturação e organização operacional, unindo experiência prática de chão de loja com o desenvolvimento de ferramentas digitais para rastreabilidade e controle financeiro.',
    icon: InventoryIcon,
  },
]

export function ExpertiseSection() {
  return (
    <section id="sobre" className="border-b border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:gap-24">
          
          {/* Esquerda: Sticky Header */}
          <div className="md:sticky md:top-32 md:w-1/3">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Soluções Digitais e Automação Prática
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Do planejamento à execução, crio ferramentas focadas em otimizar rotinas, gerenciar dados e impulsionar vendas com clareza técnica.
            </p>
          </div>

          {/* Direita: Módulos de Serviço (Lista Técnica) */}
          <div className="flex flex-col md:w-2/3">
            <div className="border-t border-border/60">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className="flex flex-col-reverse items-start gap-6 border-b border-primary/50 py-8 transition-colors duration-300 sm:py-10 sm:flex-row sm:items-center"
                  >
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold tracking-tight text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground sm:max-w-md">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="shrink-0 text-primary transition-all duration-300 sm:ml-4 flex items-center justify-center">
                      <Icon className="h-14 w-14 sm:h-20 sm:w-20" aria-hidden="true" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
