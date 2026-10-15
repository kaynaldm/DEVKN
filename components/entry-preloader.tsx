'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function EntryPreloader() {
  const [progress, setProgress] = useState(0)
  const [is100, setIs100] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  // Trava scroll durante o preloader sem alterar dimensões do layout
  useEffect(() => {
    document.documentElement.classList.add('preloader-active')
    document.body.classList.add('preloader-active')

    let current = 0
    // Ritmo ágil e dinâmico (~1.3s total)
    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 3) + 1

      if (current >= 100) {
        current = 100
        setProgress(100)
        clearInterval(timer)
        setTimeout(() => setIs100(true), 100)
      } else {
        setProgress(current)
      }
    }, 24)

    return () => {
      clearInterval(timer)
      document.documentElement.classList.remove('preloader-active')
      document.body.classList.remove('preloader-active')
    }
  }, [])

  const handleStart = useCallback(() => {
    if (isRevealing || !is100) return
    setIsRevealing(true)

    // Dissolve suave e sem trancos (1000ms)
    setTimeout(() => {
      setIsFinished(true)
      document.documentElement.classList.remove('preloader-active')
      document.body.classList.remove('preloader-active')
    }, 1000)
  }, [isRevealing, is100])

  // Atalho de teclado Enter ou Espaço
  useEffect(() => {
    if (!is100) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleStart()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [is100, handleStart])

  if (isFinished) return null

  return (
    <aside
      aria-label="Abertura do Sistema"
      className={`fixed inset-0 z-[99990] select-none pointer-events-auto overflow-hidden bg-[#050608] touch-none transition-opacity duration-1000 ease-out will-change-[opacity] ${
        isRevealing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <style>{`
        html.preloader-active, body.preloader-active {
          overflow: hidden !important;
          touch-action: none !important;
        }
      `}</style>

      {/* ── BACKGROUND LAYER (Estático, Estável, Sem Jitter ou Resize) ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* PC / Desktop: Catedral de Dados */}
        <Image
          src="/catedral-pc.png"
          alt="Catedral de Dados em Neon"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center"
        />

        {/* Mobile: Catedral Vertical */}
        <Image
          src="/catedral-mobile.png"
          alt="Catedral de Dados em Neon Mobile"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center"
        />

        {/* Dark Atmospheric Contrast Overlays */}
        <div className="absolute inset-0 bg-[#050608]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,8,0.25)_0%,rgba(5,6,8,0.7)_70%,rgba(5,6,8,0.92)_100%)]" />
      </div>

      {/* ── CENTER SHOWPIECE (Foco Total Limpo e Nítido) ── */}
      <div
        className={`relative z-20 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center transition-all duration-700 ease-out ${
          isRevealing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="w-full max-w-sm sm:max-w-xl flex flex-col items-center">
          
          {/* Nome Limpo, Sólido e Proporcional */}
          <div className="font-mono text-xs sm:text-base md:text-lg font-extrabold tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase mb-1 sm:mb-2 select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            KAYNÃ VIANA
          </div>

          {/* Mega Display Counter (Proporcional e Limpo) */}
          <div className="relative font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white tabular-nums my-0.5 sm:my-1 leading-none select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            {progress}
            <span className="text-2xl sm:text-3xl md:text-4xl text-slate-300 ml-1.5 sm:ml-2 font-mono font-light">
              %
            </span>
          </div>

          {/* Progress Bar (visível durante a contagem; dissolve suavemente ao bater 100%) */}
          <div
            className={`w-full max-w-[180px] sm:max-w-sm h-[2.5px] sm:h-[3px] bg-white/10 rounded-full overflow-hidden transition-all duration-400 ${
              is100 ? 'opacity-0 scale-95 pointer-events-none h-0 mt-0 mb-0' : 'opacity-100 mt-4 sm:mt-6'
            }`}
          >
            <div
              className="h-full bg-white transition-all duration-75 ease-out rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Botão INICIAR quando atinge 100% */}
          {is100 ? (
            <div className="mt-5 sm:mt-8 flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">
              <button
                type="button"
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:shadow-[0_0_55px_rgba(255,255,255,0.85)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>INICIAR</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 duration-300" />
                </span>
                {/* Aura sutil e suave */}
                <span className="absolute -inset-1 rounded-full bg-white/20 blur-sm" />
              </button>
              <span className="mt-2.5 sm:mt-3 font-mono text-[9px] sm:text-[10px] tracking-widest text-slate-300 uppercase select-none opacity-75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Pressione Enter ou toque para entrar
              </span>
            </div>
          ) : (
            <div className="h-[64px] sm:h-[76px] mt-5 sm:mt-8" />
          )}

        </div>
      </div>
    </aside>
  )
}
