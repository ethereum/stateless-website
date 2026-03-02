import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TeamMemberCard } from "@/components/team-member-card";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Stateless Consensus team at the Ethereum Foundation.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 lg:px-8 py-16 lg:py-24">
      <PageHeader
        title="Team"
        description="The people building Stateless Ethereum."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
