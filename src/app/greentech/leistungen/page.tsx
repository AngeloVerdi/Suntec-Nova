"use client";
import Image from "next/image";
import Link from "next/link";
import { GT, GTHeader, GTFooter, GTPageHero } from "../_components/GTShared";

const pvServices = [
  {
    num: "01",
    title: "PV-Recycling",
    img: "/greentech/pv-recycling-photo.jpg",
    desc: "Fachgerechte Aufbereitung und Verwertung ausgedienter Photovoltaikmodule nach aktuellen Umweltstandards und gesetzlichen Recyclingquoten.",
    bullets: [
      "Trennung von Glas, Aluminium, Silizium und Kunststoffen",
      "Rückführung von Wertstoffen in den Kreislauf",
      "Einhaltung aktueller Umweltvorgaben",
    ],
  },
  {
    num: "02",
    title: "Rückbau von Solaranlagen",
    img: "/greentech/rueckbau.jpg",
    desc: "Professioneller, planvoller Rückbau von Dach- und Freiflächenanlagen unter Einhaltung aller Sicherheitsvorgaben.",
    bullets: [
      "Individuelle Rückbauplanung vor Ort",
      "Für Dach- und Freiflächenanlagen geeignet",
      "Minimale Betriebsunterbrechung",
    ],
  },
  {
    num: "03",
    title: "Demontage",
    img: "/greentech/demontage.jpg",
    desc: "Sichere und strukturierte Demontage von Modulen, Unterkonstruktionen und technischer Peripherie durch geschultes Fachpersonal.",
    bullets: [
      "Schonende Demontage zum Werterhalt",
      "Sicherheitsgerechtes Arbeiten in der Höhe",
      "Dokumentation aller Arbeitsschritte",
    ],
  },
  {
    num: "04",
    title: "Transport",
    img: "/greentech/transport.jpg",
    desc: "Eigener Fuhrpark für sicheren, termingerechten Transport von Solarkomponenten – deutschlandweit im Einsatz.",
    bullets: [
      "Eigene Fahrzeugflotte, keine Fremdvergabe",
      "Termingerechte, planbare Abholung",
      "Sichere Verladung und Fixierung",
    ],
  },
  {
    num: "05",
    title: "Fachgerechte Entsorgung",
    img: "/greentech/entsorgung.jpg",
    desc: "Umweltkonforme Entsorgung nicht verwertbarer Bestandteile gemäß gesetzlicher Vorgaben und Recyclingquoten.",
    bullets: [
      "Entsorgung über zertifizierte Fachbetriebe",
      "Nachweisführung für Ihre Unterlagen",
      "Minimierung von Deponieanteilen",
    ],
  },
  {
    num: "06",
    title: "Deutschlandweiter Service",
    img: "/greentech/deutschlandweit.jpg",
    desc: "Ob Bayern oder Schleswig-Holstein – wir betreuen Projekte im gesamten Bundesgebiet zuverlässig vor Ort.",
    bullets: [
      "Ein Ansprechpartner, bundesweiter Einsatz",
      "Flexible Terminplanung",
      "Für Gewerbe, Industrie und Energieversorger",
    ],
  },
];


export default function LeistungenPage() {
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      <GTPageHero
        breadcrumb="Leistungen"
        eyebrow="Leistungen"
        title="Alles aus einer Hand – vom Rückbau bis zur Entsorgung"
        subtitle="Sieben Leistungsbereiche, ein Ansprechpartner: SunTec Nova begleitet Ihr Projekt von der ersten Begehung bis zum Entsorgungsnachweis."
      />

      {/* PV-Leistungen 01–06 */}
      <section style={{ padding: "5rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "4rem" }}>
            {pvServices.map((s, i) => (
              <div
                key={s.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "3rem",
                  alignItems: "center",
                  direction: i % 2 === 1 ? "rtl" : "ltr",
                }}
              >
                <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: 300, direction: "ltr" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} unoptimized />
                </div>
                <div style={{ direction: "ltr" }}>
                  <span style={{ color: GT.accent, fontWeight: 900, fontSize: "2rem", opacity: 0.3, display: "block", lineHeight: 1 }}>{s.num}</span>
                  <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: GT.deep, marginTop: "0.3rem", marginBottom: "1rem" }}>{s.title}</h2>
                  <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
                    {s.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#444", fontSize: "0.9rem" }}>
                        <span style={{ color: GT.accent, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PV CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: GT.deep, marginBottom: "0.75rem" }}>Sprechen Sie mit uns über Ihr Projekt</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem", lineHeight: 1.65 }}>Wir erstellen Ihnen eine unverbindliche Einschätzung für Rückbau, Transport und Entsorgung.</p>
          <Link href="/greentech/kontakt" style={{ display: "inline-block", background: GT.accent, color: "#fff", padding: "13px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
            Jetzt anfragen
          </Link>
        </div>
      </section>

      {/* Trennlinie */}
      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GT.accent}40, transparent)`, margin: "0 3rem" }} />

      {/* Entrümpelung & Entsorgung – separate Leistung */}
      <section style={{ padding: "5rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: GT.accent, fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>Zusätzliche Leistung</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: GT.deep, marginTop: "0.5rem" }}>
              Auch für Sie da: Entrümpelung & Entsorgung
            </h2>
            <p style={{ color: "#666", maxWidth: 600, margin: "0.75rem auto 0", lineHeight: 1.65 }}>
              Wir übernehmen professionelle Entrümpelungen und Räumungen für Privat- und Gewerbekunden – zuverlässig, sauber und mit fachgerechter Entsorgung.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center", marginBottom: "3rem" }}>
            <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: 360 }}>
              <Image src="/greentech/entruempelung-van.jpeg" alt="SunTec Nova GreenTech Entrümpelung" fill style={{ objectFit: "cover" }} unoptimized />
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column" as const, gap: "0.55rem" }}>
                {[
                  "Entrümpelung von Wohnungen, Häusern und Gewerbeobjekten",
                  "Haushalts- und Betriebsauflösungen",
                  "Keller-, Dachboden- und Garagenräumungen",
                  "Abholung von Möbeln, Sperrmüll und Elektrogeräten",
                  "Abtransport und fachgerechte Entsorgung",
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
                <Link href="/greentech/entruempelung" style={{ display: "inline-block", color: GT.accent, border: `1.5px solid ${GT.accent}`, padding: "12px 20px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: "0.875rem" }}>
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          </div>

          {/* Bildergalerie Vorschau */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { src: "/greentech/entruempelung-treppenhaus.jpeg", label: "Möbeltransport" },
              { src: "/greentech/entruempelung-beratung.jpeg", label: "Vor-Ort-Beratung" },
              { src: "/greentech/entruempelung-container.jpeg", label: "Container & Abtransport" },
            ].map((img) => (
              <div key={img.src} style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 200 }}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} unoptimized />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(14,35,24,0.75), transparent)", padding: "0.75rem 1rem" }}>
                  <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/greentech/entruempelung" style={{ color: GT.accent, fontWeight: 600, textDecoration: "none", borderBottom: `2px solid ${GT.accent}` }}>
              Zur vollständigen Entrümpelungsseite →
            </Link>
          </div>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
