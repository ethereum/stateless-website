import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { TeamMemberCard } from "@/components/team-member-card";
import { teamMembers } from "@/data/team";
import { GradientMesh } from "@/components/gradient-mesh";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Stateless Consensus team at the Ethereum Foundation.",
};

const collaborators = [
  {
    name: "Geth",
    url: "https://geth.ethereum.org/",
  },
  {
    name: "Nethermind",
    url: "https://www.nethermind.io/",
  },
  {
    name: "Reth",
    url: "https://reth.rs/",
  },
  {
    name: "Erigon",
    url: "https://erigon.tech/",
  },
  {
    name: "Besu",
    url: "https://besu.hyperledger.org/",
  },
];

const supportingTeams = [
  "Robust Incentives Group",
  "STEEL",
  "DevOps",
  "Cryptography",
];

export default function TeamPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-16 lg:py-24">
        <PageHeader
          editorial
          title="Team"
          description="The Stateless Consensus team at the Ethereum Foundation works on making Ethereum's state scalable, verifiable, and durable. We collaborate closely with client teams and the broader research community."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>

      {/* Collaborators section */}
      <section className="bg-pastel-purple/25 py-16 lg:py-24 px-4 relative overflow-hidden">
        <GradientMesh preset="purple-cyan" className="opacity-20" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-2xl/9 font-bold mb-8">Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base/7 font-bold mb-4">Client Teams</h3>
              <p className="text-sm/6 text-text-muted mb-4">
                Core developers from execution layer clients are actively
                implementing the protocol changes required for stateless
                Ethereum.
              </p>
              <div className="flex flex-wrap gap-3">
                {collaborators.map((team) => (
                  <a
                    key={team.name}
                    href={team.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-heading text-sm/6 text-ef-cyan hover:text-ef-cyan/80 border border-ef-cyan/30 rounded-full px-3 py-1.5 hover:bg-ef-cyan/10 transition-all"
                  >
                    {team.name}
                    <ExternalLink className="size-3" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base/7 font-bold mb-4">
                Supporting EF Teams
              </h3>
              <p className="text-sm/6 text-text-muted mb-4">
                Other Ethereum Foundation teams that support the stateless
                roadmap through research, infrastructure, and tooling.
              </p>
              <div className="flex flex-wrap gap-3">
                {supportingTeams.map((team) => (
                  <span
                    key={team}
                    className="font-heading text-sm/6 text-text-muted border border-border rounded-full px-3 py-1.5"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 lg:py-24 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl/9 font-bold mb-4">Join Us</h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8">
            Interested in working on stateless Ethereum? We&apos;re always
            looking for researchers and engineers. The{" "}
            <a
              href="https://github.com/eth-protocol-fellows/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ef-cyan hover:underline"
            >
              Ethereum Fellowship Program
            </a>{" "}
            has included stateless projects across multiple cohorts.
          </p>
          <a
            href="mailto:stateless@ethereum.org"
            className="inline-flex items-center gap-2 bg-navy text-white font-heading text-sm/6 px-7 py-3.5 rounded-xl hover:bg-navy/90 hover:shadow-[0_0_20px_rgba(54,54,76,0.4)] transition-all duration-300"
          >
            get in touch
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
