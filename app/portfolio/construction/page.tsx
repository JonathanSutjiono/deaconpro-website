import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
import { createPageMetadata } from "@/data/seo";
import {
  getCompanyInfo,
  getContact,
  getFooter,
  getProjectsByCategory,
} from "@/sanity/lib/fetch";

export async function generateMetadata() {
  const companyInfo = await getCompanyInfo();
  return createPageMetadata({
    title: `Construction Projects | ${companyInfo.name}`,
    description:
      "Construction project samples for Build New, renovation, contractor, and construction management services.",
    path: "/portfolio/construction",
  });
}

export default async function ConstructionPortfolioPage() {
  const [companyInfo, constructionProjects, contact, footer] = await Promise.all([
    getCompanyInfo(),
    getProjectsByCategory("construction"),
    getContact(),
    getFooter(),
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <Navbar companyInfo={companyInfo} />
      <Hero
        eyebrow="Portfolio"
        title="Construction Projects"
        description={`${companyInfo.tagline} portfolio references across ${companyInfo.serviceArea}.`}
        primaryLabel="WhatsApp"
        primaryHref={companyInfo.whatsappHref}
        secondaryLabel="Construction Services"
        secondaryHref="/construction"
      />
      <section className="section-space bg-neutral-950 text-white">
        <div className="container-x">
          <SectionTitle
            eyebrow="Construction Portfolio"
            title="Construction work organized by scope and location."
            description="Open a project to review its service scope, delivery context, and available project imagery."
            light
          />
          <PortfolioCards items={constructionProjects} dark />
        </div>
      </section>
      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
