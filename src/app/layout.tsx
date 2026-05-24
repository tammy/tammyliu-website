import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/app/components/Nav";

// Fonts
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

// Main app
export const metadata: Metadata = {
  title: "Tammy Liu",
  description: "Tammy Liu's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
