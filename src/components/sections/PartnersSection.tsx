import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function PartnersSection() {
  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Unsere Markenparnter – geprüfte Qualität
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {siteConfig.partners.map((partner) => (
            <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="h-8 md:h-10 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
