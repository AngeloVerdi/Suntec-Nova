import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Thermometer,
  Sun,
  CheckCircle,
  ArrowRight,
  Home,
  Leaf,
  TrendingDown,
  Zap,
  Shield,
  Phone,
} from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ContactForm from "@/components/sections/ContactForm";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FoerderSection from "@/components/sections/FoerderSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.waermepumpe.title,
  description: siteConfig.seo.waermepumpe.description,
  keywords: siteConfig.seo.waermepumpe.keywords,
  alternates: { canonical: `${siteConfig.website}/waermepumpe` },
  openGraph: {
    title: siteConfig.seo.waermepumpe.title,
    description: siteConfig.seo.waermepumpe.description,
    url: `${siteConfig.website}/waermepumpe`,
  },
};

const waermepumpeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wärmepumpe Installation",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "DE",
    },
  },
  areaServed: siteConfig.serviceAreas.map((a) => a.name).join(", "),
  description:
    "Beratung, Planung und Installation von Luft-Wasser-, Wasser-Wasser- und Erdwärmepumpen im Rhein-Main-Gebiet.",
  serviceType: "Wärmepumpe Installation",
};

const faqWaermepumpe = siteConfig.faqItems.filter((f) =>
  f.question.toLowerCase().includes("wärmepumpe") ||
  f.question.toLowerCase().includes("förderung") ||
  f.question.toLowerCase().includes("installation") ||
  f.question.toLowerCase().includes("kombinier")
);

const vorteile = [
  {
    icon: TrendingDown,
    title: "Bis zu 75 % weniger Heizkosten",
    description:
      "Eine Wärmepumpe erzeugt aus 1 kWh Strom 3–5 kWh Wärme. Das bedeutet: drastisch niedrigere Heizkosten, besonders in Kombination mit Photovoltaik.",
  },
  {
    icon: Leaf,
    title: "Klimaschonend heizen",
    description:
      "Wärmepumpen nutzen die kostenlose Energie aus Luft, Erde oder Grundwasser. Der CO₂-Ausstoß sinkt auf einen Bruchteil fossiler Heizsysteme.",
  },
  {
    icon: Shield,
    title: "Langfristige Wertsteigerung",
    description:
      "Eine moderne Heizung erhöht den Wert Ihrer Immobilie. Energieausweis und Gebäudewert profitieren direkt vom Austausch der alten Heizung.",
  },
  {
    icon: Zap,
    title: "Kombinierbar mit Photovoltaik",
    description:
      "Das ist die perfekte Kombination: Ihre PV-Anlage liefert den günstigen Strom, den die Wärmepumpe nutzt – maximale Unabhängigkeit.",
  },
  {
    icon: Home,
    title: "Auch im Altbau möglich",
    description:
      "Moderne Wärmepumpen sind auch für Bestandsgebäude geeignet. Wir prüfen Ihre Situation und finden die passende Lösung – mit ehrlicher Bewertung.",
  },
  {
    icon: Sun,
    title: "Bis zu 70 % Förderung",
    description:
      "Die Bundesförderung (BEG) unterstützt den Heizungstausch mit erheblichen Zuschüssen. Wir beantragen die Förderung komplett für Sie.",
  },
];

const typesData = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    description:
      "Die häufigste Variante. Einfache Installation ohne Erdarbeiten – geeignet für die meisten Gebäude. Niedrige Installationskosten, gute Jahresarbeitszahl.",
    ideal: "Für die meisten Einfamilienhäuser ideal",
    color: "#f5a800",
  },
  {
    title: "Wasser-Wasser-Wärmepumpe",
    description:
      "Nutzt das Grundwasser als Wärmequelle. Besonders effizient – sehr hohe Jahresarbeitszahlen. Genehmigungspflichtig, aber langfristig sehr wirtschaftlich.",
    ideal: "Für Grundstücke mit geeignetem Grundwasser",
    color: "#1a6fa8",
  },
  {
    title: "Erdwärme-Wärmepumpe",
    description:
      "Nutzt die konstante Temperatur im Erdreich. Höchste Effizienz, unabhängig von Außentemperaturen. Erfordert Erdbohrungen oder Flächenkollektor.",
    ideal: "Für hohe Effizienz und viel Platz",
    color: "#2e7d4f",
  },
];

export default function WaermepumpePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waermepumpeSchema) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071428 0%, #0e2244 60%, #172e5e 100%)" }}
      >
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Wärmepumpe</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,168,0,0.2)", color: "#ffc324" }}
            >
              <Thermometer className="w-3.5 h-3.5" />
              Wärmepumpe Hanau & Rhein-Main
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Wärmepumpe im Rhein-Main-Gebiet –{" "}
              <span style={{ color: "#f5a800" }}>nachhaltig heizen, dauerhaft sparen.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Schluss mit teuren Öl- und Gasrechnungen. Eine moderne Wärmepumpe
              heizt Ihr Zuhause mit erneuerbarer Energie – effizient, verlässlich
              und mit bis zu 70 % staatlicher Förderung. SunTec Nova berät und
              installiert in Hanau und dem gesamten Rhein-Main-Gebiet.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <CTAButton href="/kontakt" size="lg" arrow>
                Jetzt Wärmepumpe prüfen lassen
              </CTAButton>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Beratung vor Ort",
                "Förderantrag inklusive",
                "Altbau-geeignet",
                "Kombination mit PV möglich",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WARUM WÄRMEPUMPE ─────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Warum Wärmepumpe?"
            title="Die bessere Heizung – jetzt und in Zukunft"
            subtitle="Gas- und Ölheizungen werden teurer, regulierter und müssen langfristig ersetzt werden. Eine Wärmepumpe ist die zukunftssichere Alternative – mit echten wirtschaftlichen Vorteilen."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vorteile.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(245,168,0,0.1)" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-base font-bold text-[#071428] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FÜR WEN ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Für wen lohnt sich eine Wärmepumpe?"
                title="Die Wärmepumpe passt zu Ihnen, wenn …"
                centered={false}
              />
              <div className="space-y-3">
                {[
                  "Sie eine alte Öl- oder Gasheizung haben, die ersetzt werden muss",
                  "Sie Ihr Haus modernisieren oder sanieren möchten",
                  "Sie eine Photovoltaikanlage haben oder planen",
                  "Sie langfristig unabhängig von fossilen Brennstoffen werden möchten",
                  "Sie die staatliche Förderung von bis zu 70 % nutzen möchten",
                  "Sie die Energieeffizienzklasse Ihrer Immobilie verbessern wollen",
                  "Sie im Neubau oder bei einer Kernsanierung planen",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-slate-100">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}
            >
              <h3 className="text-xl font-bold mb-2">Kostenlose Eignungsprüfung</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Sie sind sich nicht sicher, ob eine Wärmepumpe zu Ihrem
                Gebäude passt? Wir kommen zu Ihnen – kostenlos und
                unverbindlich – und prüfen vor Ort, welche Lösung für Sie
                wirtschaftlich sinnvoll ist.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Analyse Ihres Ist-Zustands",
                  "Wirtschaftlichkeitsberechnung",
                  "Förderübersicht aktuell",
                  "Empfehlung ohne Verkaufsdruck",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <CTAButton href="/kontakt" arrow>
                Kostenlos prüfen lassen
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BILD SOLAR-HAUS ──────────────────────────────── */}
      <section className="py-0 bg-white overflow-hidden">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src="/images/solar-haus.jpg"
            alt="Einfamilienhaus mit Photovoltaik und Wärmepumpe im Rhein-Main-Gebiet"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071428]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-16">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">Ihr Zuhause</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Sauber. Effizient.<br />
                <span style={{ color: "#f5a800" }}>Energieautark.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TYPEN ────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Welcher Typ passt zu Ihnen?"
            title="Die drei wichtigsten Wärmepumpentypen"
            subtitle="Je nach Gebäude, Grundstück und Budget gibt es unterschiedliche Lösungen. Wir beraten Sie ehrlich – ohne Sie in eine Richtung zu drängen."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {typesData.map((type, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div
                  className="w-2 h-16 rounded-full mb-4"
                  style={{ background: type.color }}
                />
                <h3 className="text-base font-bold text-[#071428] mb-2">{type.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{type.description}</p>
                <div
                  className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block"
                  style={{ background: `${type.color}18`, color: type.color }}
                >
                  {type.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KOMBINATION PV + WP ──────────────────────────── */}
      <section className="py-20 bg-[#071428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.15)" }}
              >
                Die ideale Kombination
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Photovoltaik + Wärmepumpe:
                <br />
                <span style={{ color: "#f5a800" }}>Maximale Unabhängigkeit.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Wenn Ihre Photovoltaikanlage tagsüber günstigen Eigenstrom
                produziert und die Wärmepumpe diesen Strom direkt nutzt, sinken
                Ihre Betriebskosten dramatisch – auf fast null an sonnigen Tagen.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Heizstrom aus eigener PV-Produktion: fast kostenlos",
                  "Eigenverbrauchsquote auf bis zu 80 % steigern",
                  "Smart-Home-Steuerung beider Systeme möglich",
                  "Förderung für PV und Wärmepumpe kombinierbar",
                  "Wir planen beide Systeme aufeinander abgestimmt",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <CTAButton href="/photovoltaik" variant="outline" arrow>
                Mehr über Photovoltaik erfahren
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Heizkosteneinsparung", value: "bis 75 %", sub: "gegenüber Gas/Öl" },
                { label: "Förderung BEG", value: "bis 70 %", sub: "der förderfähigen Kosten" },
                { label: "Eigenverbrauch mit Speicher", value: "bis 80 %", sub: "Ihres Solarstroms" },
                { label: "CO₂-Einsparung", value: "bis 90 %", sub: "gegenüber Gasheizung" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border border-white/10 bg-white/5 text-center"
                >
                  <div className="text-3xl font-black mb-1" style={{ color: "#f5a800" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white mb-0.5">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────── */}
      <ProcessSteps />

      {/* ─── FÖRDERUNG ────────────────────────────────────── */}
      <FoerderSection />

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <FAQ
        items={faqWaermepumpe.length >= 4 ? faqWaermepumpe : siteConfig.faqItems.slice(0, 6)}
        label="FAQ Wärmepumpe"
        title="Ihre Fragen zur Wärmepumpe"
        subtitle="Alles Wichtige rund um Kosten, Förderung, Technik und Ablauf – transparent erklärt."
      />

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wärmepumpe in Hanau & Rhein-Main
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Lassen Sie uns prüfen, ob eine Wärmepumpe für Ihr Haus wirtschaftlich
            sinnvoll ist. Kostenlos, persönlich, unverbindlich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Kostenlose Beratung anfragen
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
            label="Anfrage"
            title="Jetzt Wärmepumpe anfragen"
            subtitle="Schildern Sie uns Ihr Vorhaben – wir melden uns schnell."
          />
          <ContactForm />
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
