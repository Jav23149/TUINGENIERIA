import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Snowflake, ShieldCheck, Clock, Wrench, Euro, MapPin, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import Reviews from "@/components/site/Reviews";
import WhatsAppButton, { WhatsAppGlyph } from "@/components/site/WhatsAppButton";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/cfa6a38fe_generated_02362836.png";
const HVAC_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/cdce1e44c_generated_image.png";
const CONDUCTOS_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/7a3a251f1_generated_image.png";
const COCINA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/e429d50fc_WhatsAppImage2026-10-09at1739162.jpeg";
const BANO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2a7226264_WhatsAppImage2026-10-09at1739161.jpeg";
const COCINA_PRO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/a6c54a998_generated_image.png";
const BANO_PRO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/f4f6cb92c_generated_image.png";

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
];

export default function Home() {
  return (
    <>
      {/* HERO — pantalla completa, cinemático */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Cocina reformada a medida con isla de mármol y acabados premium" className="h-full w-full ken-burns" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 via-graphite/25 to-graphite/90" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-citron/30 bg-graphite/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-citron backdrop-blur">
            <Snowflake className="h-3.5 w-3.5" /> Climatización y reformas
          </span>
          <h1 className="mt-8 max-w-4xl font-heading text-4xl font-normal leading-[1.1] text-foreground text-balance sm:text-5xl lg:text-6xl">
            Climatización y reformas con ingeniería en {siteConfig.provincia}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-citron" />
          <p className="mt-6 max-w-xl text-base font-light text-foreground/80 sm:text-lg">
            Especialistas en aire acondicionado y reformas de baños y cocinas. Ingenieros certificados, presupuesto gratis en 24 horas.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton label="Presupuesto por WhatsApp" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-8 text-sm font-bold text-white transition hover:brightness-95" iconClass="h-5 w-5" />
            <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-foreground/20 bg-graphite/30 px-8 text-sm font-semibold text-foreground backdrop-blur transition hover:border-citron hover:text-citron">
              <Phone className="h-4 w-4" /> {siteConfig.phone || "Llamar"}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </section>

      {/* SERVICIOS — tarjetas contenidas con aire */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link to="/climatizacion" className="group relative h-[300px] overflow-hidden rounded-sm border border-border lg:h-[360px]">
              <Image src={HVAC_IMG} alt="Aire acondicionado split instalado en salón reformado" className="h-full w-full transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron">01 — Climatización</p>
                <h2 className="mt-2 font-heading text-2xl font-normal text-foreground sm:text-3xl">Splits y Conductos</h2>
                <div className="mt-3 h-px w-10 bg-citron" />
                <p className="mt-3 max-w-xs text-sm text-foreground/80">Aire acondicionado split y por conductos con tecnología inverter A+++. Confort total y bajo consumo.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-citron transition group-hover:gap-3">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/reformas" className="group relative h-[300px] overflow-hidden rounded-sm border border-border lg:h-[360px]">
              <Image src={COCINA_PRO} alt="Reforma de cocina a medida con isla de mármol" className="h-full w-full transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron">02 — Reformas</p>
                <h2 className="mt-2 font-heading text-2xl font-normal text-foreground sm:text-3xl">Baños y Cocinas</h2>
                <div className="mt-3 h-px w-10 bg-citron" />
                <p className="mt-3 max-w-xs text-sm text-foreground/80">Reforma de baños y cocinas con dirección de ingeniería. Proyecto, obra y acabados. Llave en mano.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-citron transition group-hover:gap-3">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST — minimal, aireado */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Ingenieros certificados", value: "ISO 9001" },
              { icon: Clock, label: "Presupuesto en", value: "24 horas" },
              { icon: Euro, label: "Equipos", value: "Clase A+++" },
              { icon: Wrench, label: "Garantía de obra", value: "5 años" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-7 w-7 text-citron" />
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
            <div className="relative overflow-hidden">
              <Image src={BANO_PRO} alt="Baño reformado con bañera exenta y acabados premium" className="h-[420px] w-full lg:h-[520px]" fittingType="fill" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron">Por qué NovaTech</p>
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
                    <f.icon className="h-6 w-6 shrink-0 text-citron" />
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

      {/* PROYECTOS — scroll horizontal */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron">Proyectos reales</p>
            <h2 className="mt-4 font-heading text-3xl font-normal text-foreground sm:text-4xl">Proyectos reales en Valencia</h2>
            <div className="mx-auto mt-5 h-px w-12 bg-citron" />
            <p className="mt-6 text-sm text-muted-foreground">Desliza para ver más proyectos</p>
          </div>
          <div className="scroll-cinematic mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {PROYECTOS.map((p) => (
              <article key={p.titulo} className="flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-sm border border-border bg-background sm:w-[400px]">
                <div className="relative h-72 shrink-0 overflow-hidden bg-graphite">
                  <Image src={p.imagen} alt={p.titulo} className="h-full w-full" fittingType="fit" />
                  <span className="absolute left-4 top-4 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">{p.tipo}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-normal text-foreground">{p.titulo}</h3>
                  <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-citron" /> {p.zona}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{p.resultado}</p>
                  {p.metricas && p.metricas.length > 0 && (
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5">
                      {p.metricas.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="font-heading text-lg font-bold text-citron">{m.value}</p>
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
      <section id="contacto" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citron">Contacto</p>
              <h2 className="mt-4 font-heading text-3xl font-normal text-foreground sm:text-4xl">Pide tu presupuesto gratis</h2>
              <div className="mt-5 h-px w-12 bg-citron" />
              <p className="mt-6 text-muted-foreground">Cuéntanos qué necesitas y te llamamos con un presupuesto sin compromiso.</p>
              <div className="mt-10 space-y-0">
                <a href={telLink} className="flex items-center gap-4 border-b border-border py-4 transition hover:text-citron">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-citron/30"><Phone className="h-4 w-4 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Llámanos</p><p className="font-heading text-lg font-normal text-foreground">{siteConfig.phone || "Próximamente"}</p></div>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-border py-4 transition hover:text-citron">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-citron/30"><WhatsAppGlyph className="h-5 w-5 text-[#25D366]" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-heading text-lg font-normal text-foreground">Escríbenos ahora</p></div>
                </a>
                <div className="flex items-center gap-4 border-b border-border py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-citron/30"><MapPin className="h-4 w-4 text-citron" /></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Zona de servicio</p><p className="font-heading text-lg font-normal text-foreground">{siteConfig.provincia} y alrededores</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-10">
              <ContactForm servicio="general" origen="Home" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}