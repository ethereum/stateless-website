import {
  ExternalLink,
  FileText,
  Video,
  BookOpen,
  ScrollText,
  Wrench,
} from "lucide-react";
import type { Resource, ResourceType } from "@/data/resources";

const typeConfig: Record<
  ResourceType,
  { label: string; icon: typeof FileText; colorClass: string }
> = {
  article: {
    label: "Article",
    icon: FileText,
    colorClass: "text-ef-cyan bg-pastel-cyan",
  },
  video: {
    label: "Video",
    icon: Video,
    colorClass: "text-ef-purple bg-pastel-purple",
  },
  paper: {
    label: "Paper",
    icon: BookOpen,
    colorClass: "text-ef-blue bg-pastel-blue",
  },
  eip: {
    label: "EIP",
    icon: ScrollText,
    colorClass: "text-ef-green bg-pastel-green",
  },
  tool: {
    label: "Tool",
    icon: Wrench,
    colorClass: "text-ef-coral bg-pastel-coral",
  },
};

export function ResourceCard({ title, author, url, type }: Resource) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 glass-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(13,175,210,0.12)] hover:border-ef-cyan/30 group"
    >
      <span
        className={`shrink-0 inline-flex items-center gap-1 text-xs/5 font-heading px-2.5 py-1 rounded-full ${config.colorClass}`}
      >
        <Icon className="size-3" />
        {config.label}
      </span>

      <div className="flex-1 min-w-0">
        <p className="text-sm/6 font-medium group-hover:text-ef-cyan transition-colors">
          {title}
        </p>
        {author && (
          <p className="text-xs/5 text-text-muted">{author}</p>
        )}
      </div>

      <ExternalLink className="size-4 text-text-muted shrink-0 group-hover:text-ef-cyan transition-colors" />
    </a>
  );
}
