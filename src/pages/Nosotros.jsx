import React from "react";
import { Link } from "react-router-dom";
import { Snowflake, Hammer, ShieldCheck, Clock, Users, Target, Heart, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { siteConfig } from "@/lib/siteConfig";
import ServiceCTA from "@/components/site/ServiceCTA";
import WhatsAppButton from "@/components/site/WhatsAppButton";

const HERO_IMG = "https://images.unsplash.com/photo-1761330440311-16e160cad236?auto=format&fit=crop&w=1600&q=80";
const COCINA_IMG = "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80";

const valores = [
  { icon: Target, title: "Ingeniería precisa", desc: "Dimensionamos cada sistema y planificamos cada obra con datos reales, sin improvisar." },
  { icon: Heart, title: "Diseño a tu estilo", desc: "Creamos espacios cómodos pensados para tu día a día y al gusto del cliente." },
  { icon: ShieldCheck, title: "Garantía total", desc: "Materiales premium y mano de obra certificada con garantía en todas las obras." },
  { icon: Clock, title: "Cercanía real", desc: "Presupuesto en 24 horas, un único interlocutor y plazos cumplidos." },
];

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+500", label: "Proyectos terminados" },
  { value: "4,9/5", label: "Valoración media" },
  { value: "24 h", label: "Presupuesto gratis" },
];

export default function Nosotros() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="Espacio diseñado y climatizado por TU INGENIERIA" className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/75 via-graphite/45 to-transparent" />
          <div className="blueprint-grid absolute inset-0 opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 bg-citron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-citron">
              <Users className="h-3.5 w-3.5" /> Sobre nosotros
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
              Ingeniería que soluciona tu vida diaria
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              TU INGENIERIA nace de un conjunto de ingenieros que buscan solucionar la vida de las personas y hacer que diariamente se sientan cómodos en espacios diseñados al estilo del cliente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Hablemos de tu proyecto" className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 text-sm font-bold text-white transition hover:brightness-95" iconClass="h-5 w-5" />
              <Link to="/#contacto" className="flex h-12 items-center justify-center gap-2 rounded-sm border border-citron/50 bg-citron/10 px-7 text-sm font-bold text-citron transition hover:bg-citron/20">
                Solicitar presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-citron">Nuestra historia</p>
              <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">De ingenieros a tu servicio</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>Somos un equipo de ingenieros que decidimos poner la técnica al servicio de las personas. Creemos que un buen sistema de climatización o una reforma bien ejecutada no es un lujo: es la base para sentirte cómodo en tu propio espacio cada día.</p>
                <p>Cada proyecto lo abordamos como ingenieros: estudiamos las necesidades, diseñamos la solución y la ejecutamos con rigor. Pero también lo abordamos como personas, porque diseñamos espacios al estilo del cliente, no a medida de catálogo.</p>
                <p>Trabajamos en {siteConfig.provincia} y alrededores con un único objetivo: que cuando entres en tu casa o en tu local, notes la diferencia.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <Image src={COCINA_IMG} alt="Cocina reformada a medida por TU INGENIERIA" className="h-80 w-full" fittingType="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">Nuestros valores</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Lo que nos define</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => (
              <div key={v.title} className="rounded-sm border border-border bg-background p-6">
                <v.icon className="h-9 w-9 text-citron" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-black text-citron">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-citron">En qué somos expertos</p>
            <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">Dos especialidades, un mismo estándar</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-8">
              <Snowflake className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Climatización</h3>
              <p className="mt-2 text-sm text-muted-foreground">Splits y conductos con tecnología inverter A+++ para que tu espacio esté a la temperatura perfecta todo el año.</p>
              <Link to="/climatizacion" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-citron hover:gap-2 transition-all">
                Ver servicio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-sm border border-border bg-card p-8">
              <Hammer className="h-10 w-10 text-citron" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">Reformas de baños y cocinas</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reformamos tus baños y cocinas con dirección de ingeniería, diseño a tu estilo y acabados premium.</p>
              <Link to="/reformas" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-citron hover:gap-2 transition-all">
                Ver servicio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA title="¿Hablamos de tu proyecto?" subtitle="Presupuesto gratis y sin compromiso en 24 horas." />
    </>
  );
}