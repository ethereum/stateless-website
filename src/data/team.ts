export interface TeamMember {
  name: string;
  role?: string;
  bio?: string;
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
    image: "/team/gballet.jpg",
    links: {
      twitter: "https://x.com/gballet",
      github: "https://github.com/gballet",
    },
  },
  {
    name: "Carlos Pérez",
    image: "/team/cperezz.jpg",
    links: {
      twitter: "https://x.com/CPerezz19",
      github: "https://github.com/CPerezz",
    },
  },
  {
    name: "Wei Han Ng",
    image: "/team/weiihann.jpeg",
    links: {
      twitter: "https://x.com/ngweihan_eth",
      github: "https://github.com/weiihann",
    },
  },
  {
    name: "Matan Prasma",
  },
];
