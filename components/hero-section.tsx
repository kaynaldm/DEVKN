'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import bgImage from '@/hero-bg.png'

export function HeroSection() {
  const handleScrollToProjects = () => {
    const target = document.getElementById('projetos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', '#projetos')
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[60vh] md:min-h-[95vh] flex items-start md:items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Plano de Fundo"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        {/* Subtle overlay just in case */}
        <div className="absolute inset-0 bg-background/40"></div>
        {/* Gradient fade to blend with the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 pt-32 pb-24 md:py-48 z-10">

        {/* Text Content */}
        <div className="max-w-4xl text-left select-none">

          {/* Supertext */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative flex items-center w-12 h-2">
              <style>{`
                @keyframes droplet-move {
                  0%, 100% { transform: translateX(0); }
                  50% { transform: translateX(42px); }
                }
              `}</style>
              {/* Track line */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 rounded-full"></div>
              {/* Moving Droplet */}
              <div
                className="absolute h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(0,123,255,0.8)]"
                style={{ animation: 'droplet-move 2s ease-in-out infinite' }}
              />
            </div>
            <span className="text-[10px] lg:text-[12px] font-bold tracking-[0.2em] text-primary uppercase">
              Engenharia de Sistemas
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-[32px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.05] tracking-tighter">
            <span className="block text-white mb-2">Sistemas inteligentes para</span>
            <span className="text-primary">acelerar</span> <span className="text-white">seu crescimento<span className="text-primary">.</span></span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 max-w-2xl text-[14px] lg:text-[16px] font-medium leading-[1.7] text-slate-400">
            Sistemas <span className="text-white">robustos</span>, automações <span className="text-white">inteligentes</span> e gestão de dados orientada a <span className="text-primary">alta performance</span> e resultados concretos.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
            <button
              type="button"
              onClick={handleScrollToProjects}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 sm:h-14 text-[13px] lg:text-[14px] font-bold transition-all shadow-lg shadow-primary/25 border-none w-full sm:w-auto cursor-pointer inline-flex items-center justify-center whitespace-nowrap active:scale-[0.98]"
            >
              Consultar Soluções
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

