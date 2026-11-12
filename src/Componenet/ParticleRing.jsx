import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

// A projected particle sculpture, without adding a WebGL runtime to the website.
export default function ParticleRing() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const section = canvas.closest('section');
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let lastFrame = 0;
    let elapsed = 0;
    const mouse = { x: -1000, y: -1000 };
    const particles = Array.from({ length: window.innerWidth < 768 ? 1800 : 5800 }, (_, index) => {
      const random = (offset) => {
        const value = Math.sin(index * 127.1 + offset * 311.7) * 43758.5453;
        return value - Math.floor(value);
      };
      return { u: random(1) * Math.PI * 2, v: random(2) * Math.PI * 2, seed: random(3), dx: 0, dy: 0 };
    });

    const draw = (time) => {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      const mobile = width < 768;
      const scale = Math.min(width * (mobile ? .62 : .27), height * .43);
      const centerX = width * (mobile ? .62 : .74);
      const centerY = height * .44;
      const angle = time * .14 + .4;
      const form = reducedMotion ? 1 : 1 - Math.exp(-time * 1.8);
      for (const point of particles) {
        const radius = .72 + Math.sin(point.u * 3) * .08;
        const tube = .24 + Math.cos(point.u * 2) * .05;
        const x = (radius + tube * Math.cos(point.v)) * Math.cos(point.u);
        const y = (radius + tube * Math.cos(point.v)) * Math.sin(point.u);
        const z = tube * Math.sin(point.v) + Math.sin(point.u * 2) * .13;
        const rx = x * Math.cos(angle) + z * Math.sin(angle);
        const rz = z * Math.cos(angle) - x * Math.sin(angle);
        const ry = y * .85 - rz * .52;
        const depth = y * .52 + rz * .85;
        const perspective = 3 / (3 - depth);
        const spread = (1 - form) * 280;
        const px = centerX + rx * scale * perspective + Math.cos(point.v * 7) * spread;
        const py = centerY + ry * scale * perspective + Math.sin(point.u * 9) * spread;
        const mx = px - mouse.x;
        const my = py - mouse.y;
        const distance = Math.hypot(mx, my);
        if (!reducedMotion && distance < 115 && distance > 0) {
          const force = (1 - distance / 115) * 24;
          point.dx += (mx / distance * force - point.dx) * .12;
          point.dy += (my / distance * force - point.dy) * .12;
        } else {
          point.dx *= .92;
          point.dy *= .92;
        }
        context.globalAlpha = Math.min(.9, .3 + (depth + 1) * .25);
        context.fillStyle = point.seed > .91 ? '#b9a0ff' : '#d9e8fb';
        const size = (.45 + point.seed * .8) * perspective;
        context.beginPath();
        context.arc(px + point.dx, py + point.dy, size, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(reducedMotion ? 0 : elapsed);
    };
    const tick = (now) => {
      if (!visible || document.hidden) { frame = 0; return; }
      if (now - lastFrame >= 32) {
        elapsed += Math.min((now - lastFrame) / 1000, .05);
        lastFrame = now;
        draw(elapsed);
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      if (visible && !document.hidden && !reducedMotion && !frame) {
        lastFrame = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };
    const onPointer = (event) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };
    const onLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(canvas);
    section?.addEventListener('pointermove', onPointer, { passive: true });
    section?.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', sync);
    resize();
    sync();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      observer.disconnect();
      section?.removeEventListener('pointermove', onPointer);
      section?.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="hero-landing__particle-ring" aria-hidden="true" />;
}
