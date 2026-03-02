import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { basePath } from "@/lib/base-path";

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
      <WhyItMattersSection />
      <ResourcesPreview />
      <CommunitySection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20 lg:py-32 px-4">
      <div className="mx-auto max-w-6xl text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/logo/color-light.svg`}
          alt="Stateless Consensus"
          width={320}
          height={46}
          className="mx-auto mb-8"
        />
        <p className="text-xl/8 text-text-muted max-w-xl mx-auto mb-10">
          Making Ethereum&apos;s state scalable, verifiable and durable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-navy text-white font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors"
          >
            learn more
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://stateless.fyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-bg-alt transition-colors"
          >
            read the book
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  return (
    <section className="py-16 lg:py-24 px-4 bg-bg-alt">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl/9 font-bold text-center mb-12">
          Why This Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pastel-cyan rounded-sm p-6">
            <h3 className="text-base/7 font-bold mb-2">Scalability</h3>
            <p className="text-sm/6 text-text-muted">
              Efficient state proofs decouple block verification from the gas
              limit, removing the IO bottleneck and enabling higher throughput
              without centralization trade-offs.
            </p>
          </div>
          <div className="bg-pastel-green rounded-sm p-6">
            <h3 className="text-base/7 font-bold mb-2">Decentralization</h3>
            <p className="text-sm/6 text-text-muted">
              Keeping state manageable means more participants can run nodes.
              This strengthens censorship resistance and prevents block building
              from concentrating among a few large operators.
            </p>
          </div>
          <div className="bg-pastel-coral rounded-sm p-6">
            <h3 className="text-base/7 font-bold mb-2">Self-Sovereignty</h3>
            <p className="text-sm/6 text-text-muted">
              Users and builders can verify state and participate in the network
              without relying on centralized infrastructure providers — reducing
              single points of failure and making the ecosystem more resilient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesPreview() {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl/9 font-bold">Resources</h2>
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
              className="flex items-center justify-between gap-4 bg-bg-alt border border-border rounded-sm p-4 hover:border-ef-cyan/40 transition-colors group"
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

function CommunitySection() {
  return (
    <section className="py-16 lg:py-24 px-4 bg-pastel-blue/30">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl/9 font-bold mb-4">
          Get Involved
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-8">
          Built by a diverse community of researchers, developers, and
          contributors working on Ethereum&apos;s state. Interested in
          contributing?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:stateless@ethereum.org"
            className="inline-flex items-center gap-2 bg-navy text-white font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors"
          >
            reach out
            <ArrowRight className="size-4" />
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-border text-text font-heading text-sm/6 px-6 py-3 rounded-sm hover:bg-bg-alt transition-colors"
          >
            view active projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
