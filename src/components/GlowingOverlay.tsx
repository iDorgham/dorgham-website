'use client';

export default function GlowingOverlay() {
  // Create 3 spotlights - vertical stack on mobile, distributed on desktop
  const spotlights = [
      {
        id: 'spot-1',
        // Mobile: left aligned, vertical stack
        mobileLeft: '10%',
        mobileTop: '20%',
        // Desktop: distributed horizontally
        desktopLeft: '25%',
        desktopTop: '50%',
        delay: 0,
        duration: 0.5, // 120 BPM = 0.5s per beat
      },
      {
        id: 'spot-2',
        mobileLeft: '10%',
        mobileTop: '50%',
        desktopLeft: '50%',
        desktopTop: '50%',
        delay: 0.166, // 1/3 beat offset for polyrhythm
        duration: 0.5,
      },
      {
        id: 'spot-3',
        mobileLeft: '10%',
        mobileTop: '80%',
        desktopLeft: '75%',
        desktopTop: '50%',
        delay: 0.333, // 2/3 beat offset
        duration: 0.5,
      },
  ];

  return (
    <>
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {/* 3 Spotlights - Vertical on mobile, Horizontal on desktop */}
        <div className="absolute inset-0">
          {spotlights.map((spotlight) => (
            <div
              key={spotlight.id}
              className="absolute spotlight spotlight-mobile spotlight-desktop"
              style={{
                left: spotlight.mobileLeft,
                top: spotlight.mobileTop,
                transform: 'translate(-50%, -50%)',
                animation: `spotlightPulse ${spotlight.duration}s ease-in-out infinite`,
                animationDelay: `${spotlight.delay}s`,
              }}
              data-desktop-left={spotlight.desktopLeft}
              data-desktop-top={spotlight.desktopTop}
            >
              {/* Noise displacement layer */}
              <div className="spotlight-noise"></div>
              {/* Outer glow layer */}
              <div className="spotlight-outer"></div>
              {/* Middle glow layer */}
              <div className="spotlight-middle"></div>
              {/* Inner core */}
              <div className="spotlight-core"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .spotlight {
          width: 120px;
          height: 120px;
          position: absolute;
        }

        @media (min-width: 640px) {
          .spotlight {
            width: 200px;
            height: 200px;
          }
        }

        @media (min-width: 1024px) {
          .spotlight {
            width: 300px;
            height: 300px;
          }
        }
        
        /* Desktop repositioning - horizontal distribution, shifted 600px left */
        @media (min-width: 1024px) {
          .spotlight-desktop[data-desktop-left="25%"] {
            left: calc(25% - 600px) !important;
            top: 50% !important;
          }
          .spotlight-desktop[data-desktop-left="50%"] {
            left: calc(50% - 600px) !important;
            top: 50% !important;
          }
          .spotlight-desktop[data-desktop-left="75%"] {
            left: calc(75% - 600px) !important;
            top: 50% !important;
          }
        }

        .spotlight-outer {
          position: absolute;
          inset: -20px;
          background: radial-gradient(
            circle,
            rgba(239, 68, 68, 0.4) 0%,
            rgba(220, 38, 38, 0.2) 30%,
            rgba(185, 28, 28, 0.1) 60%,
            transparent 100%
          );
          border-radius: 50%;
          filter: blur(15px);
          animation: spotlightOuterPulse 0.5s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .spotlight-outer {
            inset: -35px;
            filter: blur(30px);
          }
        }

        @media (min-width: 1024px) {
          .spotlight-outer {
            inset: -50px;
            filter: blur(40px);
          }
        }

        .spotlight-middle {
          position: absolute;
          inset: -12px;
          background: radial-gradient(
            circle,
            rgba(239, 68, 68, 0.5) 0%,
            rgba(220, 38, 38, 0.3) 40%,
            transparent 70%
          );
          border-radius: 50%;
          filter: blur(10px);
          animation: spotlightMiddlePulse 0.5s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .spotlight-middle {
            inset: -20px;
            filter: blur(18px);
          }
        }

        @media (min-width: 1024px) {
          .spotlight-middle {
            inset: -30px;
            filter: blur(25px);
          }
        }

        .spotlight-core {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle,
            rgba(239, 68, 68, 0.7) 0%,
            rgba(220, 38, 38, 0.4) 50%,
            transparent 100%
          );
          border-radius: 50%;
          filter: blur(6px);
          animation: spotlightCorePulse 0.5s ease-in-out infinite;
        }

        .spotlight-noise {
          position: absolute;
          inset: -75px;
          background: 
            radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.15) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.6;
          mix-blend-mode: overlay;
          animation: noiseDisplace 0.5s linear infinite;
          transform: scale(1.25);
        }

        @media (min-width: 640px) {
          .spotlight-noise {
            inset: -100px;
            filter: blur(15px);
            transform: scale(1.25);
          }
        }

        @media (min-width: 1024px) {
          .spotlight-noise {
            inset: -125px;
            filter: blur(18px);
            transform: scale(1.25);
          }
        }

        @media (min-width: 640px) {
          .spotlight-core {
            filter: blur(12px);
          }
        }

        @media (min-width: 1024px) {
          .spotlight-core {
            filter: blur(15px);
          }
        }

        /* 120 BPM = 0.5s per beat - intense flicker effect */
        @keyframes spotlightPulse {
          0% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.9);
          }
          12.5% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
          25% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(0.85);
          }
          37.5% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.4);
          }
          50% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(0.92);
          }
          62.5% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.35);
          }
          75% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(0.88);
          }
          87.5% {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1.3);
          }
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.9);
          }
        }

        @keyframes spotlightOuterPulse {
          0% {
            opacity: 0.2;
            transform: scale(0.85);
          }
          10% {
            opacity: 0.7;
            transform: scale(1.3);
          }
          20% {
            opacity: 0.05;
            transform: scale(0.8);
          }
          30% {
            opacity: 0.9;
            transform: scale(1.5);
          }
          40% {
            opacity: 0.15;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.4);
          }
          60% {
            opacity: 0.1;
            transform: scale(0.85);
          }
          70% {
            opacity: 0.95;
            transform: scale(1.45);
          }
          80% {
            opacity: 0.12;
            transform: scale(0.87);
          }
          90% {
            opacity: 0.85;
            transform: scale(1.35);
          }
          100% {
            opacity: 0.2;
            transform: scale(0.85);
          }
        }

        @keyframes spotlightMiddlePulse {
          0% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          12.5% {
            opacity: 0.9;
            transform: scale(1.4);
          }
          25% {
            opacity: 0.1;
            transform: scale(0.85);
          }
          37.5% {
            opacity: 1;
            transform: scale(1.5);
          }
          50% {
            opacity: 0.2;
            transform: scale(0.92);
          }
          62.5% {
            opacity: 0.95;
            transform: scale(1.45);
          }
          75% {
            opacity: 0.15;
            transform: scale(0.88);
          }
          87.5% {
            opacity: 0.85;
            transform: scale(1.38);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
        }

        @keyframes spotlightCorePulse {
          0% {
            opacity: 0.4;
            transform: scale(0.88);
          }
          10% {
            opacity: 1;
            transform: scale(1.45);
          }
          20% {
            opacity: 0.2;
            transform: scale(0.82);
          }
          30% {
            opacity: 1;
            transform: scale(1.5);
          }
          40% {
            opacity: 0.25;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
          60% {
            opacity: 0.18;
            transform: scale(0.85);
          }
          70% {
            opacity: 1;
            transform: scale(1.48);
          }
          80% {
            opacity: 0.22;
            transform: scale(0.87);
          }
          90% {
            opacity: 0.98;
            transform: scale(1.42);
          }
          100% {
            opacity: 0.4;
            transform: scale(0.88);
          }
        }

        /* Noise displacement animation - creates glitchy movement (25% larger) */
        @keyframes noiseDisplace {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1.25);
            opacity: 0.5;
          }
          10% {
            transform: translate(2.5px, -3.75px) rotate(1deg) scale(1.31);
            opacity: 0.7;
          }
          20% {
            transform: translate(-3.75px, 2.5px) rotate(-1deg) scale(1.19);
            opacity: 0.4;
          }
          30% {
            transform: translate(3.75px, 1.25px) rotate(2deg) scale(1.35);
            opacity: 0.8;
          }
          40% {
            transform: translate(-2.5px, -2.5px) rotate(-0.5deg) scale(1.21);
            opacity: 0.5;
          }
          50% {
            transform: translate(1.25px, 3.75px) rotate(1.5deg) scale(1.38);
            opacity: 0.9;
          }
          60% {
            transform: translate(-3.75px, -1.25px) rotate(-2deg) scale(1.15);
            opacity: 0.4;
          }
          70% {
            transform: translate(2.5px, 2.5px) rotate(0.5deg) scale(1.33);
            opacity: 0.7;
          }
          80% {
            transform: translate(-1.25px, -3.75px) rotate(-1.5deg) scale(1.23);
            opacity: 0.5;
          }
          90% {
            transform: translate(3.75px, -2.5px) rotate(1deg) scale(1.36);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1.25);
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}

