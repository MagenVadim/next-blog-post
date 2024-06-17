import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TheHeader } from "./components/Header";
import { TheFooter } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TheHeader/>
        <main className="container">
          {children}
        </main>
        
        <TheFooter/>
      </body>
    </html>
  );
}
