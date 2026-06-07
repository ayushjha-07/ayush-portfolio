import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Kumar Jha | Software Engineer Portfolio",
  description: "Portfolio of Ayush Kumar Jha, a Software Engineer specializing in React.js, Next.js, TypeScript, and high-performance algorithms. Exploring scalable web solutions and virtual memory management systems.",
  keywords: [
    "Ayush Kumar Jha",
    "Software Engineer",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "C++ Developer",
    "Data Structures and Algorithms",
    "A2IT Mohali",
    "CGC Jhanjeri",
    "Web Development Intern"
  ],
  authors: [{ name: "Ayush Kumar Jha" }],
  creator: "Ayush Kumar Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-wpvl.onrender.com", // Keeping their current domain reference
    title: "Ayush Kumar Jha | Software Engineer Portfolio",
    description: "Building scalable web solutions and solving complex algorithmic problems.",
    siteName: "Ayush Kumar Jha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Jha | Software Engineer Portfolio",
    description: "Building scalable web solutions and solving complex algorithmic problems.",
    creator: "@ayushjha07",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-theme-bg text-theme-text antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
