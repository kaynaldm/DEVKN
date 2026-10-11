"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

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
    <section id="sobre" className="relative py-24 md:py-40 bg-background">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-2xl">
            <Image
              src="/about_foto.jpg"
              alt="História"
              fill
              className="object-cover object-center"
            />
            {/* Gradiente sutil por cima */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-primary w-fit mb-8">
              O Arquiteto
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-balance mb-8 text-white">
              De desenvolvedor a arquiteto de <span className="text-primary">soluções de ponta</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-base leading-relaxed text-pretty">
              <p>
                Desde que comecei a programar, minha pergunta favorita sempre foi: &quot;E se eu pudesse automatizar isso?&quot;. Meu nome é Kaynã, tenho 20 anos e transformei a curiosidade em minha principal ferramenta de trabalho para desenhar <span className="text-white font-medium">estruturas tecnológicas escaláveis</span>.
              </p>
              
              <div 
                className={`space-y-6 transition-all duration-500 ease-in-out md:max-h-none md:opacity-100 md:overflow-visible ${
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
              className="mt-8 md:hidden text-primary hover:text-primary/80 font-bold transition-colors inline-flex items-center gap-1.5 self-start text-xs uppercase tracking-wide"
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
            
          </div>
        </div>
      </div>
    </section>
  )
}
