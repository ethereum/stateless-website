const YEARS = [
  "2015",
  "2017",
  "2019",
  "2021",
  "2023",
  "2025",
];

const VALUES = [0, 10, 30, 55, 85, 100];

const W = 600;
const H = 300;
const PAD = { top: 30, right: 20, bottom: 40, left: 60 };
const CHART_W = W - PAD.left - PAD.right;
const CHART_H = H - PAD.top - PAD.bottom;

function xPos(i: number): number {
  return PAD.left + (i / (VALUES.length - 1)) * CHART_W;
}

function yPos(v: number): number {
  return PAD.top + CHART_H - (v / 100) * CHART_H;
}

const areaPath = `M${xPos(0)},${yPos(0)} ${VALUES.map((v, i) => `L${xPos(i)},${yPos(v)}`).join(" ")} L${xPos(VALUES.length - 1)},${yPos(0)} Z`;
const linePath = `M${VALUES.map((v, i) => `${xPos(i)},${yPos(v)}`).join(" L")}`;

const PATH_LENGTH = 800;

export function StateGrowthChart() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-[600px]"
      role="img"
      aria-label="Chart showing Ethereum state growth from 2015 to 2025"
    >
      <defs>
        <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-ef-cyan)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-pastel-cyan)" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((v) => (
        <line
          key={v}
          x1={PAD.left}
          y1={yPos(v)}
          x2={W - PAD.right}
          y2={yPos(v)}
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      ))}

      {/* Area fill */}
      <path d={areaPath} fill="url(#area-fill)" />

      {/* Line */}
      <path
        d={linePath}
        fill="none"
        stroke="var(--color-ef-cyan)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={PATH_LENGTH}
        strokeDashoffset={PATH_LENGTH}
        className="draw-path"
        style={{ "--path-length": PATH_LENGTH } as React.CSSProperties}
      />

      {/* Data points */}
      {VALUES.map((v, i) => (
        <circle
          key={i}
          cx={xPos(i)}
          cy={yPos(v)}
          r="4"
          fill="var(--color-ef-cyan)"
          stroke="white"
          strokeWidth="2"
          filter="url(#glow-cyan)"
        />
      ))}

      {/* X axis labels */}
      {YEARS.map((year, i) => (
        <text
          key={year}
          x={xPos(i)}
          y={H - 8}
          textAnchor="middle"
          fill="var(--color-text-muted)"
          fontSize="12"
          fontFamily="var(--font-heading)"
        >
          {year}
        </text>
      ))}

    </svg>
  );
}
