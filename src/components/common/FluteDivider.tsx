import React from 'react';

interface FluteDividerProps {
  className?: string;
  glow?: boolean;
}

export const FluteDivider: React.FC<FluteDividerProps> = ({ className = '', glow = true }) => {
  return (
    <div className={`flex items-center justify-center my-6 sm:my-8 px-4 w-full ${className}`}>
      <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-[#D4A017]" />
      
      {/* Central Krishna Flute & Peacock Feather Motif */}
      <div className={`mx-4 relative flex items-center justify-center ${glow ? 'filter drop-shadow-[0_0_8px_rgba(212,160,23,0.35)]' : ''}`}>
        <svg
          viewBox="0 0 160 30"
          className="w-36 sm:w-44 h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central Bamboo Flute Body */}
          <rect x="25" y="11" width="110" height="7" rx="3.5" fill="url(#fluteDivGrad)" stroke="#B38006" strokeWidth="0.8" />
          
          {/* Ornamental Crimson & Royal Blue Bands */}
          <rect x="33" y="11" width="3" height="7" fill="#C1122F" />
          <rect x="36" y="11" width="1.5" height="7" fill="#0B5CAD" />
          <rect x="118" y="11" width="3" height="7" fill="#C1122F" />
          <rect x="121" y="11" width="1.5" height="7" fill="#0B5CAD" />
          
          {/* Finger Holes */}
          <circle cx="55" cy="14.5" r="1.3" fill="#3D2602" />
          <circle cx="67" cy="14.5" r="1.3" fill="#3D2602" />
          <circle cx="79" cy="14.5" r="1.3" fill="#3D2602" />
          <circle cx="91" cy="14.5" r="1.3" fill="#3D2602" />
          <circle cx="103" cy="14.5" r="1.3" fill="#3D2602" />

          {/* Peacock Feather on the Left */}
          <path
            d="M26 14 C16 9 10 2 20 -2 C30 2 28 10 26 14 Z"
            fill="url(#featherDivGrad)"
            stroke="#00A86B"
            strokeWidth="0.8"
          />
          <ellipse cx="20" cy="5" rx="3.5" ry="5.5" fill="#0B5CAD" />
          <ellipse cx="20" cy="6" rx="2" ry="3.5" fill="#00A86B" />
          <circle cx="20" cy="7" r="1" fill="#D4A017" />
          
          {/* Dangling Tassel Beads */}
          <circle cx="34" cy="20" r="1.2" fill="#D4A017" />
          <circle cx="34" cy="23" r="1" fill="#C1122F" />
          <circle cx="34" cy="26" r="1.2" fill="#0B5CAD" />

          <defs>
            <linearGradient id="fluteDivGrad" x1="25" y1="11" x2="135" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F6DA75" />
              <stop offset="50%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#8C6203" />
            </linearGradient>
            <linearGradient id="featherDivGrad" x1="10" y1="-2" x2="30" y2="14" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A86B" />
              <stop offset="50%" stopColor="#0B5CAD" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent via-[#D4A017]/40 to-[#D4A017]" />
    </div>
  );
};
