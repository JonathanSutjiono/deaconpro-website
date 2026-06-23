import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
import ServiceList from "@/components/ServiceList";
import { createPageMetadata } from "@/data/seo";
import {
  getCompanyInfo,
  getContact,
  getFooter,
  getInteriorServiceNames,
  getProjectsByCategory,
} from "@/sanity/lib/fetch";

export async function generateMetadata() {
  const companyInfo = await getCompanyInfo();
  return createPageMetadata({
    title: `Deacon Pro Interior | ${companyInfo.name}`,
    description:
      "Interior design, interior fit-out, office interior, residential interior, and custom furniture services in Jakarta and service areas.",
    path: "/interior",
  });
}

export default async function InteriorPage() {
  const [companyInfo, interiorServices, interiorProjects, contact, footer] =
    await Promise.all([
      getCompanyInfo(),
      getInteriorServiceNames(),
      getProjectsByCategory("interior"),
      getContact(),
      getFooter(),
    ]);

  return (
    <main>
      <Navbar companyInfo={companyInfo} />
      <Hero
        eyebrow="Interior"
        title="DEACON PRO INTERIOR"
        description="Interior design, furnishings, fit-out, and custom furniture for residential and commercial spaces."
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="Interior Projects"
        secondaryHref="/portfolio/interior"
      />

      <section id="services" className="section-space bg-white text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title="Interior services for refined residential and commercial spaces."
            description="Design-led interior delivery with practical fit-out coordination, furniture detail, and project management."
          />
          <ServiceList services={interiorServices} whatsappHref={companyInfo.whatsappHref} />
        </div>
      </section>

      <section className="section-space bg-neutral-100 text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title="Explore interior project references."
          />
          <PortfolioCards
            items={interiorProjects.slice(0, 3)}
          />
        </div>
      </section>

      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
