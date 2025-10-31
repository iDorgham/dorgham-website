'use client';

import { useState } from 'react';

export default function HeroBackground() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="absolute inset-0 z-0">
      {/* Background Image - Responsive with mobile and desktop versions */}
      {!imageError && (
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/images/generated/hero-desktop.jpg"
          />
            <img
              src="/assets/images/generated/hero-mobile.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center center' }}
              aria-hidden="true"
              onError={() => setImageError(true)}
            />
        </picture>
      )}
      {/* Balanced Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/10"></div>
      {/* Fallback gradient background - shows if image doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-black -z-10"></div>
    </div>
  );
}

