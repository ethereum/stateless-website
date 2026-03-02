import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ title, summary, url, eipUrl }: Project) {
  return (
    <div className="bg-bg-alt border border-border rounded-sm p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base/7 font-bold">{title}</h3>
        <div className="flex shrink-0 gap-2">
          {eipUrl && (
            <a
              href={eipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs/5 font-heading text-ef-cyan hover:text-ef-cyan/80 border border-ef-cyan/30 rounded-sm px-2 py-0.5 transition-colors"
            >
              EIP
              <ExternalLink className="size-3" />
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs/5 font-heading text-ef-cyan hover:text-ef-cyan/80 border border-ef-cyan/30 rounded-sm px-2 py-0.5 transition-colors"
            >
              link
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm/6 text-text-muted">{summary}</p>
    </div>
  );
}
