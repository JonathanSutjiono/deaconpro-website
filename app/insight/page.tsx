import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InsightCards from "@/components/InsightCards";
import Navbar from "@/components/Navbar";
import { company } from "@/data/company";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: `Insight | ${company.name}`,
  description:
    "Construction, renovation, home maintenance, and interior design insights from PT Deacon Pro Konstruksi Indonesia.",
  path: "/insight",
});

export default function InsightPage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Insight"
        title="Project Insight"
        description="Construction, renovation, home maintenance, and interior design notes for practical project planning."
        primaryLabel="Chat WhatsApp"
        primaryHref={company.whatsappHref}
        secondaryLabel="Home"
        secondaryHref="/"
      />
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-x">
          <InsightCards />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
