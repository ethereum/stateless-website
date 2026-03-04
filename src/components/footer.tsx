import { ExternalLink } from "lucide-react";

const footerLinks = [
  {
    label: "Book",
    href: "https://stateless.fyi/",
  },
  {
    label: "Twitter",
    href: "https://x.com/StatelessEth",
  },
  {
    label: "Contact",
    href: "mailto:stateless@ethereum.org",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="mesh-blob bg-ef-cyan/8 size-72 -top-24 -left-24" />
        <div className="mesh-blob bg-ef-purple/8 size-64 -bottom-20 -right-20" />
      </div>
      <div className="prism-gradient h-[2px] relative" />
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm/6 text-white/60 hover:text-white hover:drop-shadow-[0_0_8px_rgba(13,175,210,0.5)] transition-all inline-flex items-center gap-1"
              >
                {link.label}
                <ExternalLink className="size-3" />
              </a>
            ))}
          </div>

          <p className="text-sm/6 text-white/40">
            &copy; {new Date().getFullYear()} Ethereum Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
