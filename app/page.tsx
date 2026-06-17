import DivisionCards from "@/components/DivisionCards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";

const homepageServices = [
  "Architecture Planning",
  "Construction Delivery",
  "Interior Design",
  "Interior Fit-Out",
  "Project Supervision",
  "Custom Furniture",
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        title={["DESIGN.", "CONSTRUCT.", "INSPIRE."]}
        description="Deacon Pro brings construction discipline and interior refinement into one modern luxury practice for homes, workspaces, and hospitality environments."
      />
      <StatsBar />
      <DivisionCards />
      <ServicesGrid services={homepageServices} />
      <section id="projects" className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-gold">
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
              Quiet luxury, built with intent.
            </h2>
          </div>
          <p className="text-sm leading-7 text-graphite/72">
            Project portfolio placeholders are ready for real photography, case studies,
            location details, and completion metrics when assets are available.
          </p>
        </div>
      </section>
      <section id="portfolio" className="bg-coal py-20 text-white md:py-28">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-champagne">
            Portfolio
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            Material detail, spatial proportion, and site execution in balance.
          </h2>
        </div>
      </section>
      <section id="blog" className="bg-ink py-20 text-white md:py-28">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-champagne">
            Blog
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            Notes on construction, interiors, and refined project delivery.
          </h2>
        </div>
      </section>
      <Footer />
    </main>
  );
}
