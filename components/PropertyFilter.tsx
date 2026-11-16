"use client";

import { useMemo, useState } from "react";
import type { ListingType, Property } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

type Filter = "all" | ListingType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sale", label: "For sale" },
  { id: "rent", label: "To rent" },
];

type PropertyFilterProps = {
  properties: Property[];
};

export function PropertyFilter({ properties }: PropertyFilterProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return properties;
    return properties.filter((property) => property.type === filter);
  }, [filter, properties]);

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter listings"
      >
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={`border px-4 py-2 label-caps text-[10px] transition-colors ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-rule text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="border border-rule bg-mist px-6 py-10 text-center text-sm font-light text-ink-soft">
          No homes in this category right now.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
