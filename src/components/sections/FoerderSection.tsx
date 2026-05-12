import { TrendingDown, Banknote, Shield } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

const foerderItems = [
  {
    icon: Banknote,
    title: "Bis zu 70 % Förderung",
    description:
      "Durch die Bundesförderung Effiziente Gebäude (BEG) erhalten Hausbesitzer beim Heizungstausch erhebliche Zuschüsse – abhängig von Gebäude und Einkommen.",
    tag: "BEG Wärmepumpe",
  },
  {
    icon: TrendingDown,
    title: "KfW-Finanzierung",
    description:
      "Günstige Förderkredite der KfW ermöglichen Ihnen die Finanzierung Ihrer Photovoltaikanlage oder Wärmepumpe zu attraktiven Konditionen.",
    tag: "KfW 270 / KfW 261",
  },
  {
    icon: Shield,
    title: "Mehrwertsteuerbefreiung",
    description:
      "Photovoltaikanlagen sind seit 2023 von der Mehrwertsteuer befreit – das spart sofort 19 % auf Anlage und Installation.",
    tag: "0 % MwSt. PV",
  },
];

export default function FoerderSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Förderung & Wirtschaftlichkeit"
          title="Staatliche Förderung smart nutzen"
          subtitle="Der Staat beteiligt sich erheblich an Ihrer Energiewende. Wir kennen die aktuellen Programme und beantragen die Förderung für Sie."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {foerderItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(245,168,0,0.1)" }}
              >
                <item.icon className="w-6 h-6" style={{ color: "#f5a800" }} />
              </div>
              <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{ background: "rgba(245,168,0,0.1)", color: "#f5a800" }}>
                {item.tag}
              </div>
              <h3 className="text-base font-bold text-[#071428] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton href="/kontakt" arrow>
            Förderung prüfen lassen
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
