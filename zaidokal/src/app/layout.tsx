import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const KellySlab = localFont({
  src: "./fonts/KellySlab.ttf",
  variable: "--font-KellySlab",
  weight: "100 900",
});
const KodeMono = localFont({
  src: "./fonts/KodeMono.ttf",
  variable: "--font-KodeMono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zaid Okal",
  description: "Website of Zaid Okal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${KellySlab.variable} ${KodeMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
