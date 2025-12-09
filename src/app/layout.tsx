import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MediaProvider } from "@/components/MediaContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick Roll on Sol",
  description: "Never gonna give you up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MediaProvider>{children}</MediaProvider>
      </body>
    </html>
  );
}
