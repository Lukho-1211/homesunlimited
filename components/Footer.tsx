import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { RuleWord } from "./RuleWord";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <RuleWord className="mb-10">{site.tagline}</RuleWord>

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo.jpg"
              alt={site.name}
              width={180}
              height={80}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-ink-soft">
              Estate agency in Alberton and the East Rand. Buy, sell, and rent
              with a local desk at Salient Centre.
            </p>
          </div>

          <div>
            <p className="label-caps mb-4 text-[10px] text-ink-soft">Visit</p>
            <address className="not-italic text-sm font-light leading-relaxed text-ink">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <p className="mt-4 text-sm font-light text-ink-soft">{site.hours}</p>
          </div>

          <div>
            <p className="label-caps mb-4 text-[10px] text-ink-soft">Contact</p>
            <ul className="space-y-2 text-sm font-light text-ink">
              <li>
                <a href={site.mobileHref} className="hover:underline">
                  {site.mobile}
                </a>
              </li>
              <li>
                <a href={site.landlineHref} className="hover:underline">
                  {site.landline}
                </a>
              </li>
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
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-caps text-[10px] text-ink-soft hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs font-light text-ink-soft">
            © 2026 {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
