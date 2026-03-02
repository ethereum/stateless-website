import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
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
    title: "The Future of Ethereum's State",
    author: "Stateless Consensus",
    url: "https://blog.ethereum.org/2025/12/16/future-of-state",
    type: "article" as const,
    border: "border-t-ef-cyan",
  },
  {
    title: "Why stateless?",
    author: "Dankrad Feist",
    url: "https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html",
    type: "article" as const,
    border: "border-t-ef-green",
  },
  {
    title: "Possible futures of the Ethereum protocol, part 4: The Verge",
    author: "Vitalik Buterin",
    url: "https://vitalik.eth.limo/general/2024/10/23/futures4.html",
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
  "bg-pastel-purple/10",
  "bg-transparent",
  "bg-pastel-green/10",
  "bg-transparent",
];

export default function ResourcesPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 lg:px-8 py-16 lg:py-24">
        <PageHeader
          editorial
          title="Resources"
          description="Articles, talks, papers, and EIPs related to Stateless Ethereum. For in-depth technical content, see the book."
        />

        {/* Featured Reading */}
        <section className="mb-16">
          <h2 className="text-xl/8 font-bold mb-6">Featured Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredResources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col bg-bg-alt border border-border border-t-4 ${resource.border} rounded-sm p-5 hover:-translate-y-0.5 hover:shadow-xs transition-all group`}
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
      <nav className="sticky top-16 z-40 bg-bg-alt/80 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-3 no-scrollbar">
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
            <div className="mx-auto max-w-4xl">
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
