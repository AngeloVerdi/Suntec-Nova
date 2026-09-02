"use client";
import Image from "next/image";
import Link from "next/link";
import { GT, GTHeader, GTFooter, GTPageHero } from "../_components/GTShared";

const vorteile = [
  "Kostenlose und unverbindliche Erstberatung",
  "Besichtigung und transparentes Festpreisangebot",
  "Schnelle und zuverlässige Durchführung",
  "Fachgerechte Trennung und umweltbewusste Entsorgung",
];

const sections = [
  {
    num: "01",
    title: "Professionelle Entrümpelung & Räumung",
    img: "/greentech/entruempelung-wohnungsaufloesung.jpeg",
    imgAlt: "Wohnungsauflösung und Entrümpelung",
    text: "Wir übernehmen komplette Entrümpelungen von Wohnungen, Häusern und Gewerbeobjekten. Dazu gehören auch Haushalts- und Betriebsauflösungen. Von einzelnen Räumen bis zur vollständigen Räumung kümmern wir uns um die gesamte Durchführung.",
    bg: "#ffffff",
  },
  {
    num: "02",
    title: "Keller, Dachboden & Garage",
    img: "/greentech/entruempelung-beladen.jpeg",
    imgAlt: "Kellerentrümpelung und Räumung",
    text: "Auch Keller, Dachböden, Garagen und andere Nebenräume werden vollständig geräumt. Möbel, Kartons, Hausrat und nicht mehr benötigte Gegenstände werden abtransportiert und fachgerecht entsorgt.",
    bg: "#f4f9f4",
  },
  {
    num: "03",
    title: "Möbel, Sperrmüll & Elektrogeräte",
    img: "/greentech/entruempelung-van.jpeg",
    imgAlt: "Abtransport von Möbeln und Sperrmüll",
    text: "Wir übernehmen den Abtransport von Möbeln, Sperrmüll, Elektrogeräten und weiteren Haushaltsgegenständen. Unsere Kunden müssen sich nicht selbst um Transport und Entsorgung kümmern.",
    bg: "#ffffff",
  },
  {
    num: "04",
    title: "Demontage vor der Entsorgung",
    img: "/greentech/entruempelung-treppenhaus.jpeg",
    imgAlt: "Demontage und Transport im Treppenhaus",
    text: "Wenn notwendig, übernehmen wir auch Demontagearbeiten im Zusammenhang mit der Räumung, bevor Gegenstände abtransportiert und entsorgt werden.",
    bg: "#f4f9f4",
  },
  {
    num: "05",
    title: "Fachgerechte Trennung & Entsorgung",
    img: "/greentech/entruempelung-container.jpeg",
    imgAlt: "Container und fachgerechte Entsorgung",
    text: "Die anfallenden Materialien werden soweit möglich getrennt und anschließend fachgerecht und umweltbewusst entsorgt bzw. dem Recycling zugeführt.",
    bg: "#ffffff",
  },
  {
    num: "06",
    title: "Besenreine Übergabe",
    img: "/greentech/entruempelung-beratung.jpeg",
    imgAlt: "Besenreine Übergabe nach Entrümpelung",
    text: "Nach Abschluss der Arbeiten hinterlassen wir die geräumten Bereiche besenrein und ordentlich.",
    bg: "#f4f9f4",
  },
];

export default function EntruempelungPage() {
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      <GTPageHero
        breadcrumb="Entrümpelung & Entsorgung"
        eyebrow="Entrümpelung & Entsorgung"
        title="Professionelle Entrümpelung – sauber, zuverlässig, nachhaltig"
        subtitle="Wir übernehmen professionelle Entrümpelungen und Räumungen für Privat- und Gewerbekunden – zuverlässig, sauber und mit fachgerechter Entsorgung."
      />

      {/* 6 Leistungsabschnitte */}
      {sections.map((s, i) => (
        <section
          key={s.title}
          style={{
            padding: "5.5rem 1.5rem",
            background: s.bg,
            borderTop: i > 0 ? "1px solid rgba(46,125,50,0.08)" : "none",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}
          >
            {/* Bild */}
            <div
              style={{
                direction: "ltr",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                height: 360,
                boxShadow: "0 8px 40px rgba(14,35,24,0.13)",
              }}
            >
              <Image
                src={s.img}
                alt={s.imgAlt}
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
              {/* Nummer-Badge auf dem Bild */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: GT.accent,
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  padding: "5px 12px",
                  borderRadius: 20,
                }}
              >
                {s.num}
              </div>
            </div>

            {/* Text */}
            <div style={{ direction: "ltr" }}>
              {/* Akzentlinie */}
              <div
                style={{
                  width: 40,
                  height: 3,
                  background: GT.accent,
                  borderRadius: 2,
                  marginBottom: "1.25rem",
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 800,
                  color: GT.deep,
                  marginTop: 0,
                  marginBottom: "1.1rem",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  color: "#4a4a4a",
                  lineHeight: 1.85,
                  margin: "0 0 1.5rem",
                  fontSize: "1rem",
                }}
              >
                {s.text}
              </p>
              {/* kleines grünes Häkchen-Highlight */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: `${GT.accent}12`,
                  border: `1px solid ${GT.accent}25`,
                  borderRadius: 8,
                  padding: "7px 14px",
                  color: GT.accent,
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>✓</span>
                {i === 0 && "Für Privat- und Gewerbekunden"}
                {i === 1 && "Inkl. Nebenräume aller Art"}
                {i === 2 && "Kein eigener Aufwand für Sie"}
                {i === 3 && "Bei Bedarf auf Anfrage"}
                {i === 4 && "Umweltbewusste Verwertung"}
                {i === 5 && "Besenrein und ordentlich"}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Vorteile */}
      <section style={{ padding: "5rem 1.5rem", background: GT.deep }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                color: GT.accentOnDark,
                fontWeight: 700,
                fontSize: "0.78rem",
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
              }}
            >
              Ihre Vorteile
            </span>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#fff",
                marginTop: "0.5rem",
                marginBottom: 0,
              }}
            >
              Warum SunTec Nova GreenTech?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {vorteile.map((v, idx) => (
              <div
                key={v}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  padding: "1.75rem 1.5rem",
                  border: "1px solid rgba(124,196,127,0.2)",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `${GT.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GT.accentOnDark,
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {idx + 1}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kostenlose Erstberatung – dunkelgrüner Hintergrund */}
      <section style={{ padding: "5.5rem 1.5rem", background: "#1a3d1f" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: `${GT.accent}40`,
              color: GT.accentOnDark,
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.14em",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: "1.25rem",
            }}
          >
            Schnelles Angebot
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "#fff",
              marginTop: 0,
              marginBottom: "1.25rem",
              lineHeight: 1.2,
            }}
          >
            Kostenlose Erstberatung & transparentes Angebot
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.85,
              fontSize: "1rem",
              marginBottom: "2.25rem",
            }}
          >
            Kunden können uns Fotos der zu entrümpelnden Räume sowie Standort oder Postleitzahl schicken. Wir besprechen den Umfang und erstellen ein unverbindliches Angebot. Bei Bedarf kann vorher eine Besichtigung erfolgen.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap" as const,
              marginBottom: "1.75rem",
            }}
          >
            <Link
              href="/greentech/kontakt"
              style={{
                display: "inline-block",
                background: GT.accent,
                color: "#fff",
                padding: "14px 36px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 4px 20px rgba(46,125,50,0.4)",
              }}
            >
              Entrümpelung anfragen
            </Link>
          </div>
          <a
            href="tel:+4915206066696"
            style={{
              color: GT.accentOnDark,
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1.05rem",
            }}
          >
            📞 0152 06066696
          </a>
        </div>
      </section>

      {/* CTA Slogan */}
      <section style={{ padding: "4rem 1.5rem", background: GT.accent }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.9rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              marginBottom: "0.6rem",
              fontWeight: 600,
            }}
          >
            Sauber. Zuverlässig. Nachhaltig.
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1.75rem",
              lineHeight: 1.2,
            }}
          >
            Ihr nächster Schritt zur sauberen Übergabe
          </h2>
          <Link
            href="/greentech/kontakt"
            style={{
              display: "inline-block",
              background: "#fff",
              color: GT.accent,
              padding: "13px 32px",
              borderRadius: 10,
              fontWeight: 800,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Entrümpelung anfragen
          </Link>
          <div style={{ marginTop: "1.25rem" }}>
            <a
              href="tel:+4915206066696"
              style={{
                color: "rgba(255,255,255,0.88)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              📞 0152 06066696
            </a>
          </div>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
