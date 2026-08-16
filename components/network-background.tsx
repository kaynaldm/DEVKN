'use client'

import { useEffect, useRef } from 'react'

// --- CONFIGURAÇÃO (ESTRITAMENTE CONFORME REQUISITOS) ---
const COLOR_RGB = '45, 212, 191' // Teal (#2dd4bf)

// 1. Glow Radial Atrás do Título
const GLOW_RADIUS = 300 // Diâmetro de 600px
const GLOW_BASE_OPACITY = 0.35 // Muito mais visível
const GLOW_PULSE_AMPLITUDE = 0.10 // Varia entre 0.25 e 0.45 (+- 0.10 de 0.35)
const GLOW_CYCLE_MS = 6000 // Ciclo de 6s

// 2 & 3. Partículas em 3 Camadas de Profundidade + Parallax
const LAYERS = {
  far: { count: 15, radius: 1.0, opacity: 0.3, speed: 0.1, parallax: 0, blur: 1.0 },
  mid: { count: 12, radius: 1.8, opacity: 0.5, speed: 0.2, parallax: 12, blur: 0.5 },
  near: { count: 8, radius: 2.5, opacity: 0.7, speed: 0.3, parallax: 25, blur: 0.0 }
}

// 4. Conexões
const CONNECTION_DISTANCE = 120
const MAX_LINE_OPACITY = 0.15

// 5. Nós de Destaque
const HIGHLIGHT_COUNT = 3
const HIGHLIGHT_CYCLE_MS = 3000
const HIGHLIGHT_BASE_RADIUS = 12
const HIGHLIGHT_MAX_OPACITY = 0.2
// ------------------------------------------------------

type LayerName = 'far' | 'mid' | 'near'

class Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  layer: LayerName
  isHighlight: boolean
  highlightDelay: number

  constructor(canvasWidth: number, canvasHeight: number, layer: LayerName, isHighlight: boolean = false, highlightDelay: number = 0) {
    this.layer = layer
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.baseX = this.x
    this.baseY = this.y
    this.isHighlight = isHighlight
    this.highlightDelay = highlightDelay

    const conf = LAYERS[layer]
    const angle = Math.random() * Math.PI * 2
    this.vx = Math.cos(angle) * conf.speed
    this.vy = Math.sin(angle) * conf.speed
  }

  update(canvasWidth: number, canvasHeight: number, mouseX: number, mouseY: number, isMobile: boolean) {
    this.baseX += this.vx
    this.baseY += this.vy

    if (this.baseX < 0 || this.baseX > canvasWidth) this.vx *= -1
    if (this.baseY < 0 || this.baseY > canvasHeight) this.vy *= -1

    const conf = LAYERS[this.layer]

    // 3. Parallax com easing suave
    if (!isMobile && conf.parallax > 0) {
      const dx = (mouseX - canvasWidth / 2) / (canvasWidth / 2) // -1 a 1
      const dy = (mouseY - canvasHeight / 2) / (canvasHeight / 2) // -1 a 1

      const targetX = this.baseX - dx * conf.parallax
      const targetY = this.baseY - dy * conf.parallax

      this.x += (targetX - this.x) * 0.05 // Easing tipo lerp
      this.y += (targetY - this.y) * 0.05
    } else {
      this.x = this.baseX
      this.y = this.baseY
    }
  }

  draw(ctx: CanvasRenderingContext2D, time: number) {
    const conf = LAYERS[this.layer]

    ctx.beginPath()
    ctx.arc(this.x, this.y, conf.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${COLOR_RGB}, ${conf.opacity})`

    // Efeito de blur por camada
    if (conf.blur > 0) {
      ctx.filter = `blur(${conf.blur}px)`
    } else {
      ctx.filter = 'none'
    }
    ctx.fill()
    ctx.filter = 'none' // Reset filter para não afetar os próximos desenhos

    // 5. Animação dos nós de destaque (Sonar/Ping)
    if (this.isHighlight) {
      const cycleTime = (time + this.highlightDelay) % HIGHLIGHT_CYCLE_MS
      const progress = cycleTime / HIGHLIGHT_CYCLE_MS // 0 a 1

      const currentRadius = HIGHLIGHT_BASE_RADIUS * (1 + progress * 0.3) // Scale 1 a 1.3
      const currentOpacity = HIGHLIGHT_MAX_OPACITY * (1 - progress) // Fade out

      ctx.beginPath()
      ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(${COLOR_RGB}, ${currentOpacity})`
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let resizeTimeout: NodeJS.Timeout
    let isMobile = false

    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      isMobile = canvas.width < 768

      mouseRef.current = { x: canvas.width / 2, y: canvas.height / 2 }
      particles = []

      // Instanciar camadas exatamente como solicitado
      for (let i = 0; i < LAYERS.far.count; i++) particles.push(new Particle(canvas.width, canvas.height, 'far'))
      for (let i = 0; i < LAYERS.mid.count; i++) particles.push(new Particle(canvas.width, canvas.height, 'mid'))

      for (let i = 0; i < LAYERS.near.count; i++) {
        const isHighlight = i < HIGHLIGHT_COUNT
        const delay = isHighlight ? i * (HIGHLIGHT_CYCLE_MS / HIGHLIGHT_COUNT) : 0 // 0s, 1s, 2s
        particles.push(new Particle(canvas.width, canvas.height, 'near', isHighlight, delay))
      }
    }

    const draw = (time: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. Glow Radial atrás do <h1>
      // Posicionando o centro Y ligeiramente acima do meio da tela para ficar exatamente atrás do título
      const glowY = canvas.height * 0.4
      const glowOpacity = GLOW_BASE_OPACITY + Math.sin((time * Math.PI * 2) / GLOW_CYCLE_MS) * GLOW_PULSE_AMPLITUDE

      ctx.save()
      ctx.filter = 'blur(90px)' // Blur nativo de 90px
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, glowY, 0,
        canvas.width / 2, glowY, GLOW_RADIUS
      )
      gradient.addColorStop(0, `rgba(${COLOR_RGB}, ${glowOpacity})`)
      gradient.addColorStop(1, `rgba(${COLOR_RGB}, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      // Atualizar física e Parallax
      for (const p of particles) {
        p.update(canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y, isMobile)
      }

      // 4. Conexões (apenas na mesma camada)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]

          if (p1.layer !== p2.layer) continue

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * MAX_LINE_OPACITY
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${COLOR_RGB}, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Desenhar partículas
      for (const p of particles) {
        p.draw(ctx, time)
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        init()
      }, 200)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        cancelAnimationFrame(animationFrameId)
      } else {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    init()
    animationFrameId = requestAnimationFrame(draw)

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
