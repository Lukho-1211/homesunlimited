import type { Metadata } from "next";
import Link from "next/link";
import { RuleWord } from "@/components/RuleWord";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Sell, buy, and rent with ${site.name} in Alberton and the East Rand.`,
};

const services = [
  {
    title: "Sell your home",
    body: "We help you prepare the home for market, set a realistic asking price for the East Rand, and introduce serious buyers. From first walkthrough to handover, you stay informed.",
  },
  {
    title: "Buy a home",
    body: "Tell us what you need — suburb, size, budget — and we help you shortlist homes, arrange viewings, and submit offers. Local knowledge matters when comparing streets and complexes.",
  },
  {
    title: "Rent a home",
    body: "Looking for a place to rent, or placing a tenant in a property you own? We connect landlords and tenants and keep the conversation straightforward.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <RuleWord className="mb-6">Services</RuleWord>
      <h1 className="max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
        Sell, buy, and rent with a local agency
      </h1>
      <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-ink-soft">
        One office in Leondale. Clear next steps. Reach us by phone, WhatsApp,
        email, or visit during office hours.
      </p>

      <div className="mt-14 space-y-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="border border-rule bg-paper px-6 py-8 sm:px-8"
          >
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-ink-soft sm:text-base">
              {service.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink bg-ink px-6 py-3 text-center label-caps text-[10px] text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="border border-ink px-6 py-3 text-center label-caps text-[10px] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Contact the office
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
