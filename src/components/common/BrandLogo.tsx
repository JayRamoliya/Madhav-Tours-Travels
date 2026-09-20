import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'compact' | 'hero';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  showSubtitle = true,
}) => {
  // Brand colors:
  // Royal Blue: #0B5CAD
  // Peacock Green: #00A86B
  // Gold: #D4A017
  // Deep Red: #C1122F
  // White: #FFFFFF
  // Soft Ivory: #FAF7F0

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {/* <svg
          viewBox="0 0 160 160"
          className="w-10 h-10 shrink-0 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="80" r="74" fill="#FAF7F0" stroke="#D4A017" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="80" cy="80" r="70" fill="white" />

          <path
            d="M80 20 C65 30 60 55 80 75 C100 55 95 30 80 20 Z"
            fill="url(#compactPeacockGrad)"
            stroke="#00A86B"
            strokeWidth="1"
          />
          <ellipse cx="80" cy="48" rx="10" ry="14" fill="#0B5CAD" />
          <circle cx="80" cy="50" r="6" fill="#00A86B" />
          <circle cx="80" cy="52" r="3" fill="#D4A017" />

          <rect x="77" y="55" width="6" height="85" rx="3" fill="url(#compactFluteGrad)" stroke="#D4A017" strokeWidth="1" />
          <circle cx="80" cy="70" r="1.5" fill="#C1122F" />
          <circle cx="80" cy="82" r="1.5" fill="#C1122F" />
          <circle cx="80" cy="94" r="1.5" fill="#C1122F" />
          <circle cx="80" cy="106" r="1.5" fill="#C1122F" />
          <circle cx="80" cy="118" r="1.5" fill="#C1122F" />

          <path
            d="M83 65 Q100 70 102 85 Q98 96 95 105 Q90 115 83 125"
            stroke="#0B5CAD"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="97" cy="98" r="2.5" fill="#D4A017" stroke="#C1122F" strokeWidth="0.5" />

          <defs>
            <linearGradient id="compactPeacockGrad" x1="60" y1="20" x2="100" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A86B" />
              <stop offset="50%" stopColor="#0B5CAD" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
            <linearGradient id="compactFluteGrad" x1="77" y1="55" x2="83" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#9E7308" />
            </linearGradient>
          </defs>
        </svg> */}

        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold tracking-tight text-[#C1122F] leading-none">
            Madhav
          </span>
          <span className="text-[10px] font-medium tracking-wider uppercase text-[#0B5CAD] leading-tight">
            Tours & Travels
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-2 sm:gap-3.5 min-w-0 ${className}`}>
        {/* Crisp vector emblem */}
        {/* <div className="relative w-10 h-12 sm:w-12 sm:h-14 shrink-0 flex items-center justify-center">
          <svg
            viewBox="0 0 140 160"
            className="w-full h-full object-contain filter drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="68" cy="40" r="32" fill="#FAF7F0" stroke="#D4A017" strokeWidth="1" opacity="0.8" />
            <path
              d="M68 12 C50 24 45 46 68 62 C88 46 82 24 68 12 Z"
              fill="url(#hPeacockGrad)"
              stroke="#00A86B"
              strokeWidth="1.2"
            />
            <ellipse cx="68" cy="36" rx="9" ry="13" fill="#0B5CAD" />
            <ellipse cx="68" cy="38" rx="6" ry="8" fill="#00A86B" />
            <circle cx="68" cy="40" r="3" fill="#D4A017" />

            <path
              d="M60 55 C48 65 42 78 48 90 C54 98 64 100 66 85 C68 70 65 60 60 55 Z"
              stroke="#D4A017"
              strokeWidth="1.6"
              fill="#FFFFFF"
              fillOpacity="0.8"
            />
            <path d="M52 70 Q56 75 62 76" stroke="#D4A017" strokeWidth="1" fill="none" />
            <path d="M54 78 Q58 83 63 84" stroke="#D4A017" strokeWidth="1" fill="none" />

            <rect x="66" y="45" width="6.5" height="85" rx="3.2" fill="url(#hFluteGrad)" stroke="#A67807" strokeWidth="0.8" />
            <rect x="66" y="48" width="6.5" height="3" fill="#C1122F" />
            <rect x="66" y="122" width="6.5" height="4" fill="#0B5CAD" />
            <circle cx="69.2" cy="62" r="1.5" fill="#3D2602" />
            <circle cx="69.2" cy="74" r="1.5" fill="#3D2602" />
            <circle cx="69.2" cy="86" r="1.5" fill="#3D2602" />
            <circle cx="69.2" cy="98" r="1.5" fill="#3D2602" />
            <circle cx="69.2" cy="110" r="1.5" fill="#3D2602" />

            <path
              d="M72.5 54 Q92 58 92 74 Q88 88 85 96 Q80 106 72.5 116"
              stroke="#0B5CAD"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M78 68 Q83 67 86 70" stroke="#0B5CAD" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M79 72 Q83 75 86 72" stroke="#0B5CAD" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M85 76 Q88 82 83 85 Q85 88 81 90" stroke="#0B5CAD" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <ellipse cx="76" cy="85" rx="2" ry="4" stroke="#0B5CAD" strokeWidth="1" fill="none" />
            <circle cx="76" cy="94" r="2.8" fill="#D4A017" stroke="#C1122F" strokeWidth="0.8" />

            <defs>
              <linearGradient id="hPeacockGrad" x1="45" y1="12" x2="88" y2="62" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00A86B" />
                <stop offset="40%" stopColor="#0B5CAD" />
                <stop offset="100%" stopColor="#D4A017" />
              </linearGradient>
              <linearGradient id="hFluteGrad" x1="66" y1="45" x2="72.5" y2="130" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F9DF7B" />
                <stop offset="50%" stopColor="#D4A017" />
                <stop offset="100%" stopColor="#8C6103" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

        {/* Text branding */}
        <div className="flex flex-col justify-center min-w-0">
          <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#C1122F] drop-shadow-xs leading-none truncate">
            Madhav
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#0B5CAD] font-sans whitespace-nowrap">
              Tours & Travels
            </span>
            <div className="hidden xs:block h-0.5 sm:h-1 w-4 sm:w-6 bg-gradient-to-r from-[#D4A017] to-transparent rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Full and Hero Variant (matches the uploaded artwork directly with sacred elements)
  return (
    <div className={`flex flex-col items-center text-center select-none max-w-full ${className}`}>
      {/* Upper Divine Illustration */}
      <div className={`relative ${variant === 'hero' ? 'w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72' : 'w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48'} transition-transform duration-500 hover:scale-105`}>
        <svg
          viewBox="0 0 280 300"
          className="w-full h-full filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Celestial Halo */}
          <circle cx="115" cy="72" r="56" fill="#FAF7F0" stroke="#D4A017" strokeWidth="1.5" opacity="0.85" />
          <circle cx="115" cy="72" r="50" fill="#FFFFFF" fillOpacity="0.7" />

          {/* Mor Pankh (Peacock Feather) Plume */}
          <path
            d="M125 15 C95 30 85 70 120 100 C155 70 145 30 125 15 Z"
            fill="url(#fullPeacockGrad)"
            stroke="#00A86B"
            strokeWidth="2"
          />
          {/* Radial delicate feather wisps */}
          <path d="M102 38 Q82 32 75 42" stroke="#00A86B" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M100 52 Q78 50 72 62" stroke="#00A86B" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M105 68 Q88 74 80 88" stroke="#00A86B" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M142 38 Q162 32 170 42" stroke="#00A86B" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M145 52 Q166 50 174 62" stroke="#00A86B" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M140 68 Q158 74 165 88" stroke="#00A86B" strokeWidth="1.2" strokeLinecap="round" />

          {/* Peacock Eye Layers */}
          <ellipse cx="123" cy="58" rx="16" ry="24" fill="#0B5CAD" />
          <ellipse cx="123" cy="62" rx="11" ry="16" fill="#00A86B" />
          <ellipse cx="123" cy="66" rx="6" ry="9" fill="#D4A017" />
          <circle cx="123" cy="68" r="3" fill="#FAF7F0" />

          {/* Feather Stem running down */}
          <path d="M125 100 Q138 120 138 140" stroke="#00A86B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Shankha (Conch Shell) Outline on Left */}
          <path
            d="M136 95 C115 105 102 125 108 150 C114 170 132 185 138 155 C142 135 140 115 136 95 Z"
            stroke="#D4A017"
            strokeWidth="2.5"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
          <path d="M118 122 Q124 132 134 135" stroke="#D4A017" strokeWidth="1.8" fill="none" />
          <path d="M120 136 Q128 145 135 148" stroke="#D4A017" strokeWidth="1.8" fill="none" />
          <path d="M126 150 Q132 158 137 160" stroke="#D4A017" strokeWidth="1.8" fill="none" />

          {/* Vertical Sacred Golden Flute */}
          <rect x="139" y="80" width="10" height="150" rx="5" fill="url(#fullFluteGrad)" stroke="#9A6F06" strokeWidth="1.2" />
          {/* Flute Top Cap & Ribbons */}
          <path d="M137 80 L151 80 Q144 72 137 80 Z" fill="#D4A017" stroke="#9A6F06" strokeWidth="1" />
          <rect x="139" y="86" width="10" height="4" fill="#C1122F" />
          <rect x="139" y="215" width="10" height="6" fill="#C1122F" />
          <rect x="139" y="222" width="10" height="3" fill="#0B5CAD" />

          {/* Flute Finger Holes */}
          <circle cx="144" cy="105" r="2.2" fill="#2E1B00" />
          <circle cx="144" cy="120" r="2.2" fill="#2E1B00" />
          <circle cx="144" cy="135" r="2.2" fill="#2E1B00" />
          <circle cx="144" cy="150" r="2.2" fill="#2E1B00" />
          <circle cx="144" cy="165" r="2.2" fill="#2E1B00" />
          <circle cx="144" cy="180" r="2.2" fill="#2E1B00" />
          <circle cx="144" cy="195" r="2.2" fill="#2E1B00" />

          {/* Lord Krishna Half Face Line-Art in Royal Blue (#0B5CAD) */}
          {/* Forehead & Turban/Hair Flow */}
          <path
            d="M149 95 Q178 98 185 125 Q188 142 186 160 Q178 182 152 205"
            stroke="#0B5CAD"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner Hair Grace Lines */}
          <path d="M152 110 Q175 115 178 135" stroke="#0B5CAD" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M154 125 Q172 130 174 148" stroke="#0B5CAD" strokeWidth="1.6" strokeLinecap="round" fill="none" />

          {/* Serene Eye & Brow */}
          <path d="M156 132 Q166 128 174 133" stroke="#0B5CAD" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M158 139 Q166 145 173 140" stroke="#0B5CAD" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="166" cy="138" r="2" fill="#0B5CAD" />

          {/* Gentle Nose & Lips Profile */}
          <path d="M165 145 Q170 152 163 158 Q167 163 160 166" stroke="#0B5CAD" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Ear with Royal Kundal (Earring) */}
          <ellipse cx="152" cy="160" rx="3" ry="6" stroke="#0B5CAD" strokeWidth="1.8" fill="none" />
          {/* Jhumka / Kundal */}
          <path d="M152 167 L152 173" stroke="#D4A017" strokeWidth="2" />
          <ellipse cx="152" cy="178" rx="5" ry="4" fill="#D4A017" stroke="#C1122F" strokeWidth="1" />
          <circle cx="149" cy="183" r="1" fill="#FAF7F0" />
          <circle cx="152" cy="184" r="1.2" fill="#FAF7F0" />
          <circle cx="155" cy="183" r="1" fill="#FAF7F0" />

          {/* Lower Peacock Flourish at Flute Base */}
          <path
            d="M136 226 C124 220 120 236 126 248 C132 258 145 258 147 245 C149 235 142 228 136 226 Z"
            fill="url(#basePeacockGrad)"
            stroke="#0B5CAD"
            strokeWidth="1.5"
          />
          <circle cx="134" cy="238" r="2.5" fill="#D4A017" />
          {/* Golden Tassels */}
          <path d="M147 242 Q158 252 162 265" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
          <circle cx="162" cy="266" r="2" fill="#C1122F" />

          <defs>
            <linearGradient id="fullPeacockGrad" x1="85" y1="15" x2="155" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A86B" />
              <stop offset="35%" stopColor="#0B5CAD" />
              <stop offset="85%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#FAF7F0" />
            </linearGradient>
            <linearGradient id="fullFluteGrad" x1="139" y1="80" x2="149" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F9DF7B" />
              <stop offset="40%" stopColor="#D4A017" />
              <stop offset="85%" stopColor="#B38006" />
              <stop offset="100%" stopColor="#6C4E03" />
            </linearGradient>
            <linearGradient id="basePeacockGrad" x1="120" y1="220" x2="149" y2="258" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B5CAD" />
              <stop offset="60%" stopColor="#00A86B" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Brand Typography Lockup */}
      <div className="mt-1 flex flex-col items-center">
        {/* "Madhav" in elegant Deep Red (#C1122F) */}
        <h1
          className={`font-serif italic font-extrabold text-[#C1122F] tracking-tight leading-none ${
            variant === 'hero' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl'
          } drop-shadow-sm`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Madhav
        </h1>

        {/* "Tours & Travels" */}
        <h2
          className={`font-serif italic font-bold text-[#C1122F] tracking-normal leading-tight mt-1 ${
            variant === 'hero' ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Tours & Travels
        </h2>

        {/* Horizontal Flute Graphic with Peacock Feather & Pearls */}
        <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] mt-2 relative flex items-center justify-center">
          <svg
            viewBox="0 0 340 60"
            className="w-full h-auto filter drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal Bamboo Golden Flute */}
            <rect x="65" y="24" width="235" height="12" rx="6" fill="url(#hBarFluteGrad)" stroke="#B38006" strokeWidth="1" />
            {/* Dark inside opening on right */}
            <ellipse cx="298" cy="30" rx="3.5" ry="6" fill="#3A2201" />

            {/* Decorative Crimson & Blue Rings */}
            <rect x="73" y="24" width="6" height="12" fill="#C1122F" />
            <rect x="79" y="24" width="3" height="12" fill="#0B5CAD" />
            <rect x="235" y="24" width="6" height="12" fill="#C1122F" />
            <rect x="241" y="24" width="3" height="12" fill="#0B5CAD" />
            <rect x="278" y="24" width="8" height="12" fill="#C1122F" />
            <rect x="286" y="24" width="3" height="12" fill="#0B5CAD" />

            {/* Flute Finger Holes */}
            <ellipse cx="120" cy="30" rx="3" ry="2.2" fill="#3D2602" />
            <ellipse cx="145" cy="30" rx="3" ry="2.2" fill="#3D2602" />
            <ellipse cx="170" cy="30" rx="3" ry="2.2" fill="#3D2602" />
            <ellipse cx="195" cy="30" rx="3" ry="2.2" fill="#3D2602" />
            <ellipse cx="220" cy="30" rx="3" ry="2.2" fill="#3D2602" />

            {/* Peacock Feather spray attached to left flute */}
            <g transform="translate(18, 0)">
              {/* Green Feather Tendrils */}
              <path
                d="M48 30 C30 20 20 5 45 -4 C65 5 58 22 48 30 Z"
                fill="url(#featherLeafGrad)"
                stroke="#00A86B"
                strokeWidth="1.2"
              />
              <ellipse cx="44" cy="11" rx="7" ry="11" fill="#0B5CAD" />
              <ellipse cx="44" cy="13" rx="4.5" ry="7" fill="#00A86B" />
              <circle cx="44" cy="14" r="2.2" fill="#D4A017" />

              {/* Lower smaller plume */}
              <path
                d="M52 32 C38 28 32 18 48 12 C58 18 56 28 52 32 Z"
                fill="url(#featherLeafGrad)"
                stroke="#00A86B"
                strokeWidth="1"
              />
              <circle cx="46" cy="22" r="3" fill="#0B5CAD" />
              <circle cx="46" cy="22" r="1.5" fill="#D4A017" />

              {/* Delicate Feather Strands on Left */}
              <path d="M38 18 Q25 22 18 30" stroke="#00A86B" strokeWidth="1" strokeLinecap="round" />
              <path d="M40 10 Q28 8 22 15" stroke="#00A86B" strokeWidth="1" strokeLinecap="round" />
              <path d="M45 2 Q32 -5 26 5" stroke="#00A86B" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* Hanging Beads Garland & Royal Blue Tassel */}
            <g transform="translate(80, 36)">
              <circle cx="0" cy="3" r="2" fill="#FAF7F0" stroke="#D4A017" strokeWidth="0.8" />
              <circle cx="0" cy="8" r="2.5" fill="#00A86B" />
              <circle cx="0" cy="14" r="3" fill="#D4A017" />
              <circle cx="0" cy="20" r="2.5" fill="#C1122F" />
              <circle cx="0" cy="26" r="2.2" fill="#0B5CAD" />
              {/* Silken Tassel */}
              <path d="M-4 30 L4 30 L2 42 L-2 42 Z" fill="#0B5CAD" />
              <path d="M-2 42 L-3 48 M0 42 L0 49 M2 42 L3 48" stroke="#0B5CAD" strokeWidth="1" />
            </g>

            <defs>
              <linearGradient id="hBarFluteGrad" x1="65" y1="24" x2="300" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F6DA75" />
                <stop offset="50%" stopColor="#D4A017" />
                <stop offset="100%" stopColor="#8C6203" />
              </linearGradient>
              <linearGradient id="featherLeafGrad" x1="20" y1="-4" x2="65" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00A86B" />
                <stop offset="40%" stopColor="#0B5CAD" />
                <stop offset="100%" stopColor="#D4A017" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {showSubtitle && (
          <p className="mt-2 text-xs sm:text-sm font-medium tracking-widest text-[#0B5CAD] uppercase">
            Luxury Tours &bull; Flights &bull; Hotels &bull; Cabs
          </p>
        )}
      </div>
    </div>
  );
};
