import React from "react";
import { Link } from "react-router-dom";
import { Hammer, Bath, ChefHat, Ruler, Wrench, Clock, ShieldCheck, CheckCircle2, Phone, ArrowRight, PaintBucket, BadgeCheck, FileText, Handshake } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import TrustTicker from "@/components/site/TrustTicker";
import WhatsAppButton from "@/components/site/WhatsAppButton";

const HERO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/c69a72b78_generated_image.png";
const BANO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/cd9d37de6_generated_image.png";
const COCINA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/03cb3f616_generated_image.png";
const ALISADO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/b9a50dfc4_generated_image.png";

const incluye = [
  { icon: Bath, title: "Baño completo", desc: "Plato de ducha o bañera, mobiliario, iluminación y acabados premium.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/3068d76bc_generated_image.png" },
  { icon: ChefHat, title: "Cocina a medida", desc: "Carpintería, electrodomésticos, electricidad y fontanería nueva.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/828773082_generated_image.png" },
  { icon: Wrench, title: "Instalaciones", desc: "Electricidad, fontanería, pladur y climatización revisadas.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2f63a592f_generated_image.png" },
  { icon: Hammer, title: "Acabados", desc: "Solados, alicatados, pintura y carpintería a tu estilo.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/ebf8575c0_generated_image.png" },
];

const pasos = [
  { n: "01", title: "Proyecto integral", desc: "Estudiamos tu vivienda y diseñamos la reforma completa con un único proyecto técnico." },
  { n: "02", title: "Presupuesto cerrado", desc: "Te entregamos un presupuesto cerrado y un calendario real en 24 horas." },
  { n: "03", title: "Dirección de obra", desc: "Coordinamos todos los oficios con un único responsable ingeniero." },
  { n: "04", title: "Entrega llave en mano", desc: "Entregamos tu vivienda reformada, limpia y con garantía." },
];

const garantias = [
  { icon: ShieldCheck, title: "Garantía de ejecución", desc: "Si algo falla por nuestra ejecución, volvemos y lo arreglamos. Cubrimos acabados, humedades y estructura por escrito." },
  { icon: Handshake, title: "Un único responsable", desc: "Tienes una sola persona de contacto que coordina todo y responde ante ti. Sin intermediarios ni subcontratas." },
  { icon: FileText, title: "Presupuesto cerrado", desc: "El precio que acordamos es el que pagas. Si surge un imprevisto, te lo comunicamos antes de ejecutar, sin sorpresas." },
];

const ESPECIALIDADES = [
  { to: "/reforma-bano", img: BANO_IMG, icon: Bath, tag: "BAÑO", title: "Reforma de baño", desc: "Baño completo en 7 días, llave en mano y con acabados premium. Plato de ducha o bañera, mobiliario e iluminación." },
  { to: "/reforma-cocina", img: COCINA_IMG, icon: ChefHat, tag: "COCINA", title: "Reforma de cocina", desc: "Cocina a medida en 10-14 días, con nueva electricidad, fontanería y carpintería. Proyecto y dirección de obra." },
  { to: "/reforma-alisado", img: ALISADO_IMG, icon: PaintBucket, tag: "ALISADO", title: "Alisado de paredes", desc: "Quitamos el gotelé y alisamos tus paredes con yeso. Acabado liso y uniforme, listo para pintar, en 2-5 días." },
];

export default function ReformaIntegral() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Reforma integral de una vivienda en Valencia: cocina abierta y acabados nuevos" className="h-full w-full object-cover" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/90 via-graphite/70 to-graphite/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-citron-soft/40 bg-citron-soft/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron-soft">
              <Hammer className="h-3.5 w-3.5" /> Reformas integrales y parciales
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
              Reformas integrales llave en mano en Valencia
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              Un único equipo se encarga de toda tu reforma: baño, cocina, instalaciones y acabados. Sin subcontratas, sin sorpresas en el presupuesto y con un responsable de obra.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <li className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-soft" /> Coordinación de gremios con equipo propio</li>
              <li className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-soft" /> Plazos cumplidos desde el primer día</li>
              <li className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-citron-soft" /> Presupuestos claros y cerrados</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
              <WhatsAppButton label="Presupuesto por WhatsApp" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 text-sm font-bold text-white transition hover:brightness-95" iconClass="h-5 w-5" />
              <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/30 px-7 text-sm font-bold text-white backdrop-blur transition hover:border-citron-soft hover:text-citron-soft">
                <Phone className="h-4 w-4" /> Llamar
              </a>
            </div>
            <p className="mt-5 text-sm font-semibold text-citron-soft">Te asesoramos sin compromiso</p>
          </div>
        </div>
      </section>

      <TrustTicker />

      {/* QUÉ INCLUYE */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Una reforma, todos los oficios</h2>
            <p className="mt-4 text-muted-foreground">Coordinamos todas las disciplinas de la reforma bajo un único proyecto técnico y un único responsable.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {incluye.map((i) => (
              <div key={i.title} className="group overflow-hidden rounded-sm border border-border bg-card">
                <div className="relative h-44 overflow-hidden">
                  <Image src={i.img} alt={i.title} className="h-full w-full transition-transform duration-300 group-hover:scale-105" fittingType="fill" />
                  <i.icon className="absolute left-4 top-4 h-8 w-8 text-citron-soft drop-shadow" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{i.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍAS */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Nuestras garantías</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma, respaldada desde el primer día</h2>
            <p className="mt-4 text-muted-foreground">Antes de empezar ya sabes a qué te comprometes y cómo respondemos si algo no sale como esperabas.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {garantias.map((g) => (
              <div key={g.title} className="rounded-sm border border-border bg-background p-8">
                <g.icon className="h-8 w-8 text-citron-ink" />
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma integral en 4 pasos</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-sm border border-border bg-card p-6">
                <span className="font-display text-3xl font-black text-citron-ink">{p.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Nuestras especialidades</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Baño, cocina y alisado de paredes</h2>
            <p className="mt-4 text-muted-foreground">Tres servicios especializados, cada uno con su propio equipo y presupuesto. Elige el tuyo y te damos presupuesto en 24 horas.</p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {ESPECIALIDADES.map((s) => (
              <Link key={s.to} to={s.to} className="group overflow-hidden rounded-sm border border-border bg-card transition hover:border-citron-ink">
                <div className="relative h-56 overflow-hidden">
                  <Image src={s.img} alt={s.title} className="h-full w-full transition-transform duration-500 group-hover:scale-105" fittingType="fill" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-primary-foreground">
                    <s.icon className="h-3.5 w-3.5" /> {s.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-citron-ink transition group-hover:gap-3">
                    Ver servicio <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA title="¿Vamos a reformar tu vivienda entera?" subtitle="Te asesoramos sin compromiso. Presupuesto gratis en menos de 24 horas." />

      {/* CONTACTO */}
      <section id="contacto" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">Solicita tu presupuesto</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma integral empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Cuéntanos tu proyecto y te llamamos con un presupuesto cerrado en menos de 24 horas. Te asesoramos sin compromiso.</p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {["Proyecto técnico y dirección de obra por ingenieros", "Presupuesto cerrado y plazos cumplidos", "Un único responsable para todos los oficios", "Garantía en toda la obra"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron-ink" /> {i}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row [&>a]:w-full sm:[&>a]:w-auto">
                <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm bg-citron px-6 text-sm font-bold text-primary-foreground transition hover:bg-citron-ink">
                  <Phone className="h-4 w-4" /> Llamar ahora
                </a>
                <a href={whatsappLink("Hola, quiero un presupuesto de reforma integral en Valencia.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-6 text-sm font-bold text-foreground transition hover:border-citron-ink hover:text-citron-ink">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaIntegral" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}