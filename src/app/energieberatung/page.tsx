import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Phone,
  Mail,
  Zap,
  Home,
  TrendingDown,
  Award,
  ClipboardList,
  Sun,
  Thermometer,
  Battery,
  ArrowRight,
  Euro,
  Shield,
} from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import WirtschaftlichkeitsRechner from "@/components/sections/WirtschaftlichkeitsRechner";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Energieberatung Hanau & Rhein-Main | ${siteConfig.companyName}`,
  description:
    "Kostenlose Energieberatung im Rhein-Main-Gebiet. SunTec Nova analysiert Ihren Energiebedarf und zeigt Ihnen, wie Sie mit Photovoltaik und Wärmepumpe dauerhaft Kosten sparen können.",
  alternates: { canonical: `${siteConfig.website}/energieberatung` },
  openGraph: {
    title: `Energieberatung Hanau & Rhein-Main | ${siteConfig.companyName}`,
    description: "Kostenlose Energieberatung – wir analysieren Ihren Energiebedarf und zeigen Ihnen die besten Lösungen für Ihr Zuhause.",
    url: `${siteConfig.website}/energieberatung`,
  },
};

const leistungen = [
  {
    icon: Home,
    title: "Gebäudeanalyse",
    description:
      "Wir analysieren Ihr Gebäude ganzheitlich: Baujahr, Dämmung, Heizungsanlage, Stromverbrauch und Dachfläche. Daraus erstellen wir eine individuelle Energiebilanz.",
  },
  {
    icon: Sun,
    title: "Photovoltaik-Potenzial",
    description:
      "Wir berechnen wie viel Solarstrom Ihr Dach produzieren kann – abhängig von Ausrichtung, Neigung und Verschattung. Inklusive Wirtschaftlichkeitsrechnung und Amortisationszeit.",
  },
  {
    icon: Thermometer,
    title: "Wärmepumpen-Eignung",
    description:
      "Nicht jedes Haus eignet sich gleich gut für eine Wärmepumpe. Wir prüfen ob Ihr Gebäude geeignet ist und welche Wärmepumpe die beste Effizienz liefert.",
  },
  {
    icon: Battery,
    title: "Stromspeicher-Beratung",
    description:
      "Ein Batteriespeicher erhöht Ihren Eigenverbrauch auf bis zu 80 %. Wir berechnen die optimale Speichergröße und prüfen die Wirtschaftlichkeit für Ihre Situation.",
  },
  {
    icon: Euro,
    title: "Förderberatung",
    description:
      "Wir informieren Sie über alle aktuellen Förderprogramme: KfW, BAFA, Bundesförderung für effiziente Gebäude (BEG) sowie regionale Fördertöpfe in Hessen.",
  },
  {
    icon: ClipboardList,
    title: "Maßnahmenplan",
    description:
      "Am Ende der Beratung erhalten Sie einen konkreten Maßnahmenplan: Was macht Sinn, in welcher Reihenfolge, was kostet es und wie viel sparen Sie dauerhaft?",
  },
];

const ablauf = [
  {
    step: "01",
    title: "Anfrage stellen",
    description: "Sie kontaktieren uns per Telefon, E-Mail oder Formular. Kostenlos und unverbindlich.",
  },
  {
    step: "02",
    title: "Vor-Ort-Termin",
    description: "Wir kommen zu Ihnen nach Hause und begutachten Ihr Gebäude persönlich – ohne Kosten.",
  },
  {
    step: "03",
    title: "Analyse & Konzept",
    description: "Wir erstellen Ihre individuelle Energiebilanz und entwickeln ein maßgeschneidertes Konzept.",
  },
  {
    step: "04",
    title: "Angebot & Förderung",
    description: "Sie erhalten ein transparentes Angebot inklusive aller Fördermöglichkeiten.",
  },
];

const vorteile = [
  "Kostenlose Erstberatung vor Ort",
  "Kein Callcenter – persönlicher Ansprechpartner",
  "Herstellerunabhängige Beratung",
  "Kombinationslösungen PV + Wärmepumpe + Speicher",
  "Förderanträge übernehmen wir für Sie",
  "Über 10 Jahre Erfahrung im Rhein-Main-Gebiet",
  "BAFA-anerkannte Fachberatung",
  "Transparente Wirtschaftlichkeitsberechnung",
];

export default function EnergieberatungPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071428 0%, #0e2244 60%, #172e5e 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Energieberatung</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,168,0,0.2)", color: "#ffc324" }}
            >
              <Zap className="w-3.5 h-3.5" />
              Kostenlose Energieberatung im Rhein-Main-Gebiet
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Energieberatung –<br />
              <span style={{ color: "#f5a800" }}>Ihr Weg zur Energiewende.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Wir analysieren Ihr Zuhause und zeigen Ihnen, wie Sie mit Photovoltaik,
              Wärmepumpe und Stromspeicher dauerhaft Energiekosten senken und
              unabhängiger werden – persönlich, kompetent und kostenlos.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/kontakt" size="lg" arrow>
                Kostenlose Beratung anfragen
              </CTAButton>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VORTEILE STRIP ───────────────────────────────── */}
      <section className="py-6 bg-[#f5a800]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Kostenlos & unverbindlich", "Vor-Ort-Termin inklusive", "Herstellerunabhängig", "Förderberatung inklusive"].map((v) => (
              <div key={v} className="flex items-center gap-2 text-sm font-bold text-[#071428]">
                <CheckCircle className="w-4 h-4 shrink-0" />
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEISTUNGEN ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Was wir prüfen"
            title="Unsere Energieberatung im Detail"
            subtitle="Eine gute Energieberatung schaut auf das Gesamtbild – nicht nur auf ein einzelnes Produkt."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {leistungen.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(245,168,0,0.1)" }}>
                  <item.icon className="w-6 h-6" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-lg font-bold text-[#071428] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABLAUF ───────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #071428 0%, #0e2244 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="So einfach geht's"
            title="Ihr Weg zur kostenlosen Beratung"
            subtitle="Von der Anfrage bis zum fertigen Konzept – wir begleiten Sie Schritt für Schritt."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {ablauf.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-black mb-4" style={{ color: "rgba(245,168,0,0.3)" }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VORTEILE ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}>
                Warum SunTec Nova
              </span>
              <h2 className="text-3xl font-bold text-[#071428] mb-6">
                Beratung, der Sie vertrauen können.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Wir sind kein Konzern und kein Callcenter. Als regionaler Fachbetrieb im
                Rhein-Main-Gebiet kennen wir die lokalen Gegebenheiten, die regionalen
                Förderprogramme und die Bedürfnisse unserer Kunden – persönlich und direkt.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {vorteile.map((v) => (
                  <div key={v} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-700">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border-l-4" style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <TrendingDown className="w-6 h-6" style={{ color: "#f5a800" }} />
                  <h3 className="font-bold text-[#071428]">Bis zu 80 % Eigenversorgung</h3>
                </div>
                <p className="text-sm text-slate-600">Mit Photovoltaik + Speicher können Sie bis zu 80 % Ihres Strombedarfs selbst decken – und damit dauerhaft unabhängig von steigenden Strompreisen werden.</p>
              </div>
              <div className="p-6 rounded-2xl border-l-4" style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6" style={{ color: "#f5a800" }} />
                  <h3 className="font-bold text-[#071428]">Bis zu 70 % Förderung</h3>
                </div>
                <p className="text-sm text-slate-600">Für Wärmepumpen gibt es bis zu 70 % staatliche Förderung. Wir beantragen alle Förderungen für Sie – von KfW bis BAFA.</p>
              </div>
              <div className="p-6 rounded-2xl border-l-4" style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6" style={{ color: "#f5a800" }} />
                  <h3 className="font-bold text-[#071428]">20 Jahre Garantie</h3>
                </div>
                <p className="text-sm text-slate-600">Qualitätsmodule mit 20 Jahren Produktgarantie und bis zu 25 Jahren Leistungsgarantie. Ihre Investition ist langfristig abgesichert.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECHNER ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Wirtschaftlichkeit prüfen"
            title="Was bringt mir eine PV-Anlage?"
            subtitle="Berechnen Sie Ihre geschätzte Ersparnis – passen Sie die Werte einfach an Ihre Situation an."
          />
          <div className="mt-10">
            <WirtschaftlichkeitsRechner />
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Jetzt anfragen"
            title="Kostenlose Energieberatung vereinbaren"
            subtitle="Schildern Sie uns kurz Ihr Vorhaben – wir melden uns innerhalb von 1–2 Werktagen."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
