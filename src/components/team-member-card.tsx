import { ExternalLink } from "lucide-react";
import type { TeamMember } from "@/data/team";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamMemberCard({ name, role, image, links }: TeamMember) {
  return (
    <div className="bg-bg-alt border border-border rounded-sm p-6 text-center">
      <div className="mx-auto mb-4 size-16 rounded-full bg-pastel-blue flex items-center justify-center">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={name}
            className="size-16 rounded-full object-cover"
          />
        ) : (
          <span className="font-heading text-lg/7 font-bold text-ef-blue">
            {getInitials(name)}
          </span>
        )}
      </div>

      <h3 className="text-base/7 font-bold mb-1">{name}</h3>
      {role && <p className="text-sm/6 text-text-muted mb-4">{role}</p>}

      {links && (
        <div className="flex items-center justify-center gap-3">
          {links.twitter && (
            <SocialLink href={links.twitter} label="Twitter" />
          )}
          {links.github && (
            <SocialLink href={links.github} label="GitHub" />
          )}
          {links.website && (
            <SocialLink href={links.website} label="Website" />
          )}
        </div>
      )}
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs/5 font-heading text-text-muted hover:text-ef-cyan transition-colors"
    >
      {label.toLowerCase()}
      <ExternalLink className="size-3" />
    </a>
  );
}
