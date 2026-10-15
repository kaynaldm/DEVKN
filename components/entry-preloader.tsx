'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function EntryPreloader() {
  const [progress, setProgress] = useState(0)
  const [is100, setIs100] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  // Lock scroll completely on both PC and mobile during preloader
  useEffect(() => {
    document.documentElement.classList.add('preloader-active')
    document.body.classList.add('preloader-active')
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    let current = 0
    const timer = setInterval(() => {
      // Snappy progressive steps (~1.2s total)
      current += Math.floor(Math.random() * 6) + 4

      if (current >= 100) {
        current = 100
        setProgress(100)
        setIs100(true)
        clearInterval(timer)
      } else {
        setProgress(current)
      }
    }, 28)

    return () => {
      clearInterval(timer)
      document.documentElement.classList.remove('preloader-active')
      document.body.classList.remove('preloader-active')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  const handleStart = useCallback(() => {
    if (isRevealing || !is100) return
    setIsRevealing(true)

    setTimeout(() => {
      setIsFinished(true)
      document.documentElement.classList.remove('preloader-active')
      document.body.classList.remove('preloader-active')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }, 850)
  }, [isRevealing, is100])

  // Allow Enter or Space key to start when at 100%
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
      className="fixed inset-0 z-[99990] select-none pointer-events-auto overflow-hidden bg-[#050608] touch-none"
    >
      <style>{`
        html, body {
          overflow: hidden !important;
          height: 100vh !important;
          height: 100dvh !important;
          max-height: 100vh !important;
          max-height: 100dvh !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        @keyframes hud-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hud-spin-rev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes laser-beam-expand {
          0% { transform: scaleX(0); opacity: 0; }
          25% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1.6); opacity: 0; }
        }
        @keyframes shockwave-burst {
          0% {
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 1;
            box-shadow: 0 0 30px 10px rgba(255, 255, 255, 0.95), 0 0 70px 25px rgba(56, 189, 248, 0.8);
          }
          100% {
            transform: translate(-50%, -50%) scale(3.5);
            opacity: 0;
            box-shadow: 0 0 90px 25px rgba(255, 255, 255, 0), 0 0 140px 50px rgba(56, 189, 248, 0);
          }
        }
        @keyframes screen-flash-surge {
          0% { opacity: 0; }
          20% { opacity: 0.65; }
          100% { opacity: 0; }
        }
      `}</style>

      {/* ── TOP SHUTTER PANEL (Metade Superior com Imagem de Fundo) ── */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 overflow-hidden transition-transform duration-750 ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${
          isRevealing ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-[200%] pointer-events-none transition-transform duration-750 ease-out ${
            isRevealing ? 'scale-110 filter brightness-125' : 'scale-100'
          }`}
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,8,0.2)_0%,rgba(5,6,8,0.65)_70%,rgba(5,6,8,0.92)_100%)]" />
        </div>
      </div>

      {/* ── BOTTOM SHUTTER PANEL (Metade Inferior com Imagem de Fundo) ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden transition-transform duration-750 ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${
          isRevealing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 w-full h-[200%] pointer-events-none transition-transform duration-750 ease-out ${
            isRevealing ? 'scale-110 filter brightness-125' : 'scale-100'
          }`}
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,8,0.2)_0%,rgba(5,6,8,0.65)_70%,rgba(5,6,8,0.92)_100%)]" />
        </div>
      </div>

      {/* ── SCREEN LIGHT FLASH SURGE (Clarão Cyberpunk no Iniciar) ── */}
      {isRevealing && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent z-40 pointer-events-none"
          style={{ animation: 'screen-flash-surge 0.65s ease-out forwards' }}
        />
      )}

      {/* ── SONIC SHOCKWAVE BURST (Onda de Impacto ao Clicar) ── */}
      {isRevealing && (
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border-2 border-white pointer-events-none z-45"
          style={{ animation: 'shockwave-burst 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        />
      )}

      {/* ── CENTRAL LASER HORIZON SEAM (Corte de Luz no Centro) ── */}
      {isRevealing && (
        <div
          className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[3px] bg-white shadow-[0_0_30px_6px_rgba(255,255,255,0.95),0_0_60px_12px_rgba(56,189,248,0.8)] z-50 pointer-events-none"
          style={{ animation: 'laser-beam-expand 0.75s ease-out forwards' }}
        />
      )}

      {/* ── HOLOGRAPHIC ORBITAL RINGS (HUD Futurista Proporcional no Mobile e PC) ── */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none overflow-hidden flex items-center justify-center transition-all duration-400 ${
          isRevealing ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
        }`}
      >
        {/* Outer Orbital Ring: 100% contido no celular (280px < 390px) e grandioso no PC */}
        <div
          className="w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] rounded-full border border-dashed border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
          style={{ animation: 'hud-spin 35s linear infinite' }}
        />

        {/* Inner Tech Ring: concêntrico e perfeitamente equilibrado */}
        <div
          className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-white/15 shadow-[inset_0_0_20px_rgba(56,189,248,0.08)]"
          style={{ animation: 'hud-spin-rev 25s linear infinite' }}
        />
      </div>

      {/* ── CENTER SHOWPIECE (Foco Total Limpo, Nítido e Proporcional) ── */}
      <div
        className={`relative z-20 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center transition-all duration-400 ease-out ${
          isRevealing ? 'opacity-0 scale-115 blur-sm' : 'opacity-100 scale-100'
        }`}
      >
        <div className="w-full max-w-sm sm:max-w-xl flex flex-col items-center">
          
          {/* Nome Limpo, Sólido e Proporcional */}
          <div className="font-mono text-xs sm:text-base md:text-lg font-extrabold tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase mb-1 sm:mb-2 select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            KAYNÃ VIANA
          </div>

          {/* Mega Display Counter (Proporcional no Mobile e Grandioso no Desktop) */}
          <div className="relative font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white tabular-nums my-0.5 sm:my-1 leading-none select-none drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
            {progress}
            <span className="text-2xl sm:text-3xl md:text-4xl text-slate-300 ml-1.5 sm:ml-2 font-mono font-light">
              %
            </span>
          </div>

          {/* Progress Bar (visível durante a contagem; dissolve suavemente ao bater 100%) */}
          <div
            className={`w-full max-w-[200px] sm:max-w-sm h-[2.5px] sm:h-[3px] bg-white/10 rounded-full overflow-hidden transition-all duration-300 ${
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
            <div className="mt-5 sm:mt-8 flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
              <button
                type="button"
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.55)] hover:shadow-[0_0_70px_rgba(255,255,255,0.95)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>INICIAR</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Aura pulsante suave */}
                <span className="absolute -inset-1 rounded-full bg-white/35 blur-sm animate-pulse" />
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


