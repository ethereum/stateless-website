"use client";

const NODES = [
  { x: 8, y: 15, color: "var(--color-ef-cyan)", r: 3, drift: 1 },
  { x: 22, y: 8, color: "var(--color-ef-purple)", r: 2.5, drift: 2 },
  { x: 35, y: 25, color: "var(--color-ef-cyan)", r: 2, drift: 3 },
  { x: 50, y: 10, color: "var(--color-ef-green)", r: 3, drift: 1 },
  { x: 65, y: 22, color: "var(--color-ef-purple)", r: 2, drift: 2 },
  { x: 78, y: 12, color: "var(--color-ef-cyan)", r: 2.5, drift: 3 },
  { x: 92, y: 20, color: "var(--color-ef-green)", r: 2, drift: 1 },
  { x: 15, y: 55, color: "var(--color-ef-green)", r: 2, drift: 2 },
  { x: 30, y: 70, color: "var(--color-ef-purple)", r: 3, drift: 3 },
  { x: 45, y: 50, color: "var(--color-ef-cyan)", r: 2.5, drift: 1 },
  { x: 60, y: 65, color: "var(--color-ef-green)", r: 2, drift: 2 },
  { x: 75, y: 55, color: "var(--color-ef-cyan)", r: 2.5, drift: 3 },
  { x: 88, y: 70, color: "var(--color-ef-purple)", r: 2, drift: 1 },
  { x: 5, y: 85, color: "var(--color-ef-cyan)", r: 2, drift: 2 },
  { x: 42, y: 88, color: "var(--color-ef-green)", r: 2.5, drift: 3 },
  { x: 70, y: 85, color: "var(--color-ef-purple)", r: 2, drift: 1 },
  { x: 95, y: 90, color: "var(--color-ef-cyan)", r: 2.5, drift: 2 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [2, 9], [4, 11], [7, 13], [9, 14], [11, 15], [12, 16],
  [13, 14], [14, 15], [15, 16],
];

const DRIFT_CLASS = ["drift-1", "drift-2", "drift-3"];

export function HeroNetwork() {
  return (
    <svg
      className="absolute inset-0 size-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {EDGES.map(([a, b]) => {
        const na = NODES[a];
        const nb = NODES[b];
        if (!na || !nb) return null;
        return (
          <line
            key={`${a}-${b}`}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="var(--color-ef-cyan)"
            strokeOpacity="0.08"
            strokeWidth="0.3"
          />
        );
      })}
      {NODES.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={node.color}
          fillOpacity="0.2"
          className={DRIFT_CLASS[node.drift - 1]}
        />
      ))}
    </svg>
  );
}
