"use client";
import { useState } from "react";
import Link from "next/link";
import { GT, GTHeader, GTFooter, GTPageHero, PhoneIcon, MailIcon, MapPinIcon } from "../_components/GTShared";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "PV-Recycling", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `[GreenTech Kontaktformular]\nFirma: ${form.company}\nBetreff: ${form.subject}\n\n${form.message}`,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a1a" }}>
      <GTHeader />

      <GTPageHero
        breadcrumb="Kontakt"
        eyebrow="Kontakt"
        title="Lassen Sie uns über Ihr Projekt sprechen"
        subtitle="Schreiben Sie uns – wir melden uns zeitnah mit einer unverbindlichen Einschätzung zurück."
      />

      <section style={{ padding: "5rem 1.5rem", background: "#f7fbf7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>

          {/* Formular */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "2.5rem", boxShadow: "0 2px 20px rgba(46,125,50,0.08)", border: "1px solid rgba(46,125,50,0.1)" }}>
            <h2 style={{ fontWeight: 800, color: GT.deep, fontSize: "1.4rem", marginBottom: "1.75rem" }}>Ihre Nachricht an uns</h2>

            {status === "success" && (
              <div style={{ background: "#e8f5e9", color: "#2E7D32", padding: "14px 18px", borderRadius: 8, marginBottom: "1.5rem", fontWeight: 500 }}>
                ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.
              </div>
            )}
            {status === "error" && (
              <div style={{ background: "#ffebee", color: "#c62828", padding: "14px 18px", borderRadius: 8, marginBottom: "1.5rem", fontWeight: 500 }}>
                ⚠ Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Name *</label>
                <input style={inputStyle} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={(e) => (e.target.style.borderColor = GT.accent)} onBlur={(e) => (e.target.style.borderColor = "#d1d5db")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Firma</label>
                <input style={inputStyle} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} onFocus={(e) => (e.target.style.borderColor = GT.accent)} onBlur={(e) => (e.target.style.borderColor = "#d1d5db")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>E-Mail *</label>
                <input type="email" style={inputStyle} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={(e) => (e.target.style.borderColor = GT.accent)} onBlur={(e) => (e.target.style.borderColor = "#d1d5db")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Telefon</label>
                <input type="tel" style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} onFocus={(e) => (e.target.style.borderColor = GT.accent)} onBlur={(e) => (e.target.style.borderColor = "#d1d5db")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, gridColumn: "1 / -1" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Betreff</label>
                <select style={{ ...inputStyle, background: "#fff" }} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                  <option>PV-Recycling</option>
                  <option>Rückbau von Solaranlagen</option>
                  <option>Demontage</option>
                  <option>Transport</option>
                  <option>Fachgerechte Entsorgung</option>
                  <option>Entrümpelung & Entsorgung</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, gridColumn: "1 / -1" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Nachricht *</label>
                <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" as const }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={(e) => (e.target.style.borderColor = GT.accent)} onBlur={(e) => (e.target.style.borderColor = "#d1d5db")} />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ background: status === "sending" ? "#aaa" : GT.accent, color: "#fff", border: "none", padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: "1rem", cursor: status === "sending" ? "not-allowed" : "pointer", fontFamily: "inherit" }}
                >
                  {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
                </button>
                <p style={{ fontSize: "0.78rem", color: "#9ca3af", marginTop: 8 }}>* Pflichtfelder</p>
              </div>
            </form>
          </div>

          {/* Kontaktdaten + Karte */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2rem" }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(46,125,50,0.08)", border: "1px solid rgba(46,125,50,0.1)" }}>
              <h3 style={{ fontWeight: 700, color: GT.deep, marginBottom: "1.25rem", fontSize: "1.1rem" }}>Kontaktdaten</h3>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
                <a href="https://www.google.com/maps/search/?api=1&query=Im+Schlo%C3%9Fhof+5+63450+Hanau" target="_blank" rel="noopener" style={{ display: "flex", gap: 12, color: "#444", textDecoration: "none", alignItems: "flex-start" }}>
                  <span style={{ color: GT.accent, marginTop: 2, flexShrink: 0 }}><MapPinIcon size={18} /></span>
                  <span><strong style={{ display: "block", color: GT.deep }}>Adresse</strong>Im Schloßhof 5<br />63450 Hanau</span>
                </a>
                <a href="tel:+4915206066696" style={{ display: "flex", gap: 12, color: "#444", textDecoration: "none", alignItems: "center" }}>
                  <span style={{ color: GT.accent, flexShrink: 0 }}><PhoneIcon size={18} /></span>
                  <span><strong style={{ display: "block", color: GT.deep }}>Telefon</strong>+49 152 06066696</span>
                </a>
                <a href="mailto:info@suntec-nova.de" style={{ display: "flex", gap: 12, color: "#444", textDecoration: "none", alignItems: "center" }}>
                  <span style={{ color: GT.accent, flexShrink: 0 }}><MailIcon size={18} /></span>
                  <span><strong style={{ display: "block", color: GT.deep }}>E-Mail</strong>info@suntec-nova.de</span>
                </a>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: GT.accent, flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={18} height={18}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </span>
                  <span><strong style={{ display: "block", color: GT.deep }}>Website</strong>www.suntec-nova.de</span>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div style={{ borderRadius: 16, overflow: "hidden", height: 280, boxShadow: "0 2px 16px rgba(0,0,0,0.1)" }}>
              <iframe
                src="https://www.google.com/maps?q=Im+Schlo%C3%9Fhof+5,+63450+Hanau&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SunTec Nova GreenTech Standort"
              />
            </div>

          </div>
        </div>
      </section>

      <GTFooter />
    </div>
  );
}
