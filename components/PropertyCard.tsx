import Image from "next/image";
import Link from "next/link";
import { formatType, type Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group border border-rule bg-paper">
      <Link
        href={`/properties/${property.slug}`}
        className="block focus-visible:outline-offset-0"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={property.image}
            alt={property.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="border-t border-rule px-5 py-5">
          <p className="label-caps mb-3 text-[10px] text-ink-soft">
            {formatType(property.type)}
          </p>
          <h3 className="font-display text-2xl leading-tight tracking-tight text-ink">
            {property.suburb}
          </h3>
          <p className="mt-1 text-sm font-light text-ink-soft">
            {property.title}
          </p>
          <div className="mt-5 border-t border-rule pt-4">
            <p className="text-base font-light tracking-wide text-ink">
              {property.priceLabel}
            </p>
            <p className="mt-2 label-caps text-[10px] text-ink-soft">
              {property.beds} bed · {property.baths} bath · {property.garages}{" "}
              garage
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
