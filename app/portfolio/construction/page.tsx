import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
import { company } from "@/data/company";
import { constructionProjects } from "@/data/portfolio";

export default function ConstructionPortfolioPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Portfolio"
        title="Construction Projects"
        description={`${company.tagline} portfolio references across ${company.serviceArea}.`}
        primaryLabel="WhatsApp"
        primaryHref={company.whatsappHref}
        secondaryLabel="Construction Services"
        secondaryHref="/construction"
      />
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Construction Portfolio"
            title="Luxury dark project cards with image overlays."
            description="Placeholder cards reuse available project imagery until final site assets are provided."
            light
          />
          <PortfolioCards items={constructionProjects} />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
