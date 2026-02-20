"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { basePath } from "@/lib/base-path";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg-alt/80 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/logo/color-light.svg`}
              alt="Stateless Consensus"
              width={200}
              height={28}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                link={link}
                active={pathname === link.href}
              />
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-text-muted hover:text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-bg-alt px-4 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                link={link}
                active={pathname === link.href}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function NavItem({
  link,
  active,
  onClick,
}: {
  link: (typeof navLinks)[number];
  active: boolean;
  onClick?: () => void;
}) {
  const className = `font-heading text-sm/6 transition-colors ${
    active
      ? "text-ef-cyan"
      : "text-text-muted hover:text-text"
  }`;

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} inline-flex items-center gap-1`}
        onClick={onClick}
      >
        {link.label}
        <ExternalLink className="size-3" />
      </a>
    );
  }

  const linkProps = onClick ? { onClick } : {};

  return (
    <Link href={link.href} className={className} {...linkProps}>
      {link.label}
    </Link>
  );
}
