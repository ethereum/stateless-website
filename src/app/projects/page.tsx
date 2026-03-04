import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ChapterHeading } from "@/components/chapter-heading";
import { ProjectCard } from "@/components/project-card";
import { ScrollObserver } from "@/components/scroll-observer";
import { TreeComparison } from "@/components/diagram/tree-comparison";
import { GradientMesh } from "@/components/gradient-mesh";

import {
  projects,
  categoryLabels,
  categoryColors,
  categoryDescriptions,
  type ProjectCategory,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Active projects being worked on by the Stateless Consensus team.",
};

const categoryOrder: ProjectCategory[] = [
  "protocol-changes",
  "state-management",
  "performance-tooling",
  "storage-optimization",
];

const categoryColorMap: Record<string, string> = {
  "ef-cyan": "text-ef-cyan",
  "ef-purple": "text-ef-purple",
  "ef-green": "text-ef-green",
  "ef-coral": "text-ef-coral",
};

const categoryBorderMap: Record<string, string> = {
  "ef-cyan": "border-l-ef-cyan",
  "ef-purple": "border-l-ef-purple",
  "ef-green": "border-l-ef-green",
  "ef-coral": "border-l-ef-coral",
};

const sectionBg = ["bg-transparent", "bg-pastel-purple/20", "bg-transparent", "bg-pastel-purple/20"];

export default function ProjectsPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 lg:px-8 pt-16 lg:pt-24">
        <PageHero
          image="/projects.jpeg"
          title="Active Projects"
          description="An overview of the projects currently being worked on by the Stateless Consensus team and the broader community."
        />
      </div>

      {categoryOrder.map((category, idx) => {
        const categoryProjects = projects.filter(
          (p) => p.category === category
        );
        const color = categoryColors[category];
        const textColorClass = categoryColorMap[color] ?? "text-ef-cyan";
        const borderClass = categoryBorderMap[color] ?? "border-l-ef-cyan";
        const label = `0${idx + 1}`;
        const bg = sectionBg[idx] ?? "bg-transparent";
        return (
          <section
            key={category}
            className={`${bg} py-12 lg:py-16 px-4 relative overflow-hidden`}
          >
            {idx === 1 && <GradientMesh preset="purple-cyan" className="opacity-30" />}
            {idx === 3 && <GradientMesh preset="purple-cyan" className="opacity-30" />}
            <div className="relative mx-auto max-w-6xl">
              <ChapterHeading
                label={label}
                title={categoryLabels[category]}
                color={textColorClass}
              />
              <p className="text-base/7 text-text-muted max-w-3xl mb-8">
                {categoryDescriptions[category]}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    borderColorClass={borderClass}
                  />
                ))}
              </div>
              {category === "protocol-changes" && (
                <ScrollObserver className="flex justify-center mt-12">
                  <TreeComparison />
                </ScrollObserver>
              )}

            </div>
          </section>
        );
      })}
    </div>
  );
}
