import type { ComponentType } from "react";
import { BriefcaseBusiness, Building2, Globe, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { company, type CompanyInfo } from "@/data/company";
import type { AboutContent } from "@/sanity/lib/types";

function DetailRow({
  label,
  value,
  href,
  Icon,
  external = false,
}: {
  label: string;
  value: string;
  href?: string;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  external?: boolean;
}) {
  const content = (
    <span className="font-medium text-neutral-900 transition hover:text-gold">
      {value}
    </span>
  );

  return (
    <div className="flex gap-4 border-b border-neutral-200 py-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-neutral-950" aria-hidden={true} />
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="mt-2 block text-base leading-8 md:text-[18px] md:leading-9"
          >
            {content}
          </a>
        ) : (
          <p className="mt-2 text-base font-medium leading-8 text-neutral-800 md:text-[18px] md:leading-9">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CompanyDetail({
  companyInfo = company,
  aboutContent,
}: {
  companyInfo?: CompanyInfo;
  aboutContent?: AboutContent;
}) {
  const instagram = companyInfo.socialLinks.find((item) => item.label === "Instagram");
  const facebook = companyInfo.socialLinks.find((item) => item.label === "Facebook");
  const twitter = companyInfo.socialLinks.find((item) => item.label === "Twitter/X");
  const linkedIn = companyInfo.socialLinks.find((item) => item.label === "LinkedIn");
  const projectFocus = aboutContent?.highlights.length
    ? aboutContent.highlights.map((item) => item.title)
    : companyInfo.projectFocus;
  const missions = aboutContent?.values.length
    ? aboutContent.values.map((item) =>
        item.description ? `${item.title}: ${item.description}` : item.title,
      )
    : companyInfo.missions;

  return (
    <section id="company-detail" className="bg-white py-20 text-neutral-950 md:py-28">
      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-gold">
            Company Detail
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            {aboutContent?.heading || companyInfo.name}
          </h2>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">
            {companyInfo.tagline}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-neutral-200 bg-neutral-50 p-6 shadow-sm md:p-8">
            <div className="border-b border-neutral-200 pb-7">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-neutral-950" aria-hidden="true" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
                    Location
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase text-neutral-950">
                    {companyInfo.location}
                  </h3>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-neutral-950" aria-hidden="true" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
                    Address
                  </p>
                  <p className="mt-2 text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              <a
                href={companyInfo.googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-9 mt-5 inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 px-5 text-xs font-black uppercase tracking-widest text-white transition hover:bg-gold md:text-sm"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>

            <DetailRow label="Company Name" value={companyInfo.name} Icon={Building2} />
            <DetailRow label="Service Area" value={companyInfo.serviceArea} Icon={MapPin} />
            <DetailRow label="Phone Number" value={companyInfo.phone} href={companyInfo.phoneHref} Icon={Phone} />
            <DetailRow
              label="WhatsApp"
              value={companyInfo.whatsapp}
              href={companyInfo.whatsappHref}
              Icon={FaWhatsapp}
              external
            />
            <DetailRow
              label="Website"
              value={companyInfo.website}
              href={companyInfo.websiteHref}
              Icon={Globe}
              external
            />
            <DetailRow
              label="Instagram"
              value={instagram?.handle ?? "Instagram"}
              href={instagram?.href}
              Icon={FaInstagram}
              external
            />
            <DetailRow
              label="Facebook"
              value="Facebook"
              href={facebook?.href}
              Icon={FaFacebookF}
            />
            <DetailRow
              label="Twitter/X"
              value="Twitter/X"
              href={twitter?.href}
              Icon={FaXTwitter}
            />
            <DetailRow
              label="LinkedIn"
              value="LinkedIn"
              href={linkedIn?.href}
              Icon={FaLinkedinIn}
            />

            <div className="pt-6">
              <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
                Project Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {projectFocus.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-neutral-950"
                  >
                    <BriefcaseBusiness className="h-4 w-4 text-gold" aria-hidden="true" />
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
            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
              {aboutContent?.bodyText || companyInfo.about}
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-gold via-neutral-200 to-transparent" />

            <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
              Vision
            </p>
            <blockquote className="mt-4 border-l-4 border-gold pl-5 text-2xl font-black uppercase leading-tight text-neutral-950">
              {companyInfo.vision}
            </blockquote>

            <div className="my-8 h-px bg-gradient-to-r from-gold via-neutral-200 to-transparent" />

            <p className="text-xs font-black uppercase tracking-widest text-gold md:text-sm">
              Missions
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
              {companyInfo.missionsIntro}
            </p>
            <div className="mt-6 space-y-4">
              {missions.map((mission, index) => (
                <div key={mission} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-gold text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
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
