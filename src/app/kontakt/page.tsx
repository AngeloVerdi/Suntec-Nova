import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.kontakt.title,
  description: siteConfig.seo.kontakt.description,
  keywords: siteConfig.seo.kontakt.keywords,
  alternates: { canonical: `${siteConfig.website}/kontakt` },
  openGraph: {
    title: siteConfig.seo.kontakt.title,
    description: siteConfig.seo.kontakt.description,
    url: `${siteConfig.website}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071428 0%, #0e2244 60%, #172e5e 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a800, transparent)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">Kontakt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Kostenlose Beratung anfragen
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Schildern Sie uns kurz Ihr Vorhaben – wir melden uns innerhalb von
              1–2 Werktagen mit einem konkreten Vorschlag. Persönlich, regional,
              unverbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* ─── QUICK CONTACT ────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,168,0,0.1)" }}
              >
                <Phone className="w-5 h-5" style={{ color: "#f5a800" }} />
              </div>
              <div>
                <div className="text-xs text-slate-500">Anrufen</div>
                <div className="font-semibold text-sm text-[#071428]">{siteConfig.phoneDisplay}</div>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,168,0,0.1)" }}
              >
                <Mail className="w-5 h-5" style={{ color: "#f5a800" }} />
              </div>
              <div>
                <div className="text-xs text-slate-500">E-Mail</div>
                <div className="font-semibold text-sm text-[#071428]">{siteConfig.email}</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-green-50">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">WhatsApp</div>
                <div className="font-semibold text-sm text-[#071428]">Schreiben Sie uns</div>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(245,168,0,0.1)" }}
              >
                <Clock className="w-5 h-5" style={{ color: "#f5a800" }} />
              </div>
              <div>
                <div className="text-xs text-slate-500">Antwortzeit</div>
                <div className="font-semibold text-sm text-[#071428]">1–2 Werktage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT ─────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Anfrage"
            title="Schreiben Sie uns"
            subtitle="Nutzen Sie das Formular für Ihre unverbindliche Anfrage. Wir melden uns schnell."
          />
          <ContactForm />
        </div>
      </section>

      {/* ─── ADDRESS & AREA ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Address */}
            <div>
              {/* Visitenkarte */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.prod.website-files.com/667abfd141bd9d4cbe13fa2a/667ac262feb688dc29235859_neu%20suntec%20nova%20visitenlarte%20mit%20gelb.png"
                  alt="SunTec Nova Visitenkarte"
                  width={600}
                  height={350}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              </div>
              <div className="mb-6">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ color: "#f5a800", background: "rgba(245,168,0,0.1)" }}
                >
                  Standort
                </span>
                <h2 className="text-2xl font-bold text-[#071428]">Unsere Adresse</h2>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#f5a800" }} />
                  <div>
                    <div className="text-slate-600 text-sm">{siteConfig.street}</div>
                    <div className="text-slate-600 text-sm">
                      {siteConfig.postalCode} {siteConfig.city}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" style={{ color: "#f5a800" }} />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-slate-600 text-sm hover:text-[#f5a800] transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" style={{ color: "#f5a800" }} />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-600 text-sm hover:text-[#f5a800] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#f5a800" }} />
                  <div className="text-sm text-slate-600">
                    <div>Mo–Fr: 08:00 – 17:00 Uhr</div>
                    <div className="text-slate-400">Sa: nach Vereinbarung</div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-5 border-l-4"
                style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}
              >
                <p className="text-sm font-semibold text-[#071428] mb-1">
                  Beratung vor Ort – im gesamten Rhein-Main-Gebiet
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wir kommen zu Ihnen. Eine Vor-Ort-Begehung ist kostenlos und
                  unverbindlich. Teilen Sie uns einfach Ihre Adresse im Formular
                  mit.
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-2xl font-bold text-[#071428] mb-6">Unser Einsatzgebiet</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                SunTec Nova ist im gesamten Rhein-Main-Gebiet tätig. Wenn Sie
                in einer der folgenden Regionen wohnen, sind Sie bei uns genau
                richtig:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {siteConfig.serviceAreas.map((area) => (
                  <div
                    key={area.slug}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f8fafc] border border-slate-100"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#f5a800" }} />
                    <span className="text-sm text-[#071428]">{area.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Sie wohnen in einer anderen Region? Sprechen Sie uns trotzdem an –
                wir prüfen gerne, ob wir für Sie tätig werden können.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
