import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-[#071428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="So funktioniert es"
          title="Von der Anfrage bis zur fertigen Anlage"
          subtitle="Wir begleiten Sie durch jeden Schritt – transparent, persönlich und ohne Überraschungen."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.processSteps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
            >
              <div
                className="text-5xl font-black mb-4 leading-none"
                style={{ color: "rgba(245,168,0,0.2)" }}
              >
                {step.step}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
