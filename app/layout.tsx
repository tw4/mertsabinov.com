import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Mert Sabinov - Technology entrepreneur, BuzzSpire (buzzspire.net) Creator",
  description:
    "Mert Sabinov: Creator of the BuzzSpire Ecosystem. Tech Entrepreneur. Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} backdrop-blur-md`}>{children}</body>
    </html>
  );
}
