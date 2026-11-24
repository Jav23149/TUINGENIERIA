import React from "react";
import { Zap, Clock, Phone, MessageCircle, Wrench } from "lucide-react";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";

const BULLETS = [
  { icon: Clock, title: "Respuesta el mismo día", desc: "Si nos llamas por la mañana, pasamos a verlo hoy." },
  { icon: Wrench, title: "Reparación de todas las marcas", desc: "Daikin, Mitsubishi, LG, Samsung, Fujitsu y más." },
  { icon: Zap, title: "Instalación exprés", desc: "Split instalado y funcionando en menos de 24 horas." },
];

export default function UrgencySection() {
  return (
    <section id="urgencias" className="border-b border-border bg-graphite">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-citron-soft/40 bg-citron-soft/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron-soft">
              <Zap className="h-3.5 w-3.5" /> Servicio urgente
            </span>
            <h2 className="mt-5 font-display text-3xl font-black leading-tight text-white text-balance sm:text-4xl">
              ¿Te has quedado sin aire hoy? Vamos.
            </h2>
            <p className="mt-4 text-white/80">
              Averías, fugas de gas, equipos que no enfrían o una instalación que no puede esperar.
              Atendemos urgencias de climatización en {siteConfig.provincia} con equipo propio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row [&>a]:w-full sm:[&>a]:w-auto">
              <a
                href={telLink}
                className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-primary-foreground transition hover:bg-citron-ink"
              >
                <Phone className="h-4 w-4" /> Urgencias: {siteConfig.phone}
              </a>
              <a
                href={whatsappLink("Hola, tengo una urgencia de aire acondicionado. ¿Podéis venir hoy?")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/30 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur transition hover:border-citron-soft hover:text-citron-soft"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp urgente
              </a>
            </div>
          </div>

          <ul className="space-y-4">
            {BULLETS.map((b) => (
              <li key={b.title} className="flex gap-4 rounded-sm border border-white/10 bg-white/5 p-5">
                <b.icon className="h-6 w-6 shrink-0 text-citron-soft" />
                <div>
                  <p className="font-bold text-white">{b.title}</p>
                  <p className="text-sm text-white/70">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}