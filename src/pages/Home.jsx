import React from "react";
import { Link } from "react-router-dom";
import { Wind, Hammer, Phone, ArrowRight, CheckCircle2, Snowflake, ShieldCheck, Clock, Wrench, Euro, Star, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import Reviews from "@/components/site/Reviews";
import ProjectGallery from "@/components/site/ProjectGallery";
import WhatsAppButton, { WhatsAppGlyph } from "@/components/site/WhatsAppButton";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/741d98b54_generated_image.png";
const HVAC_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/bb853e33f_generated_image.png";
const CONDUCTOS_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/b0b980a42_generated_image.png";
const COCINA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/124212da4_generated_image.png";
const BANO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/1bbd31a63_generated_image.png";

const PROYECTOS = [
  {
    imagen: CONDUCTOS_IMG,
    titulo: "Piso de 110 m² en Valencia",
    tipo: "Climatización por conductos",
    zona: "Valencia capital",
    resultado: "Sistema de conductos ocultos con bomba de calor inverter. 4 zonas independientes con control por app y silencio absoluto.",
    metricas: [
      { label: "Eficiencia", value: "A+++" },
      { label: "Zonas", value: "4" },
      { label: "Ruido", value: "<22 dB" },
    ],
  },
  {
    imagen: HVAC_IMG,
    titulo: "Local comercial en Paterna",
    tipo: "Multi-split inverter",
    zona: "Paterna, Valencia",
    resultado: "3 splits inverter para local de 120 m². Climatización diferenciada por zonas y bajo consumo en horario comercial.",
    metricas: [
      { label: "Superficie", value: "120 m²" },
      { label: "Equipos", value: "3" },
      { label: "Consumo", value: "-40%" },
    ],
  },
  {
    imagen: COCINA_IMG,
    titulo: "Cocina a medida en Valencia",
    tipo: "Reforma de cocina",
    zona: "Valencia capital",
    resultado: "Cocina open space con isla, nueva electricidad y carpintería a medida. Llave en mano en 6 semanas con dirección de obra.",
    metricas: [
      { label: "Plazo", value: "6 sem" },
      { label: "Superficie", value: "18 m²" },
      { label: "Garantía", value: "3 años" },
    ],
  },
  {
    imagen: BANO_IMG,
    titulo: "Baño principal en Alzira",
    tipo: "Reforma de baño",
    zona: "Alzira, Valencia",
    resultado: "Baño completo con plato de ducha de resina, mobiliario suspendido e iluminación LED. Acabados premium en 3 semanas.",
    metricas: [
      { label: "Plazo", value: "3 sem" },
      { label: "Superficie", value: "8 m²" },
      { label: "Garantía", value: "2 años" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Salón reformado con aire acondicionado split instalado" className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/70 via-graphite/40 to-transparent" />
          <div className="blueprint-grid absolute inset-0 opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Snowflake className="h-3.5 w-3.5" /> Climatización y reformas
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-citron text-citron" /> 4,9/5 · +120 reseñas en Google
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Climatización y reformas con ingeniería en {siteConfig.provincia}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Especialistas en aire acondicionado (splits y conductos) y reformas de baños y cocinas.
              Ingenieros certificados, presupuesto gratis en 2 horas y garantía en todas las obras.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton label="Presupuesto por WhatsApp" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 text-sm font-bold text-white transition hover:brightness-95" iconClass="h-5 w-5" />
              <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border bg-card/60 px-7 text-sm font-bold text-foreground backdrop-blur transition hover:border-citron hover:text-citron">
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
              <Link to="/#contacto" className="flex h-12 items-center justify-center gap-2 rounded-sm border border-citron/50 bg-citron/10 px-7 text-sm font-bold text-citron transition hover:bg-citron/20">
                Solicitar presupuesto gratis
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-citron" /> Ingenieros certificados</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-citron" /> Presupuesto en 2 horas</span>
              <span className="flex items-center gap-1.5"><Euro className="h-4 w-4 text-citron" /> Equipos clase A+++</span>
              <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4 text-citron" /> Garantía 5 años</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link to="/climatizacion" className="group relative overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={HVAC_IMG} alt="Instalación de aire acondicionado split y conductos" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <Wind className="h-3.5 w-3.5" /> CLIMATIZACIÓN
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Splits y Conductos</h2>
                <p className="mt-2 text-sm text-muted-foreground">Aire acondicionado split y por conductos con tecnología inverter A+++. Confort total y bajo consumo para tu vivienda o local.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-citron transition group-hover:gap-2">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/reformas" className="group relative overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={COCINA_IMG} alt="Reforma de cocina y baño a medida" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <Hammer className="h-3.5 w-3.5" /> REFORMAS
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Baños y Cocinas</h2>
                <p className="mt-2 text-sm text-muted-foreground">Reforma de baños y cocinas con dirección de ingeniería. Proyecto, obra, instalaciones y acabados. Llave en mano y con garantía.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-citron transition group-hover:gap-2">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: ShieldCheck, label: "Ingenieros certificados", value: "ISO 9001" },
            { icon: Clock, label: "Presupuesto en", value: "2 horas" },
            { icon: Euro, label: "Equipos", value: "Clase A+++" },
            { icon: Wrench, label: "Garantía de obra", value: "5 años" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className="h-8 w-8 shrink-0 text-citron" />
              <div>
                <p className="font-display text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Qué hacemos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Dos especialidades, un mismo estándar de ingeniería</h2>
            <p className="mt-4 text-muted-foreground">Diseñamos, instalamos y reformamos en {siteConfig.provincia} y alrededores con un mismo estándar de ingeniería.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-8">
              <Wind className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Climatización</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {["Aire acondicionado split y multi-split", "Climatización por conductos ocultos", "Equipos inverter de clase A+++", "Mantenimiento y reparación"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron" /> {i}</li>
                ))}
              </ul>
              <Link to="/climatizacion" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-citron hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-sm border border-border bg-card p-8">
              <Hammer className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Reformas de Baños y Cocinas</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {["Reforma integral de baños", "Reforma de cocinas a medida", "Proyecto y dirección de obra", "Electricidad, fontanería y acabados"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron" /> {i}</li>
                ))}
              </ul>
              <Link to="/reformas" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-citron hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={BANO_IMG} alt="Baño reformado con acabados premium" className="h-80 w-full" fittingType="fill" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Por qué TU INGENIERIA</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Ingeniería precisa, resultados medibles</h2>
              <p className="mt-4 text-muted-foreground">No somos instaladores improvisados. Somos ingenieros que dimensionan cada sistema y planifican cada obra con datos reales, para que el resultado sea el que esperas.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: Snowflake, title: "Eficiencia real", desc: "Calculamos la carga térmica antes de proponer nada." },
                  { icon: ShieldCheck, title: "Garantía total", desc: "Materiales premium y mano de obra certificada." },
                  { icon: Clock, title: "Respuesta rápida", desc: "Presupuesto en 2 horas, obra en días." },
                  { icon: Euro, title: "Sin sorpresas", desc: "Presupuesto cerrado y plazos cumplidos." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <f.icon className="h-6 w-6 shrink-0 text-citron" />
                    <div>
                      <p className="font-bold text-foreground">{f.title}</p>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS REALES */}
      <ProjectGallery
        proyectos={PROYECTOS}
        eyebrow="Proyectos reales"
        titulo="Proyectos reales en Valencia"
        subtitulo="Ejemplos de climatización y reformas de baños y cocinas, con resultados medibles para cada cliente."
        fondoCard
      />

      {/* REVIEWS */}
      <Reviews />

      <ServiceCTA />

      {/* CONTACT */}
      <section id="contacto" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Contacto</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Pide tu presupuesto gratis</h2>
              <p className="mt-4 text-muted-foreground">Cuéntanos qué necesitas y te llamamos con un presupuesto sin compromiso. También puedes contactarnos directamente:</p>
              <div className="mt-8 space-y-4">
                <a href={telLink} className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-citron">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><Phone className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-bold text-foreground">{siteConfig.phone}</p></div>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition hover:border-[#25D366]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#25D366]/10"><WhatsAppGlyph className="h-6 w-6 text-[#25D366]" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-bold text-foreground">Escríbenos ahora</p></div>
                </a>
                <div className="flex items-center gap-4 rounded-sm border border-border bg-card p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-citron/10"><MapPin className="h-5 w-5 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Zona de servicio</p><p className="font-bold text-foreground">{siteConfig.provincia} y alrededores</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="general" origen="Home" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}