import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "What is Stateless Ethereum, why it matters, and how the community is building it.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 lg:px-8 py-16 lg:py-24">
      <PageHeader
        title="About Stateless Ethereum"
        description="An update to the Ethereum protocol that makes blocks self-contained units of execution."
      />

      <WhatIsSection />
      <UseCasesSection />
      <CommunitySection />
      <BookCta />
    </div>
  );
}

function WhatIsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl/8 font-bold mb-6">What Is Stateless Ethereum?</h2>
      <div className="flex flex-col gap-4 text-base/7 text-text-muted">
        <p>
          Today, Ethereum validators must download and store the entire state of
          the network — every account balance, contract storage slot, and code
          byte. This is expensive in terms of disk space, IO bandwidth, and
          computation.
        </p>
        <p>
          Stateless Ethereum changes this by packaging all the data needed to
          execute a block directly inside the block itself. Validators no longer
          need to hold the full state; they receive a compact proof alongside
          each block that lets them verify execution independently.
        </p>
        <p>
          This requires migrating Ethereum&apos;s state tree from the current
          Merkle Patricia Trie to a structure that produces smaller proofs — a
          binary hash tree compatible with STARK compression. The transition uses
          an overlay mechanism so the network can convert gradually without a
          hard stop.
        </p>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl/8 font-bold mb-6">What Does This Unlock?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UseCaseCard
          title="Increasing the Gas Limit"
          description="By proving the state efficiently in SNARKs, block verification time decouples from the gas limit. This removes the IO bottleneck that currently constrains throughput."
          accentColor="bg-pastel-cyan"
        />
        <UseCaseCard
          title="Improved Decentralization"
          description="Without requiring disk space to run a client, low-powered devices can join the network and contribute to its security — fulfilling The Verge's goal of simplifying block validation."
          accentColor="bg-pastel-green"
        />
        <UseCaseCard
          title="State Expiry"
          description="Statelessness makes it practical to expire old state, limiting the active state size and reducing the burden on validators over time."
          accentColor="bg-pastel-purple"
        />
        <UseCaseCard
          title="Trustless Light Clients"
          description="Light clients can follow the chain directly without relying on centralized data providers, since all proof data travels with the block."
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
          team, supported by the Applied Research Group, Robust Incentives
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
