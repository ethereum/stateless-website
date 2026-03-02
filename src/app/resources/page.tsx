import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ResourceCard } from "@/components/resource-card";
import { resourceCategories } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, talks, papers, and EIPs about Stateless Ethereum.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 lg:px-8 py-16 lg:py-24">
      <PageHeader
        title="Resources"
        description="Articles, talks, papers, and EIPs related to Stateless Ethereum. For in-depth technical content, see the book."
      />

      <div className="flex flex-col gap-12">
        {resourceCategories.map((category) => (
          <section key={category.label}>
            <h2 className="text-lg/7 font-bold mb-4">{category.label}</h2>
            <div className="flex flex-col gap-3">
              {category.resources.map((resource) => (
                <ResourceCard key={resource.url} {...resource} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
