"use client";
import Link from "next/link";
import { GT, GTHeader, GTFooter, ShieldIcon } from "../_components/GTShared";

const certs = [
  {
    title: "ISO 14001",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    desc: "Die DIN EN ISO 14001 ist der international anerkannte Standard für Umweltmanagementsysteme. Sie verpflichtet zertifizierte Betriebe zu einem strukturierten Kreislauf aus Planung, Umsetzung, Kontrolle und kontinuierlicher Verbesserung ihrer Umweltleistung – von der Ressourcenschonung über die Emissionsminimierung bis zur rechtssicheren Entsorgung. Besonders im PV-Recycling verlangt die Norm eine Lebenszyklusbetrachtung, die auch Transport und Zwischenlagerung mit einschließt. Wir richten unsere Betriebsabläufe konsequent an diesen Anforderungen aus.",
    status: "Zertifizierung in Vorbereitung",
  },
  {
    title: "Entsorgungsfachbetrieb",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <path d="M4 4v6h6M20 20v-6h-6M5.5 15a7 7 0 0011.7 3M18.5 9A7 7 0 006.8 6" />
      </svg>
    ),
    desc: "Die Zertifizierung nach § 56 Kreislaufwirtschaftsgesetz (KrWG) zählt zu den anspruchsvollsten Qualifikationen im deutschen Entsorgungssektor. Sie wird nur erteilt, wenn ein Betrieb über die erforderliche Organisation, personelle und gerätetechnische Ausstattung sowie über fach- und sachkundiges Personal verfügt. Die Einhaltung wird mindestens jährlich durch eine technische Überwachungsorganisation geprüft; das Zertifikat ist auf maximal 18 Monate befristet. Für PV-Module deckt sie die Tätigkeiten Sammeln, Befördern, Lagern und Verwerten ab.",
    status: "Zertifizierung in Vorbereitung",
  },
  {
    title: "ISO 9001",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9.5 12l1.8 1.8L14.5 10" />
      </svg>
    ),
    desc: "Die ISO 9001 definiert die international führenden Anforderungen an ein Qualitätsmanagementsystem. Für Recyclingbetriebe bedeutet das: dokumentierte, nachvollziehbare Prozesse von der Anfrage über die Demontage bis zum Verwertungsnachweis, klare Verantwortlichkeiten und eine kontinuierliche Verbesserung der Arbeitsabläufe. Da sich rund 60 Prozent der Anforderungen mit der ISO 14001 überschneiden, lassen sich Qualitäts- und Umweltmanagement bei uns eng miteinander verzahnen – für Prozesse, die wirtschaftlich wie ökologisch nachvollziehbar sind.",
    status: "Zertifizierung in Vorbereitung",
  },
];

export default function ZertifikatePage() {
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      {/* Cert-Showcase Hero (1:1 aus WordPress) */}
      <section style={{
        background: `linear-gradient(135deg, ${GT.deep} 0%, ${GT.accent} 100%)`,
        color: "#fff",
        padding: "5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Recycle SVG icon from WordPress */}
          <svg viewBox="0 0 100 100" fill="none" width={80} height={80} style={{ margin: "0 auto 1.5rem" }}>
            <g stroke="#ffffff" strokeWidth="9" strokeLinecap="round" fill="none">
              <path d="M30 15 A38 38 0 0 1 66 26" />
              <path d="M30 15 A38 38 0 0 1 66 26" transform="rotate(120 50 50)" />
              <path d="M30 15 A38 38 0 0 1 66 26" transform="rotate(240 50 50)" />
            </g>
            <g fill="#ffffff">
              <polygon points="66,26 79,23 72,35" />
              <polygon points="66,26 79,23 72,35" transform="rotate(120 50 50)" />
              <polygon points="66,26 79,23 72,35" transform="rotate(240 50 50)" />
            </g>
          </svg>
          <div style={{ fontSize: "0.78rem", color: GT.accentOnDark, marginBottom: "1rem" }}>
            <Link href="/greentech" style={{ color: GT.accentOnDark, textDecoration: "none" }}>Startseite</Link> / Zertifikate
          </div>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "5px 14px", borderRadius: 20, marginBottom: "1rem" }}>
            Zertifikate &amp; Nachhaltigkeit
          </span>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>Geprüfte Qualität, nachvollziehbare Standards</h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "rgba(255,255,255,0.82)", maxWidth: 600, margin: "0 auto", lineHeight: 1.65 }}>
            Unsere Prozesse orientieren sich an anerkannten Umwelt- und Qualitätsstandards der Recyclingbranche.
          </p>
        </div>
      </section>

      {/* Status badge */}
      <div style={{ background: "#fff8e1", borderBottom: "1px solid #ffe082", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <span style={{ fontSize: "0.875rem", color: "#795548", fontWeight: 500 }}>⏳ Zertifikate werden nach Abschluss der Audits ergänzt</span>
      </div>

      {/* Cert cards (1:1 aus WordPress) */}
      <section style={{ padding: "5rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {certs.map((c) => (
            <div key={c.title} style={{ background: "#fff", borderRadius: 16, padding: "2.5rem 2rem", boxShadow: "0 2px 16px rgba(46,125,50,0.08)", border: "1px solid rgba(46,125,50,0.1)", display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${GT.accent}18`, color: GT.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {c.icon}
              </div>
              <h3 style={{ fontWeight: 800, color: GT.deep, fontSize: "1.2rem", margin: 0 }}>{c.title}</h3>
              <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{c.desc}</p>
              <span style={{ display: "inline-block", background: "#fff3e0", color: "#e65100", fontSize: "0.75rem", fontWeight: 700, padding: "5px 12px", borderRadius: 20, alignSelf: "flex-start" }}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: GT.deep, marginBottom: "0.75rem" }}>Fragen zu unseren Nachweisen?</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem", lineHeight: 1.65 }}>Wir stellen Ihnen relevante Nachweise für Ihr Projekt gerne zur Verfügung.</p>
          <Link href="/greentech/kontakt" style={{ display: "inline-block", background: GT.accent, color: "#fff", padding: "13px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
