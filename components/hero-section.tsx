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
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Plano de Fundo"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 pt-32 pb-24 md:py-48 z-10">
        {/* Text Content */}
        <div className="max-w-4xl text-left select-none">

          {/* Supertext — intro stagger 0 */}
          <div className="intro-stagger intro-delay-0 flex items-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-border"></div>
            <span className="text-[10px] lg:text-[12px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Engenharia de Sistemas
            </span>
          </div>

          {/* Heading — intro stagger 1 */}
          <h1 className="intro-stagger intro-delay-1 font-sans text-[36px] sm:text-[50px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tighter">
            <span className="text-white">Sistemas </span>
            <span className="text-primary">inteligentes<span className="text-primary">.</span></span>
          </h1>

          {/* Paragraph — intro stagger 2 */}
          <p className="intro-stagger intro-delay-2 mt-8 max-w-2xl text-[14px] lg:text-[16px] font-medium leading-[1.7] text-muted-foreground">
            Sistemas <span className="text-white">robustos</span>, automações <span className="text-white">inteligentes</span> e gestão de dados orientada a <span className="text-primary">alta performance</span> e resultados concretos.
          </p>

          {/* Buttons — intro stagger 3 */}
          <div className="intro-stagger intro-delay-3 mt-12 flex flex-col sm:flex-row items-center gap-5">
            <button
              type="button"
              onClick={handleScrollToProjects}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 sm:h-14 text-[13px] lg:text-[14px] font-bold transition-all border border-border w-full sm:w-auto cursor-pointer inline-flex items-center justify-center whitespace-nowrap active:scale-[0.98]"
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
