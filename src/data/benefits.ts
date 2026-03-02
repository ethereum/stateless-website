export interface Benefit {
  title: string;
  description: string;
  items: string[];
  accentColor: string;
}

export const benefits: Benefit[] = [
  {
    title: "Scalability",
    description:
      "Removing the need for validators to store state enables higher throughput.",
    items: [
      "Higher TPS and gas limit by eliminating the IO bottleneck",
      "No synchronization required — blocks are self-contained",
      "Reduced disk footprint for validators and nodes",
    ],
    accentColor: "ef-cyan",
  },
  {
    title: "Decentralization",
    description:
      "Lower hardware requirements let more participants run nodes.",
    items: [
      "Lower entry barriers for new validators",
      "Users can create private staking pools",
      "Reduced reliance on centralized data providers",
    ],
    accentColor: "ef-green",
  },
  {
    title: "Innovative Features",
    description:
      "Statelessness unlocks protocol improvements previously out of reach.",
    items: [
      "State expiry to limit active state size",
      "Rainbow staking for flexible validator roles",
      "Secure light clients without centralized trust",
    ],
    accentColor: "ef-purple",
  },
  {
    title: "Ease of Use",
    description:
      "Improves cross-chain communication and interoperability.",
    items: [
      "Seamless L1-L2 communication",
      "Faster node onboarding",
      "Simplified client architecture",
    ],
    accentColor: "ef-coral",
  },
];
