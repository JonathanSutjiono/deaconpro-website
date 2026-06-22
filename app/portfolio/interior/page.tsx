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
    title: `Interior Projects | ${companyInfo.name}`,
    description:
      "Interior design and fit-out project samples for residential, office, retail, and custom furniture scopes.",
    path: "/portfolio/interior",
  });
}

export default async function InteriorPortfolioPage() {
  const [companyInfo, interiorProjects, contact, footer] = await Promise.all([
    getCompanyInfo(),
    getProjectsByCategory("interior"),
    getContact(),
    getFooter(),
  ]);

  return (
    <main>
      <Navbar companyInfo={companyInfo} />
      <Hero
        eyebrow="Portfolio"
        title="Interior Projects"
        description={`Interior project references supported by ${companyInfo.name}.`}
        primaryLabel="WhatsApp"
        primaryHref={companyInfo.whatsappHref}
        secondaryLabel="Interior Services"
        secondaryHref="/interior"
      />
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Interior Portfolio"
            title="Interior work for residential and commercial spaces."
            description="Open a project to review its location, fit-out scope, and available project imagery."
            light
          />
          <PortfolioCards items={interiorProjects} />
        </div>
      </section>
      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
