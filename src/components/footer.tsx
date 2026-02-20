import { ExternalLink } from "lucide-react";

const footerLinks = [
  {
    label: "book",
    href: "https://stateless.fyi/",
  },
  {
    label: "twitter",
    href: "https://x.com/StatelessEth",
  },
  {
    label: "contact",
    href: "mailto:stateless@ethereum.org",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm/6 text-text-muted hover:text-text transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                <ExternalLink className="size-3" />
              </a>
            ))}
          </div>

          <p className="text-sm/6 text-text-muted">
            &copy; {new Date().getFullYear()} Ethereum Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
