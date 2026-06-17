import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InsightCards from "@/components/InsightCards";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import ProcessSteps from "@/components/ProcessSteps";
import SectionTitle from "@/components/SectionTitle";
import ServiceCards from "@/components/ServiceCards";

const portfolioItems = [
  {
    title: "Construction Projects",
    href: "/portfolio/construction",
    category: "Construction",
    description: "Premium build, renovation, and site execution portfolio.",
  },
  {
    title: "Interior Projects",
    href: "/portfolio/interior",
    category: "Interior",
    description: "Interior design, fit-out, and custom furniture portfolio.",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        title={["DESIGN.", "CONSTRUCT.", "INSPIRE."]}
        highlight="INSPIRE."
        description="Integrated construction and interior solutions for refined residential, commercial, and hospitality environments."
      />

      <section id="about" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionTitle
            eyebrow="About Us"
            title="Luxury delivery from concept to handover."
          />
          <p className="text-base leading-8 text-neutral-600">
            Deacon Pro is an integrated construction and interior solution
            provider, combining disciplined project execution with refined design
            sensibility. We support clients from consultation, planning, budgeting,
            and site execution through final handover.
          </p>
        </div>
      </section>

      <section id="services" className="bg-neutral-100 py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title="Two specialist divisions. One precise standard."
            description="Choose construction, interior, or a complete integrated delivery path."
          />
          <ServiceCards />
        </div>
      </section>

      <section id="portfolio" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title="Project categories ready for real case studies."
          />
          <PortfolioCards items={portfolioItems} />
        </div>
      </section>

      <section id="process" className="bg-neutral-100 py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Process"
            title="A clear route from first meeting to handover."
          />
          <ProcessSteps />
        </div>
      </section>

      <section id="insight" className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Insight"
            title="Project thinking for construction and interiors."
            light
          />
          <InsightCards />
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
