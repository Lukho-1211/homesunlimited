import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RuleWord } from "@/components/RuleWord";
import {
  formatType,
  getProperty,
  properties,
} from "@/data/properties";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Property" };

  return {
    title: `${property.title} · ${property.suburb}`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hello Homes Unlimited, I am interested in ${property.title} in ${property.suburb} (${property.priceLabel}).`,
  );
  const whatsappHref = `${site.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/properties"
        className="label-caps text-[10px] text-ink-soft hover:text-ink"
      >
        ← All homes
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
        <div className="relative aspect-[4/3] overflow-hidden border border-rule bg-mist">
          <Image
            src={property.image}
            alt={property.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        <div>
          <RuleWord className="mb-4 justify-start">
            {formatType(property.type)}
          </RuleWord>
          <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            {property.suburb}
          </h1>
          <p className="mt-2 text-base font-light text-ink-soft">
            {property.title}
          </p>
          <p className="mt-6 text-2xl font-light tracking-wide text-ink">
            {property.priceLabel}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-rule py-5">
            <div>
              <dt className="label-caps text-[10px] text-ink-soft">Beds</dt>
              <dd className="mt-1 font-display text-2xl text-ink">
                {property.beds}
              </dd>
            </div>
            <div>
              <dt className="label-caps text-[10px] text-ink-soft">Baths</dt>
              <dd className="mt-1 font-display text-2xl text-ink">
                {property.baths}
              </dd>
            </div>
            <div>
              <dt className="label-caps text-[10px] text-ink-soft">Garage</dt>
              <dd className="mt-1 font-display text-2xl text-ink">
                {property.garages}
              </dd>
            </div>
          </dl>

          {property.size ? (
            <p className="mt-5 label-caps text-[10px] text-ink-soft">
              Size · {property.size}
            </p>
          ) : null}

          <p className="mt-6 text-sm font-light leading-relaxed text-ink-soft sm:text-base">
            {property.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink bg-ink px-6 py-3 text-center label-caps text-[10px] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              WhatsApp about this home
            </a>
            <a
              href={site.mobileHref}
              className="border border-ink px-6 py-3 text-center label-caps text-[10px] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Call {site.mobile}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
