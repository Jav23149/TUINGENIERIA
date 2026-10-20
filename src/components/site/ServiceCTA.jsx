import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/siteConfig";

export default function ServiceCTA({ title = "¿Hablamos de tu proyecto?", subtitle = "Te asesoramos sin compromiso. Presupuesto gratis en menos de 24 horas." }) {
  return (
    <section className="border-y border-[#1C5943] bg-[#10352A]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex min-w-0 flex-1 flex-col gap-1 text-center lg:text-left">
          <h2 className="font-body text-2xl font-semibold leading-[1.1] tracking-normal text-[#F8FAF8] sm:text-3xl">{title}</h2>
          <p className="font-body text-sm font-light leading-[1.25] tracking-[0.45px] text-[#DCEFE4] lg:whitespace-nowrap">{subtitle}</p>
        </div>
        <div className="hidden h-12 w-px flex-none bg-[#DCEFE4] opacity-70 lg:block" aria-hidden="true" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
          <a
            href={telLink}
            className="svc-cta-btn svc-cta-btn--primary flex h-12 items-center justify-center gap-2 rounded-none px-6 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" /> Llamar ahora
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="svc-cta-btn svc-cta-btn--secondary flex h-12 items-center justify-center gap-2 rounded-none px-6 text-sm font-semibold"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}