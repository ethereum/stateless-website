import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ChapterHeading } from "@/components/chapter-heading";
import { ResourceCard } from "@/components/resource-card";
import { resourceCategories } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, talks, papers, and EIPs about Stateless Ethereum.",
};

const featuredResources = [
  {
    title: "Hyper-Scaling State by Creating New Forms of State",
    author: "Vitalik Buterin",
    url: "https://ethresear.ch/t/hyper-scaling-state-by-creating-new-forms-of-state/24052",
    type: "article" as const,
    border: "border-t-ef-cyan",
  },
  {
    title: "The Future of Ethereum's State",
    author: "Stateless Consensus",
    url: "https://blog.ethereum.org/2025/12/16/future-of-state",
    type: "article" as const,
    border: "border-t-ef-green",
  },
  {
    title: "Compression-based state expiry",
    author: "Guillaume Ballet",
    url: "https://ethresear.ch/t/compression-based-state-expiry/23443/1",
    type: "article" as const,
    border: "border-t-ef-purple",
  },
];

const categoryColors: Record<string, string> = {
  statelessness: "text-ef-cyan",
  "state-management": "text-ef-purple",
  talks: "text-ef-coral",
  eips: "text-ef-green",
  tools: "text-ef-blue",
};

const sectionBg = [
  "bg-transparent",
  "bg-pastel-purple/20",
  "bg-transparent",
  "bg-pastel-yellow/20",
  "bg-transparent",
];

export default function ResourcesPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-16 lg:py-24">
        <PageHero
          image="/resources.jpeg"
          title="Resources"
          description="Articles, talks, papers, and EIPs related to Stateless Ethereum. For in-depth technical content, see the book."
        />

        {/* Recent Resources */}
        <section className="mb-16">
          <h2 className="text-xl/8 font-bold mb-6">Recent Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredResources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col glass-card border-t-4 ${resource.border} p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(13,175,210,0.12)] transition-all duration-300 group`}
              >
                <span className="inline-flex items-center gap-1 text-xs/5 font-heading text-text-muted mb-3">
                  Article
                </span>
                <p className="text-base/7 font-bold group-hover:text-ef-cyan transition-colors mb-2">
                  {resource.title}
                </p>
                <p className="text-sm/6 text-text-muted mt-auto">
                  {resource.author}
                </p>
                <ExternalLink className="size-4 text-text-muted mt-3 group-hover:text-ef-cyan transition-colors" />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Anchor navigation */}
      <nav className="sticky top-16 z-40 bg-bg-alt/70 backdrop-blur-xl border-b border-white/20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex justify-center gap-6 overflow-x-auto py-3 no-scrollbar">
            {resourceCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="font-heading text-sm/6 text-text-muted hover:text-ef-cyan whitespace-nowrap transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Category sections */}
      {resourceCategories.map((category, idx) => {
        const textColor = categoryColors[category.slug] ?? "text-ef-cyan";
        const bg = sectionBg[idx] ?? "bg-transparent";

        return (
          <section
            key={category.slug}
            id={category.slug}
            className={`${bg} py-12 lg:py-16 px-4 scroll-mt-28`}
          >
            <div className="mx-auto max-w-6xl">
              <ChapterHeading
                label={`0${idx + 1}`}
                title={category.label}
                color={textColor}
              />
              <div className="flex flex-col gap-3">
                {category.resources.map((resource) => (
                  <ResourceCard key={resource.url} {...resource} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
