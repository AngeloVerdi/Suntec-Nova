import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  MapPin,
  Users,
  Award,
  Heart,
  Wrench,
  Sun,
  Phone,
  Mail,
} from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import PartnersSection from "@/components/sections/PartnersSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.ueberUns.title,
  description: siteConfig.seo.ueberUns.description,
  keywords: siteConfig.seo.ueberUns.keywords,
  alternates: { canonical: `${siteConfig.website}/ueber-uns` },
  openGraph: {
    title: siteConfig.seo.ueberUns.title,
    description: siteConfig.seo.ueberUns.description,
    url: `${siteConfig.website}/ueber-uns`,
  },
};

const values = [
  {
    icon: Heart,
    title: "Ehrlichkeit",
    description:
      "Wir sagen Ihnen, was Sinn ergibt – auch wenn das bedeutet, dass eine bestimmte Lösung für Sie gerade nicht passt. Langfristige Kundenzufriedenheit ist uns wichtiger als ein kurzfristiger Abschluss.",
  },
  {
    icon: Award,
    title: "Qualität",
    description:
      "Wir arbeiten ausschließlich mit Produkten und Partnern, hinter denen wir stehen – Viessmann, Huawei, AlphaESS, Luxor Solar und mehr. Keine Kompromisse bei Sicherheit, Leistung und Langlebigkeit.",
  },
  {
    icon: MapPin,
    title: "Regionalität",
    description:
      "Wir sind in Hanau und dem Rhein-Main-Gebiet verwurzelt. Kurze Wege, schnelle Reaktionszeiten und persönliche Beziehungen zu unseren Kunden sind uns wichtig.",
  },
  {
    icon: Wrench,
    title: "Handwerk",
    description:
      "Sorgfältige, saubere Arbeit ist unser Standard. Jede Installation wird so ausgeführt, als wäre es unser eigenes Haus. Kein Pfusch, keine halben Lösungen.",
  },
  {
    icon: Users,
    title: "Persönlichkeit",
    description:
      "Kein Callcenter, kein automatisches Ticketsystem. Sie haben von Anfang bis Ende einen echten Ansprechpartner – direkt erreichbar unter 0152 06066696.",
  },
  {
    icon: Sun,
    title: "Nachhaltigkeit",
    description:
      "Wir arbeiten an einer Energiezukunft, die sinnvoll ist. Nicht weil es Pflicht ist – sondern weil wir davon überzeugt sind, dass Solarenergie und Wärmepumpen der richtige Weg sind.",
  },
];

const milestones = [
  { year: siteConfig.foundedYear, event: "Gründung von SunTec Nova in Hanau durch Angelo Iliev" },
  { year: "2017", event: "Erste 100 erfolgreich installierte PV-Anlagen im Rhein-Main-Gebiet" },
  { year: "2020", event: "Erweiterung des Teams – nun 12+ Fachleute im Einsatz" },
  { year: "2022", event: "Partnerschaft mit führenden Marken: Viessmann, Huawei, AlphaESS" },
  { year: "2023", event: "Strategische Erweiterung: Wärmepumpen als Kernleistung eingeführt" },
  { year: "2024", event: "Über 300 Projekte abgeschlossen – im gesamten Rhein-Main-Gebiet" },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071428 0%, #0e2244 60%, #172e5e 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Über uns</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              SunTec Nova –{" "}
              <span style={{ color: "#f5a800" }}>
                Ihr Energiepartner in Hanau & Rhein-Main.
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Ein regional verwurzelter Fachbetrieb mit dem Anspruch, Photovoltaik
              und Wärmepumpen so zu planen und zu installieren, wie wir es für uns
              selbst tun würden: sorgfältig, ehrlich und auf Langfristigkeit
              ausgelegt. Gegründet und geführt von Angelo Iliev.
            </p>
          </div>
        </div>
      </section>

      {/* ─── GRÜNDER ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Card */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0">
                {/* Foto-Platzhalter */}
                <div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center text-center text-xs text-slate-400 border-2 border-dashed border-slate-200"
                  style={{ background: "rgba(245,168,0,0.05)" }}
                >
                  <div>
                    <div className="text-3xl mb-1">👤</div>
                    <div className="text-[9px] leading-snug px-1">
                      Foto Angelo<br />hier einfügen
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full"
                  style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
                >
                  Gründer & Geschäftsführer
                </div>
                <h2 className="text-2xl font-bold text-[#071428] mb-2">Angelo Iliev</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {siteConfig.founder.bio}
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 text-sm text-[#071428] hover:text-[#f5a800] transition-colors"
                  >
                    <Phone className="w-4 h-4" style={{ color: "#f5a800" }} />
                    {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-sm text-[#071428] hover:text-[#f5a800] transition-colors"
                  >
                    <Mail className="w-4 h-4" style={{ color: "#f5a800" }} />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: siteConfig.foundedYear, label: "Gründungsjahr", sub: "Hanau" },
                  { value: siteConfig.projectsCompleted + "+", label: "Projekte", sub: "erfolgreich abgeschlossen" },
                  { value: siteConfig.yearsExperience + " J.", label: "Erfahrung", sub: "in der Solarbranche" },
                  { value: siteConfig.employeeCount + "+", label: "Fachleute", sub: "im Team" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl p-5 border border-slate-100 bg-[#f8fafc] text-center">
                    <div className="text-2xl font-black text-[#071428] mb-0.5">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-600">{stat.label}</div>
                    <div className="text-[10px] text-slate-400">{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}
              >
                <h3 className="text-sm font-bold text-white mb-3">Zertifizierungen</h3>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "#f5a800" }} />
                      <span className="text-slate-300 text-xs">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORY / TIMELINE ─────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Geschichte"
            title="Entstanden aus Überzeugung."
            subtitle="Von der ersten PV-Anlage in Hanau bis zum vollständigen Energiepartner für das Rhein-Main-Gebiet."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-200" />
              <div className="space-y-6">
                {milestones.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div
                      className="w-14 text-right shrink-0 text-sm font-bold pt-1"
                      style={{ color: "#f5a800" }}
                    >
                      {item.year}
                    </div>
                    <div className="relative flex items-start gap-4 pb-2">
                      <div
                        className="w-3 h-3 rounded-full shrink-0 mt-1.5 z-10"
                        style={{ background: "#f5a800" }}
                      />
                      <p className="text-sm text-slate-600 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WERTE ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Werte"
            title="Was uns ausmacht"
            subtitle="Hinter diesen Werten steckt kein Marketing. Es sind die Prinzipien, nach denen wir jeden Tag arbeiten."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
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

      {/* ─── PARTNER ──────────────────────────────────────── */}
      <PartnersSection />

      {/* ─── REGION ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
              >
                Unser Einsatzgebiet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071428] leading-tight mb-4">
                Regional verwurzelt.<br />Persönlich verfügbar.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                SunTec Nova ist in Hanau ansässig und im gesamten Rhein-Main-Gebiet
                tätig – von Gelnhausen im Osten bis Frankfurt im Westen, von
                Aschaffenburg im Süden bis Offenbach im Norden.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Das ist kein geografisches Statement, sondern ein Versprechen: Wir
                kennen die Region, die lokalen Netzbetreiber, Genehmigungswege und
                Gegebenheiten. Kurze Wege bedeuten schnelle Termine und verlässlichen
                Service – auch nach der Installation.
              </p>
              <CTAButton href="/kontakt" arrow>
                Beratung vor Ort anfragen
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {siteConfig.serviceAreas.map((area) => (
                <div
                  key={area.slug}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#f8fafc] border border-slate-100"
                >
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                  <span className="text-sm font-medium text-[#071428]">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lernen Sie uns kennen.
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Am besten im persönlichen Gespräch – telefonisch oder bei Ihnen vor
            Ort. Angelo Iliev und das SunTec Nova-Team freuen sich auf Sie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Kontakt aufnehmen
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

      <div className="h-16 lg:hidden" />
    </>
  );
}
