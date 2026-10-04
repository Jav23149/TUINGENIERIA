// Configuración central de NovaTech Ingenieros.
// Reemplaza estos valores con los datos reales de la empresa.
export const siteConfig = {
  brand: "NovaTech Ingeniería",
  tagline: "Ingeniería Solar, Climatización y Reformas",
  phone: "+34 600 123 456",
  phoneRaw: "+34600123456",
  whatsapp: "34600123456",
  whatsappMsg: "Hola, quiero información sobre vuestros servicios de ingeniería.",
  email: "info@novatech-ingenieros.es",
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
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${siteConfig.phoneRaw}`;
export const mailLink = `mailto:${siteConfig.email}`;