import React from "react";
import { Bath, Phone, MessageCircle, Ruler, Wrench, Droplets } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/f4f6cb92c_generated_image.png";

const PROYECTOS = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/8d60b16ef_WhatsAppImage2026-10-09at173916.jpeg",
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
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2a7226264_WhatsAppImage2026-10-09at1739161.jpeg",
    titulo: "Baño de visitas en Valencia",
    tipo: "Reforma de baño",
    zona: "Valencia capital",
    resultado: "Baño con plato de ducha de resina, mampara de cristal y revestimiento de piedra natural.",
    metricas: [
      { label: "Plazo", value: "7 días" },
      { label: "Superficie", value: "5 m²" },
      { label: "Garantía", value: "2 años" },
    ],
  },
  {
    imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    titulo: "Baño completo en Torrent",
    tipo: "Reforma de baño",
    zona: "Torrent, Valencia",
    resultado: "Doble lavabo, mampara fija y ducha de obra. Renovación de fontanería y electricidad completa.",
    metricas: [
      { label: "Plazo", value: "7 días" },
      { label: "Superficie", value: "10 m²" },
      { label: "Garantía", value: "2 años" },
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
  { n: "04", title: "Entrega y garantía", desc: "Entregamos llave en mano, limpio y con 2 años de garantía." },
];

export default function ReformaBano() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Bath className="h-3.5 w-3.5" /> Reforma de baño en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Reforma de baño en 7 días, llave en mano
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Renovamos tu baño de principio a fin: plato de ducha o bañera, mobiliario, iluminación y acabados premium. Un único responsable y dirección de obra de ingeniería.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={HERO_IMG} alt="Baño reformado con bañera exenta y acabados premium" className="h-80 w-full lg:h-96" fittingType="fill" />
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
              { q: "¿Qué garantía tiene la obra?", a: "Todas nuestras reformas de baño cuentan con 2 años de garantía en la ejecución, además de las garantías de fábrica de los materiales." },
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
      <section id="contacto" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Solicita tu presupuesto</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu baño nuevo empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de baño.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaBano" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}