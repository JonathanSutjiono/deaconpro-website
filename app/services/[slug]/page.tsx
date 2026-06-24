import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import JsonLd, { BreadcrumbJsonLd } from "@/components/JsonLd";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { homepageServices, serviceDetailSupport } from "@/data/services";
import { createPageMetadata, siteUrl } from "@/data/seo";
import {
  getCompanyInfo,
  getContact,
  getFooter,
  getServiceBySlug,
} from "@/sanity/lib/fetch";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return homepageServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const [service, companyInfo] = await Promise.all([getServiceBySlug(slug), getCompanyInfo()]);

  if (!service) {
    return createPageMetadata({
      title: `Service Not Found | ${companyInfo.name}`,
      description: "The requested Deacon Pro service could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${service.title} | ${companyInfo.name}`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [service, companyInfo, contact, footer] = await Promise.all([
    getServiceBySlug(slug),
    getCompanyInfo(),
    getContact(),
    getFooter(),
  ]);

  if (!service) notFound();
  const detail = serviceDetailSupport[service.pillar];
  const serviceUrl = `${siteUrl}/services/${service.slug}`;

  return (
    <main id="main-content" tabIndex={-1}>
      <Navbar companyInfo={companyInfo} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Services", item: `${siteUrl}/#services` },
          { name: service.title, item: serviceUrl },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: serviceUrl,
          provider: {
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            name: companyInfo.name,
            url: companyInfo.websiteHref,
            telephone: companyInfo.phone,
          },
          areaServed: companyInfo.serviceArea.split("·").map((name) => ({
            "@type": "AdministrativeArea",
            name: name.trim(),
          })),
        }}
      />
      <Hero
        eyebrow={detail.eyebrow}
        title={service.title}
        description={service.description}
        primaryLabel="Consult via WhatsApp"
        primaryHref={companyInfo.whatsappHref}
        secondaryLabel="View Project References"
        secondaryHref="/#portfolio"
      />

      <section className="section-space bg-white text-neutral-950">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionTitle eyebrow="Service Overview" title={detail.overview} className="max-w-3xl" />
          <div className="border-l-2 border-gold pl-6 sm:pl-8">
            <p className="text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
              Share your property location, the work you need, and your target schedule. We will help clarify the next practical step before execution begins.
            </p>
            <Link
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-8 px-6"
            >
              Start a consultation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-neutral-100 text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Scope"
            title="What this service can support."
            description="The exact scope is confirmed after the property condition, priorities, and working requirements are reviewed."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {detail.inclusions.map((item, index) => (
              <div key={item} className="surface-card flex min-h-44 flex-col justify-between p-7 md:p-8">
                <span className="grid h-11 w-11 place-items-center bg-neutral-950 text-champagne">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="mt-8">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 font-display text-3xl font-semibold uppercase leading-[0.96] text-neutral-950">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
