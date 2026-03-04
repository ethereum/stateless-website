const W = 800;
const H = 400;

function TreeNode({
  cx,
  cy,
  r,
  fill,
  stroke,
  highlighted,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke: string;
  highlighted?: boolean;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={highlighted ? "var(--color-ef-cyan)" : fill}
      stroke={highlighted ? "var(--color-ef-cyan)" : stroke}
      strokeWidth={highlighted ? 2 : 1.5}
      opacity={highlighted ? 1 : 0.7}
      filter={highlighted ? "url(#glow-highlight)" : undefined}
    />
  );
}

function Edge({
  x1,
  y1,
  x2,
  y2,
  highlighted,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  highlighted?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={highlighted ? "var(--color-ef-cyan)" : "var(--color-border)"}
      strokeWidth={highlighted ? 2 : 1}
    />
  );
}

export function TreeComparison() {
  const mptX = 200;
  const bhtX = 600;
  const startY = 80;
  const levelGap = 80;
  const r = 10;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-[800px]"
      role="img"
      aria-label="Comparison of Merkle Patricia Trie vs Binary Hash Tree proof sizes"
    >
      <defs>
        <filter id="glow-highlight" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Titles */}
      <text
        x={mptX}
        y={30}
        textAnchor="middle"
        fill="var(--color-ef-coral)"
        fontSize="14"
        fontFamily="var(--font-heading)"
        fontWeight="700"
      >
        Merkle Patricia Trie
      </text>
      <text
        x={mptX}
        y={48}
        textAnchor="middle"
        fill="var(--color-text-muted)"
        fontSize="11"
        fontFamily="var(--font-body)"
      >
        branching factor: 16
      </text>

      <text
        x={bhtX}
        y={30}
        textAnchor="middle"
        fill="var(--color-ef-cyan)"
        fontSize="14"
        fontFamily="var(--font-heading)"
        fontWeight="700"
      >
        Binary Hash Tree
      </text>
      <text
        x={bhtX}
        y={48}
        textAnchor="middle"
        fill="var(--color-text-muted)"
        fontSize="11"
        fontFamily="var(--font-body)"
      >
        branching factor: 2
      </text>

      {/* Divider */}
      <line
        x1={W / 2}
        y1={20}
        x2={W / 2}
        y2={H - 20}
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* MPT: Wide tree (branching 16, show 5-wide for visual) */}
      {/* Level 0: root */}
      <Edge x1={mptX} y1={startY + r} x2={mptX - 120} y2={startY + levelGap - r} highlighted />
      <Edge x1={mptX} y1={startY + r} x2={mptX - 60} y2={startY + levelGap - r} />
      <Edge x1={mptX} y1={startY + r} x2={mptX} y2={startY + levelGap - r} />
      <Edge x1={mptX} y1={startY + r} x2={mptX + 60} y2={startY + levelGap - r} />
      <Edge x1={mptX} y1={startY + r} x2={mptX + 120} y2={startY + levelGap - r} />
      <TreeNode cx={mptX} cy={startY} r={r} fill="var(--color-pastel-coral)" stroke="var(--color-ef-coral)" highlighted />

      {/* Level 1: 5 children */}
      {[-120, -60, 0, 60, 120].map((dx, i) => (
        <TreeNode
          key={`mpt-l1-${i}`}
          cx={mptX + dx}
          cy={startY + levelGap}
          r={r - 1}
          fill="var(--color-pastel-coral)"
          stroke="var(--color-ef-coral)"
          highlighted={i === 0}
        />
      ))}

      {/* Level 2: expand first child */}
      <Edge x1={mptX - 120} y1={startY + levelGap + r - 1} x2={mptX - 155} y2={startY + levelGap * 2 - r + 1} highlighted />
      <Edge x1={mptX - 120} y1={startY + levelGap + r - 1} x2={mptX - 130} y2={startY + levelGap * 2 - r + 1} />
      <Edge x1={mptX - 120} y1={startY + levelGap + r - 1} x2={mptX - 105} y2={startY + levelGap * 2 - r + 1} />
      <Edge x1={mptX - 120} y1={startY + levelGap + r - 1} x2={mptX - 85} y2={startY + levelGap * 2 - r + 1} />
      {[-155, -130, -105, -85].map((dx, i) => (
        <TreeNode
          key={`mpt-l2-${i}`}
          cx={mptX + dx}
          cy={startY + levelGap * 2}
          r={r - 2}
          fill="var(--color-pastel-coral)"
          stroke="var(--color-ef-coral)"
          highlighted={i === 0}
        />
      ))}

      {/* MPT proof label */}
      <text
        x={mptX}
        y={startY + levelGap * 2 + 55}
        textAnchor="middle"
        fill="var(--color-ef-coral)"
        fontSize="12"
        fontFamily="var(--font-heading)"
      >
        proof ≈ 15 siblings/level
      </text>
      <text
        x={mptX}
        y={startY + levelGap * 2 + 73}
        textAnchor="middle"
        fill="var(--color-text-muted)"
        fontSize="11"
        fontFamily="var(--font-body)"
      >
        larger witness size
      </text>

      {/* BHT: Narrow binary tree */}
      {/* Level 0: root */}
      <Edge x1={bhtX} y1={startY + r} x2={bhtX - 80} y2={startY + levelGap - r} highlighted />
      <Edge x1={bhtX} y1={startY + r} x2={bhtX + 80} y2={startY + levelGap - r} />
      <TreeNode cx={bhtX} cy={startY} r={r} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" highlighted />

      {/* Level 1 */}
      <TreeNode cx={bhtX - 80} cy={startY + levelGap} r={r - 1} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" highlighted />
      <TreeNode cx={bhtX + 80} cy={startY + levelGap} r={r - 1} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" />

      {/* Level 2: expand left child */}
      <Edge x1={bhtX - 80} y1={startY + levelGap + r - 1} x2={bhtX - 120} y2={startY + levelGap * 2 - r + 1} highlighted />
      <Edge x1={bhtX - 80} y1={startY + levelGap + r - 1} x2={bhtX - 40} y2={startY + levelGap * 2 - r + 1} />
      <TreeNode cx={bhtX - 120} cy={startY + levelGap * 2} r={r - 2} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" highlighted />
      <TreeNode cx={bhtX - 40} cy={startY + levelGap * 2} r={r - 2} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" />

      {/* Level 2: expand right child */}
      <Edge x1={bhtX + 80} y1={startY + levelGap + r - 1} x2={bhtX + 40} y2={startY + levelGap * 2 - r + 1} />
      <Edge x1={bhtX + 80} y1={startY + levelGap + r - 1} x2={bhtX + 120} y2={startY + levelGap * 2 - r + 1} />
      <TreeNode cx={bhtX + 40} cy={startY + levelGap * 2} r={r - 2} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" />
      <TreeNode cx={bhtX + 120} cy={startY + levelGap * 2} r={r - 2} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" />

      {/* Level 3: expand leftmost */}
      <Edge x1={bhtX - 120} y1={startY + levelGap * 2 + r - 2} x2={bhtX - 140} y2={startY + levelGap * 3 - r + 2} highlighted />
      <Edge x1={bhtX - 120} y1={startY + levelGap * 2 + r - 2} x2={bhtX - 100} y2={startY + levelGap * 3 - r + 2} />
      <TreeNode cx={bhtX - 140} cy={startY + levelGap * 3} r={r - 3} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" highlighted />
      <TreeNode cx={bhtX - 100} cy={startY + levelGap * 3} r={r - 3} fill="var(--color-pastel-cyan)" stroke="var(--color-ef-cyan)" />

      {/* BHT proof label */}
      <text
        x={bhtX}
        y={startY + levelGap * 2 + 55}
        textAnchor="middle"
        fill="var(--color-ef-cyan)"
        fontSize="12"
        fontFamily="var(--font-heading)"
      >
        proof ≈ 1 sibling/level
      </text>
      <text
        x={bhtX}
        y={startY + levelGap * 2 + 73}
        textAnchor="middle"
        fill="var(--color-text-muted)"
        fontSize="11"
        fontFamily="var(--font-body)"
      >
        smaller witness, STARK-friendly
      </text>
    </svg>
  );
}
