import type { Metadata } from "next";
import Link from "next/link";
import { RuleWord } from "@/components/RuleWord";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, an estate agency based in Alberton and the East Rand.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <RuleWord className="mb-6">About</RuleWord>
      <h1 className="max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
        A local desk for Alberton homes
      </h1>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base font-light leading-relaxed text-ink-soft">
          <p>
            {site.name} works with people who are buying, selling, or renting
            in Alberton and nearby East Rand suburbs. The office is at Salient
            Centre in Leondale, close to the communities we serve every day.
          </p>
          <p>
            Whether you are placing a family home on the market, looking for a
            first purchase, or searching for a place to rent, you deal with a
            small local team that answers the phone and knows the area.
          </p>
          <p>
            {site.tagline}. We keep the process clear: honest pricing guidance,
            practical viewings, and contact details you can actually use.
          </p>
        </div>
        <aside className="border border-rule bg-mist/40 px-6 py-8 h-fit">
          <p className="label-caps mb-4 text-[10px] text-ink-soft">Office</p>
          <address className="not-italic text-sm font-light leading-relaxed text-ink">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </address>
          <p className="mt-5 text-sm font-light text-ink-soft">{site.hours}</p>
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
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-ink px-5 py-3 label-caps text-[10px] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </Link>
        </aside>
      </div>
    </div>
  );
}
