import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";

const services = [
  "Interior Design",
  "Interior Fit-Out",
  "Office Interior",
  "Residential Interior",
  "Custom Furniture",
];

export default function InteriorPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Interior Division"
        title="DEACON PRO INTERIOR"
        description="Interior design and fit-out with a focus on atmosphere, material rhythm, furniture detail, and refined everyday function."
        primaryHref="/interior#services"
        primaryLabel="Interior Services"
        secondaryHref="/construction"
        secondaryLabel="Construction Division"
      />
      <StatsBar />
      <ServicesGrid
        services={services}
        title="Interior services for considered spaces."
      />
      <Footer />
    </main>
  );
}
