import React from "react";
import { Hammer, Phone, MessageCircle, Ruler, PaintRoller, Wrench, Clock, Bath, ChefHat } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const REFORMAS_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/729b39a79_WhatsAppImage2026-10-09at173915.jpeg";
const COCINA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/e429d50fc_WhatsAppImage2026-10-09at1739162.jpeg";
const BANO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2a7226264_WhatsAppImage2026-10-09at1739161.jpeg";

const PROYECTOS_REFORMAS = [
  {
    imagen: COCINA_IMG,
    titulo: "Cocina a medida en Valencia",
    tipo: "Reforma de cocina",
    zona: "Valencia capital",
    resultado: "Cocina open space con isla, nueva electricidad y carpintería a medida. Llave en mano en 10 días con dirección de obra.",
    metricas: [
      { label: "Plazo", value: "10 días" },
      { label: "Superficie", value: "18 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: BANO_IMG,
    titulo: "Baño principal en Alzira",
    tipo: "Reforma de baño",
    zona: "Alzira, Valencia",
    resultado: "Baño completo con bañera exenta, mobiliario suspendido e iluminación LED. Acabados premium en 7 días.",
    metricas: [
      { label: "Plazo", value: "7 días" },
      { label: "Superficie", value: "8 m²" },
      { label: "Garantía", value: "2 años" },
    ],
  },
  {
    imagen: REFORMAS_IMG,
    titulo: "Cocina con isla en Torrent",
    tipo: "Reforma de cocina",
    zona: "Torrent, Valencia",
    resultado: "Reforma integral de cocina con isla, nueva electricidad, fontanería y carpintería a medida. Llave en mano en 2 semanas.",
    metricas: [
      { label: "Plazo", value: "14 días" },
      { label: "Superficie", value: "22 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
];

const servicios = [
  { icon: Bath, title: "Reforma de baños", desc: "Renovamos tu baño de principio a fin: plato de ducha, mobiliario, iluminación y acabados premium." },
  { icon: ChefHat, title: "Reforma de cocinas", desc: "Diseñamos y ejecutamos tu cocina a medida, con nueva electricidad, fontanería y carpintería." },
  { icon: Ruler, title: "Proyecto y dirección de obra", desc: "Proyecto técnico y dirección de obra por ingenieros. Un único responsable." },
  { icon: PaintRoller, title: "Acabados e instalaciones", desc: "Albañilería, pladur, solados, alicatados, pintura, electricidad y fontanería." },
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
                Reforma de baños y cocinas con dirección de ingeniería en {siteConfig.provincia}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Especialistas en reforma de baños y cocinas en Valencia. Un único responsable para todo el proceso:
                proyecto, obra, instalaciones y acabados. Llave en mano y con garantía.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero información sobre reforma de baño o cocina.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={COCINA_IMG} alt="Reforma de cocina a medida recién terminada" className="h-80 w-full lg:h-96" fittingType="fill" />
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
        titulo="Reformas de baños y cocinas terminadas"
        subtitulo="Ejemplos reales de baños y cocinas con dirección de ingeniería."
        fondoCard
      />

      <ServiceCTA title="¿Vamos a reformar tu baño o cocina?" subtitle="Presupuesto gratis y sin compromiso en menos de 24 horas." />

      {/* FAQ SEO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre reformas de baños y cocinas en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Hacéis reformas de baños y cocinas en ${siteConfig.provincia}?`, a: "Sí. Somos especialistas en reforma de baños y cocinas en toda la provincia, con un único responsable y dirección de obra de ingeniería." },
              { q: "¿Cuánto tarda una reforma de baño?", a: "Una reforma completa de baño suele tardar 7 días. Te damos un calendario detallado antes de empezar." },
              { q: "¿Cuánto tarda una reforma de cocina?", a: "Una reforma de cocina a medida tarda un poco más que el baño, normalmente entre 10 y 14 días, incluyendo electricidad, fontanería, carpintería y acabados." },
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
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño o cocina.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
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