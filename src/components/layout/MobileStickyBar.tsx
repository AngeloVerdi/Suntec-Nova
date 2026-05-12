"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 shadow-2xl">
      <div className="flex divide-x divide-slate-200">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-[#071428] active:bg-slate-50"
        >
          <Phone className="w-4 h-4" style={{ color: "#f5a800" }} />
          Anrufen
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-[#071428] active:bg-slate-50"
        >
          <MessageCircle className="w-4 h-4 text-green-500" />
          WhatsApp
        </a>
        <Link
          href="/kontakt"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #f5a800, #d4900a)" }}
        >
          Beratung
        </Link>
      </div>
    </div>
  );
}
