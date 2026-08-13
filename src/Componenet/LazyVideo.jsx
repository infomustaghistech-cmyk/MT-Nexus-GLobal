import React, { useState, useEffect, useRef } from 'react';

const LazyVideo = ({ src, className, type = "video/mp4" }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Delay loading the video by a small amount to allow critical resources to load first
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video auto-play prevented:", e));
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className={className}
      preload="none"
    >
      {shouldLoad && <source src={src} type={type} />}
    </video>
  );
};

export default LazyVideo;
