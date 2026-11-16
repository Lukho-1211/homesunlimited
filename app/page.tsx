import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { RuleWord } from "@/components/RuleWord";
import { getFeaturedProperties } from "@/data/properties";
import { site } from "@/lib/site";

const services = [
  {
    title: "Sell",
    copy: "List with a local Alberton desk that knows East Rand buyers and pricing.",
  },
  {
    title: "Buy",
    copy: "Browse homes for sale and get help viewing, offering, and closing.",
  },
  {
    title: "Rent",
    copy: "Find a place to rent, or place a tenant in a home you already own.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
          <RuleWord className="mb-8">Alberton · East Rand</RuleWord>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Homes for the life you are building
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft sm:text-lg">
            {site.name} helps people buy, sell, and rent across Alberton and
            nearby suburbs. {site.tagline}.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/properties"
              className="border border-ink bg-ink px-8 py-3 label-caps text-[11px] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              View homes
            </Link>
            <Link
              href="/contact"
              className="border border-ink px-8 py-3 label-caps text-[11px] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Speak to us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-mist/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <RuleWord className="mb-4 justify-start sm:justify-start">
                Featured
              </RuleWord>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Selected homes
              </h2>
            </div>
            <Link
              href="/properties"
              className="label-caps text-[11px] text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            >
              See all homes
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <RuleWord className="mb-4">How we help</RuleWord>
          <h2 className="mb-12 text-center font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Sell · Buy · Rent
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-rule bg-paper px-6 py-8"
              >
                <h3 className="font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-ink-soft">
                  {service.copy}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-block label-caps text-[10px] text-ink underline-offset-4 hover:underline"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:items-center">
          <div>
            <RuleWord className="mb-4 justify-start">Office</RuleWord>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Visit us in Leondale
            </h2>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-ink-soft">
              Shop 5 at Salient Centre on Blauwbok Avenue. Call, WhatsApp, or
              stop by during office hours.
            </p>
          </div>
          <div className="border border-rule bg-mist/50 px-6 py-8">
            <address className="not-italic text-sm font-light leading-relaxed text-ink">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <div className="mt-6 space-y-2 text-sm font-light text-ink">
              <p>
                <a href={site.mobileHref} className="hover:underline">
                  {site.mobile}
                </a>
              </p>
              <p>
                <a href={site.landlineHref} className="hover:underline">
                  {site.landline}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </p>
              <p className="pt-2 text-ink-soft">{site.hours}</p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-ink px-6 py-3 label-caps text-[10px] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Contact the office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
