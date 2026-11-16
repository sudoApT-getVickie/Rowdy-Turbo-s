import localFont from 'next/font/local';
import "./globals.css";
import type { Metadata } from "next";

// Load the local Starborn font
const starborn = localFont({
  src: './fonts/Starborn.ttf',
  variable: '--font-starborn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Desktop OS",
  description: "Retro Web Desktop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Inject the CSS variable so Tailwind can access it globally
    <html lang="en" className={starborn.variable}>
      <body>{children}</body>
    </html>
  );
}
