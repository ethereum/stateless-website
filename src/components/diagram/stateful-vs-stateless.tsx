const W = 800;
const H = 360;

function RoundedRect({
  x,
  y,
  w,
  h,
  fill,
  stroke,
  label,
  sublabel,
  svgFilter,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  stroke: string;
  label: string;
  sublabel?: string;
  svgFilter?: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        filter={svgFilter}
      />
      <text
        x={x + w / 2}
        y={sublabel ? y + h / 2 - 6 : y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--color-text)"
        fontSize="13"
        fontFamily="var(--font-heading)"
        fontWeight="700"
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--color-text-muted)"
          fontSize="11"
          fontFamily="var(--font-body)"
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  color,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2 - 6}
      stroke={color}
      strokeWidth="1.5"
      markerEnd="url(#arrowhead)"
    />
  );
}

export function StatefulVsStateless() {
  const colW = 160;
  const nodeH = 48;
  const leftX = 100;
  const rightX = 500;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-[800px]"
      role="img"
      aria-label="Comparison diagram: stateful validation vs stateless validation"
    >
      <defs>
        <marker
          id="arrowhead"
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
        <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Column headers */}
      <text
        x={leftX + colW / 2}
        y={28}
        textAnchor="middle"
        fill="var(--color-ef-coral)"
        fontSize="14"
        fontFamily="var(--font-heading)"
        fontWeight="700"
      >
        Today (Stateful)
      </text>
      <text
        x={rightX + colW / 2}
        y={28}
        textAnchor="middle"
        fill="var(--color-ef-cyan)"
        fontSize="14"
        fontFamily="var(--font-heading)"
        fontWeight="700"
      >
        Future (Stateless)
      </text>

      {/* Divider */}
      <line
        x1={W / 2}
        y1={10}
        x2={W / 2}
        y2={H - 10}
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Left column: Stateful */}
      <RoundedRect
        x={leftX}
        y={55}
        w={colW}
        h={nodeH}
        fill="var(--color-pastel-coral)"
        stroke="var(--color-ef-coral)"
        label="New Block"
        svgFilter="url(#glow-node)"
      />
      <Arrow
        x1={leftX + colW / 2}
        y1={55 + nodeH}
        x2={leftX + colW / 2}
        y2={140}
        color="var(--color-text-muted)"
      />
      <RoundedRect
        x={leftX}
        y={140}
        w={colW}
        h={nodeH}
        fill="var(--color-pastel-coral)"
        stroke="var(--color-ef-coral)"
        label="Validator"
      />
      <Arrow
        x1={leftX + colW / 2}
        y1={140 + nodeH}
        x2={leftX + colW / 2}
        y2={225}
        color="var(--color-text-muted)"
      />
      <RoundedRect
        x={leftX - 10}
        y={225}
        w={colW + 20}
        h={nodeH + 8}
        fill="var(--color-pastel-coral)"
        stroke="var(--color-ef-coral)"
        label="Full State DB"
        sublabel="~hundreds of GB"
      />
      <Arrow
        x1={leftX + colW / 2}
        y1={225 + nodeH + 8}
        x2={leftX + colW / 2}
        y2={310}
        color="var(--color-text-muted)"
      />
      <RoundedRect
        x={leftX}
        y={310 - 4}
        w={colW}
        h={nodeH}
        fill="var(--color-pastel-coral)"
        stroke="var(--color-ef-coral)"
        label="✓ Verified"
      />

      {/* Right column: Stateless */}
      <RoundedRect
        x={rightX}
        y={55}
        w={colW}
        h={nodeH}
        fill="var(--color-pastel-cyan)"
        stroke="var(--color-ef-cyan)"
        label="New Block"
        svgFilter="url(#glow-node)"
      />
      <Arrow
        x1={rightX + colW / 2}
        y1={55 + nodeH}
        x2={rightX + colW / 2}
        y2={140}
        color="var(--color-text-muted)"
      />
      <RoundedRect
        x={rightX}
        y={140}
        w={colW}
        h={nodeH}
        fill="var(--color-pastel-cyan)"
        stroke="var(--color-ef-cyan)"
        label="Validator"
      />
      <Arrow
        x1={rightX + colW / 2}
        y1={140 + nodeH}
        x2={rightX + colW / 2}
        y2={225}
        color="var(--color-text-muted)"
      />
      <RoundedRect
        x={rightX + 20}
        y={225}
        w={colW - 40}
        h={nodeH + 8}
        fill="var(--color-pastel-cyan)"
        stroke="var(--color-ef-cyan)"
        label="Proof"
        sublabel="~few KB"
      />
      <Arrow
        x1={rightX + colW / 2}
        y1={225 + nodeH + 8}
        x2={rightX + colW / 2}
        y2={310}
        color="var(--color-text-muted)"
      />
      <RoundedRect
        x={rightX}
        y={310 - 4}
        w={colW}
        h={nodeH}
        fill="var(--color-pastel-cyan)"
        stroke="var(--color-ef-cyan)"
        label="✓ Verified"
      />
    </svg>
  );
}
