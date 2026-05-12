# Bilder einfügen – Anleitung für SunTec Nova

## Wo liegen die Bilder?

Alle eigenen Bilder kommen in den Ordner:
```
/public/images/
```

Next.js serviert diesen Ordner automatisch. Ein Bild unter
`/public/images/solar-dach.jpg` ist dann über `/images/solar-dach.jpg` erreichbar.

---

## Welche Bilder brauche ich?

### Logo (bereits vorhanden)
- `public/logo.png` ✅ (automatisch von suntec-nova.de geladen)

### Empfohlene Bilder zum Hinzufügen

#### Team / Gründer
```
public/images/team/angelo.jpg          → Foto von Angelo Iliev (Über uns Seite)
```

#### Referenzprojekte
```
public/images/referenzen/projekt-1.jpg → Hanau: PV + WP + Speicher
public/images/referenzen/projekt-2.jpg → Gelnhausen: PV + Speicher
public/images/referenzen/projekt-3.jpg → Seligenstadt: Wärmepumpe Altbau
public/images/referenzen/projekt-4.jpg → Mühlheim: PV Neubau
public/images/referenzen/projekt-5.jpg → Offenbach: PV + WP
public/images/referenzen/projekt-6.jpg → Frankfurt: PV Wartung
```

#### Hero / Hintergrundbilder (optional)
```
public/images/hero-solar.jpg           → Solardach Nahaufnahme
public/images/hero-waermepumpe.jpg     → Wärmepumpe außen
public/images/hero-beratung.jpg        → Beratungsgespräch
```

---

## Wie binde ich ein Bild ein?

In Next.js immer die `Image`-Komponente verwenden:

```tsx
import Image from "next/image";

<Image
  src="/images/team/angelo.jpg"
  alt="Angelo Iliev, Gründer SunTec Nova"
  width={400}
  height={400}
  className="rounded-2xl"
/>
```

### Oder als Hintergrundbild (CSS):
```tsx
<div
  style={{ backgroundImage: "url('/images/hero-solar.jpg')" }}
  className="bg-cover bg-center"
>
```

---

## Welche Bildformate?

| Format | Empfehlung |
|--------|-----------|
| `.webp` | Beste Komprimierung, modern – bevorzugen |
| `.jpg` | Gut für Fotos |
| `.png` | Nur wenn Transparenz nötig (z.B. Logo) |
| `.svg` | Für Icons und Vektorgrafiken |

---

## Empfohlene Bildgrößen

| Einsatz | Breite | Höhe |
|---------|--------|------|
| Referenzprojekte | 800px | 600px |
| Team-Foto Angelo | 400px | 500px |
| Hero-Hintergrund | 1920px | 1080px |
| Partner-Logos | 200px | 80px |

---

## Kostenlose Bilder (Stockfotos)

Wenn Sie eigene Fotos noch nicht haben, können Sie diese kostenlosen
Quellen nutzen:

- **Unsplash.com** – `solar panels house`, `heat pump outdoor`
- **Pexels.com** – `photovoltaik`, `renewable energy`
- **Pixabay.com** – keine Namensnennung nötig

**Wichtig:** Für eine professionelle Website sind eigene Projektfotos
aus Ihren echten Referenzen deutlich wirkungsvoller als Stockfotos.

---

## Partner-Logos

Die Partner-Logos werden direkt per CDN-URL von der bestehenden
Website geladen – kein Download nötig. Sie sind in `src/config/site.ts`
unter `partners[]` konfiguriert.

Falls Sie die Logos lokal speichern möchten:
1. Logos herunterladen und in `public/images/partner/` ablegen
2. In `src/config/site.ts` die URLs anpassen:
   ```ts
   logo: "/images/partner/viessmann.png"
   ```
