import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hosting Service",
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
      <body>{children}</body>
    </html>
  );
}
