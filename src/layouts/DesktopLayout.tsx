import Header from "@/components/Desktop/Header";
import Footer from "@/components/Desktop/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function DesktopLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
