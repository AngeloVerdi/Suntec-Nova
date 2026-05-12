import Link from "next/link";
import {
  Sun,
  Thermometer,
  ArrowRight,
  CheckCircle,
  TrendingDown,
  Shield,
  Users,
  Award,
  Zap,
  Battery,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import ProcessSteps from "@/components/sections/ProcessSteps";
import RegionSection from "@/components/sections/RegionSection";
import FoerderSection from "@/components/sections/FoerderSection";
import ContactForm from "@/components/sections/ContactForm";
import PartnersSection from "@/components/sections/PartnersSection";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqItems.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const services = [
  {
    icon: Sun,
    title: "Photovoltaik",
    subtitle: "Eigenstrom vom Dach",
    description:
      "Produzieren Sie Ihren eigenen Strom und senken Sie Ihre Stromrechnung dauerhaft. Wir planen und installieren Ihre PV-Anlage maßgeschneidert für Ihr Gebäude.",
    href: "/photovoltaik",
    cta: "PV-Anlage anfragen",
    highlights: ["Planung & Installation", "Speicher optional", "0 % MwSt."],
  },
  {
    icon: Thermometer,
    title: "Wärmepumpe",
    subtitle: "Nachhaltig heizen",
    description:
      "Heizen Sie mit erneuerbarer Energie – effizient, klimaschonend und mit bis zu 70 % staatlicher Förderung. Ideal kombiniert mit Ihrer Photovoltaikanlage.",
    href: "/waermepumpe",
    cta: "Wärmepumpe prüfen lassen",
    highlights: ["Bis zu 70 % BEG-Förderung", "Altbau geeignet", "Kombination mit PV"],
    featured: true,
  },
  {
    icon: Battery,
    title: "Batteriespeicher",
    subtitle: "Strom rund um die Uhr",
    description:
      "Mit einem Speicher nutzen Sie Ihren Solarstrom auch abends und nachts. Erhöhen Sie Ihren Eigenverbrauch auf bis zu 80 % und schützen Sie sich vor Strompreisschwankungen.",
    href: "/photovoltaik#speicher",
    cta: "Speicher anfragen",
    highlights: ["Bis zu 80 % Eigenverbrauch", "Notstromfähig optional", "Smart-Home-fähig"],
  },
  {
    icon: Wrench,
    title: "Wartung & Reinigung",
    subtitle: "Volle Leistung sichern",
    description:
      "Regelmäßige Wartung und professionelle Reinigung sichern die volle Leistungsfähigkeit Ihrer PV-Anlage. Wir bieten Wartungsverträge und Einzeleinsätze.",
    href: "/wartung",
    cta: "Wartung anfragen",
    highlights: ["Für alle Marken", "Wartungsvertrag möglich", "Ertragssteigerung bis 30 %"],
  },
];

const trustStats = [
  { value: siteConfig.projectsCompleted + "+", label: "abgeschlossene Projekte" },
  { value: siteConfig.yearsExperience + " Jahre", label: "Erfahrung in der Region" },
  { value: "70 %", label: "max. BEG-Förderung Wärmepumpe" },
  { value: "4,9 / 5", label: "Kundenzufriedenheit" },
];

const whyUs = [
  {
    icon: MapPin,
    title: "Regional & persönlich",
    description:
      "Wir sind im Rhein-Main-Gebiet zuhause. Kurze Wege, direkte Kommunikation, kein Callcenter.",
  },
  {
    icon: Zap,
    title: "Alles aus einer Hand",
    description:
      "Von der Beratung über die Förderanträge bis zur fertigen Anlage – ein Ansprechpartner, alles inklusive.",
  },
  {
    icon: Award,
    title: "Zertifizierte Qualität",
    description:
      "VDE-zertifiziert, SHK-Fachbetrieb, BAFA-anerkannt. Keine Kompromisse bei Sicherheit und Qualität.",
  },
  {
    icon: Users,
    title: "Individuelle Lösung",
    description:
      "Kein Standardpaket. Jedes Haus ist anders – Ihre Anlage wird präzise auf Ihre Situation geplant.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dunkler Overlay damit Text lesbar bleibt */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,20,40,0.88) 0%, rgba(14,34,68,0.80) 60%, rgba(23,46,94,0.70) 100%)" }} />
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffc324, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <MapPin className="w-3.5 h-3.5" style={{ color: "#f5a800" }} />
              <span className="text-sm text-white/80">
                Ihr Energiepartner im Rhein-Main-Gebiet
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Kosten senken,
              <br />
              <span style={{ color: "#f5a800" }}>Sonne nutzen!</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              SunTec Nova ist Ihr Partner für nachhaltige Energie – mit Erfahrung
              und Qualität bei der Installation von Solaranlagen im Rhein-Main-Gebiet.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <CTAButton href="/kontakt" size="lg" arrow>
                Kostenlose Beratung sichern
              </CTAButton>
              <Link
                href="/waermepumpe"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all"
              >
                Wärmepumpe entdecken
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Kostenlose Beratung", "Keine Wartezeit", "Vor Ort im Rhein-Main-Gebiet", "Zertifizierter Fachbetrieb"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO ────────────────────────────────────────── */}
      <section className="py-0 bg-black">
        <video
          className="w-full max-h-[500px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/video-wartung.mp4" type="video/mp4" />
        </video>
      </section>

      {/* ─── TRUST BAR ───────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black mb-1" style={{ color: "#f5a800" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Leistungen"
            title="Photovoltaik + Wärmepumpe – das perfekte Energiesystem"
            subtitle="Beide Technologien ergänzen sich ideal. Produzieren Sie tagsüber günstigen Strom vom Dach und nutzen Sie ihn direkt zum Heizen. So werden Sie maximal unabhängig."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? "bg-[#071428] border-transparent text-white"
                    : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                {service.featured && (
                  <div
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "#f5a800", color: "white" }}
                  >
                    Empfohlen
                  </div>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: service.featured ? "rgba(245,168,0,0.2)" : "rgba(245,168,0,0.1)" }}
                >
                  <service.icon className="w-6 h-6" style={{ color: "#f5a800" }} />
                </div>
                <div className={`text-xs font-semibold mb-1 ${service.featured ? "text-slate-400" : "text-slate-500"}`}>
                  {service.subtitle}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${service.featured ? "text-white" : "text-[#071428]"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${service.featured ? "text-slate-300" : "text-slate-600"}`}>
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                      <span className={service.featured ? "text-slate-300" : "text-slate-600"}>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "#f5a800" }}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
              >
                Warum SunTec Nova?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071428] mb-4 leading-tight">
                Ihr Vorteil: Ein Partner für alles.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Wir sind kein Callcenter und kein Discounter. Wir sind ein
                etablierter Fachbetrieb aus der Region, der Ihnen ehrlich sagt,
                was technisch und wirtschaftlich für Sie Sinn ergibt.
              </p>
              <div className="space-y-5">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(245,168,0,0.1)" }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: "#f5a800" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#071428] mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-2xl p-8 text-white"
                style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}
              >
                <h3 className="text-lg font-bold mb-4">Unsere Qualitätsmerkmale</h3>
                <div className="space-y-3">
                  {siteConfig.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "#f5a800" }} />
                      <span className="text-slate-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-6 bg-[#f8fafc] border border-slate-100 text-center">
                  <div className="text-3xl font-black text-[#071428] mb-1">{siteConfig.projectsCompleted}+</div>
                  <div className="text-xs text-slate-500">Projekte umgesetzt</div>
                </div>
                <div className="rounded-2xl p-6 bg-[#f8fafc] border border-slate-100 text-center">
                  <div className="text-3xl font-black text-[#071428] mb-1">{siteConfig.yearsExperience}</div>
                  <div className="text-xs text-slate-500">Jahre Erfahrung</div>
                </div>
              </div>
              <div
                className="rounded-2xl p-6 border-l-4"
                style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}
              >
                <p className="text-sm font-medium text-[#071428] mb-2">
                  „Persönlicher Ansprechpartner von Anfang bis Ende."
                </p>
                <p className="text-xs text-slate-500">
                  Kein Projektmanager-Wirrwarr, kein Callcenter. Sie haben
                  immer einen direkten Draht zu Ihrem Berater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────── */}
      <ProcessSteps />

      {/* ─── FÖRDERUNG ────────────────────────────────────── */}
      <FoerderSection />

      {/* ─── REGION ───────────────────────────────────────── */}
      <RegionSection />

      {/* ─── PARTNERS ─────────────────────────────────────── */}
      <PartnersSection />

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <FAQ items={siteConfig.faqItems} />

      {/* ─── CTA BANNER ───────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für Ihre Energiewende?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, welche Lösung für Ihr Haus
            wirtschaftlich sinnvoll ist. Kostenlos, unverbindlich, vor Ort.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="secondary" size="lg" arrow>
              Jetzt kostenlos beraten lassen
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
      <section id="kontakt" className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Kontakt"
            title="Sprechen Sie uns an"
            subtitle="Wir freuen uns auf Ihre Anfrage – und melden uns schnell."
          />
          <ContactForm />
        </div>
      </section>

      {/* ─── REFERENZEN TEASER ────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Referenzen</p>
              <h3 className="text-lg font-bold text-[#071428]">
                Über {siteConfig.projectsCompleted} erfolgreiche Projekte im Rhein-Main-Gebiet
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Sehen Sie, was für andere Hauseigentümer in Ihrer Region möglich war.
              </p>
            </div>
            <CTAButton href="/referenzen" arrow className="shrink-0">
              Referenzen ansehen
            </CTAButton>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
