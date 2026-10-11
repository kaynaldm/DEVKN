import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    title: 'Engenharia de Sistemas High-End',
    description:
      'Arquiteturas escaláveis e APIs de alta performance, projetadas para suportar o crescimento da sua operação sem gargalos tecnológicos.',
    icon: SystemIcon,
    cta: 'Consultar Arquitetura',
  },
  {
    id: '02',
    title: 'Automação & RPAs',
    description:
      'Redução de custos operacionais através de robôs que assumem tarefas repetitivas com precisão absoluta e integração nativa.',
    icon: BotWorkflowIcon,
    cta: 'Descobrir Automações',
  },
  {
    id: '03',
    title: 'Gestão Inteligente & ERP',
    description:
      'Dashboards e ERPs sob medida que transformam dados complexos em insights acionáveis para tomadas de decisão rápidas.',
    icon: InventoryIcon,
    cta: 'Solicitar Demonstração',
  },
]

import Image from 'next/image'
import bgImage from '@/imagem de fundo.png'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-32 md:py-48 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Plano de Fundo"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
          
          {/* Esquerda: Sticky Header & Illustration */}
          <div className="lg:sticky lg:top-32 lg:w-[40%] flex flex-col">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-6 block">
              Nossas Soluções
            </span>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Tecnologia que <br/> transforma ideias <br/> <span className="text-primary">em resultados.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400 max-w-md">
              Soluções digitais <span className="text-white font-medium">inteligentes</span> e automação prática para otimizar processos, reduzir custos e acelerar o crescimento do seu negócio.
            </p>
          </div>

          {/* Direita: Módulos de Serviço (Cards) */}
          <div className="flex flex-col gap-8 lg:w-[60%]">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-8 rounded-2xl border border-border/50 bg-card/60 p-8 hover:bg-card/90 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex items-start gap-6 flex-1 z-10">
                    <div className="flex flex-col items-center gap-4 mt-1">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {service.id}
                      </span>
                      <div className="hidden sm:block w-px h-20 bg-border/80 group-hover:bg-primary/20 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400 mb-2">
                        {service.description}
                      </p>
                      <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-white justify-start font-semibold group/btn transition-colors duration-300">
                        <Link href="#contato" className="flex items-center gap-1.5">
                          {service.cta}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="shrink-0 z-10 self-start sm:self-center mt-2 sm:mt-0">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-border/50 bg-background/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                      <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary/80 group-hover:text-primary transition-colors duration-500" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}

