import type { Metadata } from "next";
import { PropertyFilter } from "@/components/PropertyFilter";
import { RuleWord } from "@/components/RuleWord";
import { properties } from "@/data/properties";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Properties",
  description: `Homes for sale and to rent with ${site.name} in Alberton and the East Rand.`,
};

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <RuleWord className="mb-6">Properties</RuleWord>
      <h1 className="max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
        Homes for sale and to rent
      </h1>
      <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-ink-soft">
        A selection of East Rand homes. Contact the office to arrange a viewing
        or ask about availability.
      </p>
      <div className="mt-12">
        <PropertyFilter properties={properties} />
      </div>
    </div>
  );
}
