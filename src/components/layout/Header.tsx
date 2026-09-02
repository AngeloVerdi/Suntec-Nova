"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Sun, Thermometer, Battery, Wrench, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

const leistungenLinks = [
  { href: "/photovoltaik", label: "Photovoltaik", icon: Sun, desc: "Solaranlage planen & installieren" },
  { href: "/waermepumpe", label: "Wärmepumpe", icon: Thermometer, desc: "Effizient heizen & Kosten sparen" },
  { href: "/photovoltaik#speicher", label: "Batteriespeicher", icon: Battery, desc: "Eigenverbrauch maximieren" },
  { href: "/wartung", label: "Wartung & Reinigung", icon: Wrench, desc: "Anlagenperformance sichern" },
  { href: "/energieberatung", label: "Energieberatung", icon: Zap, desc: "Kostenlos & unverbindlich" },
];

const topNavLinks = [
  { href: "/foerderung", label: "Förderung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Pages with dark hero backgrounds where logo/text should always be light at top
  const darkHeroPages = ["/ueber-uns", "/foerderung", "/photovoltaik", "/waermepumpe", "/wartung", "/kontakt", "/energieberatung", "/impressum", "/datenschutz", "/agb", "/referenzen"];
  const hasDarkHero = darkHeroPages.some(p => pathname?.startsWith(p));

  // Logo should be white when: on homepage (transparent over video) OR on dark-hero pages when not scrolled
  const logoWhite = !scrolled || (hasDarkHero && !scrolled);

  const isLeistungActive = leistungenLinks.some(l => pathname?.startsWith(l.href.split("#")[0]));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLeistungenOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setLeistungenOpen(false);
    setIsOpen(false);
  }, [pathname]);

  const navTextClass = scrolled
    ? "text-[#071428] hover:bg-slate-100"
    : "text-white/90 hover:text-white hover:bg-white/10";

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
            {/* Leistungen Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLeistungenOpen(!leistungenOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navTextClass} ${
                  isLeistungActive ? (scrolled ? "text-[#f5a800]" : "text-[#ffc324]") : ""
                }`}
              >
                Leistungen
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${leistungenOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Panel */}
              {leistungenOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  {leistungenLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                        style={{ background: "rgba(245,168,0,0.1)" }}
                      >
                        <item.icon className="w-4.5 h-4.5" style={{ color: "#f5a800" }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#071428] group-hover:text-[#f5a800] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other top-level links */}
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navTextClass} ${
                  pathname === link.href ? (scrolled ? "text-[#f5a800]" : "text-[#ffc324]") : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* GreenTech Recycling – dezenter Link */}
            <Link
              href="/greentech"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                scrolled
                  ? "border-slate-300 text-slate-500 hover:border-slate-400 hover:text-slate-700"
                  : "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
              }`}
            >
              ♻️ GreenTech
            </Link>

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
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Logo in mobile menu */}
          <div className="px-4 pt-4 pb-2 border-b border-slate-100">
            <Image src="/logo.png" alt="SunTec Nova" width={100} height={40} className="h-8 w-auto" />
          </div>
          <nav className="px-4 py-3 space-y-1">
            {/* Leistungen accordion */}
            <button
              onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#071428] hover:bg-slate-50 transition-colors"
            >
              Leistungen
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileLeistungenOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-slate-100 pl-3">
                {leistungenLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-[#071428] hover:bg-slate-50 transition-colors"
                  >
                    <item.icon className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Other links */}
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-[#071428] hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* GreenTech Recycling – Mobile */}
            <Link
              href="/greentech"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              ♻️ GreenTech Recycling
            </Link>
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




