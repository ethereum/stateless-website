import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Ethereum's state works today, the problems it creates, and the research and protocol changes underway to fix them.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 lg:px-8 py-16 lg:py-24">
      <PageHeader
        title="About Ethereum's State"
        description="How Ethereum's state works today, the problems it creates, and the research and protocol changes underway to fix them."
      />

      <StateProblemSection />
      <WorkstreamsSection />
      <WhyItMattersSection />
      <CommunitySection />
      <BookCta />
    </div>
  );
}

function StateProblemSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl/8 font-bold mb-6">The State Problem</h2>
      <div className="flex flex-col gap-4 text-base/7 text-text-muted">
        <p>
          Today, Ethereum validators must download and store the entire state of
          the network — every account balance, contract storage slot, and code
          byte. This is expensive in terms of disk space, IO bandwidth, and
          computation.
        </p>
        <p>
          This state grows without bound. As it gets larger, IO becomes the
          bottleneck for throughput, hardware requirements rise, and fewer
          participants can afford to keep up — increasing centralization pressure
          and concentrating block building among a small number of operators.
        </p>
      </div>
    </section>
  );
}

function WorkstreamsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl/8 font-bold mb-6">What We&apos;re Working On</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UseCaseCard
          title="Statelessness"
          description="Blocks carry compact proofs so validators don't need full state. Requires migrating the state tree to a binary hash tree (EIP-7864) compatible with STARK compression."
          accentColor="bg-pastel-cyan"
        />
        <UseCaseCard
          title="State Management"
          description="Expiring old state, compressing unused data, repricing access based on recency, and optimizing storage layouts to keep the active state small and manageable."
          accentColor="bg-pastel-purple"
        />
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl/8 font-bold mb-6">Why This Matters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UseCaseCard
          title="Scalability"
          description="Efficient state proofs decouple block verification from the gas limit, removing the IO bottleneck and enabling higher throughput without centralization trade-offs."
          accentColor="bg-pastel-cyan"
        />
        <UseCaseCard
          title="Decentralization"
          description="Keeping state manageable means more participants can run nodes. This strengthens censorship resistance and prevents block building from concentrating among a few large operators."
          accentColor="bg-pastel-green"
        />
        <UseCaseCard
          title="Self-Sovereignty"
          description="Users and builders can verify state and participate in the network without relying on centralized infrastructure providers — reducing single points of failure and making the ecosystem more resilient."
          accentColor="bg-pastel-coral"
        />
      </div>
    </section>
  );
}

function UseCaseCard({
  title,
  description,
  accentColor,
}: {
  title: string;
  description: string;
  accentColor: string;
}) {
  return (
    <div className={`${accentColor} rounded-sm p-6`}>
      <h3 className="text-base/7 font-bold mb-2">{title}</h3>
      <p className="text-sm/6 text-text-muted">{description}</p>
    </div>
  );
}

function CommunitySection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl/8 font-bold mb-6">Community</h2>
      <div className="flex flex-col gap-4 text-base/7 text-text-muted">
        <p>
          A diverse set of teams are working on stateless Ethereum, including
          the Ethereum Foundation&apos;s{" "}
          <a
            href="https://x.com/StatelessEth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ef-cyan hover:underline"
          >
            Stateless Consensus
          </a>{" "}
          team, supported by the Robust Incentives
          Group, STEEL, DevOps, and Cryptography teams.
        </p>
        <p>
          Core developers from execution layer clients —{" "}
          <a
            href="https://www.nethermind.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ef-cyan hover:underline"
          >
            Nethermind
          </a>
          ,{" "}
          <a
            href="https://geth.ethereum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ef-cyan hover:underline"
          >
            Geth
          </a>
          ,{" "}
          <a
            href="https://ethereumjs.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ef-cyan hover:underline"
          >
            EthereumJS
          </a>
          , and{" "}
          <a
            href="https://besu.hyperledger.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ef-cyan hover:underline"
          >
            Besu
          </a>{" "}
          — are actively implementing the changes, alongside many independent
          contributors.
        </p>
        <p>
          The{" "}
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
        <p>
          Interested in contributing?{" "}
          <a
            href="mailto:stateless@ethereum.org"
            className="text-ef-cyan hover:underline"
          >
            stateless@ethereum.org
          </a>
        </p>
      </div>
    </section>
  );
}

function BookCta() {
  return (
    <section className="bg-navy text-white rounded-sm p-8 lg:p-12 text-center">
      <h2 className="text-xl/8 font-bold mb-4 text-white">
        Dive Deeper
      </h2>
      <p className="text-white/70 max-w-lg mx-auto mb-6">
        For technical details on tree structures, gas costs, state conversion,
        and development guides, read the Stateless Ethereum Book.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://stateless.fyi/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-navy font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-white/90 transition-colors"
        >
          read the book
          <ExternalLink className="size-4" />
        </a>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 border border-white/30 text-white font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
        >
          browse resources
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
