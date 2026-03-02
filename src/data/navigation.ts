export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Team", href: "/team" },
  {
    label: "Book",
    href: "https://stateless.fyi/",
    external: true,
  },
];
