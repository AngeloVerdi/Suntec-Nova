import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Kundenstimmen"
          title="Was unsere Kunden sagen"
          subtitle="Echte Erfahrungen aus der Region – von Eigentümern, die mit SunTec Nova in die Energiezukunft investiert haben."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100 flex flex-col"
            >
              <Quote className="w-6 h-6 mb-4 opacity-30" style={{ color: "#f5a800" }} />
              <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-current"
                      style={{ color: "#f5a800" }}
                    />
                  ))}
                </div>
                <div className="font-semibold text-sm text-[#071428]">{t.name}</div>
                <div className="text-xs text-slate-500">{t.location}</div>
                <div
                  className="text-xs mt-1.5 font-medium"
                  style={{ color: "#f5a800" }}
                >
                  {t.project}
                </div>
                {t.placeholder && (
                  <div className="text-[10px] text-slate-400 mt-1">
                    * Beispieltestimonial – Platzhalter
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 mt-6">
          * Testimonials sind Beispieldaten. Bitte ersetzen Sie diese durch echte Kundenbewertungen.
        </p>
      </div>
    </section>
  );
}
