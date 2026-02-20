import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stateless Consensus — Ethereum Foundation",
    template: "%s — Stateless Consensus",
  },
  description:
    "Making Ethereum blocks self-contained. The Stateless Consensus team works on scalability, decentralization, and innovative features for Ethereum.",
  authors: [{ name: "Ethereum Foundation" }],
  openGraph: {
    title: "Stateless Consensus — Ethereum Foundation",
    description:
      "Making Ethereum blocks self-contained. The Stateless Consensus team works on scalability, decentralization, and innovative features for Ethereum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
