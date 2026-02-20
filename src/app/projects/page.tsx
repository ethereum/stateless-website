import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import {
  projects,
  categoryLabels,
  categoryColors,
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

const categoryBorderMap: Record<string, string> = {
  "ef-cyan": "border-l-ef-cyan",
  "ef-purple": "border-l-ef-purple",
  "ef-green": "border-l-ef-green",
  "ef-coral": "border-l-ef-coral",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 lg:px-8 py-16 lg:py-24">
      <PageHeader
        title="active projects"
        description="An overview of the projects currently being worked on by the Stateless Consensus team and the broader community."
      />

      <div className="flex flex-col gap-16">
        {categoryOrder.map((category) => {
          const categoryProjects = projects.filter(
            (p) => p.category === category
          );
          const color = categoryColors[category];
          const borderClass =
            categoryBorderMap[color] ?? "border-l-ef-cyan";

          return (
            <section key={category}>
              <h2
                className={`text-lg/7 font-bold mb-6 pl-4 border-l-4 ${borderClass}`}
              >
                {categoryLabels[category]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
