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
import { company } from "@/data/company";
import { homepagePortfolio } from "@/data/portfolio";
import { featuredProjects } from "@/data/projects";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: `${company.name} | Build New, Renovation, Home Maintenance`,
  description:
    "PT Deacon Pro Konstruksi Indonesia provides kontraktor rumah Jakarta, interior design Kelapa Gading, renovation, and home maintenance services.",
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        title={["DESIGN.", "CONSTRUCT.", "INSPIRE."]}
        highlight="INSPIRE."
        description={company.heroSubtitle}
        tertiaryLabel="Chat WhatsApp"
        tertiaryHref={company.whatsappHref}
      />

      <section id="about" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionTitle
            eyebrow="About Us"
            title="Construction, renovation, and maintenance with a premium standard."
          />
          <p className="max-w-3xl text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
            PT Deacon Pro Konstruksi Indonesia is a creative-innovative
            architectural building contractor and interior design furnishings
            company based in Kelapa Gading, Jakarta. We help clients build,
            renovate, and maintain properties through disciplined project
            execution, refined design sensibility, and reliable project
            management.
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
            title="Build New, Renovation, Home Maintenance, and specialist divisions."
            description={`${company.tagline} for clients across ${company.serviceArea}.`}
          />
          <ServiceCards />
        </div>
      </section>

      <section id="portfolio" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title="Project categories ready for official case studies."
          />
          <PortfolioCards items={homepagePortfolio} />
          <div className="mt-8">
            <PortfolioCards items={featuredProjects} />
          </div>
        </div>
      </section>

      <section id="process" className="bg-neutral-100 py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Process"
            title="A clear route from first meeting to handover."
          />
          <ProcessSteps />
        </div>
      </section>

      <section id="insight" className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Insight"
            title="Project thinking for construction and interiors."
            light
          />
          <InsightCards limit={3} />
          <a
            href="/insight"
            className="mt-8 inline-flex bg-gold px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-neutral-950"
          >
            View All Insights
          </a>
        </div>
      </section>

      <CompanyDetail />
      <ContactCTA />
      <Footer />
    </main>
  );
}
