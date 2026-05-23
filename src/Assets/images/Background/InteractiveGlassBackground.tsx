import React, { useEffect, useRef, useState } from 'react';
import './InteractiveGlassBackground.css';

export default function InteractiveGlassBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const [isThemeDark, setIsThemeDark] = useState(true);

  useEffect(() => {
    // Detect dark mode from root element or system preference
    const checkTheme = () => {
      const isDark = !document.documentElement.classList.contains('light');
      setIsThemeDark(isDark);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Initial position of the bubble in the center
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height / 2;
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let time = 0;

    // Draw parameters
    const brickWidth = 32;
    const brickHeight = 16;
    const gap = 1.5;

    // Tick function
    const tick = () => {
      time += 0.015;

      // Mouse inertia tracking
      const mouse = mouseRef.current;
      if (!mouse.active) {
        // Floating motion if mouse idle
        mouse.targetX = width / 2 + Math.sin(time * 0.7) * (width * 0.18);
        mouse.targetY = height / 2 + Math.cos(time * 0.5) * (height * 0.12);
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const baseRadius = Math.min(width, height) * 0.16 + 25;

      // Clear with background color matching root variables
      ctx.fillStyle = isThemeDark ? '#0a0a0a' : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Save global canvas state
      ctx.save();

      // Math helper for beautiful radial landscape/wave-tiles warping
      const warp = (bx: number, by: number) => {
        // Source points relative to viewport focus
        const dx = bx - width * 0.5;
        const dy = by - height * 0.4;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Circular topography waves matching grid/mesh
        const topoWave = Math.sin(dist * 0.006 - time * 0.6) * 16;
        const horizontalSweep = Math.cos(bx * 0.004 + time * 0.4) * 8;

        return {
          x: bx + horizontalSweep * 0.3,
          y: by + topoWave + horizontalSweep,
        };
      };

      // Math helper for glass sphere lens magnification refraction inside bubble
      const refract = (p: { x: number; y: number }) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Within refractive bubble boundary
        if (dist < baseRadius * 1.4) {
          const normDist = dist / (baseRadius * 1.4);
          // High-end glass barrel lensing: magnify heavily in center, compress towards boundary edges
          const scale = 0.5 + 0.5 * Math.pow(normDist, 1.8);
          return {
            x: mouse.x + dx * scale,
            y: mouse.y + dy * scale,
          };
        }
        return p;
      };

      // Draw Brick Grids Helper
      const drawBrickGrid = (isRefracted: boolean) => {
        // Boundary optimization: if drawing refracted interior, only loop over the bubble bounds
        // Otherwise, cover the full screen minus some padding for the staggering
        const startX = isRefracted ? Math.floor((mouse.x - baseRadius * 1.5) / brickWidth) * brickWidth - brickWidth : -brickWidth * 2;
        const endX = isRefracted ? Math.ceil((mouse.x + baseRadius * 1.5) / brickWidth) * brickWidth + brickWidth : width + brickWidth * 2;
        const startY = isRefracted ? Math.floor((mouse.y - baseRadius * 1.5) / brickHeight) * brickHeight - brickHeight : -brickHeight * 2;
        const endY = isRefracted ? Math.ceil((mouse.y + baseRadius * 1.5) / brickHeight) * brickHeight + brickHeight : height + brickHeight * 2;

        let rowIndex = 0;
        for (let by = startY; by < endY; by += brickHeight) {
          rowIndex++;
          // Stagger alternate columns for running bond brick structure
          const xOffset = rowIndex % 2 === 0 ? brickWidth / 2 : 0;

          for (let bx = startX; bx < endX; bx += brickWidth) {
            const actualBx = bx + xOffset;

            // Compute the 4 corners of unrefracted warped brick
            const c1 = warp(actualBx, by);
            const c2 = warp(actualBx + brickWidth - gap, by);
            const c3 = warp(actualBx + brickWidth - gap, by + brickHeight - gap);
            const c4 = warp(actualBx, by + brickHeight - gap);

            // Apply refraction lens if drawing the inside of the glass bubble
            const p1 = isRefracted ? refract(c1) : c1;
            const p2 = isRefracted ? refract(c2) : c2;
            const p3 = isRefracted ? refract(c3) : c3;
            const p4 = isRefracted ? refract(c4) : c4;

            // Draw individual brick polygon
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.closePath();

            // Styling colors for bricks based on Light/Dark themes
            if (isRefracted) {
              // Bricks inside the holographic bubble are tinted with iridescent light
              const distToCenter = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
              const factor = 1 - Math.min(distToCenter / baseRadius, 1);

              if (isThemeDark) {
                ctx.fillStyle = `rgba(59, 130, 246, ${0.05 + factor * 0.15})`; // blue glow
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + factor * 0.22})`;
              } else {
                ctx.fillStyle = `rgba(59, 130, 246, ${0.03 + factor * 0.1})`;
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.04 + factor * 0.12})`;
              }
            } else {
              // Base background bricks
              if (isThemeDark) {
                // Check distance to mouse tracking for ambient screen hover lighting
                const dX = c1.x - mouse.x;
                const dY = c1.y - mouse.y;
                const distToMouse = Math.sqrt(dX * dX + dY * dY);
                const mouseRad = baseRadius * 2.5;
                const highlight = distToMouse < mouseRad ? (1 - distToMouse / mouseRad) * 0.06 : 0;

                ctx.fillStyle = `rgba(255, 255, 255, ${0.01 + highlight})`;
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 + highlight * 0.7})`;
              } else {
                const dX = c1.x - mouse.x;
                const dY = c1.y - mouse.y;
                const distToMouse = Math.sqrt(dX * dX + dY * dY);
                const mouseRad = baseRadius * 2.5;
                const highlight = distToMouse < mouseRad ? (1 - distToMouse / mouseRad) * 0.04 : 0;

                ctx.fillStyle = `rgba(0, 0, 0, ${0.005 + highlight * 0.5})`;
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.03 + highlight})`;
              }
            }

            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fill();
          }
        }
      };

      // 1. Draw standard background brick grid on canvas first
      drawBrickGrid(false);

      // 1.5 Draw soft neon background aura behind bubble for deep lighting contrast
      const glowGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, baseRadius * 2
      );
      if (isThemeDark) {
        glowGrad.addColorStop(0, 'rgba(59, 130, 246, 0.07)'); // Blue light
        glowGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)'); // Purple light
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glowGrad.addColorStop(0, 'rgba(59, 130, 246, 0.05)');
        glowGrad.addColorStop(0.6, 'rgba(139, 92, 246, 0.02)');
        glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, baseRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // 2. Define the wobbly fluid shape of the glass bubble blob
      const steps = 90;
      ctx.beginPath();
      for (let i = 0; i < steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const wobble = Math.sin(theta * 4 + time * 1.8) * 8 +
          Math.cos(theta * 7 - time * 1.2) * 5 +
          Math.sin(theta * 2 + time * 0.9) * 4;
        const r = baseRadius + wobble;
        const px = mouse.x + Math.cos(theta) * r;
        const py = mouse.y + Math.sin(theta) * r;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();

      // Clear layout and setup the clip clipping region for the bubble's interior
      ctx.save();
      ctx.clip();

      // 3. Draw the refracted brick grid inside the bubble
      drawBrickGrid(true);

      // 4. Fill with majestic holographic inner fluid gradients
      ctx.globalCompositeOperation = 'screen';

      // Center cobalt-indigo core
      const coreGrad = ctx.createRadialGradient(
        mouse.x - baseRadius * 0.1, mouse.y - baseRadius * 0.1, 0,
        mouse.x, mouse.y, baseRadius * 1.3
      );
      coreGrad.addColorStop(0, 'rgba(29, 78, 216, 0.45)'); // deep cobalt
      coreGrad.addColorStop(0.4, 'rgba(59, 130, 246, 0.25)'); // blue
      coreGrad.addColorStop(0.7, 'rgba(139, 92, 246, 0.15)'); // purple
      coreGrad.addColorStop(1, 'rgba(236, 72, 153, 0)'); // fade out
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, baseRadius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Vibrant magenta-cyan iridescent edge highlight
      const edgeGrad = ctx.createLinearGradient(
        mouse.x - baseRadius, mouse.y - baseRadius,
        mouse.x + baseRadius, mouse.y + baseRadius
      );
      edgeGrad.addColorStop(0, 'rgba(6, 182, 212, 0.3)'); // Cyan top-left
      edgeGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.1)'); // Violet
      edgeGrad.addColorStop(1, 'rgba(236, 72, 153, 0.35)'); // Pink bottom-right
      ctx.fillStyle = edgeGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, baseRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore(); // Exit clip region to draw external highlights

      // Restore composite operation to draw pure glass reflections on key surface vectors
      ctx.globalCompositeOperation = 'source-over';

      // 5. Drawing structural glass highlights (Gloss outlines, bevels, specularity rings)

      // Outer delicate neon-rim edge glow
      ctx.strokeStyle = isThemeDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const wobble = Math.sin(theta * 4 + time * 1.8) * 8 +
          Math.cos(theta * 7 - time * 1.2) * 5 +
          Math.sin(theta * 2 + time * 0.9) * 4;
        const r = baseRadius + wobble;
        const px = mouse.x + Math.cos(theta) * r;
        const py = mouse.y + Math.sin(theta) * r;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // High-end curved white glare highlight (reflecting high-latitude window light vector)
      ctx.beginPath();
      ctx.arc(mouse.x - baseRadius * 0.3, mouse.y - baseRadius * 0.3, baseRadius * 0.75, Math.PI * 0.95, Math.PI * 1.55);
      const shinyGrad = ctx.createLinearGradient(
        mouse.x - baseRadius, mouse.y - baseRadius,
        mouse.x - baseRadius * 0.1, mouse.y - baseRadius * 0.1
      );
      shinyGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
      shinyGrad.addColorStop(0.6, 'rgba(255, 255, 255, 0.25)');
      shinyGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.strokeStyle = shinyGrad;
      ctx.lineWidth = baseRadius * 0.08;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Secondary curved bottom reflection (reflecting ambient up-light)
      ctx.beginPath();
      ctx.arc(mouse.x + baseRadius * 0.28, mouse.y + baseRadius * 0.28, baseRadius * 0.85, Math.PI * 0.0, Math.PI * 0.45);
      const ambientShine = ctx.createLinearGradient(
        mouse.x, mouse.y,
        mouse.x + baseRadius, mouse.y + baseRadius
      );
      ambientShine.addColorStop(0, 'rgba(255, 255, 255, 0)');
      ambientShine.addColorStop(0.7, 'rgba(255, 255, 255, 0.15)');
      ambientShine.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
      ctx.strokeStyle = ambientShine;
      ctx.lineWidth = baseRadius * 0.04;
      ctx.stroke();

      // Elegant inner glass ring highlights (Recreating the circular concentric rings inside the bubble)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mouse.x - baseRadius * 0.2, mouse.y - baseRadius * 0.2, baseRadius * 0.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mouse.x - baseRadius * 0.25, mouse.y - baseRadius * 0.25, baseRadius * 0.18, 0, Math.PI * 2);
      ctx.stroke();

      // Minimal glowing lens dot (the soft specular point)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.beginPath();
      ctx.arc(mouse.x - baseRadius * 0.42, mouse.y - baseRadius * 0.42, baseRadius * 0.03, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore(); // Restore global canvas translation scope

      // 6. Final Polish: Subtle Film-Grain Noise Overlay
      // We use a small randomized loop to add static/texture without huge overhead
      ctx.save();
      ctx.globalCompositeOperation = isThemeDark ? 'overlay' : 'multiply';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let i = 0; i < 8; i++) {
        const gx = Math.random() * width;
        const gy = Math.random() * height;
        const gr = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.arc(gx, gy, gr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isThemeDark]);

  return (
    <canvas
      ref={canvasRef}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      className="interactive-glass-canvas"
      aria-hidden="true"
      role="presentation"
    />
  );
}
