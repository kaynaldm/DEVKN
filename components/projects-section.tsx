"use client"

import { Scissors, Megaphone, Share2, Video, Store, Building2, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  stack: string[]
  image: string
}

const projects: Project[] = [
  {
    title: 'Sistema para Barbearias',
    description:
      'Gestão completa com agendamentos online, controle de cortes e administração de planos de assinatura para clientes.',
    icon: Scissors,
    stack: ['Agendamentos', 'Planos', 'Gestão'],
    image: '/dashboard_barbearia_1786767304875.png',
  },
  {
    title: 'Gestão de Mandato & Política',
    description:
      'Plataforma estratégica para acompanhamento de demandas, controle de agendas e automação de postagens em redes sociais.',
    icon: Megaphone,
    stack: ['Agendas', 'Demandas', 'Automação'],
    image: '/dashboard_politica_1786767332874.png',
  },
  {
    title: 'Motor de Achadinhos (Afiliados)',
    description:
      'Captura de produtos com link de afiliado e disparo 100% automatizado para TikTok, Instagram, Facebook, X e YouTube.',
    icon: Share2,
    stack: ['Afiliados', 'Auto-Post', 'Multi-Redes'],
    image: '/dashboard_achadinhos_1786767344192.png',
  },
  {
    title: 'Auto-Cortes para Influenciadores',
    description:
      'Busca vídeos no YouTube, localiza os melhores momentos, realiza cortes automaticamente e publica com descrições otimizadas.',
    icon: Video,
    stack: ['YouTube', 'Cortes', 'Social Media'],
    image: '/dashboard_cortes_1786767367956.png',
  },
  {
    title: 'ERP para Lojas',
    description:
      'Controle total de produtos, despesas, cálculo de lucro diário, contagem de estoque e automação de mensagens via WhatsApp.',
    icon: Store,
    stack: ['Estoque', 'Financeiro', 'WhatsApp'],
    image: '/dashboard_erp_1786767377544.png',
  },
  {
    title: 'Sistemas Corporativos Sob Medida',
    description:
      'Plataformas de gestão geral desenvolvidas do zero com base nas ideias e regras de negócio exclusivas de cada cliente.',
    icon: Building2,
    stack: ['Sob Medida', 'Gestão', 'Escala'],
    image: '/dashboard_corporativo_1786767387927.png',
  },
]

export function ProjectsSection() {
  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
    e.preventDefault()
    const message = `Olá! Gostaria de mais informações sobre o ${title}. Como funciona?`
    const url = `https://wa.me/5592974005948?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="projetos" className="border-b border-border/60 py-12 md:py-24">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Projetos que resolvem problemas reais
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Uma seleção de sistemas customizados construídos para escala,
            confiabilidade e manutenção a longo prazo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-teal"
              >
                <div className="relative h-40 sm:h-48 w-full border-b border-border/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay to blend the image with dark mode */}
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="-mt-11 mb-5 flex h-11 w-11 relative z-10 items-center justify-center rounded-lg border border-primary/30 bg-background text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/5592974005948?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre o ' + project.title + '. Como funciona?')}`}
                    onClick={(e) => handleProjectClick(e, project.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-colors hover:text-foreground"
                  >
                    Quero esse sistema
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
