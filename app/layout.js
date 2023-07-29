'use client'

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Head from "./head";
import { Josefin_Sans } from "next/font/google";

const inter = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={`dark:bg-stone-900 ${inter.className}`} >
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
