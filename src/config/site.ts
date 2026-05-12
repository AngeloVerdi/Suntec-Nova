// ─────────────────────────────────────────────────────────────
// ZENTRALE KONFIGURATIONSDATEI – hier alle Daten anpassen
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  companyName: "SunTec Nova GmbH",
  tagline: "Photovoltaik & Wärmepumpen aus einer Hand",
  slogan: "Kosten senken, Sonne nutzen!",
  logo: "https://cdn.prod.website-files.com/667abfd141bd9d4cbe13fa2a/67e3cef18d07f5d32a193390_Suntec%20Nova%20LOGO.png",
  businessCard: "https://cdn.prod.website-files.com/667abfd141bd9d4cbe13fa2a/667ac262feb688dc29235859_neu%20suntec%20nova%20visitenlarte%20mit%20gelb.png",
  phone: "+4915206066696",
  phoneDisplay: "0152 06066696",
  email: "info@suntec-nova.de",
  website: "https://www.suntec-nova.de",
  street: "Im Schloßhof 5",
  postalCode: "63450",
  city: "Hanau",
  state: "Hessen",
  country: "Deutschland",
  mainRegion: "Rhein-Main-Gebiet",
  whatsapp: "4915206066696",
  foundedYear: "2024",
  employeeCount: "12",
  projectsCompleted: "300",
  yearsExperience: "10",

  // Gründer / Ansprechpartner
  founder: {
    name: "Angelov Ivan Iliev",
    role: "Gründer & Geschäftsführer",
    bio: "Angelov Ivan Iliev gründete SunTec Nova mit einer klaren Vision: Hausbesitzern im Rhein-Main-Gebiet einen ehrlichen, kompetenten Partner für die Energiewende zu bieten. Mit jahrelanger Erfahrung in der Solarbranche kennt er die Technik bis ins Detail – und weiß, was Kunden wirklich brauchen.",
    image: "/images/team/angelo.jpg", // Bitte eigenes Foto hinterlegen
  },

  // Social Media
  social: {
    youtube: "https://www.youtube.com/@suntecnova",
    facebook: "https://www.facebook.com/suntecnova",
    instagram: "https://www.instagram.com/suntecnova/",
  },

  // Partner-Logos
  partners: [
    {
      name: "Bosch",
      logo: "/images/partners/bosch.png",
    },
    {
      name: "Huawei",
      logo: "/images/partners/huawei.png",
    },
    {
      name: "Sungrow",
      logo: "/images/partners/sungrow.svg",
    },
    {
      name: "Fronius",
      logo: "/images/partners/fronius.svg",
    },
    {
      name: "AlphaESS",
      logo: "/images/partners/alphaess.webp",
    },
    {
      name: "Bauer Solar",
      logo: "/images/partners/bauersolar.svg",
    },
    {
      name: "Trina Solar",
      logo: "/images/partners/trina.png",
    },
    {
      name: "Aiko Solar",
      logo: "/images/partners/aiko.png",
    },
    {
      name: "K2 System",
      logo: "/images/partners/k2system.png",
    },
  ],

  serviceAreas: [
    { name: "Hanau", slug: "hanau" },
    { name: "Main-Kinzig-Kreis", slug: "main-kinzig-kreis" },
    { name: "Aschaffenburg", slug: "aschaffenburg" },
    { name: "Offenbach", slug: "offenbach" },
    { name: "Frankfurt am Main", slug: "frankfurt" },
    { name: "Gelnhausen", slug: "gelnhausen" },
    { name: "Seligenstadt", slug: "seligenstadt" },
    { name: "Rödermark", slug: "roedermark" },
    { name: "Dreieich", slug: "dreieich" },
    { name: "Mühlheim am Main", slug: "muehlheim" },
  ],

  mainKeywords: [
    "Wärmepumpe Hanau",
    "Photovoltaik Hanau",
    "Wärmepumpe Rhein-Main",
    "Photovoltaik Rhein-Main",
    "Wärmepumpe Main-Kinzig-Kreis",
    "Photovoltaik Main-Kinzig-Kreis",
    "Wärmepumpe Aschaffenburg",
    "Photovoltaik Aschaffenburg",
    "Wärmepumpe Frankfurt Umgebung",
    "Energieberatung Hanau",
    "Solar Anlage Hanau",
    "Heizung modernisieren Rhein-Main",
  ],

  services: [
    {
      id: "photovoltaik",
      title: "Photovoltaik",
      shortTitle: "PV-Anlage",
      slug: "/photovoltaik",
      description:
        "Eigenstrom produzieren, Stromkosten dauerhaft senken. Wir planen und installieren Ihre Photovoltaikanlage – von der Beratung bis zur Inbetriebnahme.",
      icon: "Sun",
    },
    {
      id: "waermepumpe",
      title: "Wärmepumpe",
      shortTitle: "Wärmepumpe",
      slug: "/waermepumpe",
      description:
        "Heizen mit erneuerbarer Energie. Wir beraten, planen und installieren Ihre Wärmepumpe – ideal kombiniert mit Ihrer Photovoltaikanlage.",
      icon: "Thermometer",
    },
    {
      id: "speicher",
      title: "Stromspeicher",
      shortTitle: "Batteriespeicher",
      slug: "/photovoltaik#speicher",
      description:
        "Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom rund um die Uhr – auch nachts und an bewölkten Tagen.",
      icon: "Battery",
    },
    {
      id: "wartung",
      title: "Wartung & Reinigung",
      shortTitle: "Wartung",
      slug: "/wartung",
      description:
        "Regelmäßige Wartung und professionelle Reinigung sichern die volle Leistungsfähigkeit Ihrer PV-Anlage über die gesamte Laufzeit.",
      icon: "Wrench",
    },
    {
      id: "beratung",
      title: "Energieberatung",
      shortTitle: "Beratung",
      slug: "/kontakt",
      description:
        "Persönliche Vor-Ort-Beratung im Rhein-Main-Gebiet. Wir analysieren Ihre Situation und zeigen Ihnen den wirtschaftlichsten Weg zur Energieunabhängigkeit.",
      icon: "ClipboardList",
    },
  ],

  faqItems: [
    {
      question: "Was kostet eine Wärmepumpe?",
      answer:
        "Die Gesamtkosten für eine Wärmepumpe liegen je nach Typ und Gebäudegröße typischerweise zwischen 15.000 und 35.000 Euro. Durch staatliche Förderung (BEG) erhalten Sie aktuell bis zu 70 % der förderfähigen Kosten als Zuschuss. Netto investieren viele Eigentümer damit deutlich weniger als erwartet. Wir erstellen Ihnen eine konkrete Kostenschätzung – kostenlos und unverbindlich.",
    },
    {
      question: "Lohnt sich eine Wärmepumpe im Altbau?",
      answer:
        "Ja – wenn das Gebäude bestimmte energetische Mindestvoraussetzungen erfüllt. Entscheidend sind der Dämmzustand und das Heizsystem. Moderne Wärmepumpen arbeiten auch bei älteren Heizkörpern wirtschaftlich. Wir prüfen Ihren Altbau kostenlos vor Ort und sagen Ihnen, ob und welche Wärmepumpe für Sie Sinn ergibt.",
    },
    {
      question: "Kann ich Wärmepumpe und Photovoltaik kombinieren?",
      answer:
        "Absolut – das ist sogar die ideale Kombination. Ihre Photovoltaikanlage produziert tagsüber günstigen Eigenstrom, den die Wärmepumpe direkt nutzt. So sinken Ihre Betriebskosten erheblich. Wir planen beide Systeme aufeinander abgestimmt – für maximale Unabhängigkeit und maximale Einsparung.",
    },
    {
      question: "Welche Förderung gibt es?",
      answer:
        "Für Wärmepumpen gibt es aktuell die Bundesförderung Effiziente Gebäude (BEG) mit einem Grundbonus von 30 %, einem Klimageschwindigkeits-Bonus von bis zu 20 % und einem Einkommens-Bonus von 30 % – insgesamt bis zu 70 % Förderung. Photovoltaikanlagen profitieren von Einspeisevergütung, Mehrwertsteuerbefreiung und attraktiven Finanzierungsangeboten der KfW. Wir begleiten Sie durch den gesamten Förderantragsprozess.",
    },
    {
      question: "Wie läuft die Installation ab?",
      answer:
        "1. Kostenloses Erstgespräch & Vor-Ort-Begehung. 2. Individuelles Angebot & Förderberatung. 3. Planung & Genehmigungen. 4. Installation durch unser Fachteam. 5. Inbetriebnahme, Einweisung & Übergabe. Sie haben von Anfang bis Ende einen persönlichen Ansprechpartner bei SunTec Nova.",
    },
    {
      question: "Wie lange dauert ein Projekt?",
      answer:
        "Von der Auftragserteilung bis zur Inbetriebnahme dauert es je nach Kapazität und Genehmigungslage typischerweise 6 bis 12 Wochen. Wir halten Sie jederzeit über den aktuellen Stand informiert.",
    },
    {
      question: "Für wen lohnt sich eine Photovoltaikanlage?",
      answer:
        "Grundsätzlich für jeden Hauseigentümer mit geeignetem Dach. Besonders wirtschaftlich ist eine PV-Anlage bei einem jährlichen Stromverbrauch ab 3.500 kWh, tagsüber anwesendem Haushalt oder Elektrofahrzeug. Die Amortisation liegt heute typischerweise bei 8 bis 12 Jahren – bei einer Anlagenlebensdauer von 25–30 Jahren.",
    },
    {
      question: "Was bringt ein Batteriespeicher?",
      answer:
        "Ein Speicher erhöht Ihren Eigenverbrauch von typischerweise 30 % auf bis zu 70–80 %. Das bedeutet: Sie kaufen deutlich weniger Strom vom Netz. Besonders in Kombination mit einer Wärmepumpe macht ein Speicher wirtschaftlich Sinn.",
    },
    {
      question: "Was kostet eine Photovoltaikanlage?",
      answer:
        "Eine typische Photovoltaikanlage für ein Einfamilienhaus (6–10 kWp) kostet zwischen 8.000 und 18.000 Euro inklusive Installation. Seit Januar 2023 gilt 0 % Mehrwertsteuer auf PV-Anlagen. Mit einem Batteriespeicher kommen je nach Kapazität weitere 5.000 bis 12.000 Euro hinzu. Wir erstellen Ihnen eine kostenlose Wirtschaftlichkeitsberechnung.",
    },
    {
      question: "Wie oft muss eine PV-Anlage gewartet werden?",
      answer:
        "Wir empfehlen eine professionelle Inspektion alle 2 Jahre sowie eine Reinigung nach Bedarf – mindestens einmal jährlich, in Regionen mit viel Staub oder Vogelkot öfter. Regelmäßige Wartung sichert die volle Leistung und die Garantieansprüche der Hersteller. SunTec Nova bietet Wartungs- und Reinigungsverträge an.",
    },
    {
      question: "In welchen Regionen ist SunTec Nova tätig?",
      answer:
        "Wir sind im gesamten Rhein-Main-Gebiet tätig: Hanau, Main-Kinzig-Kreis, Aschaffenburg, Offenbach, Frankfurt und Umgebung. Sprechen Sie uns an – wir kommen zu Ihnen.",
    },
    {
      question: "Wie schnell bekomme ich ein Angebot?",
      answer:
        "Nach Ihrem Erstgespräch und der Vor-Ort-Begehung erhalten Sie Ihr individuelles Angebot in der Regel innerhalb von 5 bis 7 Werktagen. Kontaktieren Sie uns – wir melden uns schnell.",
    },
  ],

  testimonials: [
    {
      name: "Familie Müller",
      location: "Hanau",
      rating: 5,
      text: "SunTec Nova hat unsere Photovoltaikanlage und Wärmepumpe perfekt aufeinander abgestimmt. Die Beratung war ehrlich, das Team professionell und der Zeitplan wurde eingehalten. Unsere Energiekosten haben sich halbiert.",
      project: "PV 9,2 kWp + Wärmepumpe + Speicher",
      placeholder: true,
    },
    {
      name: "Herr Schneider",
      location: "Gelnhausen",
      rating: 5,
      text: "Endlich ein Anbieter, der nicht einfach irgendwas verkauft, sondern wirklich berät. Die Wärmepumpe läuft seit einem Jahr problemlos – und mit dem Solarstrom vom Dach bezahlen wir sie quasi selbst.",
      project: "Luft-Wasser-Wärmepumpe 12 kW",
      placeholder: true,
    },
    {
      name: "Familie Hartmann",
      location: "Seligenstadt",
      rating: 5,
      text: "Wir haben uns bei mehreren Anbietern beraten lassen. SunTec Nova war der einzige, der sich wirklich Zeit genommen hat und uns die Förderung vollständig erklärt hat. Absolut empfehlenswert.",
      project: "PV 12,4 kWp + Batteriespeicher",
      placeholder: true,
    },
    {
      name: "Herr Weber",
      location: "Offenbach",
      rating: 5,
      text: "Termingerecht, sauber und unkompliziert. Das Handwerksteam war professionell, die Dokumentation vollständig. Ich werde SunTec Nova jedem empfehlen, der über Wärmepumpe oder Solar nachdenkt.",
      project: "Wärmepumpe Sanierung Altbau",
      placeholder: true,
    },
  ],

  processSteps: [
    {
      step: "01",
      title: "Kostenloses Erstgespräch",
      description:
        "Wir hören zu. In einem persönlichen Gespräch – telefonisch oder vor Ort – verstehen wir Ihre Situation, Ihre Ziele und Ihr Gebäude.",
    },
    {
      step: "02",
      title: "Vor-Ort-Analyse",
      description:
        "Unser Fachberater kommt zu Ihnen. Wir begutachten Dach, Heizung, Verbrauch und prüfen die technischen Voraussetzungen.",
    },
    {
      step: "03",
      title: "Individuelles Angebot",
      description:
        "Sie erhalten ein transparentes Angebot mit Systemauslegung, Wirtschaftlichkeitsberechnung und Förderübersicht. Kein Druck, kein Kleingedrucktes.",
    },
    {
      step: "04",
      title: "Planung & Genehmigung",
      description:
        "Wir übernehmen die gesamte Planung, Netzanmeldung und Förderanträge. Sie müssen sich um nichts kümmern.",
    },
    {
      step: "05",
      title: "Professionelle Installation",
      description:
        "Unser zertifiziertes Team installiert Ihre Anlage termingerecht, sauber und nach allen Normen. Inklusive vollständiger Dokumentation.",
    },
    {
      step: "06",
      title: "Übergabe & Support",
      description:
        "Wir nehmen die Anlage gemeinsam mit Ihnen in Betrieb, erklären alles verständlich und sind danach als verlässlicher Ansprechpartner für Sie da.",
    },
  ],

  certifications: [
    "VDE-zertifiziert",
    "BAFA-anerkannt",
    "KfW-Partner",
    "SHK-Fachbetrieb",
    "BEG-förderfähig",
    "20 Jahre Garantie auf Module",
  ],

  seo: {
    home: {
      title: "SunTec Nova Hanau | Photovoltaik & Wärmepumpe im Rhein-Main-Gebiet",
      description:
        "Photovoltaik und Wärmepumpen aus einer Hand – regional, persönlich, professionell. SunTec Nova berät und installiert in Hanau, Main-Kinzig-Kreis, Aschaffenburg und Umgebung. ☎ 0152 06066696",
      keywords:
        "Photovoltaik Hanau, Wärmepumpe Hanau, Solar Rhein-Main, Energieberatung Hanau, SunTec Nova",
    },
    waermepumpe: {
      title: "Wärmepumpe Hanau & Rhein-Main | Installation & Beratung | SunTec Nova",
      description:
        "Wärmepumpe in Hanau, Main-Kinzig-Kreis, Aschaffenburg und Offenbach – Beratung, Planung und Installation. Bis zu 70 % BEG-Förderung. Jetzt kostenlos beraten lassen. ☎ 0152 06066696",
      keywords:
        "Wärmepumpe Hanau, Wärmepumpe Main-Kinzig-Kreis, Wärmepumpe Aschaffenburg, Wärmepumpe Rhein-Main, BEG Förderung",
    },
    photovoltaik: {
      title: "Photovoltaik Hanau & Rhein-Main | Solaranlage Installation | SunTec Nova",
      description:
        "Photovoltaik in Hanau, Offenbach, Aschaffenburg und Frankfurt Umgebung – eigenen Strom erzeugen, Kosten senken. 0 % MwSt. Kostenlose Beratung. ☎ 0152 06066696",
      keywords:
        "Photovoltaik Hanau, Solaranlage Rhein-Main, Photovoltaik Main-Kinzig-Kreis, Solar Frankfurt Umgebung, PV Anlage",
    },
    ueberUns: {
      title: "Über uns | SunTec Nova – Ihr Energiepartner im Rhein-Main-Gebiet | Hanau",
      description:
        "Lernen Sie SunTec Nova kennen – regionaler Fachbetrieb für Photovoltaik und Wärmepumpen in Hanau. Gegründet von Angelov Ivan Iliev. Seit Jahren verlässlich, persönlich, kompetent.",
      keywords:
        "SunTec Nova, Angelov Ivan Iliev, Energiepartner Hanau, Fachbetrieb Photovoltaik Wärmepumpe Hanau",
    },
    kontakt: {
      title: "Kontakt | Kostenlose Beratung anfragen | SunTec Nova Hanau",
      description:
        "Kontaktieren Sie SunTec Nova für Ihre kostenlose Energieberatung in Hanau und dem Rhein-Main-Gebiet. ☎ 0152 06066696 | info@suntec-nova.de – schnelle Antwort garantiert.",
      keywords:
        "Kontakt SunTec Nova, Energieberatung Hanau, Solar Wärmepumpe Beratung, Anfrage Photovoltaik",
    },
    foerderung: {
      title: "Förderung Photovoltaik & Wärmepumpe 2024 | BEG, KfW | SunTec Nova Hanau",
      description:
        "Alle aktuellen Förderprogramme für Photovoltaik und Wärmepumpen: BEG bis 70 %, KfW-Kredit, 0 % MwSt. Wir beantragen die Förderung für Sie. Kostenlose Beratung.",
      keywords:
        "Förderung Wärmepumpe, BEG Förderung, KfW Photovoltaik, Bundesförderung Effiziente Gebäude, Heizungsförderung Hanau",
    },
    referenzen: {
      title: "Referenzen & Projekte | Photovoltaik & Wärmepumpe | SunTec Nova",
      description:
        "Über 300 erfolgreich abgeschlossene PV- und Wärmepumpen-Projekte im Rhein-Main-Gebiet. Sehen Sie unsere Referenzen aus Hanau, Main-Kinzig-Kreis und Umgebung.",
      keywords:
        "Referenzen Photovoltaik Hanau, Projekte Wärmepumpe Rhein-Main, SunTec Nova Erfahrungen",
    },
    wartung: {
      title: "Wartung & Reinigung PV-Anlage Hanau | SunTec Nova",
      description:
        "Professionelle Wartung und Reinigung Ihrer Photovoltaikanlage im Rhein-Main-Gebiet. Regelmäßige Inspektion sichert volle Leistung und Garantieansprüche.",
      keywords:
        "PV Anlage Wartung Hanau, Photovoltaik Reinigung Rhein-Main, Solar Wartungsvertrag",
    },
  },
};

export type SiteConfig = typeof siteConfig;
