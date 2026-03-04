import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface ExpandableDetailProps {
  heading: string;
  summary: string;
  children: ReactNode;
}

export function ExpandableDetail({
  heading,
  summary,
  children,
}: ExpandableDetailProps) {
  return (
    <details className="group glass-card">
      <summary className="flex items-center gap-3 cursor-pointer px-5 py-4 select-none font-heading text-sm/6 font-bold">
        <ChevronRight className="size-4 shrink-0 text-text-muted transition-transform group-open:rotate-90" />
        <span>{heading}</span>
        <span className="ml-auto text-text-muted font-body font-normal text-sm/6 hidden sm:inline">
          {summary}
        </span>
      </summary>
      <div className="details-content">
        <div>
          <div className="px-5 pb-5 pt-1 text-sm/6 text-text-muted">
            {children}
          </div>
        </div>
      </div>
    </details>
  );
}
