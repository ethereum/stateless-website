export interface TeamMember {
  name: string;
  role?: string;
  image?: string;
  links?: {
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Guillaume Ballet",
    links: {
      twitter: "https://x.com/gballet",
      github: "https://github.com/gballet",
    },
  },
  {
    name: "Carlos Pérez",
    links: {
      twitter: "https://x.com/CPerezz19",
      github: "https://github.com/CPerezz",
    },
  },
  {
    name: "Wei Han Ng",
    links: {
      twitter: "https://x.com/ngweihan_eth",
      github: "https://github.com/weiihann",
    },
  },
  {
    name: "Matan Prasma",
  },
];
