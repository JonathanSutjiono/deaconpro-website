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
import { homepagePortfolio } from "@/data/portfolio";
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
  getFeaturedServices,
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
    getFeaturedServices(),
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

      <section id="about" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionTitle
            eyebrow="About Us"
            title={homepage.introTitle}
          />
          <p className="max-w-3xl text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
            {homepage.introText}
          </p>
          <a
            href="#company-detail"
            className="inline-flex w-fit bg-neutral-950 px-5 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-gold"
          >
            Company Detail
          </a>
        </div>
      </section>

      <section id="services" className="bg-neutral-100 py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title={homepage.servicesTitle}
            description={homepage.servicesSubtitle}
          />
          <ServiceCards services={services} />
        </div>
      </section>

      <section id="portfolio" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title={homepage.portfolioTitle}
            description={homepage.portfolioSubtitle || undefined}
          />
          <PortfolioCards items={homepagePortfolio} />
          <div className="mt-8">
            <PortfolioCards items={featuredProjects} />
          </div>
        </div>
      </section>

      <section id="process" className="bg-neutral-100 py-16 text-neutral-950 md:py-20">
        <div className="container-x">
          <SectionTitle
            eyebrow="Process"
            title={homepage.processTitle}
            description={homepage.processSubtitle || undefined}
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <CompanyDetail companyInfo={companyInfo} aboutContent={about} />

      <section id="insight" className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Insight"
            title="Practical notes from planning to handover."
            light
          />
          <InsightCards limit={3} insights={insights} />
          <a
            href="/insight"
            className="mt-8 inline-flex bg-gold px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-neutral-950"
          >
            View All Insights
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
