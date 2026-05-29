export const SITE = {
  brand: "NovaElite",
  tagline: "Lead Generation Systems",
  // Real contact info
  phone: "+1 (786) 385-3287",
  phoneRaw: "+17863853287",
  email: "info@novaelitecorporation.com",
  calendly: "https://calendly.com/lanfercorporation/30min?utm_medium=testgoogle",
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
