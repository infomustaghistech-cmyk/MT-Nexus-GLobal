import React, { useState, useEffect, useRef } from 'react';

const LazyVideo = ({ src, className, type = "video/mp4", eager = false, poster }) => {
  const [shouldLoad, setShouldLoad] = useState(eager);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video auto-play prevented:", e));
    }
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay={shouldLoad}
        className="w-full h-full object-cover"
        poster={poster}
        preload={eager ? "auto" : "none"}
      >
        {shouldLoad && <source src={src} type={type} />}
      </video>
    </div>
  );
};

export default LazyVideo;
