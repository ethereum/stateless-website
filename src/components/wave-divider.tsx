type WavePosition = "top" | "bottom";

interface WaveDividerProps {
  position: WavePosition;
  color?: string;
  className?: string;
}

export function WaveDivider({
  position,
  color = "var(--color-bg)",
  className,
}: WaveDividerProps) {
  const posClass = position === "top" ? "wave-divider-top" : "wave-divider-bottom";
  const flip = position === "top" ? "scale-y-[-1]" : "";

  return (
    <div
      className={`wave-divider ${posClass} ${flip} ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
