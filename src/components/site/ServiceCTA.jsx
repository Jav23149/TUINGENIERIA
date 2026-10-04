import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/siteConfig";

export default function ServiceCTA({ title = "¿Hablamos de tu proyecto?", subtitle = "Presupuesto gratis y sin compromiso en menos de 2 horas." }) {
  return (
    <section className="border-y border-border bg-citron">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-2xl font-black text-graphite sm:text-3xl">{title}</h2>
          <p className="mt-1 text-sm font-medium text-graphite/80">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={telLink}
            className="flex h-12 items-center justify-center gap-2 rounded-sm bg-graphite px-6 text-sm font-bold text-foreground transition hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> Llamar ahora
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-sm bg-graphite px-6 text-sm font-bold text-foreground transition hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}