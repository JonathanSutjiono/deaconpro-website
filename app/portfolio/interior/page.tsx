import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Executive Office Interior",
    category: "Office Interior",
    description: "Refined workspace atmosphere with precise fit-out detailing.",
  },
  {
    title: "Luxury Apartment Suite",
    category: "Residential",
    description: "Warm material palette and custom furniture for daily comfort.",
  },
  {
    title: "Hospitality Lobby",
    category: "Interior Design",
    description: "High-impact arrival experience with polished material rhythm.",
  },
  {
    title: "Retail Boutique Fit-Out",
    category: "Fit-Out",
    description: "Compact interior execution for premium brand presentation.",
  },
  {
    title: "Private Lounge",
    category: "Custom Furniture",
    description: "Tailored furniture and finish coordination for intimate spaces.",
  },
  {
    title: "Modern Family Home",
    category: "Residential Interior",
    description: "Balanced interior planning with lasting material selections.",
  },
];

export default function InteriorPortfolioPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Portfolio"
        title="Interior Projects"
        description="Selected interior design, fit-out, office, residential, and custom furniture placeholders ready for final project photography."
        primaryLabel="Start a Project"
        primaryHref="/#contact"
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
          <PortfolioCards items={projects} />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
