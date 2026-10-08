import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { siteConfig, whatsappLink, telLink } from "@/lib/siteConfig";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Climatización", to: "/climatizacion" },
  { label: "Reformas", to: "/reformas" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center bg-citron font-display text-sm font-black text-graphite">
          T
          </span>
          <span className="font-display text-base font-bold tracking-tight text-foreground">
          TU<span className="text-citron"> INGENIERIA</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.to.includes("#") ? (
              <a key={l.label} href={l.to.replace("/", "")} className="text-sm font-medium text-muted-foreground transition hover:text-citron">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.to} className="text-sm font-medium text-muted-foreground transition hover:text-citron">
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={telLink}
            className="flex h-10 items-center gap-2 rounded-sm border border-border px-4 text-sm font-semibold text-foreground transition hover:border-citron hover:text-citron"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center gap-2 rounded-sm bg-citron px-4 text-sm font-bold text-graphite transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) =>
              l.to.includes("#") ? (
                <a key={l.label} href={l.to.replace("/", "")} className="text-base font-medium text-foreground" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to} className="text-base font-medium text-foreground" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              )
            )}
            <div className="mt-2 flex gap-2">
              <a href={telLink} className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-border py-3 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Llamar
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-citron py-3 text-sm font-bold text-graphite">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}