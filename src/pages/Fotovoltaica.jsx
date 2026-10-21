import React from "react";
import { Sun, Phone, MessageCircle, Zap, Battery, Wrench, Euro, Plug, BadgeCheck, ShieldCheck, Handshake, FileText } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";
import TrustTicker from "@/components/site/TrustTicker";
import Reviews from "@/components/site/Reviews";
import GuaranteesSection from "@/components/site/GuaranteesSection";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/6eb2f2314_generated_image.png";
const PANELES_TEJADO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/39b9369d7_generated_image.png";
const INSTALADOR_CONEXION = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/c032c5824_generated_image.png";
const INVERSOR_BATERIA = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/73a2243fa_generated_image.png";
const PANELES_ATARDECER = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/f7ac0b1e3_generated_image.png";

const PROYECTOS_SOLAR = [
  {
    imagen: PANELES_TEJADO,
    titulo: "Instalación en vivienda unifamiliar",
    tipo: "Autoconsumo 6 kWp",
    zona: "Paterna, Valencia",
    resultado: "Nuestros instaladores montando 14 paneles fotovoltaicos en el tejado de una vivienda unifamiliar, con estructura de aluminio y orientación sur para máximo rendimiento.",
    metricas: [
      { label: "Potencia", value: "6 kWp" },
      { label: "Paneles", value: "14" },
      { label: "Ahorro", value: "-100%" },
    ],
  },
  {
    imagen: INSTALADOR_CONEXION,
    titulo: "Conexión de paneles en cubierta",
    tipo: "Instalación fotovoltaica",
    zona: "Valencia capital",
    resultado: "Instalador conectando los paneles en serie con conectores MC4, asegurando el conexionado DC sobre la cubierta antes de llevar el cableado al inversor.",
    metricas: [
      { label: "Paneles", value: "10" },
      { label: "Potencia", value: "4.5 kWp" },
      { label: "Plazo", value: "2 días" },
    ],
  },
  {
    imagen: INVERSOR_BATERIA,
    titulo: "Inversor y batería de almacenamiento",
    tipo: "Autoconsumo con batería",
    zona: "Torrent, Valencia",
    resultado: "Instalación del inversor híbrido y la batería de litio en el garaje, con cuadro de protecciones y monitorización por app para el autoconsumo de la vivienda.",
    metricas: [
      { label: "Batería", value: "10 kWh" },
      { label: "Autonomía", value: "24h" },
      { label: "Garantía", value: "10 años" },
    ],
  },
  {
    imagen: PANELES_ATARDECER,
    titulo: "Autoconsumo con excedentes",
    tipo: "Compensación simplificada",
    zona: "Valencia capital",
    resultado: "Sistema fotovoltaico terminado en cubierta de vivienda, con compensación de excedentes vertidos a la red. La instalación cubre el 70% del consumo anual.",
    metricas: [
      { label: "Ahorro anual", value: "1.200€" },
      { label: "Amortización", value: "5 años" },
      { label: "Garantía", value: "25 años" },
    ],
  },
];

const servicios = [
  { icon: Sun, title: "Paneles fotovoltaicos", desc: "Instalación de paneles solares de alta eficiencia para autoconsumo en viviendas y negocios." },
  { icon: Battery, title: "Baterías de almacenamiento", desc: "Sistemas de baterías de litio para aprovechar la energía solar también por la noche." },
  { icon: Zap, title: "Inversores híbridos", desc: "Inversores de última generación con monitorización por app y gestión inteligente de la energía." },
  { icon: Wrench, title: "Mantenimiento y limpieza", desc: "Mantenimiento periódico, limpieza de paneles y revisión del rendimiento de la instalación." },
];

const pasos = [
  { n: "01", title: "Estudio de viabilidad", desc: "Analizamos tu consumo, orientación del tejado y sombras para dimensionar la instalación." },
  { n: "02", title: "Diseño y trámites", desc: "Diseñamos el sistema y gestionamos los permisos y la conexión con la distribuidora." },
  { n: "03", title: "Instalación profesional", desc: "Montaje de paneles, inversor y conexionado en 1-2 días, con equipo propio y seguro." },
  { n: "04", title: "Puesta en marcha y monitorización", desc: "Activamos el sistema, configuramos la app y te formamos en el uso y seguimiento." },
];

const garantias = [
  { icon: ShieldCheck, title: "Legalización incluida", desc: "Gestionamos los permisos, el boletín y la conexión con la distribuidora por ti." },
  { icon: Handshake, title: "Garantía de 25 años", desc: "Paneles con garantía de producción de hasta 25 años e inversores con garantía de fábrica." },
  { icon: FileText, title: "Presupuesto cerrado", desc: "El precio acordado es el que pagas, sin sorpresas ni costes ocultos de tramitación." },
];

export default function Fotovoltaica() {
  return (
    <>
      {/* HERO con la imagen a todo el ancho de la sección */}
      <section className="relative min-h-[85vh] overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Instalador montando paneles solares fotovoltaicos en el tejado de una vivienda" className="h-full w-full object-cover brightness-[0.72] contrast-[1.1] saturate-[1.08]" fittingType="fill" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/60 to-graphite/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/15 to-transparent" />
        <div className="relative flex min-h-[85vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-citron-soft/40 bg-citron-soft/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron-soft backdrop-blur">
                <Sun className="h-3.5 w-3.5" /> Fotovoltaica en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
                Instalación de paneles solares fotovoltaicos en {siteConfig.provincia}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Autoconsumo fotovoltaico para viviendas y negocios. Reduce hasta el 100% de tu factura eléctrica
                con paneles de alta eficiencia, baterías de almacenamiento y compensación de excedentes.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-white/85">
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-soft" /> Ahorro hasta el 100%</span>
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-soft" /> Legalización incluida</span>
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-soft" /> Garantía 25 años</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
                <a href={whatsappLink("Hola, quiero información sobre paneles solares.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 text-sm font-bold text-white transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/30 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur transition hover:border-citron-soft hover:text-citron-soft">
                  <Phone className="h-4 w-4" /> {siteConfig.phone || "Llamar"}
                </a>
              </div>
              <p className="mt-5 text-sm font-semibold text-citron-soft">Te asesoramos sin compromiso</p>
            </div>
          </div>
        </div>
      </section>

      <TrustTicker />

      {/* SERVICES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Energía solar fotovoltaica</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu energía solar, llave en mano</h2>
            <p className="mt-4 text-muted-foreground">Dimensionamos la instalación según tu consumo real para que el ahorro sea el que te prometemos.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s) => (
              <div key={s.title} className="rounded-sm border border-border bg-card p-6">
                <s.icon className="h-9 w-9 text-citron-ink" />
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
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Instalación solar en 4 pasos</h2>
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

      {/* EFFICIENCY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={PANELES_ATARDECER} alt="Paneles solares fotovoltaicos en un tejado al atardecer" className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" fittingType="fill" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Ahorro energético</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu tejado produce energía</h2>
              <p className="mt-4 text-muted-foreground">Una instalación fotovoltaica bien dimensionada puede reducir hasta el 100% de tu factura eléctrica. Con batería de almacenamiento, aprovechas la energía solar también por la noche, y con la compensación de excedentes, la red te paga lo que no consumes.</p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Euro, title: "Ahorro real desde el primer día", desc: "Hasta el 100% de tu factura eléctrica con batería de almacenamiento." },
                  { icon: Battery, title: "Almacenamiento inteligente", desc: "Baterías de litio para usar la solar 24 horas." },
                  { icon: Plug, title: "Compensación de excedentes", desc: "La red te paga por la energía que no consumes." },
                ].map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <f.icon className="h-7 w-7 shrink-0 text-citron-ink" />
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

      <GuaranteesSection
        title="Tu instalación solar, respaldada por escrito"
        subtitle="Nos encargamos de todo el proceso, incluida la legalización, y respondemos de nuestro trabajo."
        items={garantias}
      />

      {/* PROYECTOS REALES */}
      <ProjectGallery
        proyectos={PROYECTOS_SOLAR}
        eyebrow="Proyectos reales"
        titulo="Instalaciones fotovoltaicas terminadas"
        subtitulo="Ejemplos reales de paneles solares y autoconsumo en la provincia de Valencia."
        fondoCard
      />

      <Reviews />

      <ServiceCTA title="¿Listo para tu instalación solar?" subtitle="Te asesoramos sin compromiso. Presupuesto gratis en menos de 24 horas." />

      {/* FAQ SEO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre paneles solares en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Cuánto cuesta instalar paneles solares en ${siteConfig.provincia}?`, a: "El precio depende de la potencia y el número de paneles. Una instalación de 4-6 kWp para una vivienda puede partir de 4.000-6.000€ con subvenciones. Te damos presupuesto cerrado en 24 horas." },
              { q: "¿Cuánto se ahorra con paneles solares?", a: "Una instalación bien dimensionada puede reducir hasta el 100% de tu factura eléctrica. Con compensación de excedentes, la red te paga por la energía que no consumes. La amortización suele ser de 5-7 años." },
              { q: "¿Necesito batería de almacenamiento?", a: "No es obligatoria, pero permite aprovechar la energía solar también por la noche, maximizando el autoconsumo. Te asesoramos según tu perfil de consumo y presupuesto." },
              { q: "¿Cuánto dura la instalación?", a: "La instalación de paneles en una vivienda unifamiliar suele tardar 1-2 días. Incluye montaje, conexionado, inversor y puesta en marcha con monitorización por app." },
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
      <section id="contacto" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Solicita tu presupuesto</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu instalación solar empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un presupuesto sin compromiso en menos de 24 horas.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-background p-4 transition hover:border-citron-ink">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron-ink" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de paneles solares.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-background p-4 transition hover:border-citron-ink">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron-ink" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
              <ContactForm servicio="fotovoltaica" origen="Fotovoltaica" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}