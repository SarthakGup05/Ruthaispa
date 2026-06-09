import React from "react";

export default function Logo({ className, showText = true, ...props }) {
  if (!showText) {
    return (
      <img
        src="/logo_new.webp"
        alt="RUA Thai Spa"
        className={className}
        {...props}
      />
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`} {...props}>
      <img
        src="/logo_new.webp"
        alt="RUA Thai Spa"
        className="w-24 h-24 object-contain mb-4"
      />
      <div className="flex flex-col leading-none">
        <span className="font-serif tracking-[0.15em] font-medium uppercase text-2xl text-foreground">
          RUA
        </span>
        <span className="font-sans tracking-[0.3em] font-semibold uppercase text-[10px] text-primary mt-1.5">
          Thai Spa
        </span>
      </div>
    </div>
  );
}

