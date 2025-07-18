import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chandan Sharma - Portfolio",
  description: "Full-stack developer and researcher passionate about creating innovative solutions",
  keywords: ["portfolio", "developer", "researcher", "full-stack", "web development"],
  authors: [{ name: "Chandan Sharma" }],
  creator: "Chandan Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chandansharma.com",
    title: "Chandan Sharma - Portfolio",
    description: "Full-stack developer and researcher passionate about creating innovative solutions",
    siteName: "Chandan Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan Sharma - Portfolio",
    description: "Full-stack developer and researcher passionate about creating innovative solutions",
    creator: "@chandan25sharma",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen-100% bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
