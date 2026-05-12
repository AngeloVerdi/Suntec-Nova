import type { Metadata } from "next";
import Link from "next/link";
import { Star, MapPin, CheckCircle, Phone, Quote } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.referenzen.title,
  description: siteConfig.seo.referenzen.description,
  keywords: siteConfig.seo.referenzen.keywords,
  alternates: { canonical: `${siteConfig.website}/referenzen` },
  openGraph: {
    title: siteConfig.seo.referenzen.title,
    description: siteConfig.seo.referenzen.description,
    url: `${siteConfig.website}/referenzen`,
  },
};

// Beispiel-Referenzprojekte – bitte durch echte Projekte ersetzen
const projects = [
  {
    id: 1,
    type: "Photovoltaik + Wärmepumpe",
    title: "Einfamilienhaus, Energievollversorgung",
    location: "Hanau",
    year: "2024",
    specs: {
      pvLeistung: "11,2 kWp",
      speicher: "10 kWh AlphaESS",
      waermepumpe: "Viessmann Luft-Wasser 12 kW",
      foerderung: "BEG 50 %",
    },
    description:
      "Komplettlösung für ein freistehendes Einfamilienhaus aus den 1990er Jahren. PV-Anlage auf dem Süd-West-Dach, Batteriespeicher und neue Wärmepumpe ersetzen die alte Gasheizung vollständig. Eigenversorgungsquote: 72 %.",
    result: "Energiekosten von ~3.800 €/Jahr auf ~420 €/Jahr gesenkt",
    image: "/images/referenzen/projekt-1.jpg", // Bitte eigenes Foto hinterlegen
    placeholder: true,
    color: "#f5a800",
  },
  {
    id: 2,
    type: "Photovoltaik + Speicher",
    title: "Doppelhaushälfte, Eigenverbrauchsoptimierung",
    location: "Gelnhausen",
    year: "2024",
    specs: {
      pvLeistung: "8,4 kWp",
      speicher: "8 kWh Huawei",
      waermepumpe: "—",
      foerderung: "0 % MwSt.",
    },
    description:
      "PV-Anlage auf Ost-West-geteiltem Dach für maximale Eigennutzung über den Tagesverlauf. Kombination mit Huawei-Speicher für hohen Eigenverbrauch. Familie nutzt auch E-Auto, das überwiegend mit Solarstrom lädt.",
    result: "Eigenverbrauchsquote 78 %, Stromrechnung um 85 % reduziert",
    image: "/images/referenzen/projekt-2.jpg",
    placeholder: true,
    color: "#1a6fa8",
  },
  {
    id: 3,
    type: "Wärmepumpe Altbau",
    title: "Altbau-Sanierung, Heizungstausch",
    location: "Seligenstadt",
    year: "2023",
    specs: {
      pvLeistung: "—",
      speicher: "—",
      waermepumpe: "Luft-Wasser 14 kW",
      foerderung: "BEG 65 %",
    },
    description:
      "Baujahr 1978, Sanierungsstand mittel. Nach unserer Analyse war eine Luft-Wasser-Wärmepumpe bei bestehenden Radiatoren wirtschaftlich sinnvoll. Installation inkl. Hydraulikabgleich. Fördersatz durch Einkommens-Bonus auf 65 % erhöht.",
    result: "Heizkosten von ~4.200 €/Jahr (Öl) auf ~1.100 €/Jahr gesenkt",
    image: "/images/referenzen/projekt-3.jpg",
    placeholder: true,
    color: "#2e7d4f",
  },
  {
    id: 4,
    type: "Photovoltaik",
    title: "Neubau, PV von Anfang an integriert",
    location: "Mühlheim am Main",
    year: "2024",
    specs: {
      pvLeistung: "14,3 kWp",
      speicher: "15 kWh",
      waermepumpe: "Erdwärme bereits vorhanden",
      foerderung: "0 % MwSt. + KfW",
    },
    description:
      "Neubau EFH mit großem Süddach. PV-Anlage von Anfang an in die Gebäudeplanung integriert. Zusammen mit der bereits geplanten Erdwärme-Anlage entsteht ein nahezu autarkes Energiesystem.",
    result: "Autarkiegrad über 80 %, KfW-Kredit genutzt",
    image: "/images/referenzen/projekt-4.jpg",
    placeholder: true,
    color: "#7c3aed",
  },
  {
    id: 5,
    type: "Photovoltaik + Wärmepumpe",
    title: "Reihenhaus, Komplettsanierung",
    location: "Offenbach",
    year: "2023",
    specs: {
      pvLeistung: "6,9 kWp",
      speicher: "6 kWh",
      waermepumpe: "Luft-Wasser 8 kW",
      foerderung: "BEG 70 %",
    },
    description:
      "Kleines Reihenhaus, begrenzte Dachfläche. Wir haben die Anlage auf 6,9 kWp optimiert und perfekt auf die Wärmepumpe abgestimmt. Maximale Förderquote von 70 % durch Kombination aller Boni erreicht.",
    result: "Nettoinvestition Wärmepumpe nach Förderung: ca. 4.200 €",
    image: "/images/referenzen/projekt-5.jpg",
    placeholder: true,
    color: "#f5a800",
  },
  {
    id: 6,
    type: "PV-Wartung & Modernisierung",
    title: "Bestandsanlage, Leistungsoptimierung",
    location: "Frankfurt Umland",
    year: "2024",
    specs: {
      pvLeistung: "7,5 kWp (Bestand)",
      speicher: "9 kWh nachgerüstet",
      waermepumpe: "—",
      foerderung: "—",
    },
    description:
      "10 Jahre alte PV-Anlage mit defektem Wechselrichter. Austausch des Wechselrichters, professionelle Reinigung und Nachrüstung eines Batteriespeichers. Ertrag um 18 % gesteigert.",
    result: "Ertragssteigerung 18 % nach Wartung & Optimierung",
    image: "/images/referenzen/projekt-6.jpg",
    placeholder: true,
    color: "#1a6fa8",
  },
];

const statsBar = [
  { value: siteConfig.projectsCompleted + "+", label: "Projekte abgeschlossen" },
  { value: "4,9 / 5", label: "Durchschnittliche Bewertung" },
  { value: siteConfig.yearsExperience + " J.", label: "Erfahrung" },
  { value: siteConfig.mainRegion, label: "Einsatzgebiet" },
];

export default function ReferenzenPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071428 0%, #0e2244 60%, #172e5e 100%)" }}
      >
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Referenzen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Referenzprojekte –{" "}
              <span style={{ color: "#f5a800" }}>echte Ergebnisse aus der Region.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Über {siteConfig.projectsCompleted} abgeschlossene Projekte im
              Rhein-Main-Gebiet. Hier sehen Sie eine Auswahl – von der kleinen
              PV-Anlage bis zur kompletten Energielösung mit Wärmepumpe und
              Speicher.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsBar.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: "#f5a800" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Projekte"
            title="Ausgewählte Referenzen"
            subtitle="Jedes Projekt ist individuell – wie das Haus dahinter. Hier sehen Sie, was möglich ist."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image placeholder */}
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)` }}
                >
                  <div className="text-center p-4">
                    <div className="text-4xl font-black mb-1" style={{ color: project.color, opacity: 0.3 }}>
                      {String(project.id).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      📷 Projektfoto hier einfügen
                    </div>
                    <div className="text-[10px] text-slate-300 mt-1">
                      Datei: /public/images/referenzen/projekt-{project.id}.jpg
                    </div>
                  </div>
                  {/* Type Badge */}
                  <div
                    className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: project.color }}
                  >
                    {project.type}
                  </div>
                  {/* Year */}
                  <div className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-white/80 text-slate-600">
                    {project.year}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5" style={{ color: "#f5a800" }} />
                    <span className="text-xs font-medium text-slate-500">{project.location}</span>
                  </div>
                  <h3 className="font-bold text-[#071428] mb-2 text-sm leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {project.specs.pvLeistung !== "—" && (
                      <div className="text-[10px] px-2 py-1 rounded-lg bg-[#f8fafc] border border-slate-100">
                        <span className="text-slate-400">PV: </span>
                        <span className="font-semibold text-[#071428]">{project.specs.pvLeistung}</span>
                      </div>
                    )}
                    {project.specs.speicher !== "—" && (
                      <div className="text-[10px] px-2 py-1 rounded-lg bg-[#f8fafc] border border-slate-100">
                        <span className="text-slate-400">Speicher: </span>
                        <span className="font-semibold text-[#071428]">{project.specs.speicher}</span>
                      </div>
                    )}
                    {project.specs.waermepumpe !== "—" && (
                      <div className="text-[10px] px-2 py-1 rounded-lg bg-[#f8fafc] border border-slate-100 col-span-2">
                        <span className="text-slate-400">WP: </span>
                        <span className="font-semibold text-[#071428]">{project.specs.waermepumpe}</span>
                      </div>
                    )}
                    {project.specs.foerderung !== "—" && (
                      <div
                        className="text-[10px] px-2 py-1 rounded-lg col-span-2"
                        style={{ background: "rgba(245,168,0,0.08)", color: "#f5a800" }}
                      >
                        <span className="font-semibold">Förderung: {project.specs.foerderung}</span>
                      </div>
                    )}
                  </div>

                  {/* Result */}
                  <div
                    className="text-xs font-semibold px-3 py-2 rounded-lg flex items-start gap-2"
                    style={{ background: "rgba(46,125,79,0.08)", color: "#2e7d4f" }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    {project.result}
                  </div>

                  {project.placeholder && (
                    <p className="text-[9px] text-slate-300 mt-2 text-center">
                      * Beispielprojekt – bitte durch echte Projektefotos und -daten ersetzen
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm mb-5">
              Das sind nur einige unserer Projekte. Sprechen Sie uns an – wir zeigen
              Ihnen weitere Referenzen aus Ihrer Region.
            </p>
            <CTAButton href="/kontakt" arrow>
              Referenzen aus Ihrer Region anfragen
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Kundenstimmen"
            title="Was unsere Kunden sagen"
            subtitle="Echte Rückmeldungen von Hausbesitzern aus dem Rhein-Main-Gebiet."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100"
              >
                <Quote className="w-6 h-6 mb-3 opacity-20" style={{ color: "#f5a800" }} />
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-bold text-[#071428] text-sm">{t.name}</div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3" style={{ color: "#f5a800" }} />
                      {t.location}
                    </div>
                    <div className="text-xs mt-1 font-medium" style={{ color: "#f5a800" }}>
                      {t.project}
                    </div>
                  </div>
                  <div className="flex shrink-0">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#f5a800" }} />
                    ))}
                  </div>
                </div>
                {t.placeholder && (
                  <p className="text-[9px] text-slate-300 mt-3">
                    * Beispieltestimonial – bitte durch echte Kundenbewertung ersetzen
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ihr Projekt könnte das nächste sein.
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Kostenlose Erstberatung – wir kommen zu Ihnen und analysieren Ihre
            individuelle Situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Jetzt Beratung anfragen
            </CTAButton>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Kontakt"
            title="Anfrage stellen"
            subtitle="Teilen Sie uns Ihr Vorhaben mit – wir melden uns schnell."
          />
          <ContactForm />
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
