import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
import { company } from "@/data/company";
import { interiorProjects } from "@/data/projects";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: `Interior Projects | ${company.name}`,
  description:
    "Interior design and fit-out project samples for residential, office, retail, and custom furniture scopes.",
  path: "/portfolio/interior",
});

export default function InteriorPortfolioPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Portfolio"
        title="Interior Projects"
        description={`Interior project references supported by ${company.name}.`}
        primaryLabel="WhatsApp"
        primaryHref={company.whatsappHref}
        secondaryLabel="Interior Services"
        secondaryHref="/interior"
      />
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Interior Portfolio"
            title="Luxury dark project cards with image overlays."
            description="Placeholder cards reuse available project imagery until final site assets are provided."
            light
          />
          <PortfolioCards items={interiorProjects} />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
