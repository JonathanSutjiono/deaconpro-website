import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Private Residence Build",
    category: "Construction",
    description: "Premium residential construction with disciplined site management.",
  },
  {
    title: "Commercial Renovation",
    category: "Renovation",
    description: "Structural upgrade and finish execution for business environments.",
  },
  {
    title: "Hospitality Development",
    category: "Design Build",
    description: "Integrated planning and construction for guest-focused spaces.",
  },
  {
    title: "Office Shell Upgrade",
    category: "Contractor",
    description: "General contractor scope with clean project coordination.",
  },
  {
    title: "Urban House Extension",
    category: "Construction Management",
    description: "Renovation and expansion with controlled budget and timeline.",
  },
  {
    title: "Boutique Retail Build",
    category: "Project Management",
    description: "Detailed project execution for compact high-impact retail spaces.",
  },
];

export default function ConstructionPortfolioPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Portfolio"
        title="Construction Projects"
        description="Selected construction, renovation, design build, and project management placeholders ready for real project photography."
        primaryLabel="Start a Project"
        primaryHref="/#contact"
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
          <PortfolioCards items={projects} />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
