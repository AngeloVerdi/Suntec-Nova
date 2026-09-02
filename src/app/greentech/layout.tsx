import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GreenTech Recycling | SunTec Nova – PV-Rückbau & Entsorgung",
  description: "Ihr deutschlandweiter Partner für fachgerechten Rückbau, Transport und Recycling von Photovoltaikanlagen. Zertifiziert, nachhaltig, zuverlässig.",
};

export default function GreenTechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
