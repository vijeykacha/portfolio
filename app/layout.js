'use client'

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true}>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
