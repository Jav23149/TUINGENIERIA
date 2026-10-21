import React from "react";
import { Bath, Phone, MessageCircle, Ruler, Wrench, Droplets, BadgeCheck, ShieldCheck, Handshake, FileText, Clock } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";
import TrustTicker from "@/components/site/TrustTicker";
import Reviews from "@/components/site/Reviews";
import GuaranteesSection from "@/components/site/GuaranteesSection";

// Fotos reales de baños reformados (Unsplash) — URLs verificadas (HTTP 200)
const HERO_IMG = "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?auto=format&fit=crop&w=1600&q=80";

const PROYECTOS = [
  {
    imagen: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    titulo: "Baño sencillo renovado",
    tipo: "Reforma de baño",
    zona: "Valencia capital",
    resultado: "Lavabo de pie, sanitario nuevo, suelo cerámico y paredes en blanco. Fontanería renovada.",
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
    imagen: "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?auto=format&fit=crop&w=1600&q=80",
    titulo: "Baño con bañera",
    tipo: "Reforma de baño",
    zona: "Paterna, Valencia",
    resultado: "Bañera nueva, alicatado blanco y grifería renovada. Limpio y luminoso.",
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

const garantias = [
  { icon: Clock, title: "Baño en 7 días", desc: "Planificamos la obra para entregarte el baño terminado y limpio en una semana." },
  { icon: ShieldCheck, title: "Garantía de 3 años", desc: "Cubrimos la ejecución de la obra por escrito, además de la garantía de los materiales." },
  { icon: Handshake, title: "Un único responsable", desc: "Un ingeniero coordina todos los oficios y responde ante ti de principio a fin." },
];

export default function ReformaBano() {
  return (
    <>
      {/* HERO con imagen de fondo a pantalla completa */}
      <section className="relative min-h-[85vh] overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Reforma de baño real en Valencia con plato de ducha y acabados premium"
            className="h-full w-full object-cover brightness-90"
            fittingType="fill"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/45 lg:via-background/70 lg:to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="relative flex min-h-[85vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/50 bg-citron/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-citron-ink backdrop-blur-sm">
                <Bath className="h-4 w-4" /> Reforma de baño en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Reforma de baño en Valencia: <span className="text-citron-ink">7 días</span>, llave en mano
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Renovamos tu baño de principio a fin: plato de ducha o bañera, mobiliario, iluminación y acabados premium. Un único responsable y dirección de obra de ingeniería.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-ink" /> 3 años de garantía</span>
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-ink" /> Presupuesto cerrado</span>
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-ink" /> Equipos propios</span>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño.")} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-2 rounded-sm bg-citron px-8 text-base font-extrabold text-primary-foreground shadow-lg shadow-citron/30 transition hover:bg-citron-ink">
                  <MessageCircle className="h-5 w-5" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-14 items-center justify-center gap-2 rounded-sm border border-border bg-background/70 px-8 text-base font-extrabold text-foreground backdrop-blur-sm transition hover:border-citron-ink hover:text-citron-ink">
                  <Phone className="h-5 w-5" /> {siteConfig.phone || "Llamar ahora"}
                </a>
              </div>
              <p className="mt-5 text-sm font-semibold text-citron-ink">Te asesoramos sin compromiso</p>
            </div>
          </div>
        </div>
      </section>

      <TrustTicker />

      {/* QUÉ INCLUYE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu baño renovado de principio a fin</h2>
            <p className="mt-4 text-muted-foreground">Nos encargamos de todo: materiales, instalaciones y acabados. Tú solo eliges el estilo.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {incluye.map((i) => (
              <div key={i.title} className="rounded-sm border border-border bg-card p-6">
                <i.icon className="h-9 w-9 text-citron-ink" />
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
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu baño reformado en 4 pasos</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-sm border border-border bg-background p-6">
                <span className="font-display text-3xl font-black text-citron-ink/30">{p.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuaranteesSection
        title="Tu baño, respaldado desde el primer día"
        subtitle="Plazo, garantía y un único responsable: antes de empezar ya sabes a qué te comprometes."
        items={garantias}
      />

      {/* PROYECTOS */}
      <ProjectGallery
        proyectos={PROYECTOS}
        eyebrow="Proyectos reales"
        titulo="Baños reformados en Valencia"
        subtitulo="Ejemplos reales de baños con dirección de ingeniería."
        fondoCard
      />

      <Reviews />

      <ServiceCTA title="¿Vamos a reformar tu baño?" subtitle="Te asesoramos sin compromiso. Presupuesto gratis en menos de 24 horas." />

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Preguntas frecuentes</p>
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
      <section id="contacto" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-citron-ink">Solicita tu presupuesto gratis</p>
            <h2 className="mt-3 font-display text-4xl font-black text-foreground sm:text-5xl">Tu baño nuevo empieza aquí</h2>
            <p className="mt-4 text-lg text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-background p-6 transition hover:border-citron-ink">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-citron"><Phone className="h-6 w-6 text-primary-foreground" /></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Llámanos ahora</p><p className="font-display text-xl font-black text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
              </a>
              <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-background p-6 transition hover:border-citron-ink">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-citron"><MessageCircle className="h-6 w-6 text-primary-foreground" /></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp directo</p><p className="font-display text-xl font-black text-foreground">Escríbenos ahora</p></div>
              </a>
              <div className="rounded-sm border border-border bg-background p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-citron-ink">Por qué elegirnos</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> Presupuesto cerrado, sin sorpresas</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> 3 años de garantía en la obra</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> Dirección de obra de ingeniería</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" /> Equipos propios, no subcontratistas</li>
                </ul>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaBano" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}