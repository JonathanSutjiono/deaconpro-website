import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import SectionTitle from "@/components/SectionTitle";
import { company } from "@/data/company";
import { interiorProjects } from "@/data/projects";
import { interiorServices } from "@/data/services";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: `Deacon Pro Interior | ${company.name}`,
  description:
    "Interior design, interior fit-out, office interior, residential interior, and custom furniture services in Jakarta and service areas.",
  path: "/interior",
});

export default function InteriorPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Interior"
        title="DEACON PRO INTERIOR"
        description="Interior Design & Fit-Out Specialist"
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="Interior Projects"
        secondaryHref="/portfolio/interior"
      />

      <section id="services" className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Services"
            title="Interior services for refined residential and commercial spaces."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {interiorServices.map((service, index) => (
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
            title="Explore interior project references."
          />
          <PortfolioCards
            items={interiorProjects.slice(0, 3)}
          />
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
