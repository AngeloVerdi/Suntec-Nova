"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  // Haus & Dach
  gebaeudeart: string;
  baujahr: string;
  dachart: string;
  dachausrichtung: string;
  dachflaeche: string;
  dachzustand: string;
  // Energie
  heizsystem: string;
  stromverbrauch: string;
  // Sonstiges
  plz: string;
  message: string;
  consent: boolean;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#071428] placeholder:text-slate-400 focus:outline-none focus:border-[#f5a800] focus:ring-1 focus:ring-[#f5a800] transition-colors bg-white";

const labelClass = "block text-sm font-medium text-[#071428] mb-1.5";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    gebaeudeart: "",
    baujahr: "",
    dachart: "",
    dachausrichtung: "",
    dachflaeche: "",
    dachzustand: "",
    heizsystem: "",
    stromverbrauch: "",
    plz: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-100">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(245,168,0,0.1)" }}
        >
          <CheckCircle className="w-8 h-8" style={{ color: "#f5a800" }} />
        </div>
        <h3 className="text-xl font-bold text-[#071428] mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-slate-600">
          Wir melden uns innerhalb von 1–2 Werktagen bei Ihnen. Sie können uns
          auch direkt anrufen:{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold" style={{ color: "#f5a800" }}>
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 gap-10">
      {/* Info Column */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#071428] mb-2">Persönliche Beratung</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Je mehr Sie uns vorab mitteilen, desto konkreter können wir Sie beim ersten Gespräch beraten.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-slate-100 hover:border-slate-200 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(245,168,0,0.1)" }}>
              <Phone className="w-5 h-5" style={{ color: "#f5a800" }} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Anrufen</div>
              <div className="text-sm font-semibold text-[#071428]">{siteConfig.phoneDisplay}</div>
            </div>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-slate-100 hover:border-slate-200 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(245,168,0,0.1)" }}>
              <Mail className="w-5 h-5" style={{ color: "#f5a800" }} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">E-Mail</div>
              <div className="text-sm font-semibold text-[#071428]">{siteConfig.email}</div>
            </div>
          </a>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-slate-100">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(245,168,0,0.1)" }}>
              <Clock className="w-5 h-5" style={{ color: "#f5a800" }} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Antwortzeit</div>
              <div className="text-sm font-semibold text-[#071428]">Innerhalb von 1–2 Werktagen</div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "#f5a800", background: "rgba(245,168,0,0.05)" }}>
          <p className="text-sm text-slate-700 font-medium">Einsatzgebiet: {siteConfig.mainRegion}</p>
          <p className="text-xs text-slate-500 mt-1">{siteConfig.serviceAreas.map((a) => a.name).join(" · ")}</p>
        </div>
      </div>

      {/* Form Column */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6"
      >
        {/* Kontaktdaten */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-100" style={{ color: "#f5a800" }}>
            Ihre Kontaktdaten
          </h4>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Max Mustermann" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>PLZ / Ort *</label>
                <input type="text" name="plz" required value={formData.plz} onChange={handleChange} placeholder="z. B. 63450 Hanau" className={inputClass} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Telefon</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="06181 ..." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>E-Mail *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="max@beispiel.de" className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Ich interessiere mich für</label>
              <select name="interest" value={formData.interest} onChange={handleChange} className={inputClass}>
                <option value="">Bitte wählen</option>
                <option value="photovoltaik">Photovoltaikanlage</option>
                <option value="waermepumpe">Wärmepumpe</option>
                <option value="kombination">Photovoltaik + Wärmepumpe</option>
                <option value="speicher">Batteriespeicher</option>
                <option value="wartung">Wartung / Reinigung</option>
                <option value="beratung">Allgemeine Energieberatung</option>
              </select>
            </div>
          </div>
        </div>

        {/* Haus & Dach */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-100" style={{ color: "#f5a800" }}>
            Ihr Gebäude & Dach
          </h4>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Gebäudeart</label>
                <select name="gebaeudeart" value={formData.gebaeudeart} onChange={handleChange} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="einfamilienhaus">Einfamilienhaus</option>
                  <option value="doppelhaus">Doppelhaus / Reihenhaus</option>
                  <option value="mehrfamilienhaus">Mehrfamilienhaus</option>
                  <option value="gewerbe">Gewerbegebäude</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Baujahr des Gebäudes</label>
                <select name="baujahr" value={formData.baujahr} onChange={handleChange} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="vor1980">Vor 1980</option>
                  <option value="1980-2000">1980 – 2000</option>
                  <option value="2000-2010">2000 – 2010</option>
                  <option value="2010-2020">2010 – 2020</option>
                  <option value="nach2020">Nach 2020 / Neubau</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Dachart</label>
                <select name="dachart" value={formData.dachart} onChange={handleChange} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="ziegel">Ziegeldach (Ton/Beton)</option>
                  <option value="pfanne">Pfannendach</option>
                  <option value="schiefer">Schiefer</option>
                  <option value="blech">Blechdach / Trapezblech</option>
                  <option value="flachdach">Flachdach</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Dachausrichtung</label>
                <select name="dachausrichtung" value={formData.dachausrichtung} onChange={handleChange} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="sued">Süd</option>
                  <option value="ost-west">Ost / West</option>
                  <option value="sued-ost">Südost</option>
                  <option value="sued-west">Südwest</option>
                  <option value="nord">Nord (Flachdach)</option>
                  <option value="weiss-nicht">Weiß ich nicht</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Verfügbare Dachfläche (ca.)</label>
                <select name="dachflaeche" value={formData.dachflaeche} onChange={handleChange} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="unter30">Unter 30 m²</option>
                  <option value="30-50">30 – 50 m²</option>
                  <option value="50-80">50 – 80 m²</option>
                  <option value="80-120">80 – 120 m²</option>
                  <option value="ueber120">Über 120 m²</option>
                  <option value="weiss-nicht">Weiß ich nicht</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Zustand des Dachs</label>
                <select name="dachzustand" value={formData.dachzustand} onChange={handleChange} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="neu">Neu / sehr gut</option>
                  <option value="gut">Gut (unter 15 Jahre)</option>
                  <option value="maessig">Mäßig (15–30 Jahre)</option>
                  <option value="sanierung">Sanierung geplant</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Energie */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-100" style={{ color: "#f5a800" }}>
            Ihre aktuelle Energiesituation
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Aktuelles Heizsystem</label>
              <select name="heizsystem" value={formData.heizsystem} onChange={handleChange} className={inputClass}>
                <option value="">Bitte wählen</option>
                <option value="gas">Gasheizung</option>
                <option value="oel">Ölheizung</option>
                <option value="fernwaerme">Fernwärme</option>
                <option value="waermepumpe">Wärmepumpe (vorhanden)</option>
                <option value="pellet">Pelletheizung</option>
                <option value="nachtspeicher">Nachtspeicher / Strom</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Jährlicher Stromverbrauch</label>
              <select name="stromverbrauch" value={formData.stromverbrauch} onChange={handleChange} className={inputClass}>
                <option value="">Bitte wählen</option>
                <option value="unter3000">Unter 3.000 kWh</option>
                <option value="3000-5000">3.000 – 5.000 kWh</option>
                <option value="5000-8000">5.000 – 8.000 kWh</option>
                <option value="ueber8000">Über 8.000 kWh</option>
                <option value="weiss-nicht">Weiß ich nicht</option>
              </select>
            </div>
          </div>
        </div>

        {/* Nachricht */}
        <div>
          <label className={labelClass}>Weitere Anmerkungen</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Haben Sie noch weitere Fragen oder Besonderheiten? (z. B. Verschattung durch Bäume, bereits vorhandene PV-Anlage, ...)"
            className={inputClass + " resize-none"}
          />
        </div>

        {/* Datenschutz */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-slate-300 accent-[#f5a800]"
          />
          <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
            Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.{" "}
            <a href="/datenschutz" className="underline hover:text-slate-700">Datenschutzerklärung</a>
          </label>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
            Es gab einen Fehler beim Senden. Bitte rufen Sie uns direkt an:{" "}
            <a href={`tel:${siteConfig.phone}`} className="font-semibold underline">
              {siteConfig.phoneDisplay}
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg disabled:opacity-70"
          style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Wird gesendet …
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Kostenlose Beratung anfragen
            </>
          )}
        </button>
      </form>
    </div>
  );
}
