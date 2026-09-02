"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── GreenTech colour tokens ── */
const GT = {
  accent: "#2E7D32",
  accentLight: "#4CAF50",
  accentOnDark: "#7CC47F",
  deep: "#0E2318",
  headerBg: "rgba(240,248,241,0.92)",
  footerBg: "#0E2318",
};

/* ═══════════════════════════════════════════
   GreenTech Header
═══════════════════════════════════════════ */
function GTHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/greentech", label: "Startseite" },
    { href: "/greentech/ueber-uns", label: "Über uns" },
    { href: "/greentech/leistungen", label: "Leistungen" },
    { href: "/greentech/entruempelung", label: "Entrümpelung" },
    { href: "/greentech/referenzen", label: "Referenzen" },
    { href: "/greentech/zertifikate", label: "Zertifikate" },
    { href: "/greentech/kontakt", label: "Kontakt" },
  ];

  return (
    <header style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Utility bar */}
      <div
        style={{
          background: GT.deep,
          color: "#ccc",
          fontSize: "0.78rem",
          padding: "6px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="tel:+4915206066696" style={{ color: "#ccc", textDecoration: "none", display: "flex", gap: 5, alignItems: "center" }}>
              <PhoneIcon size={13} /> +49 152 06066696
            </a>
            <a href="mailto:info@suntec-nova.de" style={{ color: "#ccc", textDecoration: "none", display: "flex", gap: 5, alignItems: "center" }}>
              <MailIcon size={13} /> info@suntec-nova.de
            </a>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <a href="https://www.instagram.com/suntecnova/" target="_blank" rel="noopener" style={{ color: "#ccc", textDecoration: "none" }}>Instagram</a>
            <a href="https://www.facebook.com/suntecnova" target="_blank" rel="noopener" style={{ color: "#ccc", textDecoration: "none" }}>Facebook</a>
            {/* Back to SunTec Nova */}
            <Link href="/" style={{ color: GT.accentOnDark, textDecoration: "none", fontWeight: 600 }}>
              ← SunTec Nova (PV & Wärmepumpen)
            </Link>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? GT.headerBg : "rgba(240,248,241,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(46,125,50,0.15)`,
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 2px 16px rgba(46,125,50,0.12)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          {/* Brand */}
          <Link href="/greentech" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <Image
              src="/greentech/logo-icon.png"
              alt="GreenTech Recycling"
              width={38}
              height={38}
              style={{ height: 38, width: "auto" }}
              unoptimized
            />
            <span style={{ lineHeight: 1.15, color: GT.deep }}>
              <span style={{ display: "block", fontWeight: 800, fontSize: "1rem", color: GT.accent }}>SunTec Nova</span>
              <small style={{ display: "block", fontSize: "0.7rem", color: "#555", fontWeight: 500 }}>GreenTech Recycling</small>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: "0.15rem", alignItems: "center" }} className="gt-desktop-nav">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: GT.deep,
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${GT.accent}18`;
                  (e.currentTarget as HTMLElement).style.color = GT.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = GT.deep;
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + search + burger */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              aria-label="Suche"
              onClick={() => setSearchOpen(!searchOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: GT.deep }}
            >
              <SearchIcon size={18} />
            </button>
            {/* Zurück zu SunTec Nova */}
            <Link
              href="/"
              style={{
                background: "transparent",
                color: GT.accent,
                border: `1.5px solid ${GT.accent}`,
                padding: "7px 14px",
                borderRadius: 8,
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              className="gt-cta-btn"
            >
              ← SunTec Nova
            </Link>
            <a
              href="/greentech/kontakt"
              style={{
                background: GT.accent,
                color: "#fff",
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              className="gt-cta-btn"
            >
              Angebot anfragen
            </a>
            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: GT.deep }}
              className="gt-burger"
              aria-label="Menü"
            >
              {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div style={{ borderTop: "1px solid rgba(46,125,50,0.1)", padding: "12px 1.5rem" }}>
            <input
              autoFocus
              placeholder="Suchbegriff eingeben..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: `1px solid ${GT.accent}`,
                fontSize: "0.9rem",
                outline: "none",
                maxWidth: 600,
              }}
            />
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid rgba(46,125,50,0.1)", background: "#fff", padding: "1rem 1.5rem" }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  borderBottom: "1px solid #f0f0f0",
                  color: GT.deep,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                marginTop: 12,
                padding: "10px 14px",
                borderRadius: 8,
                border: `1.5px solid ${GT.accent}`,
                color: GT.accent,
                textDecoration: "none",
                fontWeight: 700,
                textAlign: "center",
                fontSize: "0.9rem",
              }}
            >
              ← Zurück zu SunTec Nova
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 900px) { .gt-burger { display: none !important; } }
        @media (max-width: 899px) { .gt-desktop-nav { display: none !important; } .gt-cta-btn { display: none !important; } }
      `}</style>
    </header>
  );
}

/* ═══════════════════════════════════════════
   GreenTech Footer
═══════════════════════════════════════════ */
function GTFooter() {
  return (
    <footer style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: GT.footerBg, color: "#ccc" }}>
      {/* CTA Banner */}
      <div style={{ background: GT.accent, color: "#fff", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.85 }}>Jetzt aktiv werden</span>
            <h2 style={{ margin: "0.5rem 0", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 800, lineHeight: 1.25 }}>
              Starten Sie Ihr Rückbau- oder Recyclingprojekt mit SunTec Nova
            </h2>
            <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem" }}>
              Unverbindlich anfragen – wir melden uns innerhalb kurzer Zeit mit einer ersten Einschätzung.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="/greentech/kontakt"
              style={{ background: "#fff", color: GT.accent, padding: "12px 24px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}
            >
              Kostenlose Anfrage senden
            </a>
            <a
              href="tel:+4915206066696"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.7)", padding: "12px 24px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}
            >
              +49 152 06066696 anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
            <Image src="/greentech/logo-icon.png" alt="GreenTech" width={30} height={30} style={{ height: 30, width: "auto" }} unoptimized />
            <span>
              <span style={{ display: "block", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>SunTec Nova</span>
              <small style={{ fontSize: "0.68rem", color: GT.accentOnDark }}>GreenTech Recycling</small>
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#aaa", margin: 0 }}>
            Ihr deutschlandweiter Partner für PV-Recycling, Rückbau und fachgerechte Entsorgung von Solaranlagen.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Navigation</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[["Über uns", "/greentech/ueber-uns"], ["Leistungen", "/greentech/leistungen"], ["Referenzen", "/greentech/referenzen"], ["Zertifikate", "/greentech/zertifikate"]].map(([label, href]) => (
              <li key={href}><Link href={href} style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem" }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Leistungen */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Leistungen</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["PV-Recycling", "Rückbau", "Transport", "Entsorgung"].map((s) => (
              <li key={s}><Link href="/greentech/leistungen" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem" }}>{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Kontakt</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href="https://www.google.com/maps/search/?api=1&query=Im+Schlo%C3%9Fhof+5+63450+Hanau" target="_blank" rel="noopener" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem", display: "flex", gap: 8, alignItems: "flex-start" }}>
              <MapPinIcon size={14} style={{ marginTop: 2, flexShrink: 0 }} /> Im Schloßhof 5<br />63450 Hanau
            </a>
            <a href="tel:+4915206066696" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem", display: "flex", gap: 8, alignItems: "center" }}>
              <PhoneIcon size={14} /> +49 152 06066696
            </a>
            <a href="mailto:info@suntec-nova.de" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem", display: "flex", gap: 8, alignItems: "center" }}>
              <MailIcon size={14} /> info@suntec-nova.de
            </a>
            <Link href="/" style={{ color: GT.accentOnDark, textDecoration: "none", fontSize: "0.875rem", display: "flex", gap: 8, alignItems: "center", fontWeight: 600 }}>
              ← SunTec Nova (PV & Wärmepumpen)
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.8rem", color: "#666" }}>© {new Date().getFullYear()} SunTec Nova GreenTech Recycling. Alle Rechte vorbehalten.</span>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <Link href="/impressum" style={{ color: "#666", textDecoration: "none", fontSize: "0.8rem" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ color: "#666", textDecoration: "none", fontSize: "0.8rem" }}>Datenschutz</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/4915206066696"
        target="_blank"
        rel="noopener"
        aria-label="Per WhatsApp kontaktieren"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
          zIndex: 999,
          textDecoration: "none",
        }}
      >
        <WhatsAppIcon size={28} />
      </a>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   Inline SVG Icons
═══════════════════════════════════════════ */
function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 5h4l2 5-2.5 1.5a11 11 0 005 5L14 14l5 2v4a2 2 0 01-2 2A15 15 0 014 7a2 2 0 012-2z" />
    </svg>
  );
}
function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function MapPinIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={style}>
      <path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function MenuIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}
function XIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.6.7 5 2 7.1L3 29l6.4-2.2c2 .9 4.2 1.4 6.6 1.4 7 0 12.7-5.7 12.7-12.7C28.7 8.7 23 3 16 3zm0 23.1c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4 1.4 1.3-3.9-.3-.4a10.4 10.4 0 01-1.6-5.6C5.2 9.9 10 5.2 16 5.2s10.8 4.8 10.8 10.6S22 26.1 16 26.1zm5.9-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.3 2.4 3.7 5.9 5.1.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
    </svg>
  );
}
function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function TruckIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function RecycleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 19H4.815a1.83 1.83 0 01-1.57-2.759L7.4 8.5m0 10.5h10M7.4 8.5L5.5 5.5m1.9 3L10 5.5m7.5 13.5l2.185-2.241A1.83 1.83 0 0019.065 14H15m1.5 5.5V14m-8.565-9L10 2M15 2l2.5 3.5M7 12l2-3.5" />
    </svg>
  );
}
function ShieldIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function MapIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}
function LeafIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M11 20A7 7 0 014 13V6s7 0 10.5 3.5C18 13 18 20 11 20z" />
      <path d="M4 6c3.5 3.5 6.5 7 7 14" />
    </svg>
  );
}
function AwardIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Main Page Component
═══════════════════════════════════════════ */
export default function GreenTechPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const services = [
    {
      title: "PV-Recycling",
      desc: "Fachgerechte Verwertung und Wiederverwertung aller Solarmodulkomponenten nach EU-Norm.",
      icon: <RecycleIcon size={28} />,
      img: "/greentech/pv-recycling-photo.jpg",
    },
    {
      title: "Rückbau",
      desc: "Professionelle Demontage von Photovoltaikanlagen aller Größen – schnell, sicher und substanzschonend.",
      icon: <ShieldIcon size={28} />,
      img: "/greentech/rueckbau.jpg",
    },
    {
      title: "Transport",
      desc: "Bundesweiter Transport auf eigener Flotte – GPS-gesichert und termingerecht.",
      icon: <TruckIcon size={28} />,
      img: "/greentech/transport.jpg",
    },
    {
      title: "Entsorgung",
      desc: "Zertifizierte Entsorgung gemäß ElektroG und KrWG – mit vollständiger Dokumentation.",
      icon: <LeafIcon size={28} />,
      img: "/greentech/entsorgung.jpg",
    },
    {
      title: "Deutschlandweit",
      desc: "Von Nord bis Süd: Wir sind überall dort, wo Ihre Anlage steht. Kein Auftrag zu groß.",
      icon: <MapIcon size={28} />,
      img: "/greentech/deutschlandweit.jpg",
    },
    {
      title: "Zertifiziert",
      desc: "ISO 14001, Entsorgungsfachbetrieb §56 KrWG – Qualität und Umweltschutz ohne Kompromisse.",
      icon: <AwardIcon size={28} />,
      img: "/greentech/zertifikate-hero-bg.jpg",
    },
  ];

  const reasons = [
    "Zertifizierter Entsorgungsfachbetrieb nach §56 KrWG",
    "Eigene LKW-Flotte für deutschlandweiten Transport",
    "Vollständige Dokumentation und Nachweispflicht erfüllt",
    "Umweltgerechte Verwertungsquote über 95 %",
    "Erfahrenes Team mit jahrelanger Branchenexpertise",
    "Kostenlose Erstberatung und Vor-Ort-Besichtigung",
  ];

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 500, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/greentech/hero-transport.jpg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/greentech/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Leichtes Overlay nur für Textlesbarkeit */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
          <span style={{
            display: "inline-block",
            background: `${GT.accent}cc`,
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 20,
            marginBottom: "1.25rem",
          }}>
            PV-Recycling · Rückbau · Entsorgung
          </span>
          <h1 style={{
            fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.12,
            marginBottom: "1.25rem",
            maxWidth: 720,
          }}>
            Professioneller Rückbau & Recycling von Photovoltaikanlagen
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.88)", maxWidth: 560, marginBottom: "2rem", lineHeight: 1.6 }}>
            Wir sorgen für eine fachgerechte Demontage, sicheren Transport und umweltgerechte Verwertung Ihrer Solaranlage – deutschlandweit.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/greentech/kontakt" style={{ background: GT.accent, color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Kostenlose Anfrage
            </a>
            <a href="#leistungen" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", padding: "14px 28px", borderRadius: 10, fontWeight: 600, textDecoration: "none", fontSize: "1rem", backdropFilter: "blur(4px)" }}>
              Leistungen entdecken
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div style={{ background: GT.deep, color: "#fff", padding: "1.25rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
          {[
            "✓ Zertifizierter Entsorgungsfachbetrieb",
            "✓ Deutschlandweiter Service",
            "✓ 0 % MwSt. auf Recyclingdienstleistungen",
            "✓ Vollständige Dokumentation",
          ].map((t) => (
            <span key={t} style={{ fontSize: "0.875rem", fontWeight: 500, color: GT.accentOnDark, whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── PV Services ── */}
      <section id="leistungen" style={{ padding: "5rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>Unsere Leistungen</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, color: GT.deep, marginTop: "0.5rem", marginBottom: "0.75rem" }}>
              Alles aus einer Hand
            </h2>
            <p style={{ color: "#555", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
              Von der Demontage bis zur zertifizierten Verwertung – wir begleiten Sie durch den gesamten Prozess.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(46,125,50,0.08)",
                  border: "1px solid rgba(46,125,50,0.08)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(46,125,50,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(46,125,50,0.08)";
                }}
              >
                <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} unoptimized />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ color: GT.accent, marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: GT.deep, marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Entrümpelung & Entsorgung ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            {/* Bilder-Duo */}
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "1rem", height: 460 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", position: "relative" }}>
                <Image src="/greentech/entruempelung-treppenhaus.jpeg" alt="Entrümpelung Treppenhaus" fill style={{ objectFit: "cover" }} unoptimized />
              </div>
              <div style={{ borderRadius: 14, overflow: "hidden", position: "relative" }}>
                <Image src="/greentech/entruempelung-wohnungsaufloesung.jpeg" alt="Wohnungsauflösung" fill style={{ objectFit: "cover" }} unoptimized />
              </div>
            </div>
            {/* Text */}
            <div>
              <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Zusätzliche Leistung</span>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: GT.deep, marginTop: "0.4rem", marginBottom: "1rem", lineHeight: 1.2 }}>
                Auch für Sie da: Entrümpelung & Entsorgung
              </h2>
              <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Wir übernehmen professionelle Entrümpelungen und Räumungen für Privat- und Gewerbekunden – zuverlässig, sauber und mit fachgerechter Entsorgung. Auch ohne Solaranlage sind Sie bei uns richtig.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column" as const, gap: "0.6rem" }}>
                {[
                  "Entrümpelung von Wohnungen, Häusern und Gewerbeobjekten",
                  "Haushalts- und Betriebsauflösungen",
                  "Keller-, Dachboden- und Garagenräumungen",
                  "Abholung von Möbeln, Sperrmüll und Elektrogeräten",
                  "Besenreine Übergabe nach Abschluss",
                ].map((b) => (
                  <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#444", fontSize: "0.9rem" }}>
                    <span style={{ color: GT.accent, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
                <Link href="/greentech/entruempelung" style={{ display: "inline-block", background: GT.accent, color: "#fff", padding: "12px 26px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                  Entrümpelung anfragen
                </Link>
                <Link href="/greentech/entruempelung" style={{ display: "inline-block", background: "transparent", color: GT.accent, border: `1.5px solid ${GT.accent}`, padding: "12px 22px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
                  Alle Leistungen ansehen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Warum SunTec Nova ── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: GT.deep,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image with overlay */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/greentech/plant-bg.jpg" alt="" fill style={{ objectFit: "cover", opacity: 0.12 }} unoptimized />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <span style={{ color: GT.accentOnDark, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>Warum SunTec Nova?</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#fff", marginTop: "0.5rem", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              Ihr zuverlässiger Partner für nachhaltiges PV-Recycling
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "2rem" }}>
              Mit unserer langjährigen Erfahrung und zertifizierten Prozessen sorgen wir dafür, dass Ihre Altanlage fachgerecht demontiert und umweltgerecht verwertet wird – schnell, sicher und dokumentiert.
            </p>
            <a href="/greentech/kontakt" style={{ display: "inline-block", background: GT.accent, color: "#fff", padding: "13px 26px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>
              Jetzt Anfrage stellen
            </a>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {reasons.map((r) => (
              <li key={r} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: `${GT.accent}44`, color: GT.accentOnDark, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckIcon size={14} />
                </span>
                <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.9rem", lineHeight: 1.5 }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Referenzen teaser ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>Referenzen</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, color: GT.deep, marginTop: "0.5rem", marginBottom: "0.75rem" }}>Projekte, die für sich sprechen</h2>
          <p style={{ color: "#555", lineHeight: 1.7, maxWidth: 700, margin: "0 auto 2rem" }}>
            Ausgewählte Beispiele aus dem Rückbau und Recycling von Photovoltaikanlagen – von klein bis groß, deutschlandweit.
          </p>
          <div style={{ background: "#fffde7", border: "1px solid #ffe082", borderRadius: 12, padding: "1rem 1.5rem", display: "inline-block", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.875rem", color: "#795548", fontWeight: 500 }}>
              📋 Konkrete Projektbeispiele werden nach Projektabschluss ergänzt
            </span>
          </div>
          <div style={{ display: "block" }}>
            <Link href="/greentech/referenzen" style={{ color: GT.accent, fontWeight: 600, textDecoration: "none", borderBottom: `2px solid ${GT.accent}` }}>
              Referenzprojekte ansehen →
            </Link>
          </div>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
