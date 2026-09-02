"use client";

import { useState, useMemo } from "react";
import {
  TrendingDown, Zap, Euro, Leaf, ArrowRight,
  Sun, Battery, CheckCircle, Info, Banknote, Thermometer,
} from "lucide-react";
import Link from "next/link";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtEuro = (v: number) =>
  v.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

// ─── PV Presets ───────────────────────────────────────────────────────────────
const pvPresets = [
  { label: "Kleine Anlage", kwp: 5,  speicher: 0,  desc: "Wohnung / kleines Haus" },
  { label: "Standard",      kwp: 8,  speicher: 5,  desc: "Einfamilienhaus" },
  { label: "Komfort",       kwp: 12, speicher: 10, desc: "Großes Einfamilienhaus" },
  { label: "Maximal",       kwp: 20, speicher: 15, desc: "Villa / Gewerbe" },
];

// ─── Förder Maßnahmen ────────────────────────────────────────────────────────
const foerderMassnahmen = [
  {
    id: "waermepumpe",
    label: "Wärmepumpe",
    icon: Thermometer,
    minKosten: 8000,
    maxKosten: 40000,
    defaultKosten: 18000,
    step: 500,
    beg: true,
    info: "Luft-Wasser oder Sole-Wasser Wärmepumpe inkl. Installation",
  },
  {
    id: "pv-speicher",
    label: "PV + Speicher",
    icon: Battery,
    minKosten: 6000,
    maxKosten: 45000,
    defaultKosten: 16000,
    step: 500,
    beg: false,
    info: "Photovoltaikanlage mit Batteriespeicher",
  },
  {
    id: "kombination",
    label: "PV + WP + Speicher",
    icon: Sun,
    minKosten: 20000,
    maxKosten: 80000,
    defaultKosten: 38000,
    step: 1000,
    beg: true,
    info: "Komplettpaket: Photovoltaik, Wärmepumpe und Speicher",
  },
];

// ─── Tab: PV Rechner ──────────────────────────────────────────────────────────
function PVRechner() {
  const [stromverbrauch, setStromverbrauch] = useState(4000);
  const [strompreis, setStrompreis] = useState(32);
  const [anlageKwp, setAnlageKwp] = useState(8);
  const [speicherKwh, setSpeicherKwh] = useState(5);
  const [activePreset, setActivePreset] = useState<number | null>(1);

  const handlePreset = (idx: number) => {
    setAnlageKwp(pvPresets[idx].kwp);
    setSpeicherKwh(pvPresets[idx].speicher);
    setActivePreset(idx);
  };

  const slide = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
    setActivePreset(null);
  };

  const r = useMemo(() => {
    const prod = anlageKwp * 950;
    const evq = Math.min(0.30 + (speicherKwh / 15) * 0.45, 0.75);
    const ev   = Math.min(prod * evq, stromverbrauch);
    const einsp = prod - ev;
    const jErsparnis = ev * (strompreis / 100) + einsp * 0.0811;
    const kosten = anlageKwp * 1400 + speicherKwh * 650;
    const amor = Math.round((kosten / jErsparnis) * 10) / 10;
    let sum20 = 0, cur = jErsparnis;
    for (let i = 0; i < 20; i++) { sum20 += cur; cur *= 1.03; }
    const rendite = Math.round(((sum20 - kosten) / kosten) * 100);
    return {
      prod: Math.round(prod),
      ev: Math.round(ev),
      evPct: Math.round(evq * 100),
      jErsparnis: Math.round(jErsparnis),
      amor,
      sum20: Math.round(sum20),
      co2: Math.round(ev * 0.434),
      kosten: Math.round(kosten),
      anlageKosten: Math.round(anlageKwp * 1400),
      speicherKosten: Math.round(speicherKwh * 650),
      rendite,
    };
  }, [stromverbrauch, strompreis, anlageKwp, speicherKwh]);

  return (
    <div>
      {/* Preset Buttons */}
      <div className="px-8 pt-6 pb-0">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Schnellauswahl Anlagenpaket
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {pvPresets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handlePreset(idx)}
              className={`p-3 rounded-xl border-2 text-left transition-all ${
                activePreset === idx
                  ? "border-[#f5a800] bg-amber-50"
                  : "border-slate-200 hover:border-slate-300 bg-white"
              }`}
            >
              <div className={`text-sm font-bold mb-0.5 ${activePreset === idx ? "text-[#f5a800]" : "text-[#071428]"}`}>
                {p.kwp} kWp
              </div>
              <div className="text-xs font-semibold text-slate-600">{p.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{p.desc}</div>
              {p.speicher > 0 && (
                <div className="text-[10px] font-semibold mt-1.5 px-1.5 py-0.5 rounded-full inline-block"
                  style={{ background: "rgba(245,168,0,0.12)", color: "#d4900a" }}>
                  + {p.speicher} kWh Speicher
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0 mt-6">
        {/* Eingaben */}
        <div className="px-8 pb-8 space-y-5 lg:border-r border-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Individuelle Einstellungen</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          {[
            { label: "Anlagengröße (PV)", icon: Sun, value: `${anlageKwp} kWp`, sub: `≈ ${Math.round(anlageKwp * 6)} m² Dach`, min: 3, max: 20, step: 0.5, val: anlageKwp, onChange: slide(setAnlageKwp), minLabel: "3 kWp", maxLabel: "20 kWp" },
            { label: "Batteriespeicher",  icon: Battery, value: speicherKwh === 0 ? "Kein Speicher" : `${speicherKwh} kWh`, sub: `${r.evPct} % Eigenverbrauch`, min: 0, max: 15, step: 1, val: speicherKwh, onChange: slide(setSpeicherKwh), minLabel: "Ohne", maxLabel: "15 kWh" },
            { label: "Jährlicher Stromverbrauch", icon: Zap, value: `${stromverbrauch.toLocaleString("de-DE")} kWh`, sub: null, min: 1000, max: 15000, step: 500, val: stromverbrauch, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setStromverbrauch(Number(e.target.value)), minLabel: "1.000 kWh", maxLabel: "15.000 kWh" },
            { label: "Aktueller Strompreis", icon: Euro, value: `${strompreis} ct/kWh`, sub: null, min: 20, max: 50, step: 1, val: strompreis, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setStrompreis(Number(e.target.value)), minLabel: "20 ct", maxLabel: "50 ct" },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-[#071428] flex items-center gap-1.5">
                  <s.icon className="w-4 h-4" style={{ color: "#f5a800" }} />
                  {s.label}
                </label>
                <span className="text-sm font-bold" style={{ color: "#f5a800" }}>{s.value}</span>
              </div>
              <input type="range" min={s.min} max={s.max} step={s.step} value={s.val}
                onChange={s.onChange}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: "#f5a800" }} />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>{s.minLabel}</span>
                {s.sub && <span className="text-slate-500 text-[11px]">{s.sub}</span>}
                <span>{s.maxLabel}</span>
              </div>
            </div>
          ))}

          <div className="text-xs text-slate-400 bg-slate-50 rounded-xl p-3">
            📍 Region Hessen · Einspeisevergütung 8,11 ct/kWh (EEG 2024) · Richtwerte
          </div>
        </div>

        {/* Ergebnis */}
        <div className="px-8 pb-8 pt-6 lg:pt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Ihre geschätzte Ersparnis</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { val: fmtEuro(r.jErsparnis), label: "Ersparnis pro Jahr" },
              { val: `${r.amor} J.`, label: "Amortisationszeit" },
            ].map((k) => (
              <div key={k.label} className="p-4 rounded-2xl text-center"
                style={{ background: "rgba(245,168,0,0.08)", border: "1px solid rgba(245,168,0,0.2)" }}>
                <div className="text-2xl font-black" style={{ color: "#f5a800" }}>{k.val}</div>
                <div className="text-xs text-slate-500 mt-1">{k.label}</div>
              </div>
            ))}
          </div>

          {/* Kosten */}
          <div className="rounded-xl p-4 mb-4" style={{ background: "rgba(7,20,40,0.04)", border: "1px solid rgba(7,20,40,0.07)" }}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Investitionskosten (ca.)</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">PV-Anlage ({anlageKwp} kWp)</span><span className="font-semibold text-[#071428]">{fmtEuro(r.anlageKosten)}</span></div>
              {speicherKwh > 0 && <div className="flex justify-between"><span className="text-slate-600">Speicher ({speicherKwh} kWh)</span><span className="font-semibold text-[#071428]">{fmtEuro(r.speicherKosten)}</span></div>}
              <div className="flex justify-between pt-1.5 border-t border-slate-200 font-bold text-[#071428]"><span>Gesamt</span><span>{fmtEuro(r.kosten)}</span></div>
            </div>
          </div>

          <div className="space-y-2 mb-5">
            {[
              { icon: Sun, label: "Jahresproduktion", val: `${r.prod.toLocaleString("de-DE")} kWh` },
              { icon: Zap, label: "Eigenverbrauch", val: `${r.evPct} % · ${r.ev.toLocaleString("de-DE")} kWh` },
              { icon: TrendingDown, label: "Ersparnis über 20 Jahre", val: fmtEuro(r.sum20) },
              { icon: Euro, label: "Rendite über 20 Jahre", val: `${r.rendite > 0 ? "+" : ""}${r.rendite} %`, color: r.rendite > 0 ? "#16a34a" : "#dc2626" },
              { icon: Leaf, label: "CO₂-Einsparung/Jahr", val: `${r.co2} kg`, iconColor: "#16a34a" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <row.icon className="w-4 h-4" style={{ color: row.iconColor ?? "#f5a800" }} />
                  {row.label}
                </div>
                <span className="font-semibold text-sm" style={{ color: row.color ?? "#071428" }}>{row.val}</span>
              </div>
            ))}
          </div>

          <Link href="/kontakt"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
            Kostenloses Angebot anfragen <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-xs text-slate-400 mt-3">Unverbindlich · Vor-Ort-Termin · inkl. Förderberatung</p>
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Förderrechner ───────────────────────────────────────────────────────
function Foerderrechner() {
  const [massnahmeIdx, setMassnahmeIdx] = useState(0);
  const [investition, setInvestition] = useState(18000);
  const [klimaBonus, setKlimaBonus] = useState(false);
  const [einkommensBonus, setEinkommensBonus] = useState(false);
  const [wohneinheiten, setWohneinheiten] = useState(1);

  const massnahme = foerderMassnahmen[massnahmeIdx];

  const handleMassnahme = (idx: number) => {
    setMassnahmeIdx(idx);
    setInvestition(foerderMassnahmen[idx].defaultKosten);
    setKlimaBonus(false);
    setEinkommensBonus(false);
  };

  const foerder = useMemo(() => {
    const m = foerderMassnahmen[massnahmeIdx];

    if (!m.beg) {
      // PV: 0 % MwSt seit 2023 → 19 % Ersparnis auf Nettopreis
      // Preis ist bereits Bruttopreis, Netto = Brutto / 1.19, MwSt = Brutto - Netto
      const mwstErsparnis = Math.round(investition - investition / 1.19);
      return {
        type: "pv",
        mwstErsparnis,
        eigenanteil: investition - mwstErsparnis,
        foerderPct: Math.round((mwstErsparnis / investition) * 100),
      };
    }

    // BEG Wärmepumpe
    const maxFoerderbar = wohneinheiten === 1 ? 30000 : wohneinheiten === 2 ? 45000 : 60000;
    const foerderbar = Math.min(investition, maxFoerderbar);

    let pct = 30; // Grundförderung immer
    if (klimaBonus) pct += 20;      // Klimageschwindigkeitsbonus
    if (einkommensBonus) pct += 30; // Einkommensbonus
    pct = Math.min(pct, 70);        // Maximal 70 %

    const zuschuss = Math.round(foerderbar * (pct / 100));
    const restInvestition = investition - foerderbar; // Kosten über Fördergrenze
    const eigenanteil = investition - zuschuss;
    const kfwKredit = eigenanteil; // Rest kann über KfW 270 finanziert werden

    return {
      type: "beg",
      pct,
      foerderbar,
      maxFoerderbar,
      zuschuss,
      eigenanteil,
      kfwKredit,
      restInvestition,
      grundfoerderung: 30,
      klimaBonus: klimaBonus ? 20 : 0,
      einkommensBonus: einkommensBonus ? 30 : 0,
    };
  }, [massnahmeIdx, investition, klimaBonus, einkommensBonus, wohneinheiten]);

  return (
    <div>
      {/* Maßnahme wählen */}
      <div className="px-8 pt-6 pb-0">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Maßnahme wählen</p>
        <div className="grid grid-cols-3 gap-3">
          {foerderMassnahmen.map((m, idx) => (
            <button key={m.id} onClick={() => handleMassnahme(idx)}
              className={`p-3 rounded-xl border-2 text-left transition-all ${
                massnahmeIdx === idx ? "border-[#f5a800] bg-amber-50" : "border-slate-200 hover:border-slate-300 bg-white"
              }`}>
              <m.icon className={`w-5 h-5 mb-2 ${massnahmeIdx === idx ? "text-[#f5a800]" : "text-slate-400"}`} />
              <div className={`text-xs font-bold ${massnahmeIdx === idx ? "text-[#f5a800]" : "text-[#071428]"}`}>{m.label}</div>
              {m.beg && <div className="text-[10px] text-slate-400 mt-1">BEG-Förderung</div>}
              {!m.beg && <div className="text-[10px] text-slate-400 mt-1">0 % MwSt</div>}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0 mt-6">
        {/* Eingaben */}
        <div className="px-8 pb-8 space-y-5 lg:border-r border-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Ihre Angaben</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          {/* Investitionskosten */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-[#071428] flex items-center gap-1.5">
                <Euro className="w-4 h-4" style={{ color: "#f5a800" }} />
                Investitionskosten
              </label>
              <span className="text-sm font-bold" style={{ color: "#f5a800" }}>{fmtEuro(investition)}</span>
            </div>
            <input type="range" min={massnahme.minKosten} max={massnahme.maxKosten}
              step={massnahme.step} value={investition}
              onChange={(e) => setInvestition(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#f5a800" }} />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{fmtEuro(massnahme.minKosten)}</span>
              <span>{fmtEuro(massnahme.maxKosten)}</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
              <Info className="w-3 h-3" />{massnahme.info}
            </div>
          </div>

          {/* BEG Boni */}
          {massnahme.beg && (
            <>
              {/* Wohneinheiten */}
              <div>
                <label className="text-sm font-semibold text-[#071428] block mb-2">Wohneinheiten im Gebäude</label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <button key={n} onClick={() => setWohneinheiten(n)}
                      className={`flex-1 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
                        wohneinheiten === n ? "border-[#f5a800] bg-amber-50 text-[#f5a800]" : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}>
                      {n === 3 ? "3+" : n}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Förderhöchstbetrag: {fmtEuro(wohneinheiten === 1 ? 30000 : wohneinheiten === 2 ? 45000 : 60000)} (BEG-Grenze)
                </div>
              </div>

              {/* Bonus-Checkboxen */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-[#071428] block">Welche Boni treffen auf Sie zu?</label>

                {/* Grundförderung – immer aktiv */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-green-800">Grundförderung +30 %</div>
                    <div className="text-xs text-green-700">Immer dabei – für alle Wärmepumpen automatisch</div>
                  </div>
                </div>

                {/* Klimageschwindigkeitsbonus */}
                <label className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${klimaBonus ? "border-[#f5a800] bg-amber-50" : "border-slate-200 hover:border-slate-300"}`}>
                  <input type="checkbox" className="hidden" checked={klimaBonus} onChange={(e) => setKlimaBonus(e.target.checked)} />
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${klimaBonus ? "border-[#f5a800] bg-[#f5a800]" : "border-slate-300"}`}>
                    {klimaBonus && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${klimaBonus ? "text-[#d4900a]" : "text-[#071428]"}`}>Klimageschwindigkeitsbonus +20 %</div>
                    <div className="text-xs text-slate-500 mt-0.5">Sie ersetzen eine alte Öl-, Gas-, Kohle- oder Nachtspeicherheizung (≥ 20 Jahre alt oder defekt)</div>
                  </div>
                </label>

                {/* Einkommensbonus */}
                <label className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${einkommensBonus ? "border-[#f5a800] bg-amber-50" : "border-slate-200 hover:border-slate-300"}`}>
                  <input type="checkbox" className="hidden" checked={einkommensBonus} onChange={(e) => setEinkommensBonus(e.target.checked)} />
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${einkommensBonus ? "border-[#f5a800] bg-[#f5a800]" : "border-slate-300"}`}>
                    {einkommensBonus && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${einkommensBonus ? "text-[#d4900a]" : "text-[#071428]"}`}>Einkommensbonus +30 %</div>
                    <div className="text-xs text-slate-500 mt-0.5">Haushaltseinkommen ≤ 40.000 € / Jahr (zu versteuerndes Einkommen)</div>
                  </div>
                </label>
              </div>
            </>
          )}

          {!massnahme.beg && (
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-800">
              <div className="font-bold mb-1">ℹ️ PV-Förderung in Deutschland</div>
              <div className="text-xs text-blue-700 space-y-1">
                <div>✔ 0 % Mehrwertsteuer seit Jan. 2023 (§ 12 Abs. 3 UStG)</div>
                <div>✔ Einspeisevergütung nach EEG 2024 (8,11 ct/kWh)</div>
                <div>✔ KfW 270 Kredit zu günstigen Konditionen</div>
              </div>
            </div>
          )}
        </div>

        {/* Ergebnis */}
        <div className="px-8 pb-8 pt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Ihre Förderung auf einen Blick</p>

          {foerder.type === "beg" && (
            <>
              {/* Förderquote Visualisierung */}
              <div className="p-5 rounded-2xl mb-4 text-center"
                style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}>
                <div className="text-5xl font-black mb-1" style={{ color: "#f5a800" }}>
                  {foerder.pct} %
                </div>
                <div className="text-sm text-slate-300">staatliche Förderquote (BEG)</div>
                {/* Fortschrittsbalken */}
                <div className="mt-4 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${((foerder.pct ?? 0) / 70) * 100}%`, background: "linear-gradient(90deg, #f5a800, #ffd700)" }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0 %</span><span>Maximum: 70 %</span>
                </div>
              </div>

              {/* Aufschlüsselung Boni */}
              <div className="rounded-xl p-4 mb-4" style={{ background: "rgba(7,20,40,0.04)", border: "1px solid rgba(7,20,40,0.07)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Zusammensetzung der Förderung</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" />Grundförderung</span>
                    <span className="font-bold text-green-700">+ {foerder.grundfoerderung} %</span>
                  </div>
                  <div className={`flex justify-between items-center text-sm ${foerder.klimaBonus ? "" : "opacity-40"}`}>
                    <span className="text-slate-600 flex items-center gap-1.5">
                      {foerder.klimaBonus ? <CheckCircle className="w-4 h-4 text-[#f5a800]" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300" />}
                      Klimageschwindigkeitsbonus
                    </span>
                    <span className={`font-bold ${foerder.klimaBonus ? "text-[#d4900a]" : "text-slate-400"}`}>+ 20 %</span>
                  </div>
                  <div className={`flex justify-between items-center text-sm ${foerder.einkommensBonus ? "" : "opacity-40"}`}>
                    <span className="text-slate-600 flex items-center gap-1.5">
                      {foerder.einkommensBonus ? <CheckCircle className="w-4 h-4 text-[#f5a800]" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300" />}
                      Einkommensbonus
                    </span>
                    <span className={`font-bold ${foerder.einkommensBonus ? "text-[#d4900a]" : "text-slate-400"}`}>+ 30 %</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-200">
                    <span className="font-bold text-[#071428]">Gesamt</span>
                    <span className="font-black text-[#f5a800]">{foerder.pct} %</span>
                  </div>
                </div>
              </div>

              {/* Finanzielle Übersicht */}
              <div className="space-y-2 mb-5">
                {[
                  { label: "Investition gesamt", val: fmtEuro(investition), bold: false },
                  { label: `Förderfähige Kosten (max. ${fmtEuro(foerder.maxFoerderbar ?? 0)})`, val: fmtEuro(foerder.foerderbar ?? 0), bold: false },
                  { label: `BAFA-Zuschuss (${foerder.pct ?? 0} %)`, val: `− ${fmtEuro(foerder.zuschuss ?? 0)}`, color: "#16a34a", bold: true },
                  { label: "Ihr Eigenanteil", val: fmtEuro(foerder.eigenanteil ?? 0), color: "#071428", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between items-center py-2 ${row.bold ? "border-t border-slate-200" : "border-b border-slate-100"}`}>
                    <span className={`text-sm ${row.bold ? "font-bold text-[#071428]" : "text-slate-600"}`}>{row.label}</span>
                    <span className={`text-sm ${row.bold ? "font-black" : "font-semibold text-[#071428]"}`}
                      style={{ color: row.color }}>{row.val}</span>
                  </div>
                ))}
              </div>

              {foerder.eigenanteil > 0 && (
                <div className="p-3 rounded-xl mb-4 flex items-start gap-2"
                  style={{ background: "rgba(245,168,0,0.08)", border: "1px solid rgba(245,168,0,0.2)" }}>
                  <Banknote className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#f5a800" }} />
                  <p className="text-xs text-slate-600">
                    Den Eigenanteil von <strong>{fmtEuro(foerder.eigenanteil)}</strong> können Sie über
                    den <strong>KfW 270 Kredit</strong> zu attraktiven Konditionen finanzieren.
                    Wir helfen Ihnen bei der Beantragung.
                  </p>
                </div>
              )}
            </>
          )}

          {foerder.type === "pv" && (
            <>
              <div className="p-5 rounded-2xl mb-4 text-center"
                style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}>
                <div className="text-5xl font-black mb-1" style={{ color: "#f5a800" }}>
                  {fmtEuro(foerder.mwstErsparnis ?? 0)}
                </div>
                <div className="text-sm text-slate-300">MwSt-Ersparnis (0 % seit 2023)</div>
                <div className="text-xs text-slate-500 mt-1">{foerder.foerderPct} % Sofortrabatt auf Ihre Anlage</div>
              </div>
              <div className="space-y-2 mb-5">
                {[
                  { label: "Brutto-Investition", val: fmtEuro(investition) },
                  { label: "Ersparnis durch 0 % MwSt", val: `− ${fmtEuro(foerder.mwstErsparnis ?? 0)}`, color: "#16a34a" },
                  { label: "Ihr Nettobetrag", val: fmtEuro(foerder.eigenanteil ?? 0), bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between py-2 ${row.bold ? "border-t border-slate-200" : "border-b border-slate-100"}`}>
                    <span className={`text-sm ${row.bold ? "font-bold text-[#071428]" : "text-slate-600"}`}>{row.label}</span>
                    <span className={`text-sm ${row.bold ? "font-black text-[#071428]" : "font-semibold"}`} style={{ color: row.color }}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl mb-4 text-xs text-slate-600"
                style={{ background: "rgba(245,168,0,0.08)", border: "1px solid rgba(245,168,0,0.2)" }}>
                <strong>Zusätzlich:</strong> Einspeisevergütung 8,11 ct/kWh (EEG 2024) + KfW 270 Kredit möglich. Den genauen Wirtschaftlichkeitsrechner finden Sie im Tab „PV-Rechner".
              </div>
            </>
          )}

          <Link href="/kontakt"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}>
            Förderantrag stellen lassen <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-xs text-slate-400 mt-3">Wir beantragen alle Förderungen für Sie – kostenlos</p>
        </div>
      </div>
    </div>
  );
}

// ─── Haupt-Komponente mit Tab-Navigation ──────────────────────────────────────
export default function WirtschaftlichkeitsRechner() {
  const [tab, setTab] = useState<"pv" | "foerder">("pv");

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header mit Tabs */}
      <div style={{ background: "linear-gradient(135deg, #071428, #0e2244)" }}>
        <div className="px-8 pt-6 pb-0 flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(245,168,0,0.2)" }}>
            <Euro className="w-5 h-5" style={{ color: "#f5a800" }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Rechner & Förderung</h3>
            <p className="text-xs text-slate-400">Richtwerte – individuelle Beratung kostenlos anfragen</p>
          </div>
        </div>
        {/* Tab Bar */}
        <div className="flex px-8">
          {(["pv", "foerder"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-all ${
                tab === t
                  ? "border-[#f5a800] text-[#f5a800]"
                  : "border-transparent text-slate-400 hover:text-slate-300"
              }`}
            >
              {t === "pv" ? "☀️ PV-Wirtschaftlichkeit" : "🏛️ Förderrechner"}
            </button>
          ))}
        </div>
      </div>

      {tab === "pv" ? <PVRechner /> : <Foerderrechner />}
    </div>
  );
}
