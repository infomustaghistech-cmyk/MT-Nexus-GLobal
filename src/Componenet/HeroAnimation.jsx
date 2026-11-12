import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import ParticleRing from './ParticleRing';
import HeroBackgroundVideo from './HeroBackgroundVideo';

export default function HeroAnimation({ variant = 'blue' }) {
  const videoRef = useRef(null);
  const [hasFrame, setHasFrame] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    let visible = true;
    const syncPlayback = () => {
      if (visible && !document.hidden) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, [reduceMotion, variant]);

  if (variant === 'particles') return <ParticleRing />;
  if (variant === 'globe') return <HeroBackgroundVideo src="/hero-global-network.mp4" poster="/hero-global-network-poster.webp" className="hero-landing__animation--globe" />;
  if (variant === 'portfolio') return <HeroBackgroundVideo src="/hero-portfolio-motion.mp4" poster="/hero-portfolio-poster.webp" className="hero-landing__animation--portfolio" />;

  if (reduceMotion) return null;

  return (
    <video
      ref={videoRef}
      className={`hero-landing__animation${hasFrame ? ' hero-landing__animation--ready' : ''}`}
      onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 0.8; }}
      onLoadedData={() => setHasFrame(true)}
      onError={() => setHasFrame(false)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    >
      <source src="/hero-3d-animation.mp4" type="video/mp4" />
    </video>
  );
}
