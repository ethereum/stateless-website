import type { ReactNode } from "react";

type Palette =
  | "cyan"
  | "green"
  | "purple"
  | "coral"
  | "yellow"
  | "blue"
  | "navy";

const paletteStyles: Record<Palette, string> = {
  cyan: "bg-pastel-cyan/30",
  green: "bg-pastel-green/30",
  purple: "bg-pastel-purple/30",
  coral: "bg-pastel-coral/30",
  yellow: "bg-pastel-yellow/30",
  blue: "bg-pastel-blue/30",
  navy: "bg-navy text-white",
};

interface SectionBreakProps {
  palette: Palette;
  children: ReactNode;
}

export function SectionBreak({ palette, children }: SectionBreakProps) {
  return (
    <section
      className={`relative left-1/2 -translate-x-1/2 w-screen ${paletteStyles[palette]}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        {children}
      </div>
    </section>
  );
}
