export const SITE = {
  brand: "NovaElite",
  tagline: "Lead Generation Systems",
  // Real contact info
  phone: "+1 (305) 240-0025",
  phoneRaw: "+13052400025",
  email: "info@novaelitecorporation.com",
  calendly: "https://calendly.com/novaelitecorporation/30min?utm_medium=testgoogle",
  social: {
    linkedin: "https://linkedin.com/company/novaelite",
    facebook: "https://www.facebook.com/share/1EWW41ey5G/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/novaelite.corporation",
    youtube: "https://youtube.com/@novaelite"
  }
};

export const calendlyLink = () => SITE.calendly;
export const mailto = (subject = "Inbound from NovaElite.com") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
export const telLink = () => `tel:${SITE.phoneRaw}`;
