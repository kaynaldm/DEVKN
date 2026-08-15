import Link from 'next/link'
import { ArrowRight, Cpu, Workflow, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NetworkBackground } from '@/components/network-background'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-background"
    >
      <NetworkBackground />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance font-sans text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Engenharia de{' '}
            <span className="text-primary">Sistemas Avançados</span>{' '}
            &amp; Automações
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Desenvolvo plataformas robustas, dashboards de gestão e fluxos de
            automação sob medida que reduzem trabalho manual, escalam operações e
            colocam dados confiáveis no centro das decisões.
          </p>


          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#projetos" className="flex items-center justify-center whitespace-nowrap">
                Explorar sistemas
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-transparent hover:bg-secondary/60"
            >
              <Link href="https://wa.me/5592974005948?text=Ol%C3%A1%21%20Gostaria%20de%20entrar%20em%20contato%20para%20falar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">Entrar em contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
