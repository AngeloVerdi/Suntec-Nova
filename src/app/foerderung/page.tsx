import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Banknote,
  TrendingDown,
  Shield,
  Info,
  Phone,
  FileText,
  Home,
  Zap,
  Plug,
  CalendarCheck,
} from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.foerderung.title,
  description: siteConfig.seo.foerderung.description,
  keywords: siteConfig.seo.foerderung.keywords,
  alternates: { canonical: `${siteConfig.website}/foerderung` },
  openGraph: {
    title: siteConfig.seo.foerderung.title,
    description: siteConfig.seo.foerderung.description,
    url: `${siteConfig.website}/foerderung`,
  },
};

const beg = [
  {
    bonus: "Grundförderung",
    percent: "30 %",
    condition: "Für alle Hausbesitzer beim Heizungstausch auf Wärmepumpe",
    color: "#f5a800",
  },
  {
    bonus: "Klimageschwindigkeits-Bonus",
    percent: "+ 20 %",
    condition: "Wenn eine funktionierende Gas- oder Ölheizung vorzeitig ersetzt wird (bis 2028)",
    color: "#d4900a",
  },
  {
    bonus: "Einkommens-Bonus",
    percent: "+ 30 %",
    condition: "Für Haushalte mit einem zu versteuernden Einkommen bis 40.000 Euro/Jahr",
    color: "#1a6fa8",
  },
  {
    bonus: "Effizienz-Bonus",
    percent: "+ 5 %",
    condition: "Für Wärmepumpen mit natürlichem Kältemittel oder Umweltwärme aus Wasser/Erde",
    color: "#2e7d4f",
  },
];

const pvFoerderung = [
  {
    icon: TrendingDown,
    title: "0 % Mehrwertsteuer",
    description:
      "Seit dem 1. Januar 2023 gilt Nullsteuersatz auf die Lieferung und Installation von Photovoltaikanlagen auf Wohngebäuden. Das spart sofort 19 % auf den Anlagenpreis – ohne Antrag, automatisch.",
    tag: "Seit 01.01.2023",
  },
  {
    icon: Banknote,
    title: "Einspeisevergütung",
    description:
      "Für jede ins Netz eingespeiste Kilowattstunde erhalten Sie die gesetzliche Einspeisevergütung. Aktuell je nach Anlagengröße zwischen 8 und 13 Cent/kWh – für 20 Jahre garantiert.",
    tag: "20 Jahre gesetzlich garantiert",
  },
  {
    icon: Shield,
    title: "KfW 270 – Erneuerbare Energien Standard",
    description:
      "Der KfW-Kredit 270 finanziert Ihre Photovoltaikanlage zu günstigen Konditionen – bis zu 150 Mio. Euro Kreditvolumen, lange Laufzeiten, kein Eigenkapital erforderlich.",
    tag: "Bis zu 150 Mio. € Kreditvolumen",
  },
  {
    icon: Zap,
    title: "Speicherförderung (Länder & Kommunen)",
    description:
      "Einige Bundesländer und Kommunen bieten zusätzliche Zuschüsse für Batteriespeicher. In Hessen gibt es je nach Region zusätzliche Programme. Wir prüfen, was für Sie verfügbar ist.",
    tag: "Regional unterschiedlich",
  },
];

const foerderFaq = siteConfig.faqItems.filter((f) =>
  f.question.toLowerCase().includes("förderung") ||
  f.question.toLowerCase().includes("kosten") ||
  f.question.toLowerCase().includes("lohnt")
);

const processStepsFoerderung = [
  {
    step: "01",
    title: "Antrag vor Baubeginn stellen",
    description:
      "Die BEG-Förderung muss VOR Beauftragung des Handwerkers beantragt werden. Wir erinnern Sie rechtzeitig und stellen den Antrag für Sie.",
  },
  {
    step: "02",
    title: "Bewilligungsbescheid abwarten",
    description:
      "Nach Antragstellung beim BAFA erhalten Sie in der Regel innerhalb weniger Wochen den Bewilligungsbescheid. Erst dann darf mit dem Bau begonnen werden.",
  },
  {
    step: "03",
    title: "Installation durch Fachbetrieb",
    description:
      "SunTec Nova installiert Ihre Anlage fachgerecht. Alle notwendigen Nachweise werden für den Verwendungsnachweis dokumentiert.",
  },
  {
    step: "04",
    title: "Verwendungsnachweis einreichen",
    description:
      "Nach Fertigstellung reichen wir gemeinsam mit Ihnen den Verwendungsnachweis ein. Danach wird der Zuschuss auf Ihr Konto überwiesen.",
  },
];

export default function FoerderungPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundImage: "url('/images/foerderung.jpg')", backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,20,40,0.90) 0%, rgba(14,34,68,0.82) 100%)" }} />
        <div
          className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Förderung</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,168,0,0.2)", color: "#ffc324" }}
            >
              <Banknote className="w-3.5 h-3.5" />
              Aktuelle Förderprogramme 2025/2026
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Bis zu 70 % Förderung –{" "}
              <span style={{ color: "#f5a800" }}>wir beantragen alles für Sie.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Der Staat beteiligt sich erheblich an Ihrer Energiewende. Für
              Wärmepumpen gibt es die Bundesförderung BEG mit bis zu 70 %
              Zuschuss. Für Photovoltaik gilt 0 % Mehrwertsteuer. Wir kennen
              alle aktuellen Programme und holen das Maximum für Sie heraus.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <CTAButton href="/kontakt" size="lg" arrow>
                Förderung prüfen lassen
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
                "Antragsstellung inklusive",
                "Bis 70 % BEG (Wärmepumpe)",
                "0 % MwSt. Photovoltaik",
                "KfW-Finanzierung möglich",
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

      {/* ─── BEG FÖRDERUNG WÄRMEPUMPE ─────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Bundesförderung Effiziente Gebäude (BEG)"
            title="Wärmepumpe: Bis zu 70 % Förderung"
            subtitle="Die BEG ist das größte staatliche Förderprogramm für Heizungsanlagen. Verschiedene Boni lassen sich kombinieren – wir zeigen Ihnen, was Sie bekommen."
          />

          {/* Bonus-Übersicht */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {beg.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
                <div
                  className="text-3xl font-black shrink-0 leading-none mt-1"
                  style={{ color: item.color }}
                >
                  {item.percent}
                </div>
                <div>
                  <h3 className="font-bold text-[#071428] mb-1">{item.bonus}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.condition}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Kombinierbarkeit */}
          <div
            className="rounded-2xl p-8 mb-8"
            style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Maximale Kombination: bis zu 70 %
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Grundförderung (30 %) + Klimageschwindigkeits-Bonus (20 %) +
                  Einkommens-Bonus (30 %) = bis zu 70 % der förderfähigen Kosten.
                  Das bedeutet: Bei einer Investition von 20.000 Euro bekommen Sie
                  bis zu 14.000 Euro Zuschuss – und zahlen nur 6.000 Euro selbst.
                </p>
              </div>
              <div className="shrink-0 text-center">
                <div className="text-6xl font-black" style={{ color: "#f5a800" }}>70 %</div>
                <div className="text-white/60 text-xs mt-1">max. Förderquote</div>
              </div>
            </div>
          </div>

          {/* Wichtiger Hinweis */}
          <div
            className="rounded-2xl p-5 border-l-4 flex gap-3"
            style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}
          >
            <Info className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
            <div>
              <p className="text-sm font-semibold text-[#071428] mb-1">
                Wichtig: Antrag vor Beauftragung stellen
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Der BEG-Antrag muss zwingend vor Beauftragung des Handwerkers
                beim BAFA gestellt werden. Andernfalls entfällt der Anspruch.
                Wir begleiten Sie durch den gesamten Prozess und erinnern Sie
                an alle Fristen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PV FÖRDERUNG ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Förderung Photovoltaik"
            title="Solar: Steuervorteil, Vergütung & Kredit"
            subtitle="Für Photovoltaikanlagen gibt es mehrere attraktive Förderinstrumente – die meisten gelten automatisch, ohne aufwändige Antragstellung."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {pvFoerderung.map((item, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(245,168,0,0.1)" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#f5a800" }} />
                </div>
                <div
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{ background: "rgba(245,168,0,0.1)", color: "#f5a800" }}
                >
                  {item.tag}
                </div>
                <h3 className="text-base font-bold text-[#071428] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EEG EINSPEISEVERGÜTUNG 2026 ─────────────────── */}
      <section className="py-20 bg-[#071428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Headline */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,168,0,0.15)", color: "#ffc324" }}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Gesetz § 21 EEG 2023 – Gültig in 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Strom einspeisen &{" "}
              <span style={{ color: "#f5a800" }}>20 Jahre lang Geld verdienen.</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Wer 2026 eine Photovoltaikanlage installiert, sichert sich die gesetzliche
              Einspeisevergütung nach § 21 EEG 2023 – für volle 20 Jahre ab Inbetriebnahme.
              Jede überschüssige Kilowattstunde, die ins öffentliche Netz fließt, wird
              automatisch vergütet. Kein Antrag, kein Aufwand – es funktioniert von selbst.
            </p>
          </div>

          {/* Vergütungssätze 2026 */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#f5a800" }}>
                ca. 8 ct
              </div>
              <div className="text-white font-semibold text-sm mb-1">pro kWh Einspeisung</div>
              <div className="text-slate-400 text-xs">Anlagen ≤ 10 kWp (Überschusseinspeisung)</div>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#f5a800" }}>
                ca. 12 ct
              </div>
              <div className="text-white font-semibold text-sm mb-1">pro kWh Volleinspeisung</div>
              <div className="text-slate-400 text-xs">Anlagen ≤ 10 kWp (alles ins Netz)</div>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: "#f5a800" }}>
                20 Jahre
              </div>
              <div className="text-white font-semibold text-sm mb-1">Vergütungsgarantie</div>
              <div className="text-slate-400 text-xs">Gesetzlich fixiert ab Inbetriebnahme</div>
            </div>
          </div>

          {/* Erklärungsbox */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(245,168,0,0.15)" }}>
                  <Plug className="w-5 h-5" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-white font-bold">Wie funktioniert Einspeisung?</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  "Ihre Anlage produziert tagsüber Solarstrom",
                  "Was Sie selbst nicht verbrauchen, fließt automatisch ins öffentliche Netz",
                  "Der Netzbetreiber misst und vergütet jede eingespeiste kWh",
                  "Die Vergütung wird monatlich oder jährlich auf Ihr Konto überwiesen",
                  "Kein Antrag nötig – der Anspruch entsteht automatisch mit der Inbetriebnahme",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(245,168,0,0.15)" }}>
                  <CalendarCheck className="w-5 h-5" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-white font-bold">Warum jetzt 2026 wichtig ist</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  "Die Einspeisevergütung gilt noch in vollem Umfang für alle Neuanlagen 2026",
                  "Die Vergütungssätze sinken laut EEG halbjährlich (Degression) – wer früher baut, sichert sich höhere Sätze",
                  "Der Eigenverbrauchsvorteil + Einspeisevergütung zusammen amortisieren Ihre Anlage deutlich schneller",
                  "Für 10 kWp-Anlage ca. 800–1.000 € Einspeisevergütung pro Jahr zusätzlich zum Eigenverbrauch",
                  "Mit Speicher: Eigenverbrauch maximieren und Einspeisevergütung als Bonus kassieren",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hinweis + CTA */}
          <div
            className="rounded-2xl p-6 border-l-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.07)" }}
          >
            <Info className="w-6 h-6 shrink-0" style={{ color: "#f5a800" }} />
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Rechtliche Grundlage: § 21 EEG 2023</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Die Einspeisevergütung ist gesetzlich verankert und gilt für alle Anlagen, die beim
                Netzbetreiber angemeldet sind. Die angegebenen Sätze (ca. 8 ct/kWh bzw. ca. 12 ct/kWh
                Volleinspeisung) sind Richtwerte für 2026 – die exakten Sätze hängen vom
                Inbetriebnahmedatum ab. Wir ermitteln den aktuellen Tarif für Sie.
              </p>
            </div>
            <CTAButton href="/kontakt" className="shrink-0">
              Vergütung berechnen
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── ANTRAGSPROZESS ───────────────────────────────── */}
      <section className="py-20 bg-[#071428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Förderantrag"
            title="So läuft der Förderantrag ab"
            subtitle="Wir übernehmen den gesamten Bürokratieaufwand – Sie müssen sich um nichts kümmern."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processStepsFoerderung.map((step, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5">
                <div className="text-5xl font-black mb-4 leading-none" style={{ color: "rgba(245,168,0,0.3)" }}>
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <FileText className="w-8 h-8 shrink-0" style={{ color: "#f5a800" }} />
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1">Wir kümmern uns um alles</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Von der Antragsvorbereitung über die Einreichung beim BAFA bis zur
                Verwendungsnachweis-Dokumentation – SunTec Nova begleitet Sie durch
                den gesamten Förderprozess. Sie unterschreiben, wir kümmern uns.
              </p>
            </div>
            <CTAButton href="/kontakt" className="shrink-0">
              Jetzt starten
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── KOMBINATIONSBEISPIEL ─────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Rechenbeispiel"
            title="Was bleibt nach Förderung übrig?"
            subtitle="Konkrete Beispiele – natürlich abhängig von Ihrer individuellen Situation."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wärmepumpe Beispiel */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,168,0,0.1)" }}>
                  <Home className="w-5 h-5" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-lg font-bold text-[#071428]">Beispiel: Wärmepumpe</h3>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Investitionskosten gesamt", value: "22.000 €", neutral: true },
                  { label: "Grundförderung (30 %)", value: "− 6.600 €", positive: true },
                  { label: "Klimageschwindigkeits-Bonus (20 %)", value: "− 4.400 €", positive: true },
                  { label: "Ihr Eigenanteil", value: "11.000 €", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-2.5 px-3 rounded-lg ${row.highlight ? "border-2" : "border border-slate-100"}`}
                    style={row.highlight ? { borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" } : {}}
                  >
                    <span className={`text-sm ${row.highlight ? "font-bold text-[#071428]" : "text-slate-600"}`}>
                      {row.label}
                    </span>
                    <span
                      className={`text-sm font-bold ${row.positive ? "text-green-600" : row.highlight ? "" : "text-[#071428]"}`}
                      style={row.highlight ? { color: "#f5a800" } : {}}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                * Beispielrechnung ohne Einkommens-Bonus. Mit Einkommens-Bonus wären es
                nur ca. 5.000 € Eigenanteil. Individuelle Berechnung auf Anfrage.
              </p>
            </div>

            {/* Photovoltaik Beispiel */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,168,0,0.1)" }}>
                  <Zap className="w-5 h-5" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-lg font-bold text-[#071428]">Beispiel: PV-Anlage 10 kWp</h3>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Brutto-Anlagenpreis", value: "16.000 €", neutral: true },
                  { label: "0 % MwSt. (automatisch)", value: "− 0 €*", positive: true },
                  { label: "Jährliche Einspeisevergütung ca.", value: "+ 800 €/J.", positive: true },
                  { label: "Ihre Investition (netto)", value: "16.000 €", highlight: true },
                  { label: "Amortisation ca.", value: "9–11 Jahre", highlight: false },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-2.5 px-3 rounded-lg ${row.highlight ? "border-2" : "border border-slate-100"}`}
                    style={row.highlight ? { borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" } : {}}
                  >
                    <span className={`text-sm ${row.highlight ? "font-bold text-[#071428]" : "text-slate-600"}`}>
                      {row.label}
                    </span>
                    <span
                      className={`text-sm font-bold ${row.positive ? "text-green-600" : row.highlight ? "" : "text-[#071428]"}`}
                      style={row.highlight ? { color: "#f5a800" } : {}}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                * Seit 01.01.2023 gilt automatisch 0 % MwSt. auf PV-Anlagen – kein gesonderter Antrag nötig.
                Einspeisevergütung variiert je nach Einspeisung und Tarif.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm mb-5">
              Lassen Sie uns gemeinsam Ihre individuelle Förderung berechnen –
              kostenlos und unverbindlich.
            </p>
            <CTAButton href="/kontakt" size="lg" arrow>
              Individuelle Förderberechnung anfragen
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <FAQ
        items={foerderFaq.length >= 3 ? foerderFaq : siteConfig.faqItems.slice(3, 7)}
        label="FAQ Förderung"
        title="Häufige Fragen zur Förderung"
        subtitle="Alles, was Sie über BEG, KfW und Co. wissen müssen – verständlich erklärt."
      />

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keine Förderung verschenken.
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Wir prüfen kostenlos, welche Förderung für Sie gilt – und beantragen
            alles für Sie. Kontaktieren Sie uns jetzt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Förderung berechnen lassen
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
            title="Förderberatung anfragen"
            subtitle="Teilen Sie uns mit, was Sie planen – wir berechnen Ihre mögliche Förderung."
          />
          <ContactForm />
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
