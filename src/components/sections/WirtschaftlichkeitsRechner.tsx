"use client";

import { useState, useMemo } from "react";
import { TrendingDown, Zap, Euro, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WirtschaftlichkeitsRechner() {
  const [stromverbrauch, setStromverbrauch] = useState(4000);
  const [strompreis, setStrompreis] = useState(32);
  const [mitSpeicher, setMitSpeicher] = useState(false);
  const [dachflaeche, setDachflaeche] = useState(50);

  const ergebnis = useMemo(() => {
    // Anlagengröße: ca. 0,1 kWp pro m² nutzbarer Dachfläche
    const anlageKwp = Math.round((dachflaeche * 0.1) * 10) / 10;

    // Jährliche Produktion: ~950 kWh/kWp in Hessen
    const jahresproduktion = anlageKwp * 950;

    // Eigenverbrauchsquote: 30% ohne Speicher, 70% mit Speicher
    const eigenverbrauchsquote = mitSpeicher ? 0.70 : 0.30;

    // Eigenverbrauch (begrenzt auf tatsächlichen Verbrauch)
    const eigenverbrauch = Math.min(jahresproduktion * eigenverbrauchsquote, stromverbrauch);

    // Einspeisung
    const einspeisung = jahresproduktion - eigenverbrauch;

    // Einspeisevergütung: 8,11 ct/kWh (EEG 2024)
    const einspeiseverguetung = 0.0811;

    // Jährliche Ersparnis
    const ersparnisDurchEigenverbrauch = eigenverbrauch * (strompreis / 100);
    const einnahmenEinspeisung = einspeisung * einspeiseverguetung;
    const jahresersparnis = ersparnisDurchEigenverbrauch + einnahmenEinspeisung;

    // Investitionskosten: ca. 1.400 €/kWp + 4.000 € für Speicher
    const anlageKosten = anlageKwp * 1400;
    const speicherKosten = mitSpeicher ? 6000 : 0;
    const gesamtkosten = anlageKosten + speicherKosten;

    // Amortisationszeit
    const amortisation = Math.round((gesamtkosten / jahresersparnis) * 10) / 10;

    // 20-Jahres-Ersparnis (mit 3% jährlicher Strompreissteigerung)
    let gesamtersparnis20 = 0;
    let aktuelleErsparnis = jahresersparnis;
    for (let i = 0; i < 20; i++) {
      gesamtersparnis20 += aktuelleErsparnis;
      aktuelleErsparnis *= 1.03;
    }

    // CO2-Einsparung: 0,434 kg CO2/kWh Strommix Deutschland
    const co2EinsparungJahr = Math.round(eigenverbrauch * 0.434);

    return {
      anlageKwp,
      jahresproduktion: Math.round(jahresproduktion),
      eigenverbrauch: Math.round(eigenverbrauch),
      jahresersparnis: Math.round(jahresersparnis),
      amortisation,
      gesamtersparnis20: Math.round(gesamtersparnis20),
      co2EinsparungJahr,
      gesamtkosten: Math.round(gesamtkosten),
    };
  }, [stromverbrauch, strompreis, mitSpeicher, dachflaeche]);

  const formatEuro = (val: number) =>
    val.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6 border-b border-slate-100" style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,168,0,0.2)" }}>
            <Euro className="w-5 h-5" style={{ color: "#f5a800" }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Wirtschaftlichkeitsrechner</h3>
            <p className="text-xs text-slate-400">Richtwerte – individuelle Beratung kostenlos anfragen</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Eingaben */}
        <div className="p-8 space-y-7 border-r border-slate-100">
          {/* Stromverbrauch */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-[#071428]">Jährlicher Stromverbrauch</label>
              <span className="text-sm font-bold" style={{ color: "#f5a800" }}>{stromverbrauch.toLocaleString("de-DE")} kWh</span>
            </div>
            <input
              type="range" min="1000" max="15000" step="500"
              value={stromverbrauch}
              onChange={(e) => setStromverbrauch(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#f5a800" }}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1.000 kWh</span><span>15.000 kWh</span>
            </div>
          </div>

          {/* Strompreis */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-[#071428]">Aktueller Strompreis</label>
              <span className="text-sm font-bold" style={{ color: "#f5a800" }}>{strompreis} ct/kWh</span>
            </div>
            <input
              type="range" min="20" max="50" step="1"
              value={strompreis}
              onChange={(e) => setStrompreis(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#f5a800" }}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>20 ct</span><span>50 ct</span>
            </div>
          </div>

          {/* Dachfläche */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-[#071428]">Verfügbare Dachfläche</label>
              <span className="text-sm font-bold" style={{ color: "#f5a800" }}>{dachflaeche} m²</span>
            </div>
            <input
              type="range" min="20" max="150" step="5"
              value={dachflaeche}
              onChange={(e) => setDachflaeche(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#f5a800" }}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>20 m²</span><span>150 m²</span>
            </div>
          </div>

          {/* Speicher Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#f8fafc] border border-slate-200">
            <div>
              <div className="text-sm font-semibold text-[#071428]">Mit Batteriespeicher</div>
              <div className="text-xs text-slate-500">Eigenverbrauch bis zu 70 %</div>
            </div>
            <button
              onClick={() => setMitSpeicher(!mitSpeicher)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${mitSpeicher ? "bg-[#f5a800]" : "bg-slate-300"}`}
            >
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${mitSpeicher ? "translate-x-7" : "translate-x-1"}`} />
            </button>
          </div>

          <div className="text-xs text-slate-400 bg-slate-50 rounded-xl p-3">
            📍 Berechnung für Region Hessen · Richtwerte basierend auf Durchschnittswerten
          </div>
        </div>

        {/* Ergebnis */}
        <div className="p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Ihre geschätzte Ersparnis</p>

          {/* Hauptkennzahlen */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl text-center" style={{ background: "rgba(245,168,0,0.08)", border: "1px solid rgba(245,168,0,0.2)" }}>
              <div className="text-2xl font-black" style={{ color: "#f5a800" }}>
                {formatEuro(ergebnis.jahresersparnis)}
              </div>
              <div className="text-xs text-slate-500 mt-1">Ersparnis pro Jahr</div>
            </div>
            <div className="p-4 rounded-2xl text-center" style={{ background: "rgba(245,168,0,0.08)", border: "1px solid rgba(245,168,0,0.2)" }}>
              <div className="text-2xl font-black" style={{ color: "#f5a800" }}>
                {ergebnis.amortisation} J.
              </div>
              <div className="text-xs text-slate-500 mt-1">Amortisationszeit</div>
            </div>
          </div>

          {/* Detail-Stats */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Zap className="w-4 h-4" style={{ color: "#f5a800" }} />
                Anlagengröße
              </div>
              <span className="font-semibold text-[#071428] text-sm">{ergebnis.anlageKwp} kWp</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Zap className="w-4 h-4" style={{ color: "#f5a800" }} />
                Jahresproduktion
              </div>
              <span className="font-semibold text-[#071428] text-sm">{ergebnis.jahresproduktion.toLocaleString("de-DE")} kWh</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <TrendingDown className="w-4 h-4" style={{ color: "#f5a800" }} />
                Ersparnis über 20 Jahre
              </div>
              <span className="font-semibold text-[#071428] text-sm">{formatEuro(ergebnis.gesamtersparnis20)}</span>
            </div>
            <div className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Leaf className="w-4 h-4 text-green-500" />
                CO₂-Einsparung/Jahr
              </div>
              <span className="font-semibold text-[#071428] text-sm">{ergebnis.co2EinsparungJahr} kg</span>
            </div>
          </div>

          <Link
            href="/kontakt"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
          >
            Kostenlose Beratung anfragen
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-xs text-slate-400 mt-3">
            Unverbindlich · Vor-Ort-Termin inklusive
          </p>
        </div>
      </div>
    </div>
  );
}
