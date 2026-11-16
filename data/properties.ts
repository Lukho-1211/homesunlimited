export type ListingType = "sale" | "rent";

export type Property = {
  slug: string;
  title: string;
  suburb: string;
  type: ListingType;
  price: number;
  priceLabel: string;
  beds: number;
  baths: number;
  garages: number;
  size?: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  description: string;
};

export const properties: Property[] = [
  {
    slug: "family-home-leondale",
    title: "Family home with garden",
    suburb: "Leondale",
    type: "sale",
    price: 1295000,
    priceLabel: "R 1 295 000",
    beds: 3,
    baths: 2,
    garages: 1,
    size: "210 m²",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Brick family home with a front garden and driveway",
    description:
      "A practical three-bedroom home in Leondale with a sunny lounge, fitted kitchen, and a private garden. Close to local schools and everyday shops.",
  },
  {
    slug: "townhouse-alberton-central",
    title: "Secure townhouse",
    suburb: "Alberton",
    type: "sale",
    price: 980000,
    priceLabel: "R 980 000",
    beds: 2,
    baths: 2,
    garages: 1,
    size: "95 m²",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern townhouse exterior with clean lines",
    description:
      "Low-maintenance living in a secure Alberton complex. Open-plan living, two bathrooms, and a covered parking bay.",
  },
  {
    slug: "brackenhurst-garden-cottage",
    title: "Garden cottage to rent",
    suburb: "Brackenhurst",
    type: "rent",
    price: 8500,
    priceLabel: "R 8 500 / month",
    beds: 2,
    baths: 1,
    garages: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright cottage living space with timber floors",
    description:
      "A quiet two-bedroom cottage in Brackenhurst with private entrance, fitted kitchen, and off-street parking.",
  },
  {
    slug: "mayberry-park-family-home",
    title: "Spacious family home",
    suburb: "Mayberry Park",
    type: "sale",
    price: 1650000,
    priceLabel: "R 1 650 000",
    beds: 4,
    baths: 2,
    garages: 2,
    size: "280 m²",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Large family home with a landscaped front garden",
    description:
      "Four bedrooms and a generous living area for a growing household. Double garage and established garden in Mayberry Park.",
  },
  {
    slug: "alberton-north-apartment",
    title: "Apartment to rent",
    suburb: "Alberton North",
    type: "rent",
    price: 7200,
    priceLabel: "R 7 200 / month",
    beds: 2,
    baths: 1,
    garages: 1,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright apartment living room with large windows",
    description:
      "A light two-bedroom apartment near Alberton North amenities. Secure complex with allocated parking.",
  },
  {
    slug: "raceview-starter-home",
    title: "Starter home",
    suburb: "Raceview",
    type: "sale",
    price: 875000,
    priceLabel: "R 875 000",
    beds: 2,
    baths: 1,
    garages: 1,
    size: "120 m²",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Compact starter home with a porch and lawn",
    description:
      "An affordable entry home in Raceview with two bedrooms, a tidy kitchen, and a manageable garden.",
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((property) => property.featured);
}

export function formatType(type: ListingType): string {
  return type === "sale" ? "For sale" : "To rent";
}
