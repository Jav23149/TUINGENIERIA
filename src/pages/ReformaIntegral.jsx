import React from "react";
import { Hammer, Bath, ChefHat, Ruler, Wrench, Clock, ShieldCheck, CheckCircle2, Home, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";
import ContactForm from "@/components/site/ContactForm";
import ServiceCTA from "@/components/site/ServiceCTA";
import WhatsAppButton from "@/components/site/WhatsAppButton";

const HERO_VIDEO = "https://media.base44.com/videos/public/6ac2c61f7c5f2c6d856595f5/86fee036d_Hero_reforma.mp4";
const BANO_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/cd9d37de6_generated_image.png";
const COCINA_IMG = "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/03cb3f616_generated_image.png";

const incluye = [
  { icon: Bath, title: "Baño completo", desc: "Plato de ducha o bañera, mobiliario, iluminación y acabados premium.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/3068d76bc_generated_image.png" },
  { icon: ChefHat, title: "Cocina a medida", desc: "Carpintería, electrodomésticos, electricidad y fontanería nueva.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/828773082_generated_image.png" },
  { icon: Wrench, title: "Instalaciones", desc: "Electricidad, fontanería, pladur y climatización revisadas.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/2f63a592f_generated_image.png" },
  { icon: Home, title: "Acabados", desc: "Solados, alicatados, pintura y carpintería a tu estilo.", img: "https://media.base44.com/images/public/6ac2c61f7c5f2c6d856595f5/ebf8575c0_generated_image.png" },
];

const pasos = [
  { n: "01", title: "Proyecto integral", desc: "Estudiamos tu vivienda y diseñamos la reforma completa con un único proyecto técnico." },
  { n: "02", title: "Presupuesto cerrado", desc: "Te entregamos un presupuesto cerrado y un calendario real en 24 horas." },
  { n: "03", title: "Dirección de obra", desc: "Coordinamos todos los oficios con un único responsable ingeniero." },
  { n: "04", title: "Entrega llave en mano", desc: "Entregamos tu vivienda reformada, limpia y con garantía." },
];

export default function ReformaIntegral() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/85 via-graphite/60 to-transparent" />
          <div className="blueprint-grid absolute inset-0 opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
              <Hammer className="h-3.5 w-3.5" /> Reforma integral en {siteConfig.provincia}
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
              Reforma integral de tu vivienda con dirección de ingeniería
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
              Un único responsable para toda tu reforma: baño, cocina, instalaciones y acabados. Proyecto técnico, dirección de obra y entrega llave en mano en {siteConfig.provincia} y alrededores.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Presupuesto por WhatsApp" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 text-sm font-bold text-white transition hover:brightness-95" iconClass="h-5 w-5" />
              <a href={telLink} className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border bg-card/60 px-7 text-sm font-bold text-foreground backdrop-blur transition hover:border-citron hover:text-citron">
                <Phone className="h-4 w-4" /> Llamar
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-citron" /> Presupuesto en 24 horas</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-citron" /> Garantía de obra</span>
              <span className="flex items-center gap-1.5"><Ruler className="h-4 w-4 text-citron" /> Dirección de ingeniería</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Una reforma, todos los oficios</h2>
            <p className="mt-4 text-muted-foreground">Coordinamos todas las disciplinas de la reforma bajo un único proyecto técnico y un único responsable.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {incluye.map((i) => (
              <div key={i.title} className="group overflow-hidden rounded-sm border border-border bg-card">
                <div className="relative h-44 overflow-hidden">
                  <Image src={i.img} alt={i.title} className="h-full w-full transition-transform duration-300 group-hover:scale-105" fittingType="fill" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <i.icon className="absolute left-4 top-4 h-8 w-8 text-citron drop-shadow" />
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

      {/* PROCESO */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma integral en 4 pasos</h2>
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

      {/* BAÑO Y COCINA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Reformas de baño y cocina</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Baño y cocina, reformados a medida</h2>
            <p className="mt-4 text-muted-foreground">Diseñamos y ejecutamos tu baño y tu cocina en una misma reforma integral, con un único proyecto técnico y un único responsable de obra.</p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={BANO_IMG} alt="Reforma de baño a medida" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <Bath className="h-3.5 w-3.5" /> BAÑO
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground">Reforma de baño</h3>
                <p className="mt-2 text-sm text-muted-foreground">Baño completo en 7 días, llave en mano y con acabados premium. Plato de ducha o bañera, mobiliario e iluminación.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative h-56 overflow-hidden">
                <Image src={COCINA_IMG} alt="Reforma de cocina a medida" className="h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-citron px-3 py-1 text-xs font-bold text-graphite">
                  <ChefHat className="h-3.5 w-3.5" /> COCINA
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground">Reforma de cocina</h3>
                <p className="mt-2 text-sm text-muted-foreground">Cocina a medida en 10-14 días, con nueva electricidad, fontanería y carpintería. Proyecto y dirección de obra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA title="¿Vamos a reformar tu vivienda entera?" subtitle="Presupuesto gratis y sin compromiso en menos de 24 horas." />

      {/* CONTACTO */}
      <section id="contacto" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Solicita tu presupuesto</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Tu reforma integral empieza aquí</h2>
              <p className="mt-4 text-muted-foreground">Cuéntanos tu proyecto y te llamamos con un presupuesto cerrado en menos de 24 horas.</p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {["Proyecto técnico y dirección de obra por ingenieros", "Presupuesto cerrado y plazos cumplidos", "Un único responsable para todos los oficios", "Garantía en toda la obra"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <ContactForm servicio="reformas" origen="ReformaIntegral" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}