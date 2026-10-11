import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

const LEAD_ENDPOINT = "https://nonchalant-nova-tech-flow.base44.app/functions/crearLead";

export default function ContactForm({ servicio = "general", origen = "Home" }) {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Guardar en Base44 y enviar email de notificación mediante backend function (service role)
    const datos = {
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email,
      mensaje: form.mensaje,
      servicio,
      origen,
    };
    try {
      if (import.meta.env.VITE_BASE44_APP_ID) {
        await base44.functions.invoke('crearLead', datos);
      } else {
        // Web alojada fuera de Base44 (GitHub Pages): llamar a la función directamente
        await fetch(LEAD_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos),
        });
      }
    } catch (err) {
      // Si falla la persistencia, el usuario aún puede contactar por WhatsApp/email
    }
    setDone(true);
    setLoading(false);
  };

  if (done) {
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Nuevo lead: ${form.nombre} - ${servicio}`)}&body=${encodeURIComponent(`Nombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEmail: ${form.email || "—"}\nServicio: ${servicio}\nOrigen: ${origen}\nMensaje: ${form.mensaje || "—"}`)}`;
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-citron/40 bg-card p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-citron" />
        <h3 className="font-display text-xl font-bold text-foreground">¡Solicitud enviada!</h3>
        <p className="text-sm text-muted-foreground">
          Gracias {form.nombre}. Te contactaremos en menos de 24 horas. Si prefieres, escríbenos ahora por WhatsApp o email.
        </p>
        <a
          href={whatsappLink(`Hola, soy ${form.nombre}. He enviado un formulario desde la web.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-sm bg-citron px-6 py-3 text-sm font-bold text-graphite"
        >
          Escribir por WhatsApp
        </a>
        <a
          href={mailtoLink}
          className="rounded-sm border border-border px-6 py-3 text-sm font-bold text-foreground transition hover:border-citron hover:text-citron"
        >
          Enviar por email
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nombre *</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-citron focus:outline-none focus:ring-1 focus:ring-citron"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Teléfono *</label>
          <input
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
            type="tel"
            placeholder="Tu teléfono"
            className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-citron focus:outline-none focus:ring-1 focus:ring-citron"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="tu@email.com"
          className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-citron focus:outline-none focus:ring-1 focus:ring-citron"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensaje</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={4}
          placeholder="Cuéntanos qué necesitas..."
          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-citron focus:outline-none focus:ring-1 focus:ring-citron"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-citron text-sm font-bold text-graphite transition hover:brightness-95 disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Enviando..." : "Solicitar presupuesto gratis"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Respuesta garantizada en menos de 24 horas en horario de {siteConfig.horario.split("·")[0].trim()}
      </p>
    </form>
  );
}