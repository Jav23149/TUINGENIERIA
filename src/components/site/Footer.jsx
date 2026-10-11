import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, whatsappLink, telLink, mailLink } from "@/lib/siteConfig";
import ValenciaMap from "@/components/site/ValenciaMap";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-graphite">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center bg-citron font-display text-sm font-black text-graphite">T</span>
              <span className="font-display text-base font-bold text-foreground">
                TU<span className="text-citron"> INGENIERIA</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Especialistas en climatización, reformas integrales y energía solar fotovoltaica en {siteConfig.provincia} y alrededores.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dónde encontrarnos</p>
            <div className="mt-3">
              <ValenciaMap />
            </div>
            <Link to="/nosotros" className="mt-5 inline-block text-sm font-semibold text-citron transition hover:underline">Conoce TU INGENIERIA →</Link>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Servicios</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/climatizacion" className="text-muted-foreground transition hover:text-citron">Climatización split</Link></li>
              <li><Link to="/climatizacion" className="text-muted-foreground transition hover:text-citron">Climatización por conductos</Link></li>
              <li><Link to="/reforma-integral" className="text-muted-foreground transition hover:text-citron">Reforma integral</Link></li>
              <li><Link to="/fotovoltaica" className="text-muted-foreground transition hover:text-citron">Paneles solares</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink} className="flex items-start gap-2 text-muted-foreground transition hover:text-citron">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.phone || "Próximamente"}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted-foreground transition hover:text-citron">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" /> WhatsApp directo
                </a>
              </li>
              <li>
                <a href={mailLink} className="flex items-start gap-2 text-muted-foreground transition hover:text-citron">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.direccion}
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.horario}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Zonas de trabajo</h3>
            <p className="mt-4 text-xs text-muted-foreground">Trabajamos en {siteConfig.provincia} y comarcas:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {siteConfig.localidades.map((loc) => (
                <li key={loc}>
                  <span className="inline-block rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground">{loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. Todos los derechos reservados.</p>
          <p>Climatización, reformas y energía solar · {siteConfig.provincia}</p>
        </div>
      </div>
    </footer>
  );
}