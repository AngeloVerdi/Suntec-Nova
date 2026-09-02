"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGreenTech = pathname?.startsWith("/greentech");

  return (
    <>
      {!isGreenTech && <Header />}
      <main className="flex-1">{children}</main>
      {!isGreenTech && <Footer />}
      {!isGreenTech && <MobileStickyBar />}
    </>
  );
}
