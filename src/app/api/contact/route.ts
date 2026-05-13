import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const interestMap: Record<string, string> = {
      photovoltaik: "Photovoltaikanlage",
      waermepumpe: "Wärmepumpe",
      kombination: "Photovoltaik + Wärmepumpe",
      speicher: "Batteriespeicher",
      wartung: "Wartung / Reinigung",
      beratung: "Allgemeine Energieberatung",
    };

    const emailHtml = `
<h2 style="color:#071428;">Neue Anfrage über suntec-nova.de</h2>

<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;width:200px;">Name</td><td style="padding:8px;">${data.name}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;">E-Mail</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;">Telefon</td><td style="padding:8px;background:#f8fafc;">${data.phone || "–"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;">PLZ / Ort</td><td style="padding:8px;">${data.plz}</td></tr>
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;">Interesse</td><td style="padding:8px;background:#f8fafc;">${interestMap[data.interest] || data.interest || "–"}</td></tr>
</table>

<h3 style="color:#f5a800;margin-top:20px;">Gebäude & Dach</h3>
<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;width:200px;">Gebäudeart</td><td style="padding:8px;background:#f8fafc;">${data.gebaeudeart || "–"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;">Baujahr</td><td style="padding:8px;">${data.baujahr || "–"}</td></tr>
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;">Dachart</td><td style="padding:8px;background:#f8fafc;">${data.dachart || "–"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;">Dachausrichtung</td><td style="padding:8px;">${data.dachausrichtung || "–"}</td></tr>
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;">Dachfläche</td><td style="padding:8px;background:#f8fafc;">${data.dachflaeche || "–"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;">Dachzustand</td><td style="padding:8px;">${data.dachzustand || "–"}</td></tr>
</table>

<h3 style="color:#f5a800;margin-top:20px;">Energiesituation</h3>
<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
  <tr><td style="padding:8px;background:#f8fafc;font-weight:bold;width:200px;">Heizsystem</td><td style="padding:8px;background:#f8fafc;">${data.heizsystem || "–"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;">Stromverbrauch/Jahr</td><td style="padding:8px;">${data.stromverbrauch || "–"}</td></tr>
</table>

${data.message ? `<h3 style="color:#f5a800;margin-top:20px;">Weitere Anmerkungen</h3><p style="font-family:Arial,sans-serif;font-size:14px;">${data.message}</p>` : ""}

<hr style="margin-top:30px;border:none;border-top:1px solid #e2e8f0;" />
<p style="font-family:Arial,sans-serif;font-size:12px;color:#94a3b8;">Diese E-Mail wurde automatisch über das Kontaktformular auf suntec-nova.de gesendet.</p>
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "SunTec Nova Website <onboarding@resend.dev>",
        to: ["info@suntec-nova.de"],
        reply_to: data.email,
        subject: `Neue Anfrage von ${data.name} – SunTec Nova`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
