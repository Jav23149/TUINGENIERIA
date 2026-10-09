import React from "react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    nombre: "Javier Ruiz",
    zona: "Paterna",
    servicio: "Climatización por conductos",
    texto:
      "Nos instalaron la climatización por conductos en toda la casa y no se nota absolutamente nada. Vinieron a casa, tomaron medidas y nos dieron un presupuesto cerrado sin sorpresas. En una semana terminado.",
    rating: 5,
  },
  {
    nombre: "Laura Martínez",
    zona: "Torrent",
    servicio: "Reforma de cocina",
    texto:
      "Reformamos la cocina de arriba abajo, con isla y todo a medida. Toda la obra en diez días y con un único interlocutor. El resultado es justo lo que queríamos.",
    rating: 5,
  },
  {
    nombre: "Ana Vidal",
    zona: "Alzira",
    servicio: "Reforma de baño",
    texto:
      "Nos hicieron el baño principal en siete días. Acabados de primera, mampara de cristal y mueble suspendido. El equipo dejó todo recogido cada día, muy limpios.",
    rating: 5,
  },
  {
    nombre: "Carlos Puig",
    zona: "Sagunto",
    servicio: "Aire acondicionado split",
    texto:
      "Nos pusieron dos splits inverter en el piso y el ahorro en la luz se nota. Asesoramiento honesto, sin vendernos nada que no necesitáramos. En un día montado y funcionando.",
    rating: 5,
  },
  {
    nombre: "María García",
    zona: "Valencia capital",
    servicio: "Climatización split",
    texto:
      "Instalaron un multi-split en el salón y los dos dormitorios. Rápidos, limpios y muy profesionales. En una mañana terminaron y dejaron todo recogido.",
    rating: 5,
  },
  {
    nombre: "David Sanz",
    zona: "Burjassot",
    servicio: "Reforma de cocina y baño",
    texto:
      "Reformaron la cocina y el baño a la vez. Un solo interlocutor para toda la obra y eso se nota. El baño en siete días y la cocina en diez. Muy contentos con el resultado.",
    rating: 5,
  },
];

function GoogleStars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-citron text-citron" : "text-muted-foreground/40"}`}
        />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-4 rounded-sm border border-border bg-card px-5 py-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
        </svg>
      </div>
      <div>
        <p className="font-display text-2xl font-black text-foreground">4.9<span className="text-base font-normal text-muted-foreground">/5</span></p>
        <p className="text-xs text-muted-foreground">+120 reseñas en Google</p>
      </div>
      <div className="ml-auto hidden sm:block">
        <GoogleStars />
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-citron">Reseñas de Google</p>
          <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">
            Lo que dicen nuestros clientes en Valencia
          </h2>
          <p className="mt-4 text-muted-foreground">
            Valoraciones reales de clientes que ya disfrutan de su climatización o reforma.
          </p>
        </div>

        <div className="mt-10">
          <GoogleBadge />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.nombre} className="flex flex-col gap-4 rounded-sm border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <GoogleStars rating={r.rating} />
                <Quote className="h-6 w-6 text-citron/60" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{r.texto}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-citron/15 font-display text-sm font-bold text-citron">
                  {r.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{r.nombre}</p>
                  <p className="text-xs text-muted-foreground">{r.zona} · {r.servicio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}