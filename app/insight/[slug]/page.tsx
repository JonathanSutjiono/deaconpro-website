import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortableContent from "@/components/PortableContent";
import JsonLd, { BreadcrumbJsonLd } from "@/components/JsonLd";
import { insights } from "@/data/insights";
import { createPageMetadata, siteUrl } from "@/data/seo";
import {
  getCompanyInfo,
  getContact,
  getFooter,
  getInsightBySlug,
} from "@/sanity/lib/fetch";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const [insight, companyInfo] = await Promise.all([
    getInsightBySlug(slug),
    getCompanyInfo(),
  ]);

  if (!insight) {
    return createPageMetadata({
      title: `Insight Not Found | ${companyInfo.name}`,
      description: "The requested Deacon Pro insight could not be found.",
      path: `/insight/${slug}`,
    });
  }

  return createPageMetadata({
    title: insight.seoTitle,
    description: insight.seoDescription,
    path: `/insight/${insight.slug}`,
    image: insight.coverImage,
    type: "article",
  });
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [insight, companyInfo, contact, footer] = await Promise.all([
    getInsightBySlug(slug),
    getCompanyInfo(),
    getContact(),
    getFooter(),
  ]);

  if (!insight) notFound();

  return (
    <main id="main-content" tabIndex={-1}>
      <Navbar companyInfo={companyInfo} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Insight", item: `${siteUrl}/insight` },
          { name: insight.title, item: `${siteUrl}/insight/${insight.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          description: insight.excerpt,
          image: insight.coverImage,
          datePublished: insight.publishedAt,
          mainEntityOfPage: `${siteUrl}/insight/${insight.slug}`,
          author: { "@type": "Organization", name: companyInfo.name },
          publisher: { "@type": "Organization", name: companyInfo.name },
        }}
      />
      <article>
        <section className="relative min-h-[68vh] overflow-hidden pt-20">
          <Image
            src={insight.coverImage}
            alt={insight.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container-x relative z-10 flex min-h-[calc(68vh-80px)] items-end py-16">
            <div className="max-w-4xl">
              <p className="text-[14px] font-black uppercase leading-5 tracking-normal text-champagne">
                {insight.category} · {insight.publishedAt}
                {insight.readTime ? ` · ${insight.readTime}` : ""}
              </p>
              <h1 className="mt-5 font-display text-5xl font-semibold uppercase leading-[0.9] text-white md:text-7xl">
                {insight.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 md:text-lg md:leading-9">
                {insight.excerpt}
              </p>
            </div>
          </div>
        </section>

        <section className="section-space bg-white text-neutral-950">
          <div className="container-x max-w-4xl">
            {insight.portableContent?.length ? (
              <div className="space-y-7">
                <PortableContent value={insight.portableContent} />
              </div>
            ) : (
              <div className="space-y-7">
                {insight.content.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <Link
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-10 px-7"
            >
              Discuss This Project
            </Link>
          </div>
        </section>
      </article>
      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
