import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-white py-20 text-neutral-950 md:py-28">
      <div className="container-x bg-neutral-950 p-8 text-white shadow-2xl md:p-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-champagne">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Ready to build a sharper space?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
              Talk with Deacon Pro about construction, interior, renovation, or
              integrated project delivery.
            </p>
          </div>
          <Link
            href="mailto:hello@deaconpro.com"
            className="inline-flex min-h-12 items-center justify-center bg-gold px-7 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
