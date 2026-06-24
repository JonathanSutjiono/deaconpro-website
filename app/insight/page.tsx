import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InsightCards from "@/components/InsightCards";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/data/seo";
import {
  getCompanyInfo,
  getContact,
  getFooter,
  getInsights,
} from "@/sanity/lib/fetch";

export async function generateMetadata() {
  const companyInfo = await getCompanyInfo();
  return createPageMetadata({
    title: `Insight | ${companyInfo.name}`,
    description:
      "Construction, renovation, home maintenance, and interior design insights from PT Deacon Pro Konstruksi Indonesia.",
    path: "/insight",
  });
}

export default async function InsightPage() {
  const [companyInfo, insights, contact, footer] = await Promise.all([
    getCompanyInfo(),
    getInsights(),
    getContact(),
    getFooter(),
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <Navbar companyInfo={companyInfo} />
      <Hero
        eyebrow="Insight"
        title="Project Insight"
        description="Construction, renovation, home maintenance, and interior design notes for practical project planning."
        primaryLabel="Chat WhatsApp"
        primaryHref={companyInfo.whatsappHref}
        secondaryLabel="Home"
        secondaryHref="/"
      />
      <section className="section-space bg-neutral-950 text-white">
        <div className="container-x">
          <InsightCards insights={insights} />
        </div>
      </section>
      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
