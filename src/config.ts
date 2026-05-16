export const SITE = {
  brand: "NovaElite",
  tagline: "Appointments for Contractors",
  // Real contact info
  phone: "+1 (786) 385-5301",
  phoneRaw: "+17863855301",
  whatsapp: "17863855301", // no "+" no spaces, for wa.me
  email: "info@novaelitecorporation.com",
  calendly: "https://calendly.com/novaelite/strategy-call",
  social: {
    linkedin: "https://linkedin.com/company/novaelite",
    facebook: "https://facebook.com/novaelite",
    instagram: "https://instagram.com/novaelite",
    youtube: "https://youtube.com/@novaelite"
  }
};

export const calendlyLink = () => SITE.calendly;
export const mailto = (subject = "Inbound from NovaElite.com") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
export const waLink = (
  msg = "Hi NovaElite, I'd like to learn more about booked appointments for my business."
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
