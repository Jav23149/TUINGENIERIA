import React, { useState, useEffect } from "react";
import { MapPin, X, ZoomIn } from "lucide-react";
import { Image } from "@/components/ui/image";

/**
 * Sección reutilizable de proyectos reales finalizados.
 * @param {Object} props
 * @param {Array<{imagen:string,titulo:string,tipo:string,zona:string,resultado:string,metricas:Array<{label:string,value:string}>}>} props.proyectos
 * @param {string} [props.titulo]
 * @param {string} [props.subtitulo]
 * @param {string} [props.eyebrow]
 * @param {boolean} [props.fondoCard]
 */
export default function ProjectGallery({
  proyectos = [],
  titulo = "Proyectos reales finalizados",
  subtitulo = "Ejemplos de ingeniería aplicada con resultados medibles.",
  eyebrow = "Proyectos reales",
  fondoCard = false,
}) {
  const [activo, setActivo] = useState(null);

  useEffect(() => {
    if (!activo) return;
    const handler = (e) => e.key === "Escape" && setActivo(null);
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activo]);

  return (
    <section className={`border-b border-border ${fondoCard ? "bg-card" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-citron">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">{titulo}</h2>
          <p className="mt-4 text-muted-foreground">{subtitulo}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {proyectos.map((p) => (
            <article key={p.titulo} className="flex flex-col overflow-hidden rounded-sm border border-border bg-background">
              <button
                type="button"
                onClick={() => setActivo(p)}
                className="group relative h-64 w-full overflow-hidden bg-graphite"
              >
                <Image src={p.imagen} alt={p.titulo} className="h-full w-full" fittingType="fit" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  {p.tipo}
                </span>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-graphite/80 text-foreground opacity-0 transition group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </button>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{p.titulo}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-citron" /> {p.zona}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{p.resultado}</p>
                {p.metricas && p.metricas.length > 0 && (
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5">
                    {p.metricas.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="font-display text-lg font-black text-citron">{m.value}</p>
                        <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-graphite/90 p-4 backdrop-blur-sm"
          onClick={() => setActivo(null)}
        >
          <button
            type="button"
            onClick={() => setActivo(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-citron text-graphite transition hover:brightness-95"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-sm border border-border bg-graphite">
              <Image src={activo.imagen} alt={activo.titulo} className="max-h-[80vh] w-full" fittingType="fit" />
            </div>
            <figcaption className="mt-4 text-center">
              <p className="font-display text-lg font-bold text-foreground">{activo.titulo}</p>
              <p className="text-sm text-muted-foreground">{activo.tipo} · {activo.zona}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}