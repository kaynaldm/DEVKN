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
    title: 'Desenvolvimento de Sistemas e MVPs',
    description:
      'Criamos aplicações web personalizadas, escaláveis e seguras, integrando interfaces modernas com bancos de dados robustos e dashboards inteligentes.',
    icon: SystemIcon,
  },
  {
    id: '02',
    title: 'Automação de Processos e Bots',
    description:
      'Desenvolvemos robôs e integrações que automatizam tarefas repetitivas, coletam dados e conectam sistemas para aumentar a eficiência do seu negócio.',
    icon: BotWorkflowIcon,
  },
  {
    id: '03',
    title: 'Soluções Administrativas e de Estoque',
    description:
      'Sistemas completos para gestão de estoque, vendas e operações, com relatórios precisos e controle financeiro na palma da mão.',
    icon: InventoryIcon,
  },
]

import Image from 'next/image'
import bgImage from '@/imagem de fundo.png'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Plano de Fundo"
          fill
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
          
          {/* Esquerda: Sticky Header & Illustration */}
          <div className="lg:sticky lg:top-32 lg:w-[45%] flex flex-col">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#007BFF] uppercase mb-4">
              Nossas Soluções
            </span>
            <h2 className="text-balance text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Tecnologia que <br/> transforma ideias <br/> <span className="text-[#007BFF]">em resultados.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400 max-w-md">
              Soluções digitais inteligentes e automação prática para otimizar processos, reduzir custos e acelerar o crescimento do seu negócio.
            </p>




          </div>

          {/* Direita: Módulos de Serviço (Cards) */}
          <div className="flex flex-col gap-6 lg:w-[55%]">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-slate-800/60 bg-[#06101c]/60 p-6 sm:p-8 hover:bg-[#081525] hover:border-[#007BFF]/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/0 via-[#007BFF]/0 to-[#007BFF]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex items-start gap-4 sm:gap-6 flex-1 z-10">
                    <div className="flex flex-col items-center gap-4 mt-1">
                      <span className="text-sm font-bold text-[#007BFF] bg-[#007BFF]/10 px-2 py-1 rounded">
                        {service.id}
                      </span>
                      <div className="hidden sm:block w-px h-16 bg-slate-800/80"></div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="shrink-0 z-10 self-start sm:self-center">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-slate-700/50 bg-[#0a1628] group-hover:border-[#007BFF]/50 group-hover:shadow-[0_0_25px_rgba(0,123,255,0.2)] transition-all duration-300">
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#007BFF]" aria-hidden="true" />
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
