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
    <main id="main-content" tabIndex={-1}>
      <Navbar companyInfo={companyInfo} />
      <Hero
        title={homepage.heroTitle}
        highlight={homepage.heroTitle.at(-1)}
        eyebrow={homepage.heroEyebrow}
        description={homepage.heroSubtitle}
        imageSrc={homepage.heroImage}
        imageAlt={homepage.heroImageAlt}
        primaryLabel={
          homepage.primaryButtonLink.includes("wa.me") && homepage.primaryButtonLabel !== "WhatsApp"
            ? homepage.primaryButtonLabel
            : "Consult on WhatsApp"
        }
        primaryHref={companyInfo.whatsappHref}
        secondaryLabel={homepage.secondaryButtonLabel}
        secondaryHref={homepage.secondaryButtonLink}
        servicePillars={["Construction", "Interior Fit-Out", "Renovation", "Home Maintenance"]}
      />

      <section id="about" className="section-space bg-white pb-16 pt-16 text-neutral-950 md:pb-20 md:pt-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-16">
            <SectionTitle
              eyebrow="About Us"
              title={homepage.introTitle}
              className="max-w-3xl lg:col-span-7"
            />
            <div className="lg:col-span-5">
              <div className="border-l-2 border-gold pl-6 sm:pl-8">
                <p className="eyebrow">{companyInfo.tagline}</p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
                  {homepage.introText}
                </p>
                <div className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="#company-detail"
                    className="button-secondary w-fit border-neutral-950 px-5 text-neutral-950 hover:border-gold hover:bg-gold hover:text-white"
                  >
                    Company detail
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="max-w-[15rem] text-[14px] font-bold uppercase leading-5 tracking-normal text-neutral-600 sm:text-right">
                    Serving {companyInfo.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid overflow-hidden border border-neutral-200 bg-[#fbfaf7] shadow-[0_18px_45px_rgba(17,17,17,0.05)] sm:grid-cols-3 md:mt-14">
            {[
              { label: "Construction", detail: "Build New & project coordination", Icon: Building2 },
              { label: "Interior", detail: "Fit-out, furnishings & detail", Icon: Paintbrush },
              { label: "Service area", detail: companyInfo.serviceArea, Icon: MapPinned },
            ].map(({ label, detail, Icon }) => (
              <div key={label} className="group flex min-h-[154px] gap-4 border-b border-neutral-200 p-6 transition duration-300 hover:bg-white sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-gold/30 bg-white text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow">{label}</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-neutral-700 md:text-[17px] md:leading-8">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-space bg-neutral-100 pt-16 text-neutral-950 md:pt-20">
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
          <div className={processSteps.length <= 2 ? "mt-10 flex justify-center" : "mt-10"}>
            <a
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary border-neutral-950 px-6 text-neutral-950 hover:border-gold hover:bg-gold hover:text-white"
            >
              Discuss your project scope
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
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
