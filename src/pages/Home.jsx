import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Snowflake, ShieldCheck, Clock, Wrench, Euro, MapPin, ChevronDown, Zap, Droplets, Wind, PaintBucket, Hammer } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import Reviews from "@/components/site/Reviews";
import TrustTicker from "@/components/site/TrustTicker";
import WhatsAppButton, { WhatsAppGlyph } from "@/components/site/WhatsAppButton";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/cfa6a38fe_generated_02362836.png";
const HVAC_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/cdce1e44c_generated_image.png";
const CONDUCTOS_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/7a3a251f1_generated_image.png";
const COCINA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/e429d50fc_WhatsAppImage2026-10-09at1739162.jpeg";
const BANO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2a7226264_WhatsAppImage2026-10-09at1739161.jpeg";
const COCINA_PRO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/a6c54a998_generated_image.png";
const BANO_PRO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/f4f6cb92c_generated_image.png";
const FOTOVOLTAICA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/f7ac0b1e3_generated_image.png";

const EXTRAS = [
  { icon: Zap, label: "Electricidad" },
  { icon: Droplets, label: "Fontanería" },
  { icon: Wind, label: "Ventilación" },
  { icon: PaintBucket, label: "Pintura" },
  { icon: Wrench, label: "Pladur" },
  { icon: Hammer, label: "Albañilería" },
];

const PROYECTOS = [
  {
    imagen: CONDUCTOS_IMG,
    titulo: "Edificio de viviendas en Valencia",
    tipo: "Climatización por conductos",
    zona: "Valencia capital",
    resultado: "Unidades condensadoras exteriores en cubierta para un sistema por conductos con 4 zonas independientes, control por app y silencio absoluto en el interior.",
    metricas: [
      { label: "Eficiencia", value: "A+++" },
      { label: "Zonas", value: "4" },
      { label: "Ruido", value: "<22 dB" },
    ],
  },
  {
    imagen: HVAC_IMG,
    titulo: "Salón en piso de Paterna",
    tipo: "Split inverter",
    zona: "Paterna, Valencia",
    resultado: "Split inverter instalado en el salón para climatizar la zona de día de la vivienda, con bajo consumo y funcionamiento silencioso.",
    metricas: [
      { label: "Superficie", value: "35 m²" },
      { label: "Equipos", value: "1" },
      { label: "Consumo", value: "-40%" },
    ],
  },
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
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Reforma integral de vivienda en Valencia con acabados premium" className="h-full w-full object-cover ken-burns" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/55 to-graphite/95" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            <Wrench className="h-3.5 w-3.5" /> Reformas, clima y solar en Valencia
          </span>
          <h1 className="mt-8 max-w-4xl font-heading text-4xl font-normal leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Todo lo que tu hogar necesita, con un único equipo
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-citron-soft" />
          <p className="mt-6 max-w-xl text-base font-light text-white/85 sm:text-lg">
            Reformas integrales, baños y cocinas, climatización y energía solar. Ingenieros propios, presupuesto cerrado y entrega llave en mano en {siteConfig.provincia} y alrededores.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
            <WhatsAppButton label="Presupuesto por WhatsApp" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-8 text-sm font-bold text-white transition hover:brightness-95" iconClass="h-5 w-5" />
            <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/30 px-8 text-sm font-semibold text-white backdrop-blur transition hover:border-citron-soft hover:text-citron-soft">
              <Phone className="h-4 w-4" /> {siteConfig.phone || "Llamar"}
            </a>
          </div>
          <p className="mt-6 text-sm font-medium text-citron-soft">Te asesoramos sin compromiso</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </section>

      <TrustTicker />

      {/* SERVICIOS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-ink">A qué nos dedicamos</p>
            <h2 className="mt-3 font-heading text-3xl font-normal text-foreground sm:text-4xl">Soluciones integrales para tu hogar y negocio</h2>
            <p className="mt-4 text-muted-foreground">Un solo interlocutor para tu proyecto, de la visita al acabado. Sin subcontratas y con equipo propio.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Link to="/reforma-integral" className="group relative h-[300px] overflow-hidden rounded-sm border border-border lg:h-[360px]">
              <Image src={COCINA_PRO} alt="Reforma de cocina a medida con isla de mármol" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-soft">01 — Reformas Integrales</p>
                <h3 className="mt-2 font-heading text-2xl font-normal text-white sm:text-3xl">Baños, Cocinas y Reformas Completas</h3>
                <div className="mt-3 h-px w-10 bg-citron-soft" />
                <p className="mt-3 max-w-xs text-sm text-white/85">Reformas integrales con dirección de ingeniería: baños, cocinas, alisado y acabados. Proyecto, obra y llave en mano.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-citron-soft transition group-hover:gap-3">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/climatizacion" className="group relative h-[300px] overflow-hidden rounded-sm border border-border lg:h-[360px]">
              <Image src={HVAC_IMG} alt="Aire acondicionado split instalado en salón reformado" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-soft">02 — Climatización</p>
                <h3 className="mt-2 font-heading text-2xl font-normal text-white sm:text-3xl">Splits y Conductos</h3>
                <div className="mt-3 h-px w-10 bg-citron-soft" />
                <p className="mt-3 max-w-xs text-sm text-white/85">Aire acondicionado split y por conductos con tecnología inverter A+++. Confort total y bajo consumo.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-citron-soft transition group-hover:gap-3">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/fotovoltaica" className="group relative h-[300px] overflow-hidden rounded-sm border border-border lg:h-[360px]">
              <Image src={FOTOVOLTAICA_IMG} alt="Instalador montando paneles solares fotovoltaicos en un tejado" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-soft">03 — Fotovoltaica</p>
                <h3 className="mt-2 font-heading text-2xl font-normal text-white sm:text-3xl">Paneles Solares</h3>
                <div className="mt-3 h-px w-10 bg-citron-soft" />
                <p className="mt-3 max-w-xs text-sm text-white/85">Autoconsumo fotovoltaico con baterías y compensación de excedentes. Reduce hasta el 100% de tu factura eléctrica.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-citron-soft transition group-hover:gap-3">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TAMBIÉN TRABAJAMOS */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-ink">También trabajamos</p>
            <h2 className="mt-3 font-heading text-3xl font-normal text-foreground sm:text-4xl">Un mismo equipo para todas tus necesidades</h2>
            <p className="mt-4 text-muted-foreground">Además de nuestras especialidades, cubrimos también electricidad, fontanería, ventilación, pintura, pladur y albañilería.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {EXTRAS.map((e) => (
              <a key={e.label} href="#contacto" className="group flex flex-col items-center gap-3 rounded-sm border border-border bg-background px-4 py-6 text-center transition hover:border-citron-ink">
                <e.icon className="h-6 w-6 text-citron-ink" />
                <span className="text-sm font-semibold text-foreground">{e.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Garantía por escrito", value: "3 años" },
              { icon: Clock, label: "Presupuesto en", value: "24 horas" },
              { icon: Euro, label: "Equipos", value: "Clase A+++" },
              { icon: Wrench, label: "Equipo propio", value: "Sin subcontratas" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-7 w-7 text-citron-ink" />
                <p className="mt-4 font-heading text-xl font-normal text-foreground">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-sm">
              <Image src={BANO_PRO} alt="Baño reformado con bañera exenta y acabados premium" className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-[520px]" fittingType="fill" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-ink">Por qué TU INGENIERIA</p>
              <h2 className="mt-4 font-heading text-3xl font-normal text-foreground sm:text-4xl">Ingeniería precisa, resultados medibles</h2>
              <div className="mt-5 h-px w-12 bg-citron" />
              <p className="mt-6 text-muted-foreground">No somos instaladores improvisados. Somos ingenieros que dimensionan cada sistema y planifican cada obra con datos reales, para que el resultado sea el que esperas.</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Snowflake, title: "Eficiencia real", desc: "Calculamos la carga térmica antes de proponer nada." },
                  { icon: ShieldCheck, title: "Garantía total", desc: "Materiales premium y mano de obra certificada." },
                  { icon: Clock, title: "Respuesta rápida", desc: "Presupuesto en 24 horas, obra en días." },
                  { icon: Euro, title: "Sin sorpresas", desc: "Presupuesto cerrado y plazos cumplidos." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <f.icon className="h-6 w-6 shrink-0 text-citron-ink" />
                    <div>
                      <p className="font-semibold text-foreground">{f.title}</p>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-ink">Proyectos reales</p>
            <h2 className="mt-4 font-heading text-3xl font-normal text-foreground sm:text-4xl">Proyectos reales en Valencia</h2>
            <div className="mx-auto mt-5 h-px w-12 bg-citron" />
            <p className="mt-6 text-sm text-muted-foreground">Desliza para ver más proyectos</p>
          </div>
          <div className="scroll-cinematic mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {PROYECTOS.map((p) => (
              <article key={p.titulo} className="flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-sm border border-border bg-background sm:w-[400px]">
                <div className="relative h-72 shrink-0 overflow-hidden bg-graphite">
                  <Image src={p.imagen} alt={p.titulo} className="h-full w-full object-contain" fittingType="fit" />
                  <span className="absolute left-4 top-4 rounded-full bg-citron px-3 py-1 text-xs font-bold text-primary-foreground">{p.tipo}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-normal text-foreground">{p.titulo}</h3>
                  <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-citron-ink" /> {p.zona}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{p.resultado}</p>
                  {p.metricas && p.metricas.length > 0 && (
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5">
                      {p.metricas.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="font-heading text-lg font-bold text-citron-ink">{m.value}</p>
                          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews />

      <ServiceCTA />

      {/* CONTACTO */}
      <section id="contacto" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron-ink">Contacto</p>
              <h2 className="mt-4 font-heading text-3xl font-normal text-foreground sm:text-4xl">Pide tu presupuesto gratis</h2>
              <div className="mt-5 h-px w-12 bg-citron" />
              <p className="mt-6 text-muted-foreground">Cuéntanos qué necesitas y te llamamos con un presupuesto cerrado, sin compromiso.</p>
              <div className="mt-10 space-y-0">
                <a href={telLink} className="flex items-center gap-4 border-b border-border py-4 transition hover:text-citron-ink">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border"><Phone className="h-4 w-4 text-citron-ink" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-heading text-lg font-normal text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-border py-4 transition hover:text-citron-ink">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border"><WhatsAppGlyph className="h-5 w-5 text-[#25D366]" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-heading text-lg font-normal text-foreground">Escríbenos ahora</p></div>
                </a>
                <div className="flex items-center gap-4 border-b border-border py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border"><MapPin className="h-4 w-4 text-citron-ink" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Zona de servicio</p><p className="font-heading text-lg font-normal text-foreground">{siteConfig.provincia} y alrededores</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-background p-6 sm:p-10">
              <ContactForm servicio="general" origen="Home" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}