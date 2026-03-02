const W = 800;
const H = 200;

const stages = [
  {
    label: "Active State",
    sublabel: "frequently accessed",
    fill: "var(--color-pastel-green)",
    stroke: "var(--color-ef-green)",
    x: 20,
    w: 160,
  },
  {
    label: "Stale State",
    sublabel: "rarely accessed",
    fill: "var(--color-pastel-yellow)",
    stroke: "var(--color-ef-yellow)",
    x: 230,
    w: 150,
  },
  {
    label: "Compressed",
    sublabel: "archived on disk",
    fill: "var(--color-pastel-purple)",
    stroke: "var(--color-ef-purple)",
    x: 430,
    w: 150,
  },
  {
    label: "Expired",
    sublabel: "removed from trie",
    fill: "var(--color-pastel-coral)",
    stroke: "var(--color-ef-coral)",
    x: 630,
    w: 140,
  },
];

const nodeH = 56;
const nodeY = 70;

export function StateLifecycle() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-[800px]"
      role="img"
      aria-label="State lifecycle: active, stale, compressed, expired"
    >
      <defs>
        <marker
          id="lifecycle-arrow"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon
            points="0 0, 8 3, 0 6"
            fill="var(--color-text-muted)"
          />
        </marker>
      </defs>

      {/* Title */}
      <text
        x={W / 2}
        y={28}
        textAnchor="middle"
        fill="var(--color-ef-purple)"
        fontSize="14"
        fontFamily="var(--font-heading)"
        fontWeight="700"
      >
        State Lifecycle
      </text>

      {/* Stages and arrows */}
      {stages.map((stage, i) => (
        <g key={stage.label}>
          {/* Arrow to next stage */}
          {i < stages.length - 1 && (
            <line
              x1={stage.x + stage.w}
              y1={nodeY + nodeH / 2}
              x2={stages[i + 1]!.x - 6}
              y2={nodeY + nodeH / 2}
              stroke="var(--color-text-muted)"
              strokeWidth="1.5"
              markerEnd="url(#lifecycle-arrow)"
            />
          )}

          {/* Stage box */}
          <rect
            x={stage.x}
            y={nodeY}
            width={stage.w}
            height={nodeH}
            rx="8"
            fill={stage.fill}
            stroke={stage.stroke}
            strokeWidth="1.5"
          />
          <text
            x={stage.x + stage.w / 2}
            y={nodeY + nodeH / 2 - 7}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--color-text)"
            fontSize="13"
            fontFamily="var(--font-heading)"
            fontWeight="700"
          >
            {stage.label}
          </text>
          <text
            x={stage.x + stage.w / 2}
            y={nodeY + nodeH / 2 + 12}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--color-text-muted)"
            fontSize="11"
            fontFamily="var(--font-body)"
          >
            {stage.sublabel}
          </text>
        </g>
      ))}

      {/* Bottom annotation */}
      <text
        x={W / 2}
        y={nodeY + nodeH + 30}
        textAnchor="middle"
        fill="var(--color-text-muted)"
        fontSize="11"
        fontFamily="var(--font-body)"
      >
        repricing incentivizes state hygiene at each stage
      </text>
    </svg>
  );
}
