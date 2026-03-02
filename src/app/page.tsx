import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { basePath } from "@/lib/base-path";
import { SectionBreak } from "@/components/section-break";
import { ChapterHeading } from "@/components/chapter-heading";
import { PullQuote } from "@/components/pull-quote";
import { ScrollObserver } from "@/components/scroll-observer";
import { StateGrowthChart } from "@/components/diagram/state-growth-chart";
import { StatefulVsStateless } from "@/components/diagram/stateful-vs-stateless";
import { HeroNetwork } from "@/components/hero-network";

const featuredResources = [
  {
    title: "The Future of Ethereum's State",
    author: "Stateless Consensus",
    url: "https://blog.ethereum.org/2025/12/16/future-of-state",
  },
  {
    title: "Why stateless?",
    author: "Dankrad Feist",
    url: "https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html",
  },
  {
    title: "Possible futures of the Ethereum protocol, part 4: The Verge",
    author: "Vitalik Buterin",
    url: "https://vitalik.eth.limo/general/2024/10/23/futures4.html",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <WhyItMattersSection />
      <ResourcesPreview />
      <CommunityCta />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-navy py-20 lg:py-32 px-4 relative overflow-hidden">
      <HeroNetwork />
      <div className="mx-auto max-w-6xl text-center relative z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/logo/white.svg`}
          alt="Stateless Consensus"
          width={320}
          height={46}
          className="mx-auto mb-8"
        />
        <p className="font-heading text-2xl/9 lg:text-3xl/10 text-white mb-10">
          Making Ethereum&apos;s state scalable, verifiable and durable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-ef-cyan text-navy font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-ef-cyan/90 transition-colors"
          >
            view projects
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://stateless.fyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
          >
            read the book
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <SectionBreak palette="cyan">
      <ChapterHeading
        label="the problem"
        title="Ethereum's Growing State"
        color="text-ef-cyan"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-4 text-base/7 lg:text-lg/8 text-text-muted">
          <p>
            Today, Ethereum validators must download and store the entire state
            of the network — every account balance, contract storage slot, and
            code byte. This is expensive in terms of disk space, IO bandwidth,
            and computation.
          </p>
          <p>
            This state grows without bound. As it gets larger, IO becomes the
            bottleneck for throughput, hardware requirements rise, and fewer
            participants can afford to keep up — increasing centralization
            pressure and concentrating block building among a small number of
            operators.
          </p>
        </div>
        <ScrollObserver className="flex justify-center">
          <StateGrowthChart />
        </ScrollObserver>
      </div>
      <div className="mt-10">
        <PullQuote
          text="Unbounded state growth is a large threat to Ethereum's long-term decentralization."
          color="cyan"
        />
      </div>
    </SectionBreak>
  );
}

function ApproachSection() {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <ChapterHeading
          label="the approach"
          title="Toward Stateless Ethereum"
          color="text-ef-purple"
        />
        <ScrollObserver className="flex justify-center mb-12">
          <StatefulVsStateless />
        </ScrollObserver>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-l-ef-cyan bg-pastel-cyan/20 rounded-r-sm p-6">
            <h3 className="text-lg/7 font-bold mb-3">Statelessness</h3>
            <p className="text-base/7 text-text-muted">
              Blocks carry compact cryptographic proofs so validators can verify
              state without storing it locally. This removes the requirement for
              every node to hold the full state, dramatically lowering hardware
              barriers to participation.
            </p>
          </div>
          <div className="border-l-4 border-l-ef-purple bg-pastel-purple/20 rounded-r-sm p-6">
            <h3 className="text-lg/7 font-bold mb-3">State Management</h3>
            <p className="text-base/7 text-text-muted">
              Expiring old state, compressing unused data, repricing access based
              on recency, and optimizing storage layouts. The goal is to keep the
              active state small and manageable even as Ethereum&apos;s usage
              grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  return (
    <SectionBreak palette="green">
      <ChapterHeading
        label="why it matters"
        title="The Impact"
        color="text-ef-green"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Scalability",
            body: "Efficient state proofs decouple block verification from the gas limit, removing the IO bottleneck and enabling higher throughput without centralization trade-offs.",
            border: "border-t-ef-cyan",
          },
          {
            title: "Decentralization",
            body: "Keeping state manageable means more participants can run nodes. This strengthens censorship resistance and prevents block building from concentrating among a few large operators.",
            border: "border-t-ef-green",
          },
          {
            title: "Self-Sovereignty",
            body: "Users and builders can verify state and participate in the network without relying on centralized infrastructure providers — reducing single points of failure and making the ecosystem more resilient.",
            border: "border-t-ef-coral",
          },
        ].map((card) => (
          <div
            key={card.title}
            className={`bg-white border-t-4 ${card.border} rounded-sm p-6`}
          >
            <h3 className="text-xl/8 font-bold mb-3">{card.title}</h3>
            <p className="text-base/7 text-text-muted">{card.body}</p>
          </div>
        ))}
      </div>
    </SectionBreak>
  );
}

function ResourcesPreview() {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl/9 font-bold">Featured Reading</h2>
          <Link
            href="/resources"
            className="font-heading text-sm/6 text-ef-cyan hover:text-ef-cyan/80 inline-flex items-center gap-1 transition-colors"
          >
            view all
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {featuredResources.map((resource) => (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-bg-alt border border-border rounded-sm p-5 hover:border-ef-cyan/40 hover:-translate-y-0.5 transition-all group"
            >
              <div>
                <p className="font-medium text-base/7 group-hover:text-ef-cyan transition-colors">
                  {resource.title}
                </p>
                <p className="text-sm/6 text-text-muted">
                  {resource.author}
                </p>
              </div>
              <ExternalLink className="size-4 text-text-muted shrink-0 group-hover:text-ef-cyan transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCta() {
  return (
    <SectionBreak palette="navy">
      <div className="text-center">
        <h2 className="text-3xl/10 font-bold mb-4 text-white">
          Get Involved
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Built by a diverse community of researchers, developers, and
          contributors working on Ethereum&apos;s state. Interested in
          contributing?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:stateless@ethereum.org"
            className="inline-flex items-center gap-2 bg-ef-cyan text-navy font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-ef-cyan/90 transition-colors"
          >
            reach out
            <ArrowRight className="size-4" />
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
          >
            view active projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </SectionBreak>
  );
}
