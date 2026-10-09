// Configuración central de TU INGENIERIA.
// Reemplaza estos valores con los datos reales de la empresa.
export const siteConfig = {
  brand: "TU INGENIERIA",
  tagline: "Climatización y Reformas",
  phone: "",
  phoneRaw: "",
  whatsapp: "",
  whatsappMsg: "Hola, quiero información sobre vuestros servicios de climatización y reformas.",
  email: "info@tuingenieria.es",
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

export const whatsappLink = (msg = siteConfig.whatsappMsg) =>
  siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}` : "#";

export const telLink = siteConfig.phoneRaw ? `tel:${siteConfig.phoneRaw}` : "#";
export const mailLink = `mailto:${siteConfig.email}`;