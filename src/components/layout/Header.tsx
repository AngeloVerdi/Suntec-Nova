"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/photovoltaik", label: "Photovoltaik" },
  { href: "/waermepumpe", label: "Wärmepumpe" },
  { href: "/wartung", label: "Wartung" },
  { href: "/foerderung", label: "Förderung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero backgrounds where logo/text should always be light at top
  const darkHeroPages = ["/ueber-uns", "/foerderung", "/photovoltaik", "/waermepumpe", "/wartung", "/kontakt", "/impressum", "/datenschutz", "/agb", "/referenzen"];
  const hasDarkHero = darkHeroPages.some(p => pathname?.startsWith(p));

  // Logo should be white when: on homepage (transparent over video) OR on dark-hero pages when not scrolled
  const logoWhite = !scrolled || hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="SunTec Nova Logo"
              width={160}
              height={160}
              className={`h-28 w-28 object-contain transition-all duration-300 ${
                logoWhite ? "brightness-0 invert" : ""
              }`}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-[#071428] hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-[#071428]" : "text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: "#f5a800" }} />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
            >
              Kostenlose Beratung
            </Link>
          </div>

          {/* Mobile: Phone + Burger */}
          <div className="xl:hidden flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`flex items-center gap-1.5 text-sm font-semibold ${scrolled ? "text-[#071428]" : "text-white"}`}
            >
              <Phone className="w-4 h-4" style={{ color: "#f5a800" }} />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? "text-[#071428]" : "text-white"}`}
              aria-label="Menü öffnen"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Logo in mobile menu */}
          <div className="px-4 pt-4 pb-2 border-b border-slate-100">
            <Image src="/logo.png" alt="SunTec Nova" width={100} height={40} className="h-8 w-auto" />
          </div>
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-[#071428] hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4 space-y-3 border-t border-slate-100 pt-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-50 text-sm font-semibold text-[#071428]"
            >
              <Phone className="w-4 h-4" style={{ color: "#f5a800" }} />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
            >
              Kostenlose Beratung sichern
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}




