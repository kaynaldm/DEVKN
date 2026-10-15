"use client"

import { useState, useEffect } from 'react'
import {
  Scissors,
  Megaphone,
  Share2,
  Video,
  Store,
  Building2,
  ArrowUpRight,
  LineChart,
  Info,
  X,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Lightbulb,
} from 'lucide-react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'

type Project = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  stack: string[]
  image: string
  imagePosition?: string
  simpleSummary: string
  features: string[]
  businessImpact: string
}

const projects: Project[] = [
  {
    title: 'Sistema para Barbearias',
    description:
      'Gestão completa com agendamentos online, controle de cortes e administração de planos de assinatura para clientes.',
    icon: Scissors,
    stack: ['Agendamentos', 'Planos', 'Gestão'],
    image: '/barbearia_foto_real.jpg',
    imagePosition: 'object-center',
    simpleSummary:
      'Um sistema completo onde os clientes agendam o corte sozinhos pelo celular, você controla as comissões de cada barbeiro sem briga e vende planos de assinatura mensal (cortes ilimitados por mês) para ter dinheiro garantido no caixa todo mês.',
    features: [
      'Agendamento online 24h com escolha de profissional e serviço',
      'Controle automático de comissões para cada barbeiro/profissional',
      'Módulo de planos de assinatura recorrente no cartão',
      'Lembretes automáticos no WhatsApp do cliente para reduzir faltas',
      'Fluxo de caixa diário e controle de produtos vendidos no balcão',
    ],
    businessImpact:
      'Zero clientes esperando resposta no WhatsApp para agendar e faturamento previsível com assinaturas mensais.',
  },
  {
    title: 'Gestão de Mandato & Política',
    description:
      'Plataforma estratégica para acompanhamento de demandas, controle de agendas e automação de postagens em redes sociais.',
    icon: Megaphone,
    stack: ['Agendas', 'Demandas', 'Automação'],
    image: '/dashboard_politica_novo.jpg',
    imagePosition: 'object-center',
    simpleSummary:
      'Uma plataforma para políticos, vereadores e deputados organizarem todas as demandas da população, lideranças e bairros em um só lugar. Ele envia mensagens e avisos automáticos para eleitores e cuida da agenda sem perder nenhum compromisso.',
    features: [
      'Mapa de demandas por bairro, região e liderança política',
      'Controle de agenda de compromissos com alertas em tempo real',
      'Disparo automatizado de mensagens e comunicados para a base eleitoral',
      'Relatório de atendimentos realizados e pedidos solucionados',
    ],
    businessImpact:
      'Organização impecável do mandato, fidelização de lideranças e respostas rápidas para a população.',
  },
  {
    title: 'Motor de Achadinhos (Afiliados)',
    description:
      'Captura de produtos com link de afiliado e disparo 100% automatizado para TikTok, Instagram, Facebook, X e YouTube.',
    icon: Share2,
    stack: ['Afiliados', 'Auto-Post', 'Multi-Redes'],
    image: '/dashboard_achadinhos_real.jpg',
    imagePosition: 'object-top',
    simpleSummary:
      'Um robô caçador de ofertas que encontra os melhores produtos da Shopee, Amazon e Mercado Livre, coloca seu link de afiliado e posta sozinho em todas as suas redes sociais (TikTok, Instagram, Telegram, WhatsApp). Você ganha comissões no piloto automático.',
    features: [
      'Varredura automática das melhores ofertas e produtos virais',
      'Substituição automática do link pelo seu link de afiliado',
      'Publicação simultânea e agendada em múltiplos canais e redes',
      'Rastreamento de cliques e relatórios de comissões geradas',
    ],
    businessImpact:
      'Vendas de produtos afiliados caindo na sua conta 24h por dia sem você precisar caçar produtos ou postar manualmente.',
  },
  {
    title: 'Auto-Cortes para Influenciadores',
    description:
      'Busca vídeos no YouTube, localiza os melhores momentos, realiza cortes automaticamente e publica com descrições otimizadas.',
    icon: Video,
    stack: ['YouTube', 'Cortes', 'Social Media'],
    image: '/dashboard_cortes_real.jpg',
    imagePosition: 'object-top',
    simpleSummary:
      'Um robô que assiste aos vídeos longos do YouTube ou podcasts, localiza os momentos mais engraçados ou polêmicos, faz os cortes verticais automaticamente e publica nos Shorts, Reels e TikTok com legendas prontas.',
    features: [
      'Detecção automática dos momentos com maior retenção e engajamento',
      'Enquadramento vertical automático (formato 9:16 para Reels e TikTok)',
      'Geração de legendas dinâmicas e títulos chamativos',
      'Agendamento e publicação automática nas redes do influenciador',
    ],
    businessImpact:
      'Multiplica por 10 o alcance e seguidores do influenciador reaproveitando vídeos que já foram gravados.',
  },
  {
    title: 'ERP para Lojas',
    description:
      'Controle total de produtos, despesas, cálculo de lucro diário, contagem de estoque e automação de mensagens via WhatsApp.',
    icon: Store,
    stack: ['Estoque', 'Financeiro', 'WhatsApp'],
    image: '/dashboard_erp_real.jpg',
    imagePosition: 'object-center',
    simpleSummary:
      'O cérebro operacional da sua loja física ou online. Dá baixa automática no estoque na hora da venda, calcula seu lucro líquido real do dia descontando os custos e manda mensagem no WhatsApp do cliente avisando sobre o pedido.',
    features: [
      'Frente de caixa (PDV) ultra-rápida compatível com leitor de código de barras',
      'Controle de estoque inteligente com alerta de reposição mínima',
      'Cálculo automático de custos, margem e lucro real por produto',
      'Disparo de mensagens no WhatsApp com status do pedido e comprovante',
    ],
    businessImpact:
      'Fim dos furos de estoque, controle rigoroso do caixa e clientes impressionados com o atendimento via WhatsApp.',
  },
  {
    title: 'Sistemas Corporativos Sob Medida',
    description:
      'Plataformas de gestão geral desenvolvidas do zero com base nas ideias e regras de negócio exclusivas de cada cliente.',
    icon: Building2,
    stack: ['Sob Medida', 'Gestão', 'Escala'],
    image: '/dashboard_corporativo_real.jpg',
    imagePosition: 'object-center',
    simpleSummary:
      'Não achou nenhum sistema pronto no mercado que atenda o seu modelo de negócio? Nós construímos um software exclusivo do zero, com as regras, telas, relatórios e processos exatos da sua empresa.',
    features: [
      'Desenvolvimento 100% customizado com base no fluxo real da sua empresa',
      'Sem cobrança de mensalidade por usuário (o sistema é seu)',
      'Integração com qualquer sistema que você já utilize',
      'Painel limpo, moderno e intuitivo para toda a equipe aprender rápido',
    ],
    businessImpact:
      'Sua empresa ganha uma vantagem competitiva exclusiva com um sistema que ninguém no mercado tem.',
  },
  {
    title: 'Dashboard de Métricas de Performance',
    description:
      'Acompanhamento avançado de dados com análise de tráfego, taxas de conversão e métricas vitais para tomada de decisão.',
    icon: LineChart,
    stack: ['Tráfego', 'Conversão', 'Analytics'],
    image: '/dashboard_metricas.jpg',
    imagePosition: 'object-center',
    simpleSummary:
      'Um painel executivo com gráficos em tempo real que reúne todas as informações vitais do seu negócio (vendas, tráfego de anúncios, taxa de conversão e custo por cliente). Você bate o olho e sabe na hora se o dia deu lucro.',
    features: [
      'Conexão com plataformas de anúncios (Meta Ads, Google Ads) e gateways de pagamento',
      'Visualização de taxa de conversão e retorno sobre investimento (ROAS)',
      'Filtros comparativos de períodos (hoje vs ontem, este mês vs mês passado)',
      'Acesso seguro e responsivo para consultar direto do celular',
    ],
    businessImpact:
      'Decisões financeiras e de marketing tomadas em segundos com base em números confiáveis e atualizados.',
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Travar o scroll da página enquanto o modal estiver aberto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
    e.preventDefault()
    const displayTitle = title.toLowerCase().startsWith('sistema') ? title.replace(/^sistemas?\s/i, '') : title
    const message = `Olá! Gostaria de mais informações sobre o sistema ${displayTitle}. Como funciona?`
    const url = `https://wa.me/5592974005948?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="projetos" className="py-12 md:py-24">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <ScrollReveal direction="up" distance={24} duration={600}>
          <div className="mb-14 max-w-2xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Projetos que resolvem problemas reais
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Uma seleção de sistemas customizados construídos para escala,
              confiabilidade e manutenção a longo prazo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const whatsappMessage = `Olá! Gostaria de mais informações sobre o sistema ${
              project.title.toLowerCase().startsWith('sistema')
                ? project.title.replace(/^sistemas?\s/i, '')
                : project.title
            }. Como funciona?`
            const whatsappUrl = `https://wa.me/5592974005948?text=${encodeURIComponent(whatsappMessage)}`
            const staggerDelay = (index % 3) * 110

            return (
              <ScrollReveal
                key={project.title}
                delay={staggerDelay}
                distance={32}
                duration={650}
                className="h-full"
              >
                <article
                  className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 select-none"
                >
                  <div className="relative aspect-video w-full border-b border-border/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.imagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                    />
                    {/* Subtle overlay to blend the image with dark mode */}
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[9px] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* Linha de Ações: Saber mais + Quero esse sistema */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="overflow-hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-transparent text-muted-foreground hover:text-white hover:border-primary/50 font-medium text-xs transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <Info className="h-3.5 w-3.5 shrink-0" />
                        <span>Saber mais</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        onClick={(e) => handleProjectClick(e, project.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-white group/link"
                      >
                        <span>Quero esse sistema</span>
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      {/* Modal Interativo com Detalhes do Projeto */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-300"
        >
          {/* Backdrop com desfoque */}
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Conteúdo do Modal */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-[#13151A] p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">



            {/* Cabeçalho do Modal */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>
            </div>

            {/* Destaque Principal: Resumo Prático para o Cliente */}
            <div className="rounded-xl border border-border/80 bg-secondary/70 p-4 sm:p-5 flex items-start gap-3.5 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 border border-border text-primary shrink-0 mt-0.5">
                <Lightbulb className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary text-primary-foreground text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 shadow-sm">
                  Resumo prático (o que isso faz pelo seu negócio)
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                  {selectedProject.simpleSummary}
                </p>
              </div>
            </div>

            {/* Recursos & Funcionalidades */}
            <div className="space-y-6 text-sm text-muted-foreground">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Principais recursos inclusos no sistema
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impacto no Negócio */}
              <div className="rounded-xl border border-border bg-secondary/50 p-4 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Benefício no seu bolso e no seu tempo
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {selectedProject.businessImpact}
                  </p>
                </div>
              </div>
            </div>

            {/* Rodapé com Botão WhatsApp */}
            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-border hover:bg-white/5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Voltar aos projetos
              </button>

              <a
                href={`https://wa.me/5592974005948?text=${encodeURIComponent(
                  `Olá Kaynã! Vi o projeto "${selectedProject.title}" no seu portfólio e gostaria de implementar algo assim no meu negócio.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Quero esse sistema</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
