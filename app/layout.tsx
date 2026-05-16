import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/nav/AnnouncementBar";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/shared/Footer";
import { CartSheet } from "@/components/cart/CartSheet";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Smokin' Aces Motorcycle Apparel",
  description: "Helmets, leathers, and the small things that make a ride yours. Family-owned motorcycle gear shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartSheet />
      </body>
    </html>
  );
}
