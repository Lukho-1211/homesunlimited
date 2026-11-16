"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${name || "website visitor"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  const fieldClass =
    "w-full border border-rule bg-paper px-4 py-3 text-sm font-light text-ink placeholder:text-ink-soft/70 focus:border-ink focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="label-caps mb-2 block text-[10px] text-ink-soft">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="label-caps mb-2 block text-[10px] text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className="label-caps mb-2 block text-[10px] text-ink-soft">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="label-caps mb-2 block text-[10px] text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="w-full border border-ink bg-ink px-6 py-3 label-caps text-[11px] text-paper transition-colors hover:bg-paper hover:text-ink sm:w-auto"
      >
        Open email
      </button>
      <p className="text-xs font-light text-ink-soft">
        Opens your email app with a message ready for {site.email}.
      </p>
    </form>
  );
}
