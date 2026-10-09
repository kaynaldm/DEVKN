"use client";

import React, { useEffect, useRef } from "react";

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) - 0.5;
      targetMouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacityChange: number;

      constructor() {
        // @ts-ignore
        this.x = Math.random() * canvas.width;
        // @ts-ignore
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.1;
        this.speedX = Math.random() * 0.1 - 0.05;
        this.speedY = Math.random() * 0.1 - 0.05;
        this.opacity = Math.random();
        this.opacityChange = (Math.random() * 0.01) + 0.002;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // @ts-ignore
        if (this.x < 0) this.x = canvas.width;
        // @ts-ignore
        if (this.x > canvas.width) this.x = 0;
        // @ts-ignore
        if (this.y < 0) this.y = canvas.height;
        // @ts-ignore
        if (this.y > canvas.height) this.y = 0;

        this.opacity += this.opacityChange;
        if (this.opacity <= 0) {
          this.opacity = 0;
          this.opacityChange = Math.abs(this.opacityChange);
        } else if (this.opacity >= 1) {
          this.opacity = 1;
          this.opacityChange = -Math.abs(this.opacityChange);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        
        // Parallax effect: stars move opposite to mouse
        const parallaxX = mouseX * 50 * this.size;
        const parallaxY = mouseY * 50 * this.size;
        
        ctx.arc(this.x + parallaxX, this.y + parallaxY, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 7000);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Interpolate mouse for smooth parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default StarryBackground;
