import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps extends Project {
  borderColorClass?: string;
}

export function ProjectCard({
  title,
  summary,
  url,
  eipUrl,
  borderColorClass = "border-l-ef-cyan",
}: ProjectCardProps) {
  return (
    <div
      className={`glass-card border-l-4 ${borderColorClass} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(13,175,210,0.15)]`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg/7 font-bold">{title}</h3>
        <div className="flex shrink-0 gap-2">
          {eipUrl && (
            <a
              href={eipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs/5 font-heading text-ef-cyan hover:text-ef-cyan/80 border border-ef-cyan/30 rounded-full px-2 py-0.5 transition-colors"
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
              className="inline-flex items-center gap-1 text-xs/5 font-heading text-ef-cyan hover:text-ef-cyan/80 border border-ef-cyan/30 rounded-full px-2 py-0.5 transition-colors"
            >
              link
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
      <p className="text-base/7 text-text-muted">{summary}</p>
    </div>
  );
}
