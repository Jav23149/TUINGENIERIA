import React from "react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

// Mapa embebido de Valencia (OpenStreetMap) con la ubicación del negocio marcada.
const BBOX = "-0.42,39.44,-0.33,39.50";
const MARKER = "39.4699,-0.3763";
const SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(BBOX)}&layer=mapnik&marker=${encodeURIComponent(MARKER)}`;

export default function ValenciaMap() {
  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <iframe
        title={`Mapa de ${siteConfig.provincia}`}
        src={SRC}
        className="h-40 w-full grayscale-[0.2]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.openstreetmap.org/?mlat=39.4699&mlon=-0.3763#map=12/39.4699/-0.3763`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 bg-graphite px-3 py-2 text-xs font-semibold text-citron transition hover:bg-secondary"
      >
        <MapPin className="h-3.5 w-3.5" /> Ver en el mapa · {siteConfig.direccion}
      </a>
    </div>
  );
}