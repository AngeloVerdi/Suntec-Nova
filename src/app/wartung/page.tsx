import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  CheckCircle,
  Shield,
  TrendingUp,
  AlertTriangle,
  Phone,
  ClipboardList,
  Zap,
} from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.wartung.title,
  description: siteConfig.seo.wartung.description,
  keywords: siteConfig.seo.wartung.keywords,
  alternates: { canonical: `${siteConfig.website}/wartung` },
  openGraph: {
    title: siteConfig.seo.wartung.title,
    description: siteConfig.seo.wartung.description,
    url: `${siteConfig.website}/wartung`,
  },
};

const wartungLeistungen = [
  {
    icon: ClipboardList,
    title: "Sichtprüfung & Inspektion",
    description:
      "Wir prüfen alle Komponenten Ihrer PV-Anlage: Module, Wechselrichter, Verkabelung, Montagesystem, Anschlusspunkte und Blitzschutz. Fehler werden frühzeitig erkannt.",
  },
  {
    icon: Zap,
    title: "Elektrische Messung",
    description:
      "Messungen von Leerlaufspannung, Kurzschlussstrom und Isolationswiderstand geben Aufschluss über den technischen Zustand und erkennen Degradation oder Defekte.",
  },
  {
    icon: TrendingUp,
    title: "Ertragsanalyse",
    description:
      "Wir vergleichen Ihren tatsächlichen Ertrag mit dem Soll-Ertrag. Abweichungen werden analysiert – so stellen wir sicher, dass Ihre Anlage optimal produziert.",
  },
  {
    icon: Shield,
    title: "Garantiedokumentation",
    description:
      "Regelmäßige professionelle Wartung ist Voraussetzung für viele Hersteller-Garantien. Wir dokumentieren alle Prüfungen und stellen Ihnen den Wartungsnachweis aus.",
  },
];

const reinigungInfo = [
  {
    label: "Verschmutzungsursachen",
    items: ["Staub & Feinstaub", "Vogelkot", "Moos & Flechten", "Blütenpollen", "Industrieruß"],
  },
  {
    label: "Wann reinigen?",
    items: [
      "Bei sichtbarer Verschmutzung",
      "Bei Ertragseinbußen > 5 %",
      "Mindestens 1× jährlich",
      "Nach Sturm oder Hagel",
      "In stadtnahen Lagen öfter",
    ],
  },
];

const wartungFaq = [
  {
    question: "Wie oft muss eine PV-Anlage gewartet werden?",
    answer:
      "Wir empfehlen eine professionelle Inspektion alle 2 Jahre sowie eine Reinigung mindestens einmal jährlich – in Regionen mit viel Staub, Vogelkot oder industrieller Belastung auch häufiger. Regelmäßige Wartung sichert die volle Leistung und ist oft Voraussetzung für die Herstellergarantie.",
  },
  {
    question: "Wie viel Ertrag verliere ich durch Verschmutzung?",
    answer:
      "Studien zeigen, dass verschmutzte Module bis zu 20–30 % ihrer Leistung verlieren können. Bei einem durchschnittlichen Haushalt mit 8 kWp-Anlage entspricht das mehreren Hundert Euro entgangener Einsparung pro Jahr. Eine professionelle Reinigung amortisiert sich schnell.",
  },
  {
    question: "Warum nicht einfach mit dem Gartenschlauch reinigen?",
    answer:
      "Haushaltswasser enthält Kalk und Mineralien, die nach dem Trocknen weiße Rückstände auf den Modulen hinterlassen und die Leistung weiter mindern. Wir verwenden vollentsalztes Wasser und spezielle Reinigungsbürsten, die die Moduloberfläche schonen.",
  },
  {
    question: "Bietet SunTec Nova Wartungsverträge an?",
    answer:
      "Ja – wir bieten sowohl Einzelleistungen als auch jährliche Wartungsverträge an. Im Rahmen eines Wartungsvertrags erhalten Sie regelmäßige Inspektionen, Reinigung und Ertragsanalysen zu vergünstigten Konditionen. Sprechen Sie uns an.",
  },
  {
    question: "Was passiert, wenn bei der Wartung ein Defekt festgestellt wird?",
    answer:
      "Wir dokumentieren alle Feststellungen und informieren Sie transparent. Kleinere Reparaturen führen wir direkt im Wartungseinsatz durch. Bei größeren Defekten erhalten Sie von uns ein Angebot. Da wir Ihre Anlage kennen, ist die Diagnose und Reparatur schnell und unkompliziert.",
  },
];

export default function WartungPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundImage: "url('/images/reinigung-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,20,40,0.90) 0%, rgba(14,34,68,0.82) 100%)" }} />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Wartung & Reinigung</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,168,0,0.2)", color: "#ffc324" }}
            >
              <Wrench className="w-3.5 h-3.5" />
              PV-Anlage Wartung & Reinigung Hanau
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Ihre PV-Anlage in{" "}
              <span style={{ color: "#f5a800" }}>Topform halten.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Eine saubere, gewartete PV-Anlage produziert bis zu 30 % mehr Strom
              als eine vernachlässigte. SunTec Nova bietet professionelle
              Wartung, Inspektion und Reinigung im Rhein-Main-Gebiet – damit
              Ihre Investition dauerhaft rentabel bleibt.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <CTAButton href="/kontakt" size="lg" arrow>
                Wartungstermin anfragen
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
                "Für alle Marken & Modelle",
                "Wartungsvertrag möglich",
                "Vollentsalztes Wasser",
                "Schriftlicher Bericht",
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

      {/* ─── WARUM WARTUNG ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
              >
                Warum Wartung wichtig ist
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071428] leading-tight mb-4">
                Vernachlässigte Anlagen verlieren Geld.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Eine PV-Anlage arbeitet jahrzehntelang – aber nur dann auf
                vollem Niveau, wenn sie regelmäßig geprüft und gereinigt wird.
                Verschmutzung, Degradation und Defekte bleiben oft unbemerkt,
                kosten aber bares Geld.
              </p>
              <div
                className="rounded-2xl p-5 border-l-4 mb-6"
                style={{ borderColor: "#e85c0c", background: "rgba(232,92,12,0.05)" }}
              >
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#e85c0c" }} />
                  <div>
                    <p className="font-semibold text-[#071428] text-sm mb-1">
                      Bis zu 30 % Ertragsverlust durch Verschmutzung
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Staub, Vogelkot und Moos können die Modulleistung
                      erheblich reduzieren – ohne dass es sichtbar auffällt.
                      Bei einer 8 kWp-Anlage entspricht das Einsparverlusten
                      von mehreren Hundert Euro pro Jahr.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Erhöhter Ertrag durch saubere Moduloberflächen",
                  "Früherkennung von Defekten spart teure Reparaturen",
                  "Erhalt der Herstellergarantie (Wartungsnachweis nötig)",
                  "Rechtssicherheit durch dokumentierte Inspektion",
                  "Verlängerung der Anlagenlebensdauer",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "bis 30 %", label: "Ertragsverlust durch Schmutz", sub: "bei stark verschmutzten Modulen" },
                { value: "2× / Jahr", label: "Empfohlene Reinigung", sub: "in städtischen Lagen" },
                { value: "1× / 2 J.", label: "Professionelle Inspektion", sub: "für Garantieerhalt" },
                { value: "10+ J.", label: "Lebensdauer", sub: "bei regelmäßiger Wartung" },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl p-5 bg-[#f8fafc] border border-slate-100 text-center">
                  <div className="font-black text-xl text-[#071428] mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-600 mb-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-400">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEISTUNGEN ───────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unser Leistungsumfang"
            title="Was unsere Wartung umfasst"
            subtitle="Eine professionelle Wartung geht weit über das Abspritzen der Module hinaus."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {wartungLeistungen.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(245,168,0,0.1)" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#f5a800" }} />
                </div>
                <h3 className="text-sm font-bold text-[#071428] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO ────────────────────────────────────────── */}
      <section className="bg-black">
        <video className="w-full max-h-[480px] object-cover" autoPlay muted loop playsInline>
          <source src="/images/video-hero.mov" type="video/quicktime" />
          <source src="/images/video-wartung.mp4" type="video/mp4" />
        </video>
      </section>

      {/* ─── REINIGUNG ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
              >
                Professionelle Reinigung
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071428] leading-tight mb-4">
                Reinigung mit System –<br />nicht mit dem Gartenschlauch.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Leitungswasser hinterlässt Kalkflecken, die die Leistung weiter
                mindern. Wir reinigen mit vollentsalztem Wasser und
                speziell entwickelten Weichbürsten, die die empfindliche
                Moduloberfläche schonen und rückstandslos reinigen.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Vollentsalztes, kalkfreies Wasser",
                  "Spezialbürsten für PV-Module",
                  "Keine aggressiven Reinigungsmittel",
                  "Vor und nach Messung des Ertrags",
                  "Dokumentiertes Ergebnis",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <CTAButton href="/kontakt" arrow>
                Reinigung anfragen
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {reinigungInfo.map((info, i) => (
                <div key={i} className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {info.label}
                  </h4>
                  <ul className="space-y-2">
                    {info.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#f5a800" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WARTUNGSVERTRAG ──────────────────────────────── */}
      <section className="py-20 bg-[#071428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.15)" }}
              >
                Wartungsvertrag
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Entspannt anlehnen –<br />wir kümmern uns.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Mit einem SunTec Nova Wartungsvertrag werden regelmäßige
                Inspektionen und Reinigungen automatisch geplant. Sie müssen
                nicht selbst daran denken – und profitieren von vergünstigten
                Konditionen.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Automatische Terminplanung",
                  "Jährliche Inspektion & Ertragsanalyse",
                  "Reinigung nach Bedarf",
                  "Dokumentation und Wartungsnachweis",
                  "Vorrangige Bearbeitung bei Defekten",
                  "Vergünstigte Konditionen gegenüber Einzeleinsatz",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <CTAButton href="/kontakt" arrow>
                Wartungsvertrag anfragen
              </CTAButton>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-lg mb-6">Unsere Wartungsleistungen</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Einzelreinigung",
                    desc: "Professionelle Modulreinigung mit vollentsalztem Wasser, inkl. Sichtprüfung",
                    tag: "Auf Anfrage",
                  },
                  {
                    name: "Jahresinspektion",
                    desc: "Vollständige technische Prüfung, elektrische Messung, Ertragsanalyse, Bericht",
                    tag: "Auf Anfrage",
                  },
                  {
                    name: "Wartungspaket",
                    desc: "Inspektion + Reinigung + Ertragsanalyse + Dokumentation – im Jahresvertrag",
                    tag: "Empfohlen",
                    highlight: true,
                  },
                ].map((pkg, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border ${pkg.highlight ? "border-[#f5a800] bg-[#f5a800]/10" : "border-white/10 bg-white/5"}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-white text-sm">{pkg.name}</h4>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: pkg.highlight ? "#f5a800" : "rgba(255,255,255,0.1)", color: "white" }}
                      >
                        {pkg.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Preise auf Anfrage – individuell nach Anlagengröße und Standort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <FAQ
        items={wartungFaq}
        label="FAQ Wartung"
        title="Fragen zur PV-Wartung & Reinigung"
        subtitle="Alles, was Sie über die Pflege Ihrer PV-Anlage wissen sollten."
      />

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PV-Anlage warten lassen – im Rhein-Main-Gebiet
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Kontaktieren Sie uns für einen Wartungstermin oder ein Angebot für
            einen Wartungsvertrag.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Wartungstermin anfragen
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
            title="Wartung anfragen"
            subtitle="Teilen Sie uns kurz Ihre Anlage und Ihren Standort mit."
          />
          <ContactForm />
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
