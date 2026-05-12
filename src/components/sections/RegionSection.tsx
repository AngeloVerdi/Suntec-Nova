import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import CTAButton from "@/components/ui/CTAButton";

export default function RegionSection() {
  return (
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#071428] mb-4 leading-tight">
              Im Rhein-Main-Gebiet<br />für Sie im Einsatz
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Wir sind kein bundesweiter Versandhandel für Energie­anlagen – wir
              sind Ihr regionaler Fachbetrieb. Kurze Wege bedeuten schnelle
              Termine, persönliche Beratung und verlässlichen Service – auch
              nach der Installation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Ob in Hanau, im Main-Kinzig-Kreis, in Aschaffenburg, Offenbach
              oder im Frankfurter Umland – wir kommen zu Ihnen und kennen die
              regionalen Gegebenheiten.
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
  );
}
