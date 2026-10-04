import React from "react";
import { MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig } from "@/lib/siteConfig";

const CASES = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2db8ad089_generated_image.png",
    titulo: "Vivienda unifamiliar en Paterna",
    tipo: "Fotovoltaica + Batería",
    zonas: "Paterna, Valencia",
    reto: "Consumo elevado de una familia de 5 con coche eléctrico.",
    resultado: "8 paneles de 500W + batería de 10 kWh. Ahorro del 78% en la factura anual.",
    metricas: [
      { label: "Ahorro anual", value: "78%" },
      { label: "Amortización", value: "4,5 años" },
      { label: "Potencia", value: "4 kWp" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/bb853e33f_generated_image.png",
    titulo: "Piso de 110 m² en Valencia",
    tipo: "Climatización por conductos",
    zonas: "Valencia capital",
    reto: "Sustituir splits visibles por un sistema discreto y eficiente.",
    resultado: "Conductos ocultos con fan-coils y bomba de calor inverter A+++. Confort silencioso en toda la casa.",
    metricas: [
      { label: "Eficiencia", value: "A+++" },
      { label: "Zonas", value: "4" },
      { label: "Ruido", value: "<22 dB" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/0b21260cd_generated_image.png",
    titulo: "Reforma integral en Torrent",
    tipo: "Reforma llave en mano",
    zonas: "Torrent, Valencia",
    reto: "Renovar por completo una vivienda de los años 80.",
    resultado: "Dirección de obra, electricidad, fontanería y acabados en 12 semanas. Llave en mano.",
    metricas: [
      { label: "Plazo", value: "12 sem" },
      { label: "Superficie", value: "95 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-citron">Casos reales</p>
          <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">
            Proyectos finalizados en {siteConfig.provincia}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tres ejemplos de ingeniería aplicada, con resultados medibles para cada cliente.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.titulo} className="flex flex-col overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-48 overflow-hidden">
                <Image src={c.imagen} alt={c.titulo} className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  {c.tipo}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{c.titulo}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-citron" /> {c.zonas}
                </p>
                <p className="mt-4 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Reto:</span> {c.reto}</p>
                <p className="mt-3 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Resultado:</span> {c.resultado}</p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5">
                  {c.metricas.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-display text-lg font-black text-citron">{m.value}</p>
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}