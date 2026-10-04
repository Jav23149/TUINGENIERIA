import React from "react";
import { Link } from "react-router-dom";
import { Wind, Phone, MessageCircle, CheckCircle2, ArrowRight, Snowflake, Flame, Wrench, AirVent, Thermometer, Euro } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const HVAC_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/bb853e33f_generated_image.png";

const PROYECTOS_HVAC = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/b0b980a42_generated_image.png",
    titulo: "Piso de 110 m² en Valencia",
    tipo: "Conductos + Inverter A+++",
    zona: "Valencia capital",
    resultado: "Sistema de conductos ocultos con bomba de calor inverter. 4 zonas independientes con control por app y silencio absoluto.",
    metricas: [
      { label: "Eficiencia", value: "A+++" },
      { label: "Zonas", value: "4" },
      { label: "Ruido", value: "<22 dB" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/1f1c1492d_generated_image.png",
    titulo: "Reforma con aerotermia en Torrent",
    tipo: "Aerotermia",
    zona: "Torrent, Valencia",
    resultado: "Sustitución de caldera de gas por aerotermia. Calefacción, agua caliente y aire acondicionado en un solo equipo eficiente.",
    metricas: [
      { label: "Ahorro", value: "45%" },
      { label: "Energía", value: "A+++" },
      { label: "Cobertura", value: "100%" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/bb853e33f_generated_image.png",
    titulo: "Local comercial en Paterna",
    tipo: "Multi-split",
    zona: "Paterna, Valencia",
    resultado: "3 splits inverter para local de 120 m². Climatización diferenciada por zonas y bajo consumo en horario comercial.",
    metricas: [
      { label: "Superficie", value: "120 m²" },
      { label: "Equipos", value: "3" },
      { label: "Consumo", value: "-40%" },
    ],
  },
];

const servicios = [
  { icon: Snowflake, title: "Aire acondicionado split", desc: "Splits y multi-splits de marcas premium para cualquier estancia." },
  { icon: AirVent, title: "Sistemas de conductos", desc: "Climatización invisible por conductos para viviendas y locales." },
  { icon: Flame, title: "Bombas de calor y aerotermia", desc: "Calefacción, ACS y climatización con la máxima eficiencia." },
  { icon: Wrench, title: "Mantenimiento y reparación", desc: "Servicio técnico oficial, recargas de gas y mantenimiento periódico." },
];

const pasos = [
  { n: "01", title: "Estudio de necesidades", desc: "Visitamos tu espacio y calculamos la carga térmica necesaria." },
  { n: "02", title: "Diseño del sistema", desc: "Seleccionamos equipos y distribuimos unidades para máximo confort." },
  { n: "03", title: "Instalación limpia", desc: "Montaje profesional minimizando obra, respetando tu hogar o negocio." },
  { n: "04", title: "Puesta en marcha y mantenimiento", desc: "Probamos el sistema y dejamos plan de mantenimiento." },
];

export default function Climatizacion() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Wind className="h-3.5 w-3.5" /> Climatización en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Instalación de aire acondicionado, splits y conductos en {siteConfig.provincia}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Climatización profesional para viviendas y empresas: splits, conductos, bombas de calor y aerotermia.
                Confort durante todo el año con la máxima eficiencia energética.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero información sobre climatización.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={HVAC_IMG} alt="Instalación de aire acondicionado split en pared exterior" className="h-80 w-full lg:h-96" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Sistemas de climatización</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Confort para cada espacio</h2>
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
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Instalación de climatización en 4 pasos</h2>
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

      {/* EFFICIENCY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={HVAC_IMG} alt="Equipo de aire acondicionado de alta eficiencia instalado" className="h-96 w-full" fittingType="fill" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Eficiencia energética</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Clima potente, consumo eficiente</h2>
              <p className="mt-4 text-muted-foreground">Trabajamos con equipos inverter de clase A+++ que reducen el consumo hasta un 40% frente a sistemas convencionales, con menor ruido y mayor durabilidad.</p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Thermometer, title: "Confort total", desc: "Clima perfecto en frío y calor, todo el año." },
                  { icon: Euro, title: "Bajo consumo", desc: "Tecnología inverter clase A+++ para ahorrar." },
                  { icon: Wrench, title: "Mantenimiento incluido", desc: "Revisión y servicio técnico postventa." },
                ].map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <f.icon className="h-7 w-7 shrink-0 text-citron" />
                    <div>
                      <p className="font-bold text-foreground">{f.title}</p>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS REALES */}
      <ProjectGallery
        proyectos={PROYECTOS_HVAC}
        eyebrow="Proyectos reales"
        titulo="Instalaciones de climatización terminadas"
        subtitulo="Ejemplos reales de splits, conductos y aerotermia en la provincia de Valencia."
        fondoCard
      />

      <ServiceCTA title="¿Listo para tu instalación de climatización?" subtitle="Presupuesto gratis y sin compromiso en menos de 2 horas." />

      {/* FAQ SEO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre climatización en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Cuánto cuesta instalar aire acondicionado en ${siteConfig.provincia}?`, a: "El precio depende del equipo y la complejidad de la instalación. Un split estándar instalado puede partir de 600-900€. Te damos presupuesto cerrado en 2 horas." },
              { q: "¿Qué es mejor, split o conductos?", a: "El split es más económico y rápido de instalar. Los conductos son más estéticos al quedar ocultos y climatizan toda la vivienda de forma uniforme. Te asesoramos según tu espacio." },
              { q: "¿Instaláis aerotermia y bombas de calor?", a: "Sí. La aerotermia es una de las soluciones más eficientes para calefacción, agua caliente y aire acondicionado en una sola instalación." },
              { q: "¿Hacéis mantenimiento y reparación?", a: "Sí, contamos con servicio técnico para mantenimiento periódico, recargas de gas y reparación de todas las marcas principales." },
              { q: `¿Dónde instaláis en la provincia de ${siteConfig.provincia}?`, a: `Damos servicio en toda la provincia: ${siteConfig.localidades.slice(0, 5).join(", ")} y resto de localidades.` },
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
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu instalación de climatización empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 2 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de climatización.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="climatizacion" origen="Climatizacion" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}