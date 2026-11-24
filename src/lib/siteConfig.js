// Configuración central de TU INGENIERIA.
// Reemplaza estos valores con los datos reales de la empresa.
export const siteConfig = {
  brand: "TU INGENIERIA",
  tagline: "Climatización split y conductos",
  phone: "+34 643 084 651",
  phoneRaw: "+34643084651",
  whatsapp: "34643084651",
  whatsappMsg: "Hola, quiero información sobre climatización (split o conductos) en Valencia.",
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
  "/": "Hola, quiero información sobre aire acondicionado split o por conductos en Valencia.",
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