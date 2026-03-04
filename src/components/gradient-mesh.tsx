interface MeshBlob {
  color: string;
  size: string;
  position: string;
}

type MeshPreset = "cyan-purple" | "yellow-cyan" | "purple-cyan" | "navy-glow";

const presets: Record<MeshPreset, MeshBlob[]> = {
  "cyan-purple": [
    { color: "bg-ef-cyan/30", size: "size-72 lg:size-96", position: "top-0 -left-24" },
    { color: "bg-ef-purple/25", size: "size-64 lg:size-80", position: "-bottom-12 -right-16" },
    { color: "bg-ef-yellow/15", size: "size-48 lg:size-64", position: "top-1/2 left-1/3" },
  ],
  "yellow-cyan": [
    { color: "bg-ef-yellow/30", size: "size-72 lg:size-96", position: "-top-12 -right-24" },
    { color: "bg-ef-cyan/25", size: "size-64 lg:size-80", position: "bottom-0 -left-16" },
    { color: "bg-ef-purple/10", size: "size-48 lg:size-64", position: "top-1/3 right-1/4" },
  ],
  "purple-cyan": [
    { color: "bg-ef-purple/25", size: "size-72 lg:size-96", position: "-top-16 left-1/4" },
    { color: "bg-ef-cyan/20", size: "size-64 lg:size-80", position: "bottom-0 -right-20" },
    { color: "bg-ef-yellow/10", size: "size-48 lg:size-64", position: "top-2/3 -left-12" },
  ],
  "navy-glow": [
    { color: "bg-ef-cyan/15", size: "size-72 lg:size-96", position: "top-1/4 -left-24" },
    { color: "bg-ef-purple/15", size: "size-64 lg:size-80", position: "-bottom-16 right-1/4" },
    { color: "bg-ef-yellow/10", size: "size-48 lg:size-64", position: "top-0 right-0" },
  ],
};

interface GradientMeshProps {
  preset: MeshPreset;
  className?: string;
}

export function GradientMesh({ preset, className }: GradientMeshProps) {
  const blobs = presets[preset];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`mesh-blob ${blob.color} ${blob.size} ${blob.position}`}
        />
      ))}
    </div>
  );
}

export type { MeshPreset };
