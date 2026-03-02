import { ExternalLink } from "lucide-react";
import type { TeamMember } from "@/data/team";
import { basePath } from "@/lib/base-path";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  links,
}: TeamMember) {
  return (
    <div className="bg-bg-alt border border-border rounded-sm p-8 text-center transition-all hover:shadow-xs">
      <div className="mx-auto mb-4 size-24 lg:size-32 rounded-full bg-pastel-blue flex items-center justify-center">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${basePath}${image}`}
            alt={name}
            className="size-24 lg:size-32 rounded-full object-cover"
          />
        ) : (
          <span className="font-heading text-2xl/9 lg:text-3xl/10 font-bold text-ef-blue">
            {getInitials(name)}
          </span>
        )}
      </div>

      <h3 className="text-lg/7 font-bold mb-1">{name}</h3>
      {role && <p className="text-sm/6 text-text-muted mb-2">{role}</p>}
      {bio && (
        <p className="text-sm/6 text-text-muted mb-4">{bio}</p>
      )}

      {links && (
        <div className="flex items-center justify-center gap-4">
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
      className="inline-flex items-center gap-1 text-xs/5 font-heading text-text-muted hover:text-ef-cyan transition-colors p-1"
    >
      {label.toLowerCase()}
      <ExternalLink className="size-3" />
    </a>
  );
}
