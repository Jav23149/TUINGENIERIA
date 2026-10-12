import React from "react";
import { Bath, Phone, MessageCircle, Ruler, Wrench, Droplets } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

// Fotos reales de baños reformados (Unsplash) — URLs verificadas (HTTP 200)
const HERO_IMG = "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80";

const PROYECTOS = [
  {
    imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    titulo: "Baño moderno con plato de ducha",
    tipo: "Reforma de baño",
    zona: "Valencia capital",
    resultado: "Plato de ducha de resina, mampara de cristal y revestimiento de piedra natural.",
    metricas: [
      { label: "Plazo", value: "7 días" },
      { label: "Superficie", value: "5 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    titulo: "Baño completo con doble lavabo",
    tipo: "Reforma de baño",
    zona: "Torrent, Valencia",
    resultado: "Doble lavabo, mampara fija y ducha de obra. Renovación de fontanería y electricidad completa.",
    metricas: [
      { label: "Plazo", value: "7 días" },
      { label: "Superficie", value: "10 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    titulo: "Baño con bañera exenta",
    tipo: "Reforma de baño",
    zona: "Paterna, Valencia",
    resultado: "Bañera exenta, mobiliario suspendido y iluminación LED ambiental.",
    metricas: [
      { label: "Plazo", value: "8 días" },
      { label: "Superficie", value: "8 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
];

const incluye = [
  { icon: Droplets, title: "Plato de ducha o bañera", desc: "Plato de resina o porcelánico, mamparas y bañeras exentas." },
  { icon: Bath, title: "Mobiliario y sanitarios", desc: "Muebles suspendidos, sanitarios suspendidos y grifería premium." },
  { icon: Wrench, title: "Instalaciones", desc: "Renovamos electricidad y fontanería con materiales de primera." },
  { icon: Ruler, title: "Acabados a tu estilo", desc: "Alicatado, solado, iluminación LED y detalles a tu gusto." },
];

const pasos = [
  { n: "01", title: "Visita y presupuesto", desc: "Acudimos a tu baño, escuchamos tus necesidades y entregamos presupuesto cerrado." },
  { n: "02", title: "Proyecto y planificación", desc: "Diseñamos el baño y planificamos plazos y fases de obra." },
  { n: "03", title: "Ejecución de obra", desc: "Realizamos la reforma en 7 días con equipos propios y control de calidad." },
  { n: "04", title: "Entrega y garantía", desc: "Entregamos llave en mano, limpio y con 3 años de garantía." },
];

export default function ReformaBano() {
  return (
    <>
      {/* HERO con imagen de fondo a pantalla completa */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Reforma de baño real en Valencia con plato de ducha y acabados premium"
            className="h-full w-full"
            fittingType="fill"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30" />
        <div className="relative flex min-h-[88vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/50 bg-citron/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-citron backdrop-blur-sm">
                <Bath className="h-4 w-4" /> Reforma de baño en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
                Reforma de baño en Valencia: <span className="text-citron">7 días</span>, llave en mano
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                Renovamos tu baño de principio a fin: plato de ducha o bañera, mobiliario, iluminación y acabados premium. Un único responsable y dirección de obra de ingeniería.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño.")} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-2 rounded-sm bg-citron px-8 text-base font-extrabold text-graphite shadow-lg shadow-citron/30 transition hover:brightness-95">
                  <MessageCircle className="h-5 w-5" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-14 items-center justify-center gap-2 rounded-sm border-2 border-citron/70 bg-background/40 px-8 text-base font-extrabold text-foreground backdrop-blur-sm transition hover:border-citron hover:bg-citron hover:text-graphite">
                  <Phone className="h-5 w-5" /> Llamar ahora
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-citron" /> 3 años de garantía</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-citron" /> Presupuesto cerrado</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-citron" /> Equipos propios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu baño renovado de principio a fin</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {incluye.map((i) => (
              <div key={i.title} className="rounded-sm border border-border bg-card p-6">
                <i.icon className="h-9 w-9 text-citron" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{i.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu baño reformado en 4 pasos</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-sm border border-border bg-background p-6">
                <span className="font-display text-3xl font-black text-citron/30">{p.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <ProjectGallery
        proyectos={PROYECTOS}
        eyebrow="Proyectos reales"
        titulo="Baños reformados en Valencia"
        subtitulo="Ejemplos reales de baños con dirección de ingeniería."
        fondoCard
      />

      <ServiceCTA title="¿Vamos a reformar tu baño?" subtitle="Presupuesto gratis y sin compromiso en menos de 24 horas." />

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre la reforma de baño en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Cuánto tarda una reforma de baño en ${siteConfig.provincia}?`, a: "Una reforma completa de baño suele tardar 7 días. Te damos un calendario detallado antes de empezar." },
              { q: "¿Trabajáis con plato de ducha y con bañera?", a: "Sí. Instalamos plato de ducha de resina o porcelánico, mamparas de cristal y también bañeras exentas. Te asesoramos según tu espacio." },
              { q: "¿Qué garantía tiene la obra?", a: "Todas nuestras reformas de baño cuentan con 3 años de garantía en la ejecución, además de las garantías de fábrica de los materiales." },
              { q: `¿Dónde reformáis baños en la provincia de ${siteConfig.provincia}?`, a: `Damos servicio en toda la provincia: ${siteConfig.localidades.slice(0, 5).join(", ")} y resto de localidades.` },
            ].map((f) => (
              <div key={f.q} className="rounded-sm border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-citron">Solicita tu presupuesto gratis</p>
            <h2 className="mt-3 font-display text-4xl font-black text-foreground sm:text-5xl">Tu baño nuevo empieza aquí</h2>
            <p className="mt-4 text-lg text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <a href={telLink} className="flex items-center gap-4 rounded-sm border-2 border-citron/40 bg-background p-6 transition hover:border-citron hover:bg-citron/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-citron"><Phone className="h-6 w-6 text-graphite" /></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Llámanos ahora</p><p className="font-display text-xl font-black text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
              </a>
              <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border-2 border-citron/40 bg-background p-6 transition hover:border-citron hover:bg-citron/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-citron"><MessageCircle className="h-6 w-6 text-graphite" /></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp directo</p><p className="font-display text-xl font-black text-foreground">Escríbenos ahora</p></div>
              </a>
              <div className="rounded-sm border border-border bg-background p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-citron">Por qué elegirnos</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> Presupuesto cerrado, sin sorpresas</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> 3 años de garantía en la obra</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> Dirección de obra de ingeniería</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> Equipos propios, no subcontratistas</li>
                </ul>
              </div>
            </div>
            <div className="rounded-sm border-2 border-citron/30 bg-background p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaBano" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}