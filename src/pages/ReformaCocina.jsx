import React from "react";
import { ChefHat, Phone, MessageCircle, Ruler, Wrench, Utensils } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/87c1293d8_generated_image.png";

const PROYECTOS = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/e429d50fc_WhatsAppImage2026-10-09at1739162.jpeg",
    titulo: "Cocina a medida en Valencia",
    tipo: "Reforma de cocina",
    zona: "Valencia capital",
    resultado: "Cocina open space con isla de mármol, nueva electricidad y carpintería a medida. Llave en mano en 10 días.",
    metricas: [
      { label: "Plazo", value: "10 días" },
      { label: "Superficie", value: "18 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/c6bd5e91e_generated_image.png",
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
  {
    imagen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1600&q=80",
    titulo: "Cocina en Paterna",
    tipo: "Reforma de cocina",
    zona: "Paterna, Valencia",
    resultado: "Cocina con mobiliario lacado, encimera de cuarzo y electrodomésticos integrados. Renovación completa de instalaciones.",
    metricas: [
      { label: "Plazo", value: "12 días" },
      { label: "Superficie", value: "15 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
];

const incluye = [
  { icon: ChefHat, title: "Carpintería a medida", desc: "Muebles lacados, encimeras de cuarzo o mármol y tiradores a tu estilo." },
  { icon: Utensils, title: "Electrodomésticos", desc: "Integración de electrodomésticos y nueva instalación eléctrica." },
  { icon: Wrench, title: "Instalaciones", desc: "Electricidad, fontanería y iluminación LED renovadas." },
  { icon: Ruler, title: "Proyecto y dirección", desc: "Diseño técnico y dirección de obra por ingenieros." },
];

const pasos = [
  { n: "01", title: "Visita y presupuesto", desc: "Acudimos a tu cocina, escuchamos tus necesidades y entregamos presupuesto cerrado." },
  { n: "02", title: "Proyecto y planificación", desc: "Diseñamos la cocina y planificamos plazos y fases de obra." },
  { n: "03", title: "Ejecución de obra", desc: "Realizamos la reforma en 10-14 días con equipos propios y control de calidad." },
  { n: "04", title: "Entrega y garantía", desc: "Entregamos llave en mano, limpia y con 3 años de garantía." },
];

export default function ReformaCocina() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <ChefHat className="h-3.5 w-3.5" /> Reforma de cocina en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Reforma de cocina a medida en Valencia: 10-14 días
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Diseñamos y ejecutamos tu cocina a medida: carpintería, electrodomésticos, nueva electricidad y fontanería. Proyecto técnico, dirección de obra y entrega llave en mano.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de cocina.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={HERO_IMG} alt="Cocina reformada a medida con isla de mármol" className="h-80 w-full lg:h-96" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu cocina nueva de principio a fin</h2>
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
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu cocina reformada en 4 pasos</h2>
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
        titulo="Cocinas reformadas en Valencia"
        subtitulo="Ejemplos reales de cocinas a medida con dirección de ingeniería."
        fondoCard
      />

      <ServiceCTA title="¿Vamos a reformar tu cocina?" subtitle="Presupuesto gratis y sin compromiso en menos de 24 horas." />

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre la reforma de cocina en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Cuánto tarda una reforma de cocina en ${siteConfig.provincia}?`, a: "Una reforma de cocina a medida suele tardar entre 10 y 14 días, incluyendo electricidad, fontanería, carpintería y acabados." },
              { q: "¿Incluye la carpintería y los electrodomésticos?", a: "Sí. Diseñamos la carpintería a medida y integramos los electrodomésticos que elijas, con nueva instalación eléctrica y de fontanería." },
              { q: "¿Qué garantía tiene la obra?", a: "Todas nuestras reformas de cocina cuentan con 3 años de garantía en la ejecución, además de las garantías de fábrica de los materiales." },
              { q: `¿Dónde reformáis cocinas en la provincia de ${siteConfig.provincia}?`, a: `Damos servicio en toda la provincia: ${siteConfig.localidades.slice(0, 5).join(", ")} y resto de localidades.` },
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
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu cocina nueva empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma de cocina.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaCocina" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}