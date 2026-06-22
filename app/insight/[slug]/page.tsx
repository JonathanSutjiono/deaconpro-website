import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortableContent from "@/components/PortableContent";
import { insights } from "@/data/insights";
import { createPageMetadata } from "@/data/seo";
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
    <main>
      <Navbar companyInfo={companyInfo} />
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
              <p className="text-xs font-black uppercase tracking-[0.38em] text-champagne">
                {insight.category} · {insight.publishedAt}
                {insight.readTime ? ` · ${insight.readTime}` : ""}
              </p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-tight text-white md:text-7xl">
                {insight.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
                {insight.excerpt}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-neutral-950 md:py-28">
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
              className="mt-10 inline-flex min-h-12 items-center justify-center bg-gold px-7 text-sm font-black uppercase tracking-widest text-white transition hover:bg-neutral-950"
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
