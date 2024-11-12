import Header from "@/components/Mobile/Header";
import Footer from "@/components/Mobile/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function MobileLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
