import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProviders";
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
  metadataBase: new URL("https://ayush.dev"),
  title: "Ayush Kumar Jha | Software Engineer Portfolio",
  description: "Aspiring Software Engineer skilled in Java, React.js, Next.js, JavaScript, Python, and Data Structures & Algorithms. Explore projects, internships, certifications, and achievements.",
  keywords: [
    "Software Engineer",
    "Java Developer",
    "React Developer",
    "Next.js",
    "Frontend Developer",
    "Portfolio",
    "Computer Science Student",
    "Web Developer",
    "JavaScript",
    "Python"
  ],
  authors: [{ name: "Ayush Kumar Jha" }],
  creator: "Ayush Kumar Jha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayush.dev",
    title: "Ayush Kumar Jha | Software Engineer Portfolio",
    description: "Portfolio showcasing projects, skills, internships, certifications, and achievements.",
    siteName: "Ayush Kumar Jha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Jha | Software Engineer Portfolio",
    description: "Portfolio showcasing projects, skills, internships, certifications, and achievements.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Kumar Jha",
    "url": "https://ayush.dev",
    "jobTitle": "Software Engineer",
    "sameAs": [
      "https://github.com/ayushjha-07",
      "https://linkedin.com/in/ayushjha07"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-theme-bg text-theme-text antialiased transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <ClientProviders>
            {children}
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
