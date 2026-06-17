import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";

const services = [
  "Design & Build",
  "General Contractor",
  "Project Management",
  "Renovation",
  "Construction Management",
];

export default function ConstructionPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Construction Division"
        title="DEACON PRO CONSTRUCTION"
        description="A disciplined construction partner for premium projects, from early design coordination through build execution, renovation, and site management."
        primaryHref="/construction#services"
        primaryLabel="Construction Services"
        secondaryHref="/interior"
        secondaryLabel="Interior Division"
      />
      <StatsBar />
      <ServicesGrid
        services={services}
        title="Construction services for demanding builds."
      />
      <Footer />
    </main>
  );
}
