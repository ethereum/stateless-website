import type { Benefit } from "@/data/benefits";

const accentBorderMap: Record<string, string> = {
  "ef-cyan": "border-l-ef-cyan",
  "ef-green": "border-l-ef-green",
  "ef-purple": "border-l-ef-purple",
  "ef-coral": "border-l-ef-coral",
  "ef-blue": "border-l-ef-blue",
  "ef-yellow": "border-l-ef-yellow",
};

export function BenefitCard({ title, description, items, accentColor }: Benefit) {
  const borderClass = accentBorderMap[accentColor] ?? "border-l-ef-cyan";

  return (
    <div
      className={`bg-bg-alt border border-border ${borderClass} border-l-4 rounded-sm p-6 transition-transform hover:-translate-y-0.5`}
    >
      <h3 className="text-lg/7 font-bold mb-2">{title}</h3>
      <p className="text-sm/6 text-text-muted mb-4">{description}</p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm/6 text-text-muted flex items-start gap-2">
            <span className="mt-1.5 size-1.5 rounded-full bg-border shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
