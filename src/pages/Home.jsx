import React from "react";
import { Link } from "react-router-dom";
import { Sun, Wind, Hammer, Phone, ArrowRight, CheckCircle2, Zap, Leaf, Wrench, ShieldCheck, Clock, Euro, Star, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import Reviews from "@/components/site/Reviews";
import CaseStudies from "@/components/site/CaseStudies";
import WhatsAppButton, { WhatsAppGlyph } from "@/components/site/WhatsAppButton";

const SOLAR_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2db8ad089_generated_image.png";
const HVAC_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/bb853e33f_generated_image.png";
const SOLAR_MACRO = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/a6cbdd156_generated_image.png";
const REFORMAS_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/0b21260cd_generated_image.png";
const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/a6cbdd156_generated_image.png";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Instalación fotovoltaica y de climatización" className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite/90 to-graphite/70" />
          <div className="blueprint-grid absolute inset-0 opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
                <Zap className="h-3.5 w-3.5" /> Ingeniería solar, climatización y reformas
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-citron text-citron" /> 4,9/5 · +120 reseñas en Google
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Energía, clima y reformas con ingeniería en {siteConfig.provincia}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ingenieros certificados en fotovoltaica, climatización y reformas integrales.
              Ahorra hasta un 70% en tu factura y renueva tu espacio. Presupuesto gratis en 2 horas.
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
              <span className="flex items-center gap-1.5"><Euro className="h-4 w-4 text-citron" /> Ahorro hasta 70%</span>
              <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4 text-citron" /> Garantía 5 años</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Link to="/fotovoltaica" className="group relative overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={SOLAR_IMG} alt="Instalación de placas solares fotovoltaicas en tejado" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <Sun className="h-3.5 w-3.5" /> FOTOVOLTAICA
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Dominio Solar</h2>
                <p className="mt-2 text-sm text-muted-foreground">Autoconsumo, baterías y paneles de alta eficiencia. Reduce hasta un 70% tu factura eléctrica.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-citron transition group-hover:gap-2">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/climatizacion" className="group relative overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={HVAC_IMG} alt="Instalación de aire acondicionado split y conductos" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <Wind className="h-3.5 w-3.5" /> CLIMATIZACIÓN
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Clima Inteligente</h2>
                <p className="mt-2 text-sm text-muted-foreground">Splits, conductos, bombas de calor y aerotermia. Confort total con la máxima eficiencia energética.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-citron transition group-hover:gap-2">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/reformas" className="group relative overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={REFORMAS_IMG} alt="Reforma integral de vivienda con dirección de obra" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <Hammer className="h-3.5 w-3.5" /> REFORMAS
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Reformas con Ingeniería</h2>
                <p className="mt-2 text-sm text-muted-foreground">Reformas integrales de viviendas y locales con dirección de obra. Llave en mano y con garantía.</p>
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
            { icon: Euro, label: "Ahorro en factura", value: "hasta 70%" },
            { icon: Wrench, label: "Garantía de instalación", value: "5 años" },
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
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tres especialidades, un mismo estándar de ingeniería</h2>
            <p className="mt-4 text-muted-foreground">Diseñamos, instalamos y reformamos en {siteConfig.provincia} y alrededores con un mismo estándar de ingeniería.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-sm border border-border bg-card p-8">
              <Sun className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Energía Fotovoltaica</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {["Autoconsumo para viviendas y empresas", "Sistemas con baterías de litio", "Paneles monocristalinos de alta eficiencia", "Trámites y legalización incluidos"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron" /> {i}</li>
                ))}
              </ul>
              <Link to="/fotovoltaica" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-citron hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-sm border border-border bg-card p-8">
              <Wind className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Climatización</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {["Aire acondicionado split y multi-split", "Sistemas de conductos para viviendas", "Bombas de calor y aerotermia", "Mantenimiento y reparación"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron" /> {i}</li>
                ))}
              </ul>
              <Link to="/climatizacion" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-citron hover:gap-2 transition-all">
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-sm border border-border bg-card p-8">
              <Hammer className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Reformas Integrales</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {["Reformas de viviendas y locales", "Proyecto y dirección de obra", "Electricidad, fontanería y acabados", "Llave en mano con garantía"].map((i) => (
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
              <Image src={SOLAR_MACRO} alt="Detalle de célula solar fotovoltaica de alta eficiencia" className="h-80 w-full" fittingType="fill" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Por qué NovaTech</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Ingeniería precisa, resultados medibles</h2>
              <p className="mt-4 text-muted-foreground">No somos instaladores improvisados. Somos ingenieros que dimensionan cada sistema con datos reales de consumo y radiación solar de {siteConfig.provincia}, para que el ahorro sea real.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: Leaf, title: "Eficiencia real", desc: "Estudiamos tu consumo antes de proponer nada." },
                  { icon: ShieldCheck, title: "Garantía total", desc: "Materiales premium y mano de obra certificada." },
                  { icon: Clock, title: "Respuesta rápida", desc: "Presupuesto en 2 horas, instalación en días." },
                  { icon: Euro, title: "Ahorro garantizado", desc: "Amortización media en 4-6 años." },
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

      {/* CASE STUDIES */}
      <CaseStudies />

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