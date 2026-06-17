import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
import { company } from "@/data/company";
import { constructionServices } from "@/data/services";

export default function ConstructionPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Construction"
        title="DEACON PRO CONSTRUCTION"
        description="General Contractor & Design Build Services"
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
            items={[
              {
                title: "Construction Projects",
                href: "/portfolio/construction",
                category: "Construction Portfolio",
                description:
                  `${company.name} Build New, renovation, contractor, and construction management references.`,
              },
            ]}
          />
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
