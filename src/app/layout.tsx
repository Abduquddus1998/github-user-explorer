import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";

import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";

export const metadata: Metadata = {
  title: {
    default: "GitHub User Explorer", // Fallback title
    template: "%s | GitHub User Explorer", // For dynamic pages
  },
  description: "Explore GitHub users, profiles, and repos",
  openGraph: {
    images: "/default-og-image.png", // Add a static image in public/ later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
