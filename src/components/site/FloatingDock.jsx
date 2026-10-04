import React, { useState } from "react";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/siteConfig";

export default function FloatingDock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-sm border border-border bg-card p-2 shadow-2xl">
          <a href={telLink} className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary">
            <Phone className="h-5 w-5 text-citron" /> Llamar ahora
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary">
            <MessageCircle className="h-5 w-5 text-citron" /> WhatsApp
          </a>
          <a href="#contacto" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary">
            <ChevronUp className="h-5 w-5 text-citron" /> Formulario
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contacto rápido"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-citron text-graphite shadow-2xl transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}