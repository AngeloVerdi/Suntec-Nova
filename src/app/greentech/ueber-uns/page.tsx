"use client";
import Image from "next/image";
import Link from "next/link";
import { GT, GTHeader, GTFooter, GTPageHero } from "../_components/GTShared";

const features = [
  { title: "Deutschlandweit im Einsatz", desc: "Projekte im gesamten Bundesgebiet" },
  { title: "Zertifizierte Prozesse", desc: "Nach aktuellen Umwelt- und Sicherheitsstandards" },
  { title: "Geschultes Fachpersonal", desc: "Erfahrene Teams für Rückbau und Demontage" },
  { title: "Eigener Fuhrpark", desc: "Zuverlässige Logistik ohne Fremdvergabe" },
];

const values = [
  { title: "Verantwortung", desc: "Wir handeln nach klaren Umwelt- und Sicherheitsstandards – für Mensch und Natur." },
  { title: "Kreislaufwirtschaft", desc: "Wertstoffe aus Solarmodulen fließen zurück in Produktion und Wiederverwendung." },
  { title: "Sicherheit", desc: "Geschultes Fachpersonal und klare Prozesse für einen risikofreien Rückbau." },
];

const steps = [
  { num: "01", title: "Anfrage & Beratung", desc: "Sie schildern Ihr Vorhaben, wir analysieren Umfang und Anforderungen." },
  { num: "02", title: "Planung vor Ort", desc: "Begehung, Zeitplan und Logistik werden gemeinsam mit Ihnen abgestimmt." },
  { num: "03", title: "Rückbau & Transport", desc: "Sicherer Rückbau, Demontage und Abtransport durch geschultes Fachpersonal." },
  { num: "04", title: "Recycling & Nachweis", desc: "Fachgerechte Verwertung inklusive Entsorgungsnachweis für Ihre Unterlagen." },
];

export default function UeberUnsPage() {
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      <GTPageHero
        breadcrumb="Über uns"
        eyebrow="Über uns"
        title="Ihr Partner für nachhaltiges PV-Recycling"
        subtitle="SunTec Nova GreenTech Recycling steht für Kompetenz, Zuverlässigkeit und Verantwortung im Umgang mit ausgedienten Solaranlagen – deutschlandweit."
      />

      {/* UNTERNEHMENSPROFIL */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
          <div>
            <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Unternehmensprofil</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: GT.deep, marginTop: "0.5rem", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              Kreisläufe schließen, Ressourcen schonen
            </h2>
            <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "1rem" }}>
              SunTec Nova GreenTech Recycling ist Ihr zuverlässiger Partner für den fachgerechten Rückbau, den sicheren Transport und das nachhaltige Recycling von Photovoltaikanlagen in ganz Deutschland. Mit erfahrenen Fachkräften, moderner Technik und einer strukturierten Arbeitsweise begleiten wir Projekte jeder Größe – von der ersten Planung bis zur lückenlosen Dokumentation.
            </p>
            <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "2rem" }}>
              Unser Ziel ist es, wertvolle Rohstoffe zurückzugewinnen und gleichzeitig höchste Qualitäts-, Sicherheits- und Umweltstandards einzuhalten.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {features.map((f) => (
                <div key={f.title} style={{ background: "#f7fbf7", borderRadius: 10, padding: "1rem 1.25rem", border: `1px solid ${GT.accent}20` }}>
                  <div style={{ fontWeight: 700, color: GT.deep, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{f.title}</div>
                  <div style={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: 380 }}>
            <Image src="/greentech/unternehmensprofil.jpg" alt="SunTec Nova GreenTech Team" fill style={{ objectFit: "cover" }} unoptimized />
          </div>
        </div>
      </section>

      {/* GESCHÄFTSFÜHRUNG */}
      <section style={{ padding: "5rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Geschäftsführung</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: GT.deep, marginTop: "0.5rem", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Persönlich für Ihr Projekt verantwortlich
          </h2>
          <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "2rem" }}>
            Die Geschäftsführung von SunTec Nova GreenTech Recycling steht persönlich für Qualität, Zuverlässigkeit und Nachhaltigkeit bei jedem Projekt ein. Als Teil der SunTec Nova Unternehmensgruppe verbinden wir technisches Know-how mit einem klaren Blick für die Energiewende – und begleiten Sie von der ersten Beratung bis zum abgeschlossenen Recycling-Prozess persönlich.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.6rem" }}>
            {["Nachhaltigkeit", "Verlässlichkeit", "Fachkompetenz", "Transparenz"].map((tag) => (
              <span key={tag} style={{ background: `${GT.accent}15`, color: GT.accent, fontWeight: 700, fontSize: "0.82rem", padding: "6px 14px", borderRadius: 20, border: `1px solid ${GT.accent}30` }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Werte */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Verantwortung, die sich auszahlt</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem" }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "#f7fbf7", borderRadius: 14, padding: "2rem", border: `1px solid ${GT.accent}15`, boxShadow: "0 2px 12px rgba(46,125,50,0.06)" }}>
                <h3 style={{ fontWeight: 700, color: GT.deep, marginBottom: "0.75rem", fontSize: "1.1rem" }}>{v.title}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unser Ablauf */}
      <section style={{ padding: "5rem 1.5rem", background: GT.deep, color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: GT.accentOnDark, fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Unser Ablauf</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ position: "relative" as const }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: GT.accentOnDark, opacity: 0.6, lineHeight: 1, marginBottom: "0.75rem" }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: "0.5rem", fontSize: "1.05rem" }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: GT.deep, marginBottom: "0.75rem" }}>Lernen Sie uns persönlich kennen</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem", lineHeight: 1.65 }}>Wir freuen uns auf ein unverbindliches Gespräch über Ihr Projekt.</p>
          <Link href="/greentech/kontakt" style={{ display: "inline-block", background: GT.accent, color: "#fff", padding: "13px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
