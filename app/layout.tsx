import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Quraish Rahmatulloh — QA/QC Engineer & Digital Builder",
  description:
    "Portfolio of Quraish Rahmatulloh — QA/QC Engineer with 3+ years in manufacturing and automotive, IATF 16949 & ISO 9001 specialist, and digital builder based in Indonesia.",
  keywords: ["QA Engineer", "Quality Assurance", "IATF 16949", "ISO 9001", "Indonesia", "Portfolio"],
  authors: [{ name: "Quraish Rahmatulloh" }],
  openGraph: {
    title: "Quraish Rahmatulloh — QA/QC Engineer & Digital Builder",
    description: "QA/QC Engineer with 3+ years in manufacturing. Also builds digital products and writes personal essays.",
    url: "https://quraish.vercel.app",
    siteName: "Quraish Rahmatulloh",
    images: [{ url: "/Uloh.jpeg", width: 720, height: 960, alt: "Quraish Rahmatulloh" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quraish Rahmatulloh — QA/QC Engineer",
    description: "QA/QC Engineer with 3+ years in manufacturing. Also builds digital products.",
    images: ["/Uloh.jpeg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
