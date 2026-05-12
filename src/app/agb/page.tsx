import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `AGB | ${siteConfig.companyName}`,
  description: `Allgemeine Geschäftsbedingungen von ${siteConfig.companyName}, ${siteConfig.city}.`,
  robots: { index: false, follow: false },
};

export default function AGBPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition-colors">Startseite</Link>
          <span>/</span>
          <span>AGB</span>
        </div>
        <h1 className="text-3xl font-bold text-[#071428] mb-10">Allgemeine Geschäftsbedingungen</h1>

        <div className="space-y-8">
          {[
            {
              title: "§ 1 Geltungsbereich",
              content:
                "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen " +
                siteConfig.companyName +
                ' (nachfolgend "Auftragnehmer") und unseren Kunden (nachfolgend "Auftraggeber") ueber Lieferungen und Leistungen im Bereich der Installation und Wartung von Photovoltaikanlagen, Waermepumpen und zugehoerigen Energiesystemen.',
            },
            {
              title: "§ 2 Vertragsschluss",
              content:
                "Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder Aufnahme der Leistung durch den Auftragnehmer zustande. Mündliche Abreden bedürfen der Schriftform.",
            },
            {
              title: "§ 3 Leistungsumfang",
              content:
                "Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot und der Auftragsbestätigung. Technische Änderungen, die für den Auftraggeber keine wesentliche Verschlechterung darstellen, bleiben vorbehalten, sofern sie gesetzlich oder technisch erforderlich sind.",
            },
            {
              title: "§ 4 Preise und Zahlungsbedingungen",
              content:
                "Alle angegebenen Preise verstehen sich in Euro, soweit nicht anders angegeben. Für Photovoltaikanlagen auf Wohngebäuden gilt der gesetzliche Nullsteuersatz. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen, sofern nicht abweichend vereinbart.",
            },
            {
              title: "§ 5 Ausführungsfristen",
              content:
                "Vereinbarte Ausführungsfristen sind, sofern nicht ausdrücklich als verbindlich bezeichnet, unverbindliche Richtwerte. Verzögerungen durch höhere Gewalt, Lieferengpässe oder behördliche Genehmigungsverfahren berechtigen nicht zur Stornierung des Auftrags.",
            },
            {
              title: "§ 6 Gewährleistung",
              content:
                "Es gelten die gesetzlichen Gewährleistungsrechte. Zusätzlich gewähren die Hersteller herstellerspezifische Produktgarantien (z. B. 20 Jahre auf Module). Details entnehmen Sie bitte dem jeweiligen Angebot. Gewährleistungsansprüche setzen eine ordnungsgemäße Nutzung und regelmäßige Wartung voraus.",
            },
            {
              title: "§ 7 Haftungsbeschränkung",
              content:
                "Der Auftragnehmer haftet unbeschränkt für Schäden aus Verletzung des Lebens, des Körpers und der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren Schaden.",
            },
            {
              title: "§ 8 Datenschutz",
              content:
                "Wir verarbeiten personenbezogene Daten ausschließlich zur Auftragsabwicklung und entsprechend unserer Datenschutzerklärung, die Sie unter " +
                siteConfig.website +
                "/datenschutz abrufen können.",
            },
            {
              title: "§ 9 Gerichtsstand & Anwendbares Recht",
              content:
                "Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, " +
                siteConfig.city +
                ".",
            },
          ].map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-[#071428] mb-3">{section.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Diese AGB sind ein Muster-Template. Bitte lassen Sie diese von
            einem Rechtsanwalt für Ihren konkreten Betrieb prüfen und anpassen.
            Stand: {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
