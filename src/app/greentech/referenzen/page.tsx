"use client";
import Link from "next/link";
import { GT, GTHeader, GTFooter, GTPageHero } from "../_components/GTShared";

const categories = [
  {
    title: "Industrielle Dachanlagen",
    desc: "Rückbau und Recycling großflächiger Aufdachanlagen auf Gewerbe-, Logistik- und Industrieimmobilien – inklusive Gerüst- und Absturzsicherung sowie termingerechter Koordination mit dem laufenden Betrieb.",
  },
  {
    title: "Freiflächenanlagen",
    desc: "Demontage und Abtransport bei Solarparks und Freiflächenanlagen, häufig im Zuge von Repowering-Projekten, bei denen ältere Module durch leistungsstärkere Technik ersetzt werden.",
  },
  {
    title: "Wohn- und Mehrfamilienhäuser",
    desc: "Rückbau bei Ein- und Mehrfamilienhäusern sowie Wohnanlagen – mit besonderem Augenmerk auf Lärm- und Zeitfenster sowie enger Abstimmung mit Eigentümern und Hausverwaltungen.",
  },
];

export default function ReferenzenPage() {
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      <GTPageHero
        breadcrumb="Referenzen"
        eyebrow="Referenzen"
        title="Projekte, die für sich sprechen"
        subtitle="Ausgewählte Beispiele aus dem Rückbau und Recycling von Photovoltaikanlagen."
      />

      {/* Placeholder badge */}
      <div style={{ background: "#fffde7", borderBottom: "1px solid #ffe082", padding: "0.85rem 1.5rem", textAlign: "center" }}>
        <span style={{ fontSize: "0.875rem", color: "#795548", fontWeight: 500 }}>
          📋 Konkrete Projektbeispiele mit Fotos und Kennzahlen werden nach Projektabschluss ergänzt
        </span>
      </div>

      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem", marginBottom: "3.5rem" }}>
            SunTec Nova GreenTech Recycling ist auf den fachgerechten Rückbau und das Recycling unterschiedlichster Anlagentypen ausgelegt – von der gewerblichen Dachanlage bis zur großflächigen Freiflächenanlage. Die folgenden Kategorien zeigen, für welche Projektarten wir aufgestellt sind; konkrete Referenzprojekte mit Standort, Umfang und Ergebnis ergänzen wir hier, sobald erste Projekte abgeschlossen sind.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {categories.map((c) => (
              <div
                key={c.title}
                style={{
                  background: "#f7fbf7",
                  borderRadius: 14,
                  padding: "2rem",
                  border: `1px solid ${GT.accent}20`,
                  boxShadow: "0 2px 12px rgba(46,125,50,0.06)",
                }}
              >
                <h3 style={{ fontWeight: 700, color: GT.deep, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: GT.deep, marginBottom: "0.75rem" }}>Ihr Projekt könnte das nächste sein</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem", lineHeight: 1.65 }}>Kontaktieren Sie uns für eine unverbindliche Einschätzung.</p>
          <Link href="/greentech/kontakt" style={{ display: "inline-block", background: GT.accent, color: "#fff", padding: "13px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
            Jetzt anfragen
          </Link>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
