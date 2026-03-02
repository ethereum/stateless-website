export interface Project {
  title: string;
  summary: string;
  url?: string;
  eipUrl?: string;
  category: ProjectCategory;
}

export type ProjectCategory =
  | "protocol-changes"
  | "state-management"
  | "performance-tooling"
  | "storage-optimization";

export const categoryLabels: Record<ProjectCategory, string> = {
  "protocol-changes": "Protocol Changes",
  "state-management": "State Management",
  "performance-tooling": "Performance & Tooling",
  "storage-optimization": "Storage Optimization",
};

export const categoryColors: Record<ProjectCategory, string> = {
  "protocol-changes": "ef-cyan",
  "state-management": "ef-purple",
  "performance-tooling": "ef-green",
  "storage-optimization": "ef-coral",
};

export const categoryDescriptions: Record<ProjectCategory, string> = {
  "protocol-changes":
    "Core EIPs that change how Ethereum handles state at the protocol level — from tree migration to gas repricing.",
  "state-management":
    "Research and proposals for expiring, compressing, and repricing state to keep the active dataset manageable.",
  "performance-tooling":
    "Benchmarking infrastructure and metrics that measure the real-world impact of state growth on client performance.",
  "storage-optimization":
    "Techniques for more efficient on-chain storage layouts that reduce witness sizes and improve locality.",
};

export const projects: Project[] = [
  {
    title: "Binary Tree Implementation",
    summary:
      "Migration of Ethereum's state tree from the Merkle Patricia Trie to a binary hash tree. The binary tree produces significantly smaller state proofs, compatible with STARK compression. Implementation is underway in Geth and Besu.",
    eipUrl: "https://eips.ethereum.org/EIPS/eip-7864",
    category: "protocol-changes",
  },
  {
    title: "EIP-8037: State Creation Gas Cost Increase",
    summary:
      "Harmonizes and increases the cost of state creation operations to mitigate state growth under higher block gas limits. Introduces a dynamic cost-per-byte variable that scales with the gas limit.",
    eipUrl: "https://eips.ethereum.org/EIPS/eip-8037",
    category: "protocol-changes",
  },
  {
    title: "EIP-8038: State-Access Gas Cost Update",
    summary:
      "Increases the gas cost of state-access operations to reflect Ethereum's larger state and the resulting slowdown. Also fixes underpriced EXTCODESIZE and EXTCODECOPY operations.",
    eipUrl: "https://eips.ethereum.org/EIPS/eip-8038",
    category: "protocol-changes",
  },
  {
    title: "EIP-7907: Code Size Limits",
    summary:
      "Study of the impact of increasing the maximum contract code size, coupled with gas adjustments. Benchmarks measure the effect on client performance to guide the ACD decision.",
    eipUrl: "https://eips.ethereum.org/EIPS/eip-7907",
    category: "protocol-changes",
  },
  {
    title: "Compression-based State Expiry",
    summary:
      "An approach to state expiry through compression: old data is moved out of the active database into flat files, replaced by pointers. Corresponding trie nodes are removed to improve I/O.",
    url: "https://ethresear.ch/t/compression-based-state-expiry/23443",
    category: "state-management",
  },
  {
    title: "State Expiry Research",
    summary:
      "Exploration of complementary expiry models: leaf-based (EIP-7736 style), epoch-based with resurrection bitmaps, and a model keeping only one year of active state in memory.",
    category: "state-management",
  },
  {
    title: "Temporary Contract Storage",
    summary:
      "Semi-persistent storage managed by a system contract that clears automatically on a fixed cadence. Aims to move ephemeral data out of permanent storage to slow state growth.",
    eipUrl: "https://eips.ethereum.org/EIPS/eip-8125",
    category: "state-management",
  },
  {
    title: "Activeness-Based State Access Repricing",
    summary:
      "Temporal locality pricing for state access: staler state costs more gas, frequently accessed state costs less. Creates economic incentives for state hygiene without mandating deletion.",
    category: "state-management",
  },
  {
    title: "BloatNet",
    summary:
      "A dedicated test network for stress-testing Ethereum's performance under state growth. Identified critical thresholds for memory consumption and validator performance degradation.",
    url: "https://bloatnet.info/",
    category: "performance-tooling",
  },
  {
    title: "Cross-Client Execution Metrics",
    summary:
      "A specification for standardized execution metrics across Ethereum clients. Enables objective performance comparison and bottleneck identification for L1 scaling.",
    category: "performance-tooling",
  },
  {
    title: "User-Associated Storage (UAS)",
    summary:
      "Associates contract storage directly with user accounts, namespaced by contract address. Estimated savings of ~2000 gas per transaction. Compatible with state expiry.",
    category: "storage-optimization",
  },
  {
    title: "ERC-8147: Locality-Preserving Storage Layout",
    summary:
      "A compiler-level change so that mapping storage keys for the same address land on the same leaf page in the binary trie. Improves spatial locality and reduces witness sizes.",
    category: "storage-optimization",
  },
  {
    title: "Partial Statefulness (Selective Snap Sync)",
    summary:
      "The ability for a node to sync only a segment of the state rather than the full state. Formalized through the OOPSIE concept.",
    category: "storage-optimization",
  },
];
