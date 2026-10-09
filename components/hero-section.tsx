import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import bgImage from '@/hero-bg.png'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[55vh] md:min-h-[90vh] flex items-start md:items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Plano de Fundo"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay just in case */}
        <div className="absolute inset-0 bg-background/20"></div>
        {/* Gradient fade to blend with the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 pt-16 pb-12 md:py-32 z-10">

        {/* Text Content */}
        <div className="max-w-3xl text-left select-none">

          {/* Supertext */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex items-center w-12 h-2">
              <style>{`
                @keyframes droplet-move {
                  0%, 100% { transform: translateX(0); }
                  50% { transform: translateX(42px); }
                }
              `}</style>
              {/* Track line */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-[#007BFF]/10 via-[#007BFF]/50 to-[#007BFF]/10 rounded-full"></div>
              {/* Moving Droplet */}
              <div
                className="absolute h-1.5 w-1.5 rounded-full bg-[#007BFF] shadow-[0_0_10px_2px_rgba(0,123,255,0.8)]"
                style={{ animation: 'droplet-move 2s ease-in-out infinite' }}
              />
            </div>
            <span className="text-[12px] lg:text-[13px] font-semibold tracking-[0.15em] text-[#007BFF] uppercase">
              Sistemas Inteligentes
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-[34px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-tight">
            <span className="block text-white mb-1">Soluções que</span>
            <span className="text-[#007BFF]">impulsionam</span> <span className="text-white">decisões<span className="text-[#007BFF]">.</span></span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-xl text-[15px] lg:text-[17px] font-normal leading-[1.6] text-slate-300">
            Desenvolvo sistemas robustos e automações inteligentes<br className="hidden sm:block" /> para transformar dados em resultados.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
            <Button
              asChild
              className="group bg-[#007BFF] text-white hover:bg-[#0056b3] rounded-full px-8 h-12 sm:h-14 text-[14px] lg:text-[16px] font-medium transition-all shadow-[0_0_30px_rgba(0,123,255,0.25)] border-none w-full sm:w-auto"
            >
              <Link href="#projetos" className="flex items-center justify-center whitespace-nowrap">
                Explorar sistemas
                <ArrowRight
                  className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
