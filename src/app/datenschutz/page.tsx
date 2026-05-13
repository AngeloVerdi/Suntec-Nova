import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Datenschutz | ${siteConfig.companyName}`,
  description: `Datenschutzerklärung von ${siteConfig.companyName}.`,
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition-colors">Startseite</Link>
          <span>/</span>
          <span>Datenschutz</span>
        </div>
        <h1 className="text-3xl font-bold text-[#071428] mb-10">Datenschutzerklärung</h1>

        <div className="space-y-8">
          {[
            {
              title: "1. Verantwortlicher",
              content: `Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n\n${siteConfig.companyName}\n${siteConfig.street}\n${siteConfig.postalCode} ${siteConfig.city}\n\nTelefon: ${siteConfig.phoneDisplay}\nE-Mail: ${siteConfig.email}`,
            },
            {
              title: "2. Datenerfassung auf dieser Website",
              content:
                "Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) bei uns gespeichert, um Ihre Anfrage zu bearbeiten und Rückfragen stellen zu können.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",
            },
            {
              title: "3. Hosting",
              content:
                "Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Beim Besuch der Website werden automatisch Server-Logfiles erfasst (IP-Adresse, Browser, Betriebssystem, Uhrzeit). Die Übertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Weitere Informationen: https://vercel.com/legal/privacy-policy",
            },
            {
              title: "3a. E-Mail-Versand (Kontaktformular)",
              content:
                "Die über das Kontaktformular übermittelten Daten werden zum Versand der Benachrichtigungs-E-Mail an uns über den Dienst Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA) verarbeitet. Resend ist als Auftragsverarbeiter gemäß Art. 28 DSGVO vertraglich gebunden. Die Daten werden ausschließlich zur Weiterleitung der Anfrage genutzt und nicht dauerhaft bei Resend gespeichert. Weitere Informationen: https://resend.com/legal/privacy-policy",
            },
            {
              title: "4. Cookies",
              content:
                "Diese Website verwendet keine Tracking-Cookies oder Analyse-Dienste. Es werden lediglich technisch notwendige Cookies gesetzt, soweit dies für den Betrieb der Website erforderlich ist.",
            },
            {
              title: "5. Ihre Rechte",
              content:
                "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierfür an: " + siteConfig.email,
            },
            {
              title: "6. Beschwerderecht",
              content:
                "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für Hessen ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit.",
            },
          ].map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-[#071428] mb-3">{section.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Diese Datenschutzerklärung ist ein Muster-Template. Bitte lassen
            Sie diese von einem Rechtsanwalt oder Datenschutzbeauftragten für
            Ihren konkreten Betrieb prüfen und anpassen.
          </p>
        </div>
      </div>
    </div>
  );
}
