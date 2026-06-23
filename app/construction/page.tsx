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
  getConstructionServiceNames,
  getContact,
  getFooter,
  getProjectsByCategory,
} from "@/sanity/lib/fetch";

export async function generateMetadata() {
  const companyInfo = await getCompanyInfo();
  return createPageMetadata({
    title: `Deacon Pro Construction | ${companyInfo.name}`,
    description:
      "General contractor, Design & Build, renovation, and construction management services across Jabodetabek, Bali, and Makassar.",
    path: "/construction",
  });
}

export default async function ConstructionPage() {
  const [companyInfo, constructionServices, constructionProjects, contact, footer] =
    await Promise.all([
      getCompanyInfo(),
      getConstructionServiceNames(),
      getProjectsByCategory("construction"),
      getContact(),
      getFooter(),
    ]);

  return (
    <main>
      <Navbar companyInfo={companyInfo} />
      <Hero
        eyebrow="Construction"
        title="DEACON PRO CONSTRUCTION"
        description="Architectural building contractor for Build New, Renovation, Design & Build, and project management."
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="Construction Projects"
        secondaryHref="/portfolio/construction"
      />

      <section id="services" className="section-space bg-white text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title="Construction services for Build New and Renovation delivery."
            description="From planning and budgeting to site execution, construction management, and quality control."
          />
          <ServiceList services={constructionServices} whatsappHref={companyInfo.whatsappHref} />
        </div>
      </section>

      <section className="section-space bg-neutral-100 text-neutral-950">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title="Explore construction project references."
          />
          <PortfolioCards
            items={constructionProjects.slice(0, 3)}
          />
        </div>
      </section>

      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
