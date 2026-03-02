export type ResourceType = "article" | "video" | "paper" | "eip" | "tool";

export interface Resource {
  title: string;
  author?: string;
  url: string;
  type: ResourceType;
}

export interface ResourceCategory {
  label: string;
  slug: string;
  resources: Resource[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    label: "Statelessness",
    slug: "statelessness",
    resources: [
      {
        title: "Why stateless?",
        author: "Dankrad Feist",
        url: "https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html",
        type: "article",
      },
      {
        title:
          "Possible futures of the Ethereum protocol, part 4: The Verge",
        author: "Vitalik Buterin",
        url: "https://vitalik.eth.limo/general/2024/10/23/futures4.html",
        type: "article",
      },
      {
        title: "Verkle Trees",
        author: "Vitalik Buterin",
        url: "https://vitalik.eth.limo/general/2021/06/18/verkle.html",
        type: "article",
      },
      {
        title: "The Future of Ethereum's State",
        author: "Stateless Consensus",
        url: "https://blog.ethereum.org/2025/12/16/future-of-state",
        type: "article",
      },
      {
        title: "Overview of tree structure",
        author: "Guillaume Ballet and Dankrad Feist",
        url: "https://blog.ethereum.org/2021/12/02/verkle-tree-structure",
        type: "article",
      },
      {
        title: "Anatomy of a Verkle proof",
        author: "Ignacio Hagopian",
        url: "https://ihagopian.com/posts/anatomy-of-a-verkle-proof",
        type: "article",
      },
      {
        title: "Inner Product Argument",
        author: "Dankrad Feist",
        url: "https://dankradfeist.de/ethereum/2021/07/27/inner-product-arguments.html",
        type: "article",
      },
      {
        title: "PCS Multiproof",
        author: "Dankrad Feist",
        url: "https://dankradfeist.de/ethereum/2021/06/18/pcs-multiproofs.html",
        type: "article",
      },
    ],
  },
  {
    label: "State Management",
    slug: "state-management",
    resources: [
      {
        title: "State Expiry: In-protocol vs. Out-of-protocol",
        url: "https://ethresear.ch/t/state-expiry-in-protocol-vs-out-of-protocol/23258",
        type: "article",
      },
      {
        title: "Compression-based state expiry",
        url: "https://ethresear.ch/t/compression-based-state-expiry/23443/1",
        type: "article",
      },
      {
        title: "Not all state is equal",
        url: "https://ethereum-magicians.org/t/not-all-state-is-equal/25508",
        type: "article",
      },
      {
        title: "The Future of State, Part 1: OOPSIE",
        url: "https://ethresear.ch/t/the-future-of-state-part-1-oopsie-a-new-type-of-snap-sync-based-wallet-lightclient/23395",
        type: "article",
      },
      {
        title: "The Future of State, Part 2",
        url: "https://ethresear.ch/t/the-future-of-state-part-2-beyond-the-myth-of-partial-statefulness-the-reality-of-zkevms/23396",
        type: "article",
      },
      {
        title: "VOPS: Validity-Only Partial Statelessness",
        url: "https://ethresear.ch/t/a-pragmatic-path-towards-validity-only-partial-statelessness-vops/22236",
        type: "article",
      },
      {
        title: "Hyper-Scaling State by Creating New Forms of State",
        url: "https://ethresear.ch/t/hyper-scaling-state-by-creating-new-forms-of-state/24052",
        type: "article",
      },
    ],
  },
  {
    label: "Talks & Presentations",
    slug: "talks",
    resources: [
      {
        title: "Anatomy of a stateless client",
        author: "Guillaume Ballet, April 2024",
        url: "https://www.youtube.com/watch?v=yFJxVSbQNcI",
        type: "video",
      },
      {
        title: "Recipes for a Stateless Ethereum",
        author: "Guillaume Ballet, March 2024",
        url: "https://www.youtube.com/watch?v=gfzkidjJf8g",
        type: "video",
      },
      {
        title: "Verkle Trees 101",
        author: "Guillaume Ballet, Ignacio Hagopian, Josh Rudolf, April 2024",
        url: "https://www.youtube.com/watch?v=H_M9bjwtMhU",
        type: "video",
      },
      {
        title: "Verkle sync: bring a node up in minutes",
        author: "Guillaume Ballet, Tanishq Jasoria, September 2023",
        url: "https://www.youtube.com/watch?v=AJDJvMS8LIE",
        type: "video",
      },
      {
        title: "The Verge: Converting the Ethereum State to Verkle Trees",
        author: "Guillaume Ballet, July 2023",
        url: "https://www.youtube.com/watch?v=F1Ne19Vew6w",
        type: "video",
      },
      {
        title: "Ava Labs Systems Seminar: Verkle trees for statelessness",
        author: "Guillaume Ballet, October 2023",
        url: "https://youtu.be/uGNmG3ZpWlU",
        type: "video",
      },
      {
        title: "How Verkle Trees Make Ethereum Lean and Mean",
        author: "Guillaume Ballet, DevCon Oct 2022",
        url: "https://www.youtube.com/watch?v=Q7rStTKwuYs",
        type: "video",
      },
      {
        title: "Verkle Tries for Ethereum State",
        author: "Dankrad Feist, PEEPanEIP Sept 2021",
        url: "https://www.youtube.com/watch?v=RGJOQHzg3UQ",
        type: "video",
      },
    ],
  },
  {
    label: "EIPs",
    slug: "eips",
    resources: [
      {
        title: "EIP-2935: Save historical block hashes in the state",
        url: "https://eips.ethereum.org/EIPS/eip-2935",
        type: "eip",
      },
      {
        title: "EIP-6780: Deactivate SELFDESTRUCT",
        url: "https://eips.ethereum.org/EIPS/eip-6780",
        type: "eip",
      },
      {
        title: "EIP-4762: Gas costs changes for Verkle Trees",
        url: "https://eips.ethereum.org/EIPS/eip-4762",
        type: "eip",
      },
      {
        title: "EIP-7709: Bypass the EVM to read block hashes",
        url: "https://eips.ethereum.org/EIPS/eip-7709",
        type: "eip",
      },
      {
        title: "EIP-7612: State tree conversion (overlay)",
        url: "https://eips.ethereum.org/EIPS/eip-7612",
        type: "eip",
      },
      {
        title: "EIP-7748: State tree conversion (system contract)",
        url: "https://eips.ethereum.org/EIPS/eip-7748",
        type: "eip",
      },
      {
        title: "EIP-7864: Binary Trees scheme",
        url: "https://eips.ethereum.org/EIPS/eip-7864",
        type: "eip",
      },
      {
        title: "EIP-8037: State Creation Gas Cost Increase",
        url: "https://eips.ethereum.org/EIPS/eip-8037",
        type: "eip",
      },
      {
        title: "EIP-8038: State-access gas cost update",
        url: "https://eips.ethereum.org/EIPS/eip-8038",
        type: "eip",
      },
      {
        title: "EIP-8125: Temporary Contract Storage",
        url: "https://eips.ethereum.org/EIPS/eip-8125",
        type: "eip",
      },
    ],
  },
  {
    label: "Tools & Metrics",
    slug: "tools",
    resources: [
      {
        title: "Verkle Metrics",
        url: "https://verkle.info/verkle-measurements",
        type: "tool",
      },
      {
        title: "State Tree Preimages Generation",
        url: "https://ethresear.ch/t/state-tree-preimages-file-generation/21651",
        type: "article",
      },
    ],
  },
];
