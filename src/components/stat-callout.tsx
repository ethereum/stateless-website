interface StatCalloutProps {
  value: string;
  label: string;
  color: string;
}

export function StatCallout({ value, label, color }: StatCalloutProps) {
  return (
    <div className="text-center">
      <p className={`font-heading text-5xl/12 lg:text-7xl/16 font-bold ${color}`}>
        {value}
      </p>
      <p className="text-sm/6 text-text-muted mt-2">{label}</p>
    </div>
  );
}
