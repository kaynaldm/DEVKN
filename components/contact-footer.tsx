import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2h3.31l-7.23 8.26L22.5 22h-6.6l-5.17-6.76L4.8 22H1.49l7.73-8.84L1.5 2h6.77l4.67 6.18L18.24 2zm-1.16 18h1.83L7.02 3.9H5.05L17.08 20z" />
    </svg>
  )
}

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { label: 'X (Twitter)', href: 'https://twitter.com', icon: XIcon },
]

export function ContactFooter() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-border">
      <ScrollReveal
        direction="up"
        distance={28}
        duration={700}
        className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24 flex flex-col items-start justify-start text-left"
      >
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl text-white">
          Pronto para automatizar e escalar suas operações?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xl">
          Conte seu desafio e eu retorno com uma proposta técnica clara para o
          seu próximo sistema.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-10 sm:h-12 text-[12px] lg:text-[14px] font-medium transition-all border border-border w-full sm:w-auto"
          >
            <a href="https://wa.me/5592974005948?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20a%20constru%C3%A7%C3%A3o%20de%20um%20sistema." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center whitespace-nowrap">
              Solicitar Proposta Técnica
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </footer>
  )
}
