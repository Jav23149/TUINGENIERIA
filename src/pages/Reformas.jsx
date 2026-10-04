import React from "react";
import { Hammer, Phone, MessageCircle, CheckCircle2, Home, Ruler, PaintRoller, Lightbulb, Wrench, Clock } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const REFORMAS_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/0b21260cd_generated_image.png";

const PROYECTOS_REFORMAS = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/124212da4_generated_image.png",
    titulo: "Cocina y salón en Valencia",
    tipo: "Reforma integral",
    zona: "Valencia capital",
    resultado: "Open space cocina-salón con isla, nueva electricidad y carpintería a medida. Llave en mano en 8 semanas con dirección de obra.",
    metricas: [
      { label: "Plazo", value: "8 sem" },
      { label: "Superficie", value: "45 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/1bbd31a63_generated_image.png",
    titulo: "Baño principal en Alzira",
    tipo: "Reforma de baño",
    zona: "Alzira, Valencia",
    resultado: "Baño completo con plato de ducha de resina, mobiliario suspendido y iluminación LED. Acabados premium en 3 semanas.",
    metricas: [
      { label: "Plazo", value: "3 sem" },
      { label: "Superficie", value: "8 m²" },
      { label: "Garantía", value: "2 años" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/0b21260cd_generated_image.png",
    titulo: "Vivienda de los años 80 en Torrent",
    tipo: "Reforma llave en mano",
    zona: "Torrent, Valencia",
    resultado: "Reforma integral con electricidad, fontanería, pladur, suelos y pintura. Dirección de obra y un único responsable.",
    metricas: [
      { label: "Plazo", value: "12 sem" },
      { label: "Superficie", value: "95 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
];

const servicios = [
  { icon: Home, title: "Reformas integrales", desc: "Renovamos tu vivienda o local de principio a fin, con un único responsable." },
  { icon: Ruler, title: "Diseño y proyecto", desc: "Proyecto técnico, planos y dirección de obra por ingenieros." },
  { icon: PaintRoller, title: "Albañilería y acabados", desc: "Pladur, solados, alicatados, pintura y carpintería a medida." },
  { icon: Lightbulb, title: "Electricidad y fontanería", desc: "Instalaciones eléctricas y de agua conforme a normativa." },
];

const pasos = [
  { n: "01", title: "Visita y presupuesto", desc: "Acudimos a tu espacio, escuchamos tus necesidades y entregamos presupuesto cerrado." },
  { n: "02", title: "Proyecto y planificación", desc: "Diseñamos la reforma y planificamos plazos y fases de obra." },
  { n: "03", title: "Ejecución de obra", desc: "Realizamos la reforma con equipos propios y control de calidad." },
  { n: "04", title: "Entrega y garantía", desc: "Entregamos llave en mano con garantía de 2 años en la obra." },
];

export default function Reformas() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Hammer className="h-3.5 w-3.5" /> Reformas en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Reformas integrales con dirección de ingeniería en {siteConfig.provincia}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Reformas de viviendas y locales dirigidas por ingenieros. Un único responsable para todo el proceso:
                proyecto, obra, electricidad, fontanería y acabados. Llave en mano y con garantía.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero información sobre reformas integrales.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={REFORMAS_IMG} alt="Reforma integral de vivienda en progreso con dirección de obra" className="h-80 w-full lg:h-96" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Qué reformamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Reformas con cabeza de ingeniero</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s) => (
              <div key={s.title} className="rounded-sm border border-border bg-card p-6">
                <s.icon className="h-9 w-9 text-citron" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma en 4 pasos</h2>
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

      {/* WHY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-citron">Por qué elegirnos</p>
          <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">La diferencia de una reforma con ingeniería</h2>
          <p className="mt-4 text-muted-foreground">Muchas reformas salen mal por falta de dirección técnica. Nosotros lideramos la obra como ingenieros: planificamos, coordinamos oficios y controlamos la calidad en cada fase.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Ruler, title: "Proyecto técnico", desc: "Planos y memoria con todo previsto." },
              { icon: Wrench, title: "Oficios coordinados", desc: "Un único responsable para todos." },
              { icon: Clock, title: "Plazos cumplidos", desc: "Calendario real y sin sorpresas." },
            ].map((f) => (
              <div key={f.title} className="rounded-sm border border-border bg-card p-6">
                <f.icon className="mx-auto h-8 w-8 text-citron" />
                <h3 className="mt-4 font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS REALES */}
      <ProjectGallery
        proyectos={PROYECTOS_REFORMAS}
        eyebrow="Proyectos reales"
        titulo="Reformas terminadas en Valencia"
        subtitulo="Ejemplos reales de reformas integrales y parciales con dirección de ingeniería."
        fondoCard
      />

      <ServiceCTA title="¿Vamos a reformar tu espacio?" subtitle="Presupuesto gratis y sin compromiso en menos de 2 horas." />

      {/* FAQ SEO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre reformas en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Hacéis reformas integrales en ${siteConfig.provincia}?`, a: "Sí. Realizamos reformas integrales de viviendas y locales en toda la provincia, con un único responsable y dirección de obra de ingeniería." },
              { q: "¿Cuánto tarda una reforma integral?", a: "Depende del alcance. Una reforma integral de un piso de 80-100 m² suele tardar entre 6 y 10 semanas. Te damos un calendario detallado antes de empezar." },
              { q: "¿Incluye proyecto y licencias?", a: "Sí. Elaboramos el proyecto técnico y gestionamos las licencias municipales cuando la obra lo requiere, todo incluido en el presupuesto." },
              { q: "¿Qué garantía tiene la obra?", a: "Todas nuestras reformas cuentan con 2 años de garantía en la ejecución de la obra, además de las garantías de fábrica de los materiales instalados." },
              { q: `¿Dónde trabajáis en la provincia de ${siteConfig.provincia}?`, a: `Damos servicio en toda la provincia: ${siteConfig.localidades.slice(0, 5).join(", ")} y resto de localidades.` },
            ].map((f) => (
              <div key={f.q} className="rounded-sm border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Solicita tu presupuesto</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 2 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma integral.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="Reformas" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}