import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Impressum | ${siteConfig.companyName}`,
  description: `Impressum und Angaben gemäß § 5 TMG für ${siteConfig.companyName}, ${siteConfig.city}.`,
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition-colors">Startseite</Link>
          <span>/</span>
          <span>Impressum</span>
        </div>
        <h1 className="text-3xl font-bold text-[#071428] mb-10">Impressum</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#071428] mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {siteConfig.companyName}<br />
              {siteConfig.street}<br />
              {siteConfig.postalCode} {siteConfig.city}<br />
              {siteConfig.state}, {siteConfig.country}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071428] mb-3">Kontakt</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Telefon: {siteConfig.phoneDisplay}<br />
              E-Mail: {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071428] mb-3">Handelsregister</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Handelsregisternummer und -gericht eintragen]<br />
              Umsatzsteuer-ID: [USt-IdNr. eintragen]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071428] mb-3">Verantwortlich für den Inhalt (§ 18 MStV)</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Name des Verantwortlichen]<br />
              {siteConfig.street}<br />
              {siteConfig.postalCode} {siteConfig.city}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071428] mb-3">Streitschlichtung</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <span className="text-slate-500">https://ec.europa.eu/consumers/odr/</span>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
              bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071428] mb-3">Haftungsausschluss</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Bitte ersetzen Sie die Platzhalter [in eckigen Klammern] durch Ihre
            tatsächlichen Unternehmensdaten, bevor Sie diese Seite veröffentlichen.
          </p>
        </div>
      </div>
    </div>
  );
}
