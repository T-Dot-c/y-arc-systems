import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './DeepMindBackground.css';

const DeepMindBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-fidelity physics feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for scene tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  // Handle local mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Interactive Grid Logic (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const particles: { x: number; y: number; bx: number; by: number }[] = [];
    const step = 45;

    for (let x = 0; x <= width + step; x += step) {
      for (let y = 0; y <= height + step; y += step) {
        particles.push({ x, y, bx: x, by: y });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;

      const mx = (mouseX.get() + 0.5) * width;
      const my = (mouseY.get() + 0.5) * height;

      // Draw grid with displacement
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mx - p.bx;
        const dy = my - p.by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 25;
          p.x = p.bx - (dx / dist) * force;
          p.y = p.by - (dy / dist) * force;
        } else {
          p.x += (p.bx - p.x) * 0.1;
          p.y += (p.by - p.y) * 0.1;
        }
      }

      // Render horizontal lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const next = particles[i + 1];
        if (next && next.bx > p.bx) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(next.x, next.y);
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  // Shards Generation
  const shards = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: 40 + Math.random() * 80,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    depth: -100 - i * 50
  })), []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#f0f4f8] pointer-events-none deepmind-container">
      {/* 3D Scene Root */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="absolute inset-0 deepmind-3d-scene"
      >
        {/* Interactive Grid Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40"
        />

        {/* Floating 3D Shards */}
        {shards.map((shard, i) => (
          <motion.div
            key={i}
            initial={{ x: `${shard.initialX}%`, y: `${shard.initialY}%`, translateZ: shard.depth }}
            animate={{
              y: [`${shard.initialY}%`, `${shard.initialY - 10}%`, `${shard.initialY}%`],
              rotateY: [0, 180, 360],
              rotateX: [0, 45, 0]
            }}
            transition={{
              duration: shard.duration,
              repeat: Infinity,
              ease: "linear",
              delay: shard.delay
            }}
            style={{ width: shard.size, height: shard.size }}
            className="absolute deepmind-glass-shard rounded-xl"
          />
        ))}

        {/* Central Orb Experience */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{
              translateZ: 100,
              rotateX: useTransform(rotateX, (v) => -v * 1.5),
              rotateY: useTransform(rotateY, (v) => -v * 1.5),
            }}
            className="relative w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] deepmind-orb-layer"
          >
            {/* Multi-layered Glass Core */}
            <motion.div
              animate={{
                rotate: 360,
                borderRadius: ["45% 55% 50% 50%", "50% 50% 55% 45%", "45% 55% 50% 50%"]
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="deepmind-orb-core absolute inset-0 bg-white/20 border border-white/50 shadow-[0_0_100px_rgba(59,130,246,0.3)] overflow-hidden"
            >
              <div className="absolute inset-[-50%] iridescent-mesh opacity-50 blur-3xl" />
              
              {/* Internal Glow Pulse */}
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-blue-400/30 blur-[60px] rounded-full"
              />
              
              {/* Highlight Refraction */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 to-transparent opacity-30 transform -rotate-12" />
            </motion.div>

            {/* Orbiting Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15%] border-[1px] border-blue-400/40 rounded-full"
              style={{ rotateX: 75, translateZ: -20 }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20%] border-[1px] border-purple-400/20 rounded-full"
              style={{ rotateY: 75, translateZ: -40 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Global Grain Texture Overlay */}
      <div className="absolute inset-0 grain-texture pointer-events-none mix-blend-multiply" />
      
      {/* Decorative Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none" />
    </div>
  );
};

export default DeepMindBackground;
