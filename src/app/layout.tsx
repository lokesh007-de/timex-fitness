import type { Metadata } from "next";
import { Anton, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const display = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const body = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timex Fitness — Train Hard. Live Strong.",
  description:
    "Timex Fitness is a results-driven strength and conditioning gym. World-class coaches, 60+ weekly classes, recovery studio and a community that shows up. Start your free trial today.",
  keywords: [
    "Timex Fitness",
    "gym",
    "strength training",
    "personal training",
    "HIIT",
    "fitness studio",
  ],
  openGraph: {
    title: "Timex Fitness — Train Hard. Live Strong.",
    description:
      "Strength, conditioning and recovery under one roof. Book your free trial at Timex Fitness.",
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
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
      >
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
        {/* WARNING FOR AGENT: DO NOT REMOVE THIS SCRIPT */}
        <Script src="https://cdn.jsdelivr.net/gh/IdeavoAI/ideavo-scripts@latest/scripts/ideavo.min.js" />
      </body>
    </html>
  );
}
