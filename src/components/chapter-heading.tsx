const textToBg: Record<string, string> = {
  "text-ef-cyan": "bg-ef-cyan",
  "text-ef-green": "bg-ef-green",
  "text-ef-purple": "bg-ef-purple",
  "text-ef-coral": "bg-ef-coral",
  "text-ef-blue": "bg-ef-blue",
  "text-ef-yellow": "bg-ef-yellow",
};

interface ChapterHeadingProps {
  label: string;
  title: string;
  color: string;
}

export function ChapterHeading({ label, title, color }: ChapterHeadingProps) {
  const bgColor = textToBg[color] ?? "bg-ef-cyan";
  const isNumberLabel = /^\d+$/.test(label);

  return (
    <div className="mb-10">
      <p
        className={`font-heading text-sm/6 font-bold uppercase tracking-wider mb-3 ${
          isNumberLabel ? "gradient-text" : color
        }`}
      >
        {label}
      </p>
      <h2 className="text-3xl/10 lg:text-5xl/14 font-bold tracking-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 rounded-full ${bgColor}`} />
    </div>
  );
}
