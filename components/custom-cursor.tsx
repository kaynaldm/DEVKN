'use client'

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Mouse coordinates (target)
  const mousePos = useRef({ x: -100, y: -100 })
  // Ring coordinates (smoothed physics)
  const ringPos = useRef({ x: -100, y: -100 })
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Disable strictly on mobile / tablet touch devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    if (isMobile) return

    setIsEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY

      if (!isVisible) setIsVisible(true)

      // Direct zero-latency hardware update on inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect clickable elements for reactive expansion
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
      )
      setIsHovered(!!interactive)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    // Fluid spring lerp loop (60-144fps)
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

    const render = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.2)
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.2)

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }

      rafId.current = requestAnimationFrame(render)
    }

    rafId.current = requestAnimationFrame(render)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [isVisible])

  if (!isEnabled) return null

  return (
    <div className="pointer-events-none select-none">
      {/* 1. Precision Center Dot — 0ms Latency */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-150 ease-out shadow-[0_0_6px_rgba(255,255,255,0.8)] ${
            isClicked ? 'scale-75' : isHovered ? 'scale-125 bg-white' : 'scale-100'
          } ${isHovered ? 'w-2 h-2' : 'w-1.5 h-1.5'}`}
        />
      </div>

      {/* 2. Fluid Follower Ring — Pure crisp border, ZERO backdrop-blur, NO black artifacts */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out bg-transparent ${
            isClicked
              ? 'w-7 h-7 border-white/90 scale-90'
              : isHovered
              ? 'w-11 h-11 border-white/80 scale-100 shadow-[0_0_12px_rgba(255,255,255,0.15)]'
              : 'w-7 h-7 border-slate-300/40 scale-100'
          }`}
        />
      </div>
    </div>
  )
}
