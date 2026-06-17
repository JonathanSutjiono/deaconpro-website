import { Eye, MapPin } from "lucide-react";
import { company } from "@/data/company";

function DetailRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <span className="font-medium text-neutral-900 transition hover:text-gold">
      {value}
    </span>
  );

  return (
    <div className="flex gap-4 border-b border-neutral-200 py-4">
      <Eye className="mt-1 h-5 w-5 shrink-0 text-neutral-950" aria-hidden="true" />
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="mt-2 block text-base leading-8 md:text-[17px]"
          >
            {content}
          </a>
        ) : (
          <p className="mt-2 text-base font-medium leading-8 text-neutral-900 md:text-[17px]">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CompanyDetail() {
  return (
    <section id="company-detail" className="bg-white py-20 text-neutral-950 md:py-28">
      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-gold">
            Company Detail
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            {company.name}
          </h2>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">
            {company.tagline}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-neutral-200 bg-neutral-50 p-6 shadow-sm md:p-8">
            <div className="border-b border-neutral-200 pb-6">
              <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
                Location
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase text-neutral-950">
                {company.location}
              </h3>
              <p className="mt-4 text-base leading-8 text-neutral-600 md:text-[17px]">
                {company.address}
              </p>
              <a
                href={company.googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 px-5 text-xs font-black uppercase tracking-widest text-white transition hover:bg-gold md:text-sm"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>

            <DetailRow label="Company Name" value={company.name} />
            <DetailRow label="Service Area" value={company.serviceArea} />
            <DetailRow label="Phone Number" value={company.phone} href={company.phoneHref} />
            <DetailRow
              label="WhatsApp"
              value={company.whatsapp}
              href={company.whatsappHref}
              external
            />
            <DetailRow
              label="Website"
              value={company.website}
              href={company.websiteHref}
              external
            />
            {company.socialLinks.map((item) => (
              <DetailRow
                key={item.label}
                label={item.label}
                value={item.label}
                href={item.href}
                external={item.href !== "#"}
              />
            ))}

            <div className="pt-6">
              <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
                Project Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {company.projectFocus.map((item) => (
                  <span
                    key={item}
                    className="border border-neutral-300 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-neutral-950"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
              About
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600 md:text-[17px]">
              {company.about}
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-gold via-neutral-200 to-transparent" />

            <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
              Vision
            </p>
            <blockquote className="mt-4 border-l-4 border-gold pl-5 text-2xl font-black uppercase leading-tight text-neutral-950">
              {company.vision}
            </blockquote>

            <div className="my-8 h-px bg-gradient-to-r from-gold via-neutral-200 to-transparent" />

            <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
              Missions
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600 md:text-[17px]">
              {company.missionsIntro}
            </p>
            <div className="mt-6 space-y-4">
              {company.missions.map((mission, index) => (
                <div key={mission} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-gold text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-8 text-neutral-700 md:text-[17px]">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
