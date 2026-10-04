import React, { useState } from "react";
import { Phone, X, ChevronUp } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/siteConfig";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.4L3.2 28.8l6.55-1.7a12.74 12.74 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.72 12.72 0 0 0 16.003 3.2zm0 23.04h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.01 1.04-3.79-.25-.39a10.58 10.58 0 0 1-1.62-5.64c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.63 10.62zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

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
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
          </a>
          <a href="#contacto" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary">
            <ChevronUp className="h-5 w-5 text-citron" /> Formulario
          </a>
        </div>
      )}
      <div className="flex items-center gap-2">
        <span className="hidden rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg sm:inline-block">
          ¿Te ayudamos?
        </span>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar contacto" : "Abrir contacto rápido"}
          className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition hover:scale-105 ${open ? "bg-card text-foreground" : "bg-[#25D366] text-white"}`}
        >
          {open ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
        </button>
      </div>
    </div>
  );
}