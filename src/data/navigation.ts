export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "resources", href: "/resources" },
  { label: "team", href: "/team" },
  {
    label: "book",
    href: "https://stateless.fyi/",
    external: true,
  },
];
