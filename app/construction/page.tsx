import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
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

      <section id="services" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title="Construction services for Build New and Renovation delivery."
            description="From planning and budgeting to site execution, construction management, and quality control."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {constructionServices.map((service, index) => (
              <article key={service} className="border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-12 text-2xl font-black uppercase leading-tight">
                  {service}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-20 text-neutral-950 md:py-28">
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
