type QuoteColor = "cyan" | "green" | "purple" | "coral";

const colorStyles: Record<QuoteColor, { border: string; bg: string }> = {
  cyan: { border: "border-l-ef-cyan", bg: "bg-white/40 backdrop-blur-sm" },
  green: { border: "border-l-ef-green", bg: "bg-white/40 backdrop-blur-sm" },
  purple: { border: "border-l-ef-purple", bg: "bg-white/40 backdrop-blur-sm" },
  coral: { border: "border-l-ef-coral", bg: "bg-white/40 backdrop-blur-sm" },
};

interface PullQuoteProps {
  text: string;
  attribution?: string;
  color: QuoteColor;
}

export function PullQuote({ text, attribution, color }: PullQuoteProps) {
  const styles = colorStyles[color];

  return (
    <blockquote
      className={`border-l-4 ${styles.border} ${styles.bg} rounded-r-xl px-6 py-5`}
    >
      <p className="text-xl/8 lg:text-2xl/9 text-text">{text}</p>
      {attribution && (
        <footer className="mt-3 text-sm/6 text-text-muted">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
