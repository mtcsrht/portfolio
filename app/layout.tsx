import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const ubuntu = Ubuntu({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
});

export const metadata: Metadata = {
  title: "Home - Mate Cserhati",
  description:
    "Máté Cserháti – software engineer and AI / machine learning student in Budapest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ubuntuMono.variable} font-sans antialiased flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-2xl flex-1 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
