import React from 'react';

interface PeacockCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}

export const PeacockCorner: React.FC<PeacockCornerProps> = ({
  position = 'top-left',
  className = '',
  size = 50,
}) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  }[position];

  return (
    <div
      className={`absolute pointer-events-none select-none z-10 ${rotationClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 60 60"
        className="w-full h-full filter drop-shadow-[0_1px_3px_rgba(212,160,23,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle decorative gold frame lines */}
        <path d="M2 35 L2 6 Q2 2 6 2 L35 2" stroke="#D4A017" strokeWidth="1.2" fill="none" opacity="0.8" />
        <path d="M6 24 L6 8 Q6 6 8 6 L24 6" stroke="#D4A017" strokeWidth="0.8" strokeDasharray="2 2" fill="none" opacity="0.6" />

        {/* Peacock feather plume nestled in corner */}
        <path
          d="M12 12 C18 6 30 8 38 18 C30 26 18 24 12 12 Z"
          fill="url(#cornerPeacockGrad)"
          stroke="#00A86B"
          strokeWidth="0.8"
        />
        {/* Feather eyes */}
        <ellipse cx="24" cy="16" rx="5" ry="7" fill="#0B5CAD" transform="rotate(35 24 16)" />
        <ellipse cx="24" cy="16" rx="3" ry="4.5" fill="#00A86B" transform="rotate(35 24 16)" />
        <circle cx="24" cy="16" r="1.6" fill="#D4A017" />

        {/* Delicate golden curls */}
        <path d="M12 12 Q6 16 8 22 Q10 26 15 25" stroke="#D4A017" strokeWidth="0.8" fill="none" />
        <path d="M12 12 Q16 6 22 8 Q26 10 25 15" stroke="#D4A017" strokeWidth="0.8" fill="none" />

        <defs>
          <linearGradient id="cornerPeacockGrad" x1="12" y1="12" x2="38" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A86B" />
            <stop offset="50%" stopColor="#0B5CAD" />
            <stop offset="100%" stopColor="#D4A017" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
