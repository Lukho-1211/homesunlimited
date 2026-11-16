export const site = {
  name: "Homes Unlimited",
  tagline: "Dreaming is a reality",
  description:
    "Homes Unlimited helps buyers, sellers, and tenants find and place homes across Alberton and the East Rand.",
  email: "admin@homesunlimited.co.za",
  landline: "011 865 3427",
  landlineHref: "tel:+27118653427",
  mobile: "076 482 1717",
  mobileHref: "tel:+27764821717",
  whatsapp: "https://wa.me/27764821717",
  facebook:
    "https://web.facebook.com/p/Homes-Unlimited-61553910779502/",
  hours: "Monday–Friday 09:00–18:00",
  address: {
    line1: "Shop 5, Salient Centre",
    line2: "Blauwbok Avenue, Leondale",
    line3: "Alberton, 1449",
    full: "Shop 5, Salient Centre, Blauwbok Avenue, Leondale, Alberton, 1449",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
