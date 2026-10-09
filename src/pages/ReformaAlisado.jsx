import React from "react";
import { Hammer, Phone, MessageCircle, Ruler, PaintBucket, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/b9a50dfc4_generated_image.png";

const PROYECTOS = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/67f1536a9_generated_image.png",
    titulo: "Alisado de paredes en salón",
    tipo: "Alisado de paredes",
    zona: "Valencia capital",
    resultado: "Alisado de paredes con yeso y acabado liso para pintar. Eliminamos gotelé y dejamos paredes lisas en 2 días.",
    metricas: [
      { label: "Plazo", value: "2 días" },
      { label: "Superficie", value: "45 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/bf504ee73_generated_image.png",
    titulo: "Paredes lisas en piso completo",
    tipo: "Alisado de paredes",
    zona: "Paterna, Valencia",
    resultado: "Quitamos el gotelé de toda la vivienda y aplicamos acabado liso. Paredes perfectas para pintar en color.",
    metricas: [
      { label: "Plazo", value: "4 días" },
      { label: "Superficie", value: "120 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/fba0c9826_generated_image.png",
    titulo: "Alisado y pintura en Torrent",
    tipo: "Alisado + pintura",
    zona: "Torrent, Valencia",
    resultado: "Alisado de paredes y pintura plástica lisa en toda la vivienda. Acabado profesional listo para estrenar.",
    metricas: [
      { label: "Plazo", value: "5 días" },
      { label: "Superficie", value: "90 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
];

const incluye = [
  { icon: Hammer, title: "Quitar gotelé", desc: "Eliminamos el gotelé y preparamos la pared para un acabado liso." },
  { icon: Ruler, title: "Alisado de yeso", desc: "Aplicamos capas de yeso o escayola para dejar la pared totalmente lisa." },
  { icon: PaintBucket, title: "Pintura lista", desc: "Pared lisa lista para pintar en el color que elijas." },
  { icon: Sparkles, title: "Acabado profesional", desc: "Resultado uniforme, sin imperfecciones y con garantía de 2 años." },
];

const pasos = [
  { n: "01", title: "Visita y presupuesto", desc: "Acudimos a tu vivienda, medimos las paredes y entregamos presupuesto cerrado." },
  { n: "02", title: "Preparación", desc: "Protegemos mobiliario y suelos, y eliminamos el gotelé existente." },
  { n: "03", title: "Alisado", desc: "Aplicamos el alisado de yeso en capas hasta lograr una pared totalmente lisa." },
  { n: "04", title: "Entrega y garantía", desc: "Entregamos la pared lisa, limpia y lista para pintar, con 3 años de garantía." },
];

export default function ReformaAlisado() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Hammer className="h-3.5 w-3.5" /> Alisado de paredes en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Alisado de paredes en Valencia: quita el gotelé y deja paredes lisas
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Eliminamos el gotelé y alisamos tus paredes con yeso para un acabado liso y uniforme, listo para pintar. Trabajo limpio, rápido y con garantía.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero un presupuesto de alisado de paredes.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={HERO_IMG} alt="Yesero alisando una pared con llana de yeso" className="h-80 w-full lg:h-96" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Paredes lisas de principio a fin</h2>
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
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu alisado en 4 pasos</h2>
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
        titulo="Paredes alisadas en Valencia"
        subtitulo="Ejemplos reales de alisado de paredes y eliminación de gotelé."
        fondoCard
      />

      <ServiceCTA title="¿Quieres paredes lisas en tu casa?" subtitle="Presupuesto gratis y sin compromiso en menos de 24 horas." />

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre el alisado de paredes en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Cuánto tarda el alisado de paredes en ${siteConfig.provincia}?`, a: "Depende de la superficie, pero una habitación suele llevar 1-2 días. Un piso completo entre 3 y 5 días. Te damos un calendario cerrado antes de empezar." },
              { q: "¿Qué es el alisado de paredes?", a: "Consiste en eliminar el gotelé y aplicar capas de yeso o escayola para dejar la pared totalmente lisa, lista para pintar con un acabado uniforme." },
              { q: "¿Hacéis el trabajo limpio?", a: "Sí. Protegemos mobiliario y suelos con plásticos y recogemos todo al final de cada jornada. Dejamos la vivienda lista para usar." },
              { q: "¿Pintáis también después del alisado?", a: "Sí, podemos aplicar la pintura plástica lisa en el color que elijas una vez terminado el alisado. Te damos presupuesto conjunto si lo prefieres." },
              { q: `¿Dónde hacéis alisado en la provincia de ${siteConfig.provincia}?`, a: `Damos servicio en toda la provincia: ${siteConfig.localidades.slice(0, 5).join(", ")} y resto de localidades.` },
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
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tus paredes lisas empiezan aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de alisado de paredes.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaAlisado" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}