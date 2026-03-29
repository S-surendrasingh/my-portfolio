"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { IconArrowRight } from "@/components/icons";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const inputClasses =
  "w-full min-h-11 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-base text-zinc-100 transition-all placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500";

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-zinc-200">{label}</span>
      {children}
    </label>
  );
}

export function ContactForm({ embedded = false }: { embedded?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your website"}`);
    const bodyLines = [message, "", "—", name, email].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      id="start-conversation"
      onSubmit={handleSubmit}
      className={cn(!embedded && "scroll-mt-24 mx-auto max-w-2xl rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur-xl md:p-10")}
    >
      <h2 className="text-lg font-semibold tracking-tight text-white">Direct Message</h2>
      <p className="mt-1 text-sm text-zinc-400">
        Share your goals and timeline — I&apos;ll reply with next steps.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <Field label="Name">
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClasses}
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClasses}
          />
        </Field>
        <Field label="Message / Project details">
          <textarea
            required
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="What are you building? Any stack, deadline, or budget context helps."
            className={inputClasses}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-[transform,box-shadow] duration-300 active:scale-[0.98] motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
      >
        Send Message
        <IconArrowRight width={18} height={18} strokeWidth={2} />
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">
        Opens an email to {CONTACT_EMAIL} with these details pre-filled.
      </p>
    </form>
  );
}
