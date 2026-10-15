"use client"

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number // delay in milliseconds
  duration?: number // duration in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number // initial displacement in pixels
  threshold?: number // intersection threshold (0 to 1)
  rootMargin?: string // intersection root margin
  once?: boolean // only animate once when entering view
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 700,
  direction = 'up',
  distance = 36,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  className,
  style,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Fallback if IntersectionObserver is not supported in environment
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, once])

  const getTransform = () => {
    if (isVisible) return 'none'
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`
      case 'down':
        return `translate3d(0, -${distance}px, 0)`
      case 'left':
        return `translate3d(${distance}px, 0, 0)`
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`
      case 'none':
      default:
        return 'none'
    }
  }

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
