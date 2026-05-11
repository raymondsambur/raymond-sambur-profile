import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Raymond Sambur | Senior SDET",
  description:
    "Senior Software Development Engineer in Test specializing in high-scale fintech environments, test automation frameworks, and CI/CD optimization.",
  keywords: [
    "SDET",
    "Test Automation",
    "Playwright",
    "CI/CD",
    "Quality Engineering",
    "Raymond Sambur",
  ],
  openGraph: {
    title: "Raymond Sambur | Senior SDET",
    description:
      "Senior SDET specializing in high-scale fintech environments and test automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-surface text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
