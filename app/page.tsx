import ContactCTA from "@/components/ContactCTA";
import CompanyDetail from "@/components/CompanyDetail";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InsightCards from "@/components/InsightCards";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import ProcessSteps from "@/components/ProcessSteps";
import SectionTitle from "@/components/SectionTitle";
import ServiceCards from "@/components/ServiceCards";
import { ArrowUpRight, Building2, MapPinned, Paintbrush } from "lucide-react";
import { createPageMetadata } from "@/data/seo";
import {
  getAbout,
  getCompanyInfo,
  getContact,
  getFeaturedProjects,
  getFooter,
  getHomepage,
  getInsights,
  getProcessSteps,
  getServices,
  getSiteSettings,
} from "@/sanity/lib/fetch";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return createPageMetadata({
    title: settings.defaultSeoTitle,
    description: settings.defaultSeoDescription,
    image: settings.defaultOgImage,
  });
}

export default async function Home() {
  const [
    companyInfo,
    homepage,
    about,
    services,
    featuredProjects,
    processSteps,
    insights,
    contact,
    footer,
  ] = await Promise.all([
    getCompanyInfo(),
    getHomepage(),
    getAbout(),
    getServices(),
    getFeaturedProjects(),
    getProcessSteps(),
    getInsights(),
    getContact(),
    getFooter(),
  ]);

  return (
    <main>
      <Navbar companyInfo={companyInfo} />
      <Hero
        title={homepage.heroTitle}
        highlight={homepage.heroTitle.at(-1)}
        eyebrow={homepage.heroEyebrow}
        description={homepage.heroSubtitle}
        imageSrc={homepage.heroImage}
        imageAlt={`${companyInfo.shortName} construction and interior`}
        primaryLabel={homepage.primaryButtonLink.includes("wa.me") ? homepage.primaryButtonLabel : "WhatsApp"}
        primaryHref={companyInfo.whatsappHref}
        secondaryLabel={homepage.secondaryButtonLabel}
        secondaryHref={homepage.secondaryButtonLink}
      />

      <section id="about" className="section-space bg-white text-neutral-950">
        <div className="container-x grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionTitle
            eyebrow="About Us"
            title={homepage.introTitle}
          />
          <div>
            <p className="max-w-3xl text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
              {homepage.introText}
            </p>
            <a
              href="#company-detail"
              className="button-secondary mt-7 border-neutral-950 px-5 text-neutral-950 hover:border-gold hover:bg-gold hover:text-white"
            >
              Company detail
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="col-span-full grid border-y border-neutral-200 sm:grid-cols-3">
            {[
              { label: "Construction", detail: "Build New & project coordination", Icon: Building2 },
              { label: "Interior", detail: "Fit-out, furnishings & detail", Icon: Paintbrush },
              { label: "Service area", detail: companyInfo.serviceArea, Icon: MapPinned },
            ].map(({ label, detail, Icon }) => (
              <div key={label} className="flex gap-4 border-b border-neutral-200 px-0 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="eyebrow">{label}</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-neutral-700">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-space bg-neutral-100 text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title={homepage.servicesTitle}
            description={homepage.servicesSubtitle}
          />
          <ServiceCards services={services} />
        </div>
      </section>

      <section id="portfolio" className="section-space bg-white text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title={homepage.portfolioTitle}
            description={homepage.portfolioSubtitle || undefined}
          />
          <PortfolioCards items={featuredProjects} />
        </div>
      </section>

      <section id="process" className="section-space bg-neutral-100 text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Process"
            title={homepage.processTitle}
            description={homepage.processSubtitle || undefined}
          />
          <ProcessSteps steps={processSteps} />
          <a
            href={companyInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary mt-8 border-neutral-950 px-5 text-neutral-950 hover:border-gold hover:bg-gold hover:text-white"
          >
            Discuss your project scope
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <CompanyDetail companyInfo={companyInfo} aboutContent={about} />

      <section id="insight" className="section-space bg-neutral-950 text-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Insight"
            title="Practical notes for better project decisions."
            light
          />
          <InsightCards limit={3} insights={insights} />
          <a
            href="/insight"
            className="button-primary mt-8 px-6 hover:bg-white hover:text-neutral-950"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <ContactCTA
        companyInfo={companyInfo}
        contact={contact}
        heading={homepage.contactTitle}
        description={homepage.contactSubtitle}
      />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
