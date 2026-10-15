"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Expand automaticamente se acessar pelo link do menu (#sobre)
    if (typeof window !== 'undefined' && window.location.hash === '#sobre') {
      setIsExpanded(true)
    }

    const handleHashChange = () => {
      if (window.location.hash === '#sobre') {
        setIsExpanded(true)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <section id="sobre" className="relative py-14 sm:py-20 md:py-36 bg-background overflow-hidden">

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Coluna da Foto com iluminação e animações laterais em degradê - oculta no mobile */}
          <ScrollReveal
            direction="up"
            distance={32}
            duration={700}
            className="hidden lg:flex lg:col-span-5 relative items-center justify-center py-4 sm:py-6"
          >
            {/* Container para a Foto e Animações Laterais */}
            <div className="relative w-full max-w-[420px] xl:max-w-[460px] flex items-center justify-center">
              
              {/* Aura Difusa em Degradê (não-quadrado, orgânico e fluido) */}
              <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-gradient-to-tr from-primary/15 via-slate-500/10 to-transparent blur-3xl pointer-events-none animate-aura-breathe z-0" />

              {/* Animação Lateral Esquerda: Feixe de Luz em Degradê */}
              <div className="absolute -left-3 sm:-left-5 top-8 bottom-8 w-[2px] rounded-full overflow-hidden pointer-events-none z-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border/80 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-lateral-down" />
              </div>

              {/* Animação Lateral Direita: Feixe de Luz em Degradê */}
              <div className="absolute -right-3 sm:-right-5 top-12 bottom-12 w-[2px] rounded-full overflow-hidden pointer-events-none z-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border/70 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-slate-300 to-transparent animate-lateral-up" />
              </div>

              {/* Brilho suave difuso nas laterais */}
              <div className="absolute -left-4 top-1/4 bottom-1/4 w-3 bg-gradient-to-r from-primary/20 to-transparent blur-md pointer-events-none z-10 animate-aura-breathe" />
              <div className="absolute -right-4 top-1/3 bottom-1/4 w-3 bg-gradient-to-l from-primary/20 to-transparent blur-md pointer-events-none z-10 animate-aura-breathe" />

              {/* Moldura da Foto — Cantos arredondados e traço de laser dinâmico em degradê */}
              <div className="relative group aspect-[4/4.4] sm:aspect-[4/4.5] w-full rounded-[24px] sm:rounded-[28px] p-[1.5px] overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.015] z-10 shadow-2xl">
                {/* Feixe de Luz Giratório (Border Beam) com degradê contínuo */}
                <div 
                  className="absolute -inset-[100%] animate-border-beam-spin pointer-events-none opacity-75"
                  style={{
                    background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 70deg, rgba(226, 232, 240, 0.7) 90deg, transparent 110deg, transparent 360deg)',
                  }}
                />

                {/* Container Interno Arredondado */}
                <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-card border border-border/80">
                  {/* Linha interna decorativa sutil */}
                  <div className="absolute inset-2.5 sm:inset-3 rounded-[18px] sm:rounded-[22px] border border-border/40 pointer-events-none z-10" />

                  {/* Imagem */}
                  <Image
                    src="/about_foto.jpg"
                    alt="História"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradientes de mesclagem sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-background/25 pointer-events-none z-10" />
                </div>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            distance={28}
            duration={700}
            delay={120}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground w-fit mb-3.5 sm:mb-6">
              Sobre mim
            </div>
            <h2 className="text-[24px] xs:text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.2] sm:leading-tight mb-4 sm:mb-7 text-white text-pretty">
              Transformando a curiosidade em <span className="text-primary">eficiência tecnológica</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
              <p>
                Desde que comecei a programar, minha pergunta favorita sempre foi: &quot;E se eu pudesse automatizar isso?&quot;. Meu nome é Kaynã, tenho 20 anos e transformei a curiosidade em minha principal ferramenta de trabalho para desenhar <span className="text-white font-medium">estruturas tecnológicas escaláveis</span>.
              </p>
              
              <div 
                className={`space-y-4 sm:space-y-6 transition-all duration-500 ease-in-out md:max-h-none md:opacity-100 md:overflow-visible ${
                  isExpanded ? 'max-h-[1000px] opacity-100 overflow-hidden' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p>
                  Enquanto muitos veem a internet como um conjunto de páginas, eu a vejo como uma fonte infinita de dados e processos que podem ser otimizados. Me especializei em navegar por sistemas complexos, contornar barreiras técnicas e transformar fluxos exaustivos em <span className="text-white font-medium">processos automáticos</span> que rodam com máxima <span className="text-primary font-medium">eficiência e precisão</span>.
                </p>
                <p>
                  Para mim, programar não é apenas digitar linhas de código, é <span className="text-white font-medium">criar autonomia e escala operacional</span>. Meu portfólio reflete essa jornada: arquiteturas que nasceram de problemas reais de negócio e foram resolvidas com lógica, persistência e foco no resultado final.
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 sm:mt-8 md:hidden text-primary hover:text-primary/80 font-bold transition-colors inline-flex items-center gap-1.5 self-start text-xs uppercase tracking-wide"
            >
              {isExpanded ? 'Mostrar menos' : 'Ler mais'}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
