import React from 'react';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'header' }) {
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <picture>
        <source
          type="image/webp"
          srcSet={variant === 'hero'
            ? '/nexus-global-640.webp 1x, /nexus-global-1280.webp 2x'
            : '/nexus-global-320.webp 1x, /nexus-global-640.webp 2x'}
        />
        <img
          src="/nexus-global.png"
          alt="Nexus Global"
          width="640"
          height="528"
          loading={variant === 'footer' ? 'lazy' : 'eager'}
          fetchPriority={variant === 'header' ? 'high' : 'auto'}
          decoding="async"
          draggable="false"
        />
      </picture>
    </span>
  );
}
