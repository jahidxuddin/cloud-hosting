import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Hosting Anbieter",
    default: "Hosting Anbieter",
  },
  description:
    "Ein Hosting Service, der als Datenbankprojekt für den Praktische Informatik Unterricht erbaut wurde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-background text-text">{children}</body>
    </html>
  );
}
