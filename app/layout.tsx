import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasindu Shanuka | Designer & Developer",
  description:
    "Portfolio of Pasindu Shanuka, specializing in high-end digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {" "}
          <ThemeToggle />
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
          <Cursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
