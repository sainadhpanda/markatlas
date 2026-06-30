import React from "react";
import logoImg from "@/assets/images/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Markatlas Inkjet Technologies"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
