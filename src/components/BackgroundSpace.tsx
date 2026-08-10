import React, { useEffect, useRef } from 'react';

export const BackgroundSpace: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Space Particles & Tactical Satellite Nodes
    const particleCount = 120;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      speedZ: Math.random() * 1.5 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      isSatellite: Math.random() < 0.1,
    }));

    let radarAngle = 0;

    const render = () => {
      // Clear with dark obsidian green ambient background (#010805 base)
      ctx.fillStyle = '#010805';
      ctx.fillRect(0, 0, width, height);

      // Radial emerald glows
      const glow1 = ctx.createRadialGradient(
        width * 0.1,
        height * 0.1,
        0,
        width * 0.1,
        height * 0.1,
        400
      );
      glow1.addColorStop(0, 'rgba(6, 78, 59, 0.25)'); // emerald-900
      glow1.addColorStop(1, 'transparent');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(
        width * 0.9,
        height * 0.9,
        0,
        width * 0.9,
        height * 0.9,
        350
      );
      glow2.addColorStop(0, 'rgba(20, 83, 45, 0.25)'); // green-900
      glow2.addColorStop(1, 'transparent');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      // Draw Geometric Balance Dot Grid
      ctx.fillStyle = 'rgba(34, 197, 94, 0.15)';
      const dotSpacing = 30;
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Center Radar Rings
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.45;

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.lineWidth = 1.5;
      for (let r = maxRadius * 0.25; r <= maxRadius; r += maxRadius * 0.25) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Tactical Radar Sweep Angle
      radarAngle += 0.012;
      const sweepX = centerX + Math.cos(radarAngle) * maxRadius;
      const sweepY = centerY + Math.sin(radarAngle) * maxRadius;

      const sweepGrad = ctx.createConicGradient(
        radarAngle - Math.PI / 2,
        centerX,
        centerY
      );
      sweepGrad.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
      sweepGrad.addColorStop(0.2, 'rgba(16, 185, 129, 0.05)');
      sweepGrad.addColorStop(0.5, 'transparent');
      sweepGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = sweepGrad;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2);
      ctx.fill();

      // Radar Line Beam
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Update & Render 3D Space Particles & Satellites
      particles.forEach((p) => {
        p.z -= p.speedZ;
        if (p.z <= 1) {
          p.z = 1000;
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }

        // Perspective projection formula
        const k = 600 / p.z;
        const px = (p.x - centerX) * k + centerX;
        const py = (p.y - centerY) * k + centerY;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = (1 - p.z / 1000) * p.opacity;

          if (p.isSatellite) {
            // Satellite node with tactical ring
            ctx.fillStyle = '#34D399';
            ctx.beginPath();
            ctx.arc(px, py, 2.5 * k, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(px, py, 6 * k, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            // Star/dust particle
            ctx.fillStyle = `rgba(167, 243, 208, ${alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, p.size * k, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
