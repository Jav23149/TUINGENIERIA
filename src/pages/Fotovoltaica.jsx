import React from "react";
import { Link } from "react-router-dom";
import { Sun, Phone, MessageCircle, CheckCircle2, ArrowRight, Zap, Battery, TrendingDown, Wrench, FileText, Euro } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import ProjectGallery from "@/components/site/ProjectGallery";

const SOLAR_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2db8ad089_generated_image.png";
const SOLAR_MACRO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/a6cbdd156_generated_image.png";

const PROYECTOS_SOLAR = [
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/26f52153e_generated_image.png",
    titulo: "Vivienda unifamiliar en Paterna",
    tipo: "Autoconsumo + Batería",
    zona: "Paterna, Valencia",
    resultado: "8 paneles de 500W + batería de 10 kWh para una familia con coche eléctrico. Cubren el 78% del consumo y recargan el vehículo de noche.",
    metricas: [
      { label: "Ahorro anual", value: "78%" },
      { label: "Amortización", value: "4,5 años" },
      { label: "Potencia", value: "4 kWp" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2d6291ef9_generated_image.png",
    titulo: "Nave industrial en Sagunto",
    tipo: "Autoconsumo industrial",
    zona: "Sagunto, Valencia",
    resultado: "120 paneles en cubierta de nave logística de 2.000 m². El 80% del consumo diurno se cubre con energía solar.",
    metricas: [
      { label: "Superficie", value: "2.000 m²" },
      { label: "Ahorro", value: "80%" },
      { label: "Paneles", value: "120" },
    ],
  },
  {
    imagen: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/a6cbdd156_generated_image.png",
    titulo: "Chalet con piscina en Burjassot",
    tipo: "Autoconsumo + Bombeo",
    zona: "Burjassot, Valencia",
    resultado: "Instalación de 6 kWp con sistema de bombeo solar para riego de jardín y piscina. Consumo casi nulo en verano.",
    metricas: [
      { label: "Ahorro verano", value: "90%" },
      { label: "Potencia", value: "6 kWp" },
      { label: "Bombeo", value: "Sí" },
    ],
  },
];

const servicios = [
  { icon: Zap, title: "Autoconsumo fotovoltaico", desc: "Paneles solares para tu vivienda o empresa con conexión a red." },
  { icon: Battery, title: "Baterías de litio", desc: "Almacena energía y úsala cuando la necesites, incluso de noche." },
  { icon: TrendingDown, title: "Sistemas de bombeo", desc: "Bombas solares para pozos y riegos sin coste de electricidad." },
  { icon: FileText, title: "Trámites y legalización", desc: "Gestionamos todo el papeleo y el registro de autoconsumo." },
];

const pasos = [
  { n: "01", title: "Estudio de consumo", desc: "Analizamos tu factura eléctrica y el consumo real de tu vivienda o empresa." },
  { n: "02", title: "Diseño e ingeniería", desc: "Dimensionamos el sistema con datos de radiación solar de tu zona." },
  { n: "03", title: "Instalación profesional", desc: "Montaje en 1-2 días con materiales premium y mano de obra certificada." },
  { n: "04", title: "Legalización y mantenimiento", desc: "Tramitamos el autoconsumo y damos soporte postventa continuo." },
];

export default function Fotovoltaica() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Sun className="h-3.5 w-3.5" /> Fotovoltaica en {siteConfig.provincia}
              </span>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
                Instalación de placas solares y autoconsumo en {siteConfig.provincia}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Reduce hasta un 70% tu factura eléctrica con un sistema fotovoltaico diseñado por ingenieros.
                Estudiamos tu consumo, instalamos paneles de alta eficiencia y legalizamos todo el sistema.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Hola, quiero información sobre instalación de placas solares.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-7 text-sm font-bold text-graphite transition hover:brightness-95">
                  <MessageCircle className="h-4 w-4" /> Presupuesto solar gratis
                </a>
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={SOLAR_IMG} alt="Instalación de paneles solares fotovoltaicos en tejado de vivienda" className="h-80 w-full lg:h-96" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Nuestros sistemas solares</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Soluciones fotovoltaicas a medida</h2>
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Cómo trabajamos</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Ingeniería solar en 4 pasos</h2>
              <div className="mt-8 space-y-6">
                {pasos.map((p) => (
                  <div key={p.n} className="flex gap-5">
                    <span className="font-display text-3xl font-black text-citron/30">{p.n}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={SOLAR_MACRO} alt="Detalle de célula solar fotovoltaica de alta eficiencia" className="h-96 w-full" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS REALES */}
      <ProjectGallery
        proyectos={PROYECTOS_SOLAR}
        eyebrow="Proyectos reales"
        titulo="Instalaciones solares terminadas"
        subtitulo="Ejemplos reales de autoconsumo fotovoltaico en la provincia de Valencia."
        fondoCard
      />

      <ServiceCTA title="¿Cuánto puedes ahorrar con placas solares?" subtitle="Te hacemos un estudio de ahorro personalizado gratis." />

      {/* FAQ SEO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Todo sobre la fotovoltaica en {siteConfig.provincia}</h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { q: `¿Cuánto cuesta instalar placas solares en ${siteConfig.provincia}?`, a: "El precio depende del consumo y el espacio disponible. Una instalación doméstica media ronda los 4.000-6.000€ antes de ayudas, con amortización en 4-6 años. Te damos un presupuesto cerrado y sin compromiso en 2 horas." },
              { q: "¿Cuánto se ahorra con autoconsumo solar?", a: "Dependiendo del perfil de consumo, puedes reducir entre un 50% y un 70% tu factura eléctrica. Con baterías de litio el aprovechamiento es aún mayor." },
              { q: "¿Tramitáis la legalización del autoconsumo?", a: "Sí. Nos encargamos de todo: proyecto, memoria técnica, permisos y registro en el organismo competente. Tú no tienes que preocuparte por el papeleo." },
              { q: "¿Qué garantía tienen las instalaciones?", a: "Los paneles tienen garantía de producto de 12-25 años y de rendimiento de 25 años. La instalación y mano de obra cuentan con 5 años de garantía NovaTech." },
              { q: `¿Instaláis en toda la provincia de ${siteConfig.provincia}?`, a: `Sí. Damos servicio en ${siteConfig.provincia} y todas las localidades de la provincia: ${siteConfig.localidades.slice(0, 5).join(", ")}, entre otras.` },
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
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Solicita tu estudio solar</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu instalación solar empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y te llamamos con un estudio de ahorro personalizado y presupuesto sin compromiso.</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone}</p></div>
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de placas solares.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MessageCircle className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="fotovoltaica" origen="Fotovoltaica" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}