import Link from "next/link";
import { ContactConnectChannels } from "@/components/about/ContactConnectChannels";
import { ContactSectionBadge } from "@/components/about/ContactSectionBadge";
import { ContactSectionHeading } from "@/components/about/ContactSectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { IconCalendar } from "@/components/icons";
import { cn } from "@/lib/cn";
import { CONTACT_EMAIL } from "@/lib/site-config";

const discoveryMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("15-Min Discovery Call Request")}`;

export function AboutContactSection() {
  return (
    <section
      id="contact"
      className={cn(
        "relative scroll-mt-28 overflow-x-hidden px-4 pt-8 pb-14 sm:px-8 sm:pt-10 sm:pb-20"
      )}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[min(560px,100vw)] w-[min(900px,120vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.22),transparent_68%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl text-center">
        <ContactSectionBadge />
        <ContactSectionHeading />
        <p className="mx-auto mb-8 max-w-xl text-center font-serif text-base leading-relaxed text-zinc-300 italic sm:text-lg">
          Book a short discovery call or send project details — I typically reply within one business
          day.
        </p>
        <Link
          id="book-call"
          href={discoveryMailto}
          className="mb-8 inline-flex min-h-12 w-full max-w-md touch-manipulation items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-[transform,box-shadow] duration-300 active:scale-[0.98] motion-safe:hover:scale-105 sm:mb-10 sm:w-auto sm:px-8"
        >
          <IconCalendar width={18} height={18} strokeWidth={2} />
          Book a 15-Min Discovery Call
        </Link>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div
          className="rounded-3xl border border-purple-500/15 bg-zinc-900/60 p-5 shadow-[0_0_40px_rgba(168,85,247,0.1)] backdrop-blur-xl sm:p-8"
        >
          <ContactForm embedded />
        </div>

        <div
          className="flex flex-col justify-between rounded-3xl border border-purple-500/15 bg-zinc-900/60 p-5 backdrop-blur-xl sm:p-8"
        >
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white">Other Ways to Connect</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Prefer async? Reach out on any of these platforms.
            </p>
            <ContactConnectChannels />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-zinc-500">
            Based in India · Global remote · Contract &amp; long-term product work.
          </p>
        </div>
      </div>
    </section>
  );
}
