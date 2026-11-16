import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { RuleWord } from "@/components/RuleWord";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Alberton. Phone, WhatsApp, email, or visit the office.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <RuleWord className="mb-6">Contact</RuleWord>
      <h1 className="max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
        Speak to Homes Unlimited
      </h1>
      <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-ink-soft">
        Call, WhatsApp, email, or send a message below. We are at Salient
        Centre in Leondale, Alberton.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="border border-rule px-6 py-7">
            <p className="label-caps mb-3 text-[10px] text-ink-soft">Office</p>
            <address className="not-italic text-sm font-light leading-relaxed text-ink">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <p className="mt-4 text-sm font-light text-ink-soft">{site.hours}</p>
          </div>

          <div className="border border-rule px-6 py-7">
            <p className="label-caps mb-3 text-[10px] text-ink-soft">Phone</p>
            <ul className="space-y-3 text-sm font-light text-ink">
              <li>
                Mobile ·{" "}
                <a href={site.mobileHref} className="hover:underline">
                  {site.mobile}
                </a>
              </li>
              <li>
                Landline ·{" "}
                <a href={site.landlineHref} className="hover:underline">
                  {site.landline}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-ink px-4 py-2 label-caps text-[10px] transition-colors hover:bg-ink hover:text-paper"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-rule px-6 py-7">
            <p className="label-caps mb-3 text-[10px] text-ink-soft">Online</p>
            <ul className="space-y-3 text-sm font-light text-ink">
              <li>
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-rule bg-mist/30 px-6 py-8 sm:px-8">
          <h2 className="font-display text-2xl tracking-tight text-ink">
            Send a message
          </h2>
          <p className="mt-2 mb-8 text-sm font-light text-ink-soft">
            Fill in the form and we open your email with the enquiry ready to
            send.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
