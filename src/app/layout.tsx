import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: 'Sonchi',
  description: 'Uniting Cultures on your plate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
