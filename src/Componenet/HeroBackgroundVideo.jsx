import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

export default function HeroBackgroundVideo({ src, poster, className = '' }) {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    let disposed = false;
    let visible = true;
    const play = () => {
      if (!disposed && !reduceMotion && visible && !document.hidden) video.play().catch(() => {});
      else video.pause();
    };

    video.src = src;

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; play(); });
    observer.observe(video);
    document.addEventListener('visibilitychange', play);
    video.addEventListener('canplay', play);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', play);
      video.removeEventListener('canplay', play);
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [src, reduceMotion]);

  return (
    <video
      ref={videoRef}
      className={`hero-landing__animation ${className}${ready || reduceMotion ? ' hero-landing__animation--ready' : ''}`}
      poster={poster}
      onLoadedData={() => setReady(true)}
      onError={() => setReady(false)}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    />
  );
}
