import React from "react";

export default function Logo({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Luxury Gold Gradient */}
        <linearGradient id="logoGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e7c4" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#aa7c11" />
        </linearGradient>
      </defs>

      {/* --- LOTUS SYMBOL (Top) --- */}
      <g stroke="url(#logoGoldGradient)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Central Petal */}
        <path 
          d="M100 25 C92 40 92 65 100 72 C108 65 108 40 100 25 Z" 
          fill="url(#logoGoldGradient)" 
          fillOpacity="0.05" 
          strokeWidth="2.5"
        />
        
        {/* Inner Left Petal */}
        <path d="M89 33 C77 42 79 63 100 72" />
        {/* Inner Right Petal */}
        <path d="M111 33 C123 42 121 63 100 72" />
        
        {/* Middle Left Petal */}
        <path d="M80 42 C66 52 70 68 100 72" />
        {/* Middle Right Petal */}
        <path d="M120 42 C134 52 130 68 100 72" />
        
        {/* Outer Left Petal */}
        <path d="M74 54 C58 60 63 71 96 72" />
        {/* Outer Right Petal */}
        <path d="M126 54 C142 60 137 71 104 72" />
      </g>

      {/* --- RUA TEXT (Middle - Perfectly Centered) --- */}
      <g stroke="url(#logoGoldGradient)" strokeWidth="0.8" fill="url(#logoGoldGradient)" strokeLinecap="round" strokeLinejoin="round">
        {/* Letter 'R' */}
        <path d="M65.5 115 L65.5 114 C67 114 68 113.5 68 112 L68 98 C68 96.5 67 96 65.5 96 L65.5 95 L73.5 95 C77.5 95 80 96.5 80 100 C80 102.5 78 104 75 104.5 L80 112 C81 113.5 82 114 83.5 114 L83.5 115 L77 115 L73 109 L71.5 109 L71.5 112 C71.5 113.5 72.5 114 73.5 114 L73.5 115 Z M71.5 96.5 L71.5 104 L74 104 C77 104 78 102.5 78 100 C78 98 77 96.5 74 96.5 Z" />

        {/* Letter 'U' */}
        <path d="M89.5 95 L89.5 96 C91 96 92 96.5 92 98.5 L92 107.5 C92 111.5 95 114 99 114 C103 114 106 111.5 106 107.5 L106 98.5 C106 96.5 107 96 108.5 96 L108.5 95 L102 95 L102 96 C103.5 96 104 96.5 104 98.5 L104 107.5 C104 110.5 102 112 99 112 C96 112 94 110.5 94 107.5 L94 98.5 C94 96.5 94.5 96 96 96 L96 95 Z" />

        {/* Letter 'A' with custom luxury leaf loop */}
        <path d="M114.5 115 L114.5 114 C116 114 117 113.5 118 111 L124 97.5 L125 97.5 L131 111 C132 113.5 133 114 134.5 114 L134.5 115 L127 115 L127 114 C128.5 114 129 113.5 128.5 112 L127 108 L120 108 L118.5 112 C118 113.5 118.5 114 120 114 L120 115 Z M124 98.5 L120.7 106.5 L127.3 106.5 Z" />
        
        {/* Leaf/Teardrop loop element inside the 'A' */}
        <path 
          d="M121 107.5 C122 104, 127.5 104, 128 108.5 C128.3 112.5, 125 111.5, 123.5 109 C122.7 107.5, 122 107.5, 121 107.5 Z" 
          fill="url(#logoGoldGradient)"
          stroke="url(#logoGoldGradient)"
          strokeWidth="0.4"
        />
      </g>

      {/* --- THAI SPA TEXT (Bottom - Spaced Serif) --- */}
      <text
        x="102"
        y="142"
        textAnchor="middle"
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontSize="12.5"
        fontWeight="400"
        letterSpacing="0.5em"
        fill="url(#logoGoldGradient)"
      >
        THAI SPA
      </text>
    </svg>
  );
}
