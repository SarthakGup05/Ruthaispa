import React from 'react';

export default function PetalDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-6 select-none ${className}`}>
      <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-primary/50"></div>
      <svg className="w-6 h-6 text-primary filter drop-shadow-[0_1px_4px_rgba(230,210,167,0.15)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M50 25 C47 40 47 60 50 75 C53 60 53 40 50 25 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M50 40 C40 45 32 55 36 68 C42 66 46 58 50 50" />
        <path d="M50 40 C60 45 68 55 64 68 C58 66 54 58 50 50" />
      </svg>
      <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-primary/50"></div>
    </div>
  );
}
