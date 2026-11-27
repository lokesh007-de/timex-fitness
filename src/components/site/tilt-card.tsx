"use client";

import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({
  children,
  className = "",
  intensity = 9,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setSpot({ x: px * 100, y: py * 100 });
    setStyle({
      transform: `perspective(1100px) rotateX(${(0.5 - py) * intensity}deg) rotateY(${
        (px - 0.5) * intensity * 1.25
      }deg) translateY(-4px)`,
    });
  };

  const reset = () => {
    setActive(false);
    setStyle({ transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={reset}
      style={{
        ...style,
        transition: active
          ? "transform 120ms ease-out"
          : "transform 550ms cubic-bezier(0.22,1,0.36,1)",
        transformStyle: "preserve-3d",
        ["--spot-x" as string]: `${spot.x}%`,
        ["--spot-y" as string]: `${spot.y}%`,
      }}
      className={`group relative will-change-transform ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x) var(--spot-y), rgba(215,255,61,0.14), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}
