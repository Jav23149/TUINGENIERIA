import React from "react";

export default function GuaranteesSection({
  eyebrow = "Nuestras garantías",
  title = "Tu proyecto, respaldado desde el primer día",
  subtitle = "Antes de empezar ya sabes a qué te comprometes y cómo respondemos si algo no sale como esperabas.",
  items = [],
}) {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-citron-ink">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-black text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((g) => (
            <div key={g.title} className="rounded-sm border border-border bg-background p-8">
              <g.icon className="h-8 w-8 text-citron-ink" />
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}