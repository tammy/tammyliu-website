import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/app/components/Nav";
import ThemeToggle from "@/app/components/ThemeToggle";

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

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.className} ${dmMono.variable}`}>
        <ThemeToggle />
        <Nav />
        {children}
        <footer className="fixed bottom-0 right-0 p-6 text-xs opacity-30">
          © Tammy Liu
        </footer>
      </body>
    </html>
  );
}
