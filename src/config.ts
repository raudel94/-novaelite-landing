export const SITE = {
  brand: "NovaElite",
  tagline: "Appointments for Contractors",
  // Real contact info
  phone: "+1 (305) 897-8201",
  phoneRaw: "+13058978201",
  email: "info@novaelitecorporation.com",
  calendly: "https://calendly.com/lanfercorporation/30min",
  social: {
    linkedin: "https://linkedin.com/company/novaelite",
    facebook: "https://facebook.com/novaelite",
    instagram: "https://www.instagram.com/novaelite.corporation",
    youtube: "https://youtube.com/@novaelite"
  }
};

export const calendlyLink = () => SITE.calendly;
export const mailto = (subject = "Inbound from NovaElite.com") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
export const telLink = () => `tel:${SITE.phoneRaw}`;
