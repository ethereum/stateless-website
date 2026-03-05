import type { ReactNode } from "react";
import { GradientMesh, type MeshPreset } from "@/components/gradient-mesh";
import { WaveDivider } from "@/components/wave-divider";

type Palette =
  | "cyan"
  | "green"
  | "purple"
  | "coral"
  | "yellow"
  | "blue"
  | "navy";

const paletteConfig: Record<
  Palette,
  { bg: string; mesh: MeshPreset; waveFill: string; textClass: string }
> = {
  cyan: {
    bg: "bg-pastel-cyan/40",
    mesh: "cyan-purple",
    waveFill: "var(--color-bg)",
    textClass: "",
  },
  green: {
    bg: "bg-pastel-yellow/40",
    mesh: "yellow-cyan",
    waveFill: "var(--color-bg)",
    textClass: "",
  },
  purple: {
    bg: "bg-pastel-purple/40",
    mesh: "purple-cyan",
    waveFill: "var(--color-bg)",
    textClass: "",
  },
  coral: {
    bg: "bg-pastel-purple/40",
    mesh: "purple-cyan",
    waveFill: "var(--color-bg)",
    textClass: "",
  },
  yellow: {
    bg: "bg-pastel-yellow/40",
    mesh: "cyan-purple",
    waveFill: "var(--color-bg)",
    textClass: "",
  },
  blue: {
    bg: "bg-pastel-purple/40",
    mesh: "purple-cyan",
    waveFill: "var(--color-bg)",
    textClass: "",
  },
  navy: {
    bg: "bg-navy",
    mesh: "navy-glow",
    waveFill: "var(--color-bg)",
    textClass: "text-white",
  },
};

interface SectionBreakProps {
  palette: Palette;
  children: ReactNode;
  mesh?: boolean;
}

export function SectionBreak({ palette, children, mesh = true }: SectionBreakProps) {
  const config = paletteConfig[palette];

  return (
    <section
      className={`relative left-1/2 -translate-x-1/2 w-screen ${config.bg} ${config.textClass} overflow-hidden`}
    >
      {mesh && <GradientMesh preset={config.mesh} />}
      <WaveDivider position="top" color={config.waveFill} />
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28">
        {children}
      </div>
      <WaveDivider position="bottom" color={config.waveFill} />
    </section>
  );
}
