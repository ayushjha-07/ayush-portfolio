"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Calculate rotation: max 6 degrees tilt
    const w = rect.width;
    const h = rect.height;
    const rx = ((y - h / 2) / (h / 2)) * -6;
    const ry = ((x - w / 2) / (w / 2)) * 6;
    setRotation({ rx, ry });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-theme-border bg-theme-card/75 backdrop-blur-xl shadow-theme-card transition-all duration-300 ${className}`}
      style={{
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`,
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.rx}deg) rotateY(${rotation.ry}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.1s ease-out, border-color 0.3s" : "transform 0.5s ease-out, border-color 0.3s",
      } as React.CSSProperties}
    >
      {/* Background Spotlight Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--spotlight-bg), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border Spotlight Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), var(--spotlight-border) 0%, rgba(16, 185, 129, 0.03) 70%, transparent 100%)`,
          opacity: isHovered ? 1 : 0,
          padding: "1.5px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Card Content Wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
