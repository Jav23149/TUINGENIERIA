// Configuración central de TU INGENIERIA.
// Reemplaza estos valores con los datos reales de la empresa.
export const siteConfig = {
  brand: "TU INGENIERIA",
  tagline: "Reformas Integrales",
  phone: "+34 643 084 651",
  phoneRaw: "+34643084651",
  whatsapp: "34643084651",
  whatsappMsg: "Hola, quiero información sobre vuestros servicios de climatización y reformas.",
  email: "tuingenieriasl@gmail.com",
  provincia: "Valencia",
  provinciaSlug: "valencia",
  direccion: "Polígono Industrial, Valencia",
  horario: "Lun a Vie 8:00 - 19:00 · Sáb 9:00 - 14:00",
  localidades: [
    "Valencia",
    "Torrent",
    "Mislata",
    "Paterna",
    "Burjassot",
    "Manises",
    "Catarroja",
    "Alzira",
    "Sagunto",
    "Gandía",
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};

// Mensaje de WhatsApp personalizado según la página actual (ruta).
const PAGE_WHATSAPP_MESSAGES = {
  "/": "Hola, quiero información sobre climatización y reformas en Valencia.",
  "/climatizacion": "Hola, quiero información sobre climatización en Valencia.",
  "/reformas": "Hola, quiero un presupuesto de reforma de baño o cocina en Valencia.",
  "/reforma-integral": "Hola, quiero un presupuesto de reforma integral en Valencia.",
  "/reforma-bano": "Hola, quiero un presupuesto de reforma de baño en Valencia.",
  "/reforma-cocina": "Hola, quiero un presupuesto de reforma de cocina en Valencia.",
  "/reforma-alisado": "Hola, quiero un presupuesto de alisado de paredes en Valencia.",
  "/fotovoltaica": "Hola, quiero información sobre paneles solares en Valencia.",
};

export const pageWhatsAppMsg = () => {
  if (typeof window === "undefined") return siteConfig.whatsappMsg;
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  let route = window.location.pathname.replace(base, "") || "/";
  if (route.length > 1 && route.endsWith("/")) route = route.slice(0, -1);
  return PAGE_WHATSAPP_MESSAGES[route] || siteConfig.whatsappMsg;
};

export const whatsappLink = (msg = pageWhatsAppMsg()) =>
  siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}` : "#";

export const telLink = siteConfig.phoneRaw ? `tel:${siteConfig.phoneRaw}` : "#";
export const mailLink = `mailto:${siteConfig.email}`;