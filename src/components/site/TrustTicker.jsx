import React from "react";
import { BadgeCheck } from "lucide-react";

const ITEMS = [
  "Presupuesto cerrado y por escrito",
  "Garantía en todos los trabajos",
  "Un único interlocutor para tu obra",
  "Respuesta en menos de 24h",
  "Equipo propio · sin subcontratas",
  "+100 reseñas reales 5★ en Google",
];

export default function TrustTicker() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-border bg-graphite py-3.5">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {items.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-2 text-sm font-medium text-white/90">
            <BadgeCheck className="h-4 w-4 text-citron-soft" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}