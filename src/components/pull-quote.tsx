type QuoteColor = "cyan" | "green" | "purple" | "coral";

const colorStyles: Record<QuoteColor, { border: string; bg: string }> = {
  cyan: { border: "border-l-ef-cyan", bg: "bg-pastel-cyan/30" },
  green: { border: "border-l-ef-green", bg: "bg-pastel-green/30" },
  purple: { border: "border-l-ef-purple", bg: "bg-pastel-purple/30" },
  coral: { border: "border-l-ef-coral", bg: "bg-pastel-coral/30" },
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
      className={`border-l-4 ${styles.border} ${styles.bg} rounded-r-sm px-6 py-5`}
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
