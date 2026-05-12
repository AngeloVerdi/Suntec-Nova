import type { Metadata } from "next";
import Link from "next/link";
import {
  Sun,
  Battery,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingDown,
  Home,
  Leaf,
  BarChart2,
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
  title: siteConfig.seo.photovoltaik.title,
  description: siteConfig.seo.photovoltaik.description,
  keywords: siteConfig.seo.photovoltaik.keywords,
  alternates: { canonical: `${siteConfig.website}/photovoltaik` },
  openGraph: {
    title: siteConfig.seo.photovoltaik.title,
    description: siteConfig.seo.photovoltaik.description,
    url: `${siteConfig.website}/photovoltaik`,
  },
};

const pvSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Photovoltaik Installation",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    telephone: siteConfig.phone,
  },
  areaServed: siteConfig.serviceAreas.map((a) => a.name).join(", "),
  description: "Planung und Installation von Photovoltaikanlagen mit optionalem Batteriespeicher im Rhein-Main-Gebiet.",
};

const pvVorteile = [
  {
    icon: TrendingDown,
    title: "Stromkosten dauerhaft senken",
    description:
      "Mit einer eigenen Solaranlage produzieren Sie Ihren Strom selbst – und zahlen dafür keinen Strompreis. Die Einsparungen summieren sich über die Laufzeit auf Zehntausende Euro.",
  },
  {
    icon: Zap,
    title: "Eigenstrom statt teurer Netzstrom",
    description:
      "Tagsüber nutzen Sie Ihren Solarstrom direkt – für alle Verbraucher im Haus. Mit Speicher auch nachts und an bewölkten Tagen.",
  },
  {
    icon: BarChart2,
    title: "Einspeisevergütung",
    description:
      "Überschüssigen Strom speisen Sie ins Netz ein und erhalten dafür die gesetzliche Vergütung – passives Einkommen vom Dach.",
  },
  {
    icon: Leaf,
    title: "Klimaschonend & nachhaltig",
    description:
      "Solarstrom ist emissionsfrei. Jede Kilowattstunde Eigenstrom schont das Klima und reduziert Ihren CO₂-Abdruck spürbar.",
  },
  {
    icon: Home,
    title: "Wertsteigerung der Immobilie",
    description:
      "Eine Photovoltaikanlage ist Ausstattungsmerkmal und Investition zugleich – sie steigert den Wert Ihrer Immobilie nachweislich.",
  },
  {
    icon: Battery,
    title: "Speicher für noch mehr Unabhängigkeit",
    description:
      "Ein Batteriespeicher erhöht Ihren Eigenverbrauch auf bis zu 80 %. Sie kaufen deutlich weniger Strom vom Netz – das macht Sie unabhängiger.",
  },
];

const pvFaq = siteConfig.faqItems.filter((f) =>
  f.question.toLowerCase().includes("photovoltaik") ||
  f.question.toLowerCase().includes("speicher") ||
  f.question.toLowerCase().includes("anlage") ||
  f.question.toLowerCase().includes("förderung")
);

export default function PhotovoltaikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pvSchema) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundImage: "url('/images/pv-installation.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,20,40,0.90) 0%, rgba(14,34,68,0.82) 100%)" }} />
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffc324, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Photovoltaik</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,168,0,0.2)", color: "#ffc324" }}
            >
              <Sun className="w-3.5 h-3.5" />
              Photovoltaik Hanau & Rhein-Main
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Eigener Strom vom Dach –{" "}
              <span style={{ color: "#f5a800" }}>Stromkosten dauerhaft senken.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              SunTec Nova plant und installiert Ihre Photovoltaikanlage im
              Rhein-Main-Gebiet – maßgeschneidert, wirtschaftlich optimiert und
              mit allem was dazugehört: Beratung, Anmeldung, Förderung,
              Inbetriebnahme.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <CTAButton href="/kontakt" size="lg" arrow>
                Kostenlose PV-Beratung anfragen
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
                "0 % Mehrwertsteuer",
                "Inklusive Netzanmeldung",
                "Speicher optional",
                "Kombination mit Wärmepumpe",
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

      {/* ─── VORTEILE ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Warum Photovoltaik?"
            title="Ihre eigene Solaranlage – die Vorteile auf einen Blick"
            subtitle="Eine Photovoltaikanlage ist heute eine der rentabelsten Investitionen für Hauseigentümer – mit kurzer Amortisationszeit und langer Nutzungsdauer."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pvVorteile.map((item, i) => (
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

      {/* ─── WIRTSCHAFTLICHKEIT ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
              >
                Wirtschaftlichkeit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071428] leading-tight mb-4">
                Wann rechnet sich eine Photovoltaikanlage?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Kurze Antwort: fast immer. Die Amortisationszeit liegt heute
                typischerweise bei 8 bis 12 Jahren – bei einer Anlagenlebensdauer
                von 25 bis 30 Jahren. Das bedeutet 15 bis 20 Jahre nahezu
                kostenloser Strom.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Stromverbrauch ab 3.500 kWh/Jahr – Anlage lohnt sich",
                  "Geeignetes Dach (Süd, West oder Ost) – wir prüfen kostenlos",
                  "0 % Mehrwertsteuer auf Anlage und Installation seit 2023",
                  "Einspeisevergütung für überschüssigen Strom",
                  "KfW-Finanzierung für günstige Kreditkonditionen",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <CTAButton href="/kontakt" arrow>
                Wirtschaftlichkeit prüfen lassen
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8–12 J.", label: "Amortisationszeit", sub: "typisch bei Einfamilienhaus" },
                { value: "25–30 J.", label: "Anlagenlebensdauer", sub: "bei hochwertigen Modulen" },
                { value: "bis 80 %", label: "Eigenverbrauch", sub: "mit Batteriespeicher" },
                { value: "0 %", label: "Mehrwertsteuer", sub: "seit Januar 2023" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border border-slate-100 bg-[#f8fafc] text-center shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: "#f5a800" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#071428] mb-0.5">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPEICHER SECTION ─────────────────────────────── */}
      <section id="speicher" className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-2xl p-8 text-white order-2 lg:order-1"
              style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(245,168,0,0.2)" }}
              >
                <Battery className="w-7 h-7" style={{ color: "#f5a800" }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Batteriespeicher – lohnt er sich?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Ein Batteriespeicher kostet zwischen 5.000 und 15.000 Euro je
                nach Kapazität. Er lohnt sich, wenn Sie:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Tagsüber häufig abwesend sind",
                  "Nachts oder abends viel Strom verbrauchen",
                  "Eine Wärmepumpe betreiben",
                  "Ein Elektrofahrzeug laden möchten",
                  "Notstromfähigkeit wünschen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href="/kontakt" arrow>
                Speicher anfragen
              </CTAButton>
            </div>
            <div className="order-1 lg:order-2">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
              >
                Batteriespeicher
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071428] leading-tight mb-4">
                Strom, wann immer Sie ihn brauchen.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom rund um
                die Uhr – auch nachts, an bewölkten Tagen und in den
                Wintermonaten. Sie werden drastisch unabhängiger vom öffentlichen
                Stromnetz.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "bis 80 %", label: "Eigenverbrauch" },
                  { value: "5–20 kWh", label: "Speicherkapazitäten" },
                  { value: "10+ J.", label: "Lebensdauer Speicher" },
                  { value: "smart", label: "Home-Integration" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                    <div className="font-black text-lg text-[#071428]">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KOMBINATION MIT WP ───────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
          >
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                Tipp vom Experten
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                PV + Wärmepumpe = maximale Einsparung
              </h3>
              <p className="text-white/80 leading-relaxed">
                Wenn Sie ohnehin eine neue Heizung planen: Kombinieren Sie die
                Wärmepumpe mit Ihrer neuen Photovoltaikanlage. Wir planen beide
                Systeme perfekt aufeinander abgestimmt – und Sie profitieren
                doppelt: günstige Energie und günstige Förderung.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/waermepumpe"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#071428] rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
              >
                Wärmepumpe entdecken
                <ArrowRight className="w-4 h-4" />
              </Link>
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
        items={pvFaq.length >= 4 ? pvFaq : siteConfig.faqItems.slice(0, 6)}
        label="FAQ Photovoltaik"
        title="Ihre Fragen zur Photovoltaik"
        subtitle="Transparent beantwortet – damit Sie eine fundierte Entscheidung treffen können."
      />

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Photovoltaik in Hanau & Rhein-Main
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Lassen Sie Ihr Dach prüfen und erhalten Sie eine kostenlose
            Wirtschaftlichkeitsberechnung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Kostenlose PV-Beratung sichern
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
            title="PV-Anlage anfragen"
            subtitle="Teilen Sie uns kurz Ihr Vorhaben mit – wir erstellen Ihnen ein individuelles Angebot."
          />
          <ContactForm />
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
