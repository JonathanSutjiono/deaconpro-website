import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioCards from "@/components/PortfolioCards";
import PortableContent from "@/components/PortableContent";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/data/seo";
import {
  getCompanyInfo,
  getContact,
  getFooter,
  getProjectBySlug,
  getRelatedProjects,
} from "@/sanity/lib/fetch";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const [project, companyInfo] = await Promise.all([
    getProjectBySlug(slug),
    getCompanyInfo(),
  ]);

  if (!project) {
    return createPageMetadata({
      title: `Project Not Found | ${companyInfo.name}`,
      description: "The requested Deacon Pro project could not be found.",
      path: `/portfolio/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/portfolio/${project.slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [project, companyInfo, contact, footer] = await Promise.all([
    getProjectBySlug(slug),
    getCompanyInfo(),
    getContact(),
    getFooter(),
  ]);

  if (!project) notFound();
  const relatedProjects = await getRelatedProjects(project);

  return (
    <main>
      <Navbar companyInfo={companyInfo} />
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image
          src={project.coverImage}
          alt={project.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/68" />
        <div className="container-x relative z-10 flex min-h-[calc(72vh-80px)] items-end py-16">
          <div className="max-w-4xl">
            <p className="text-[14px] font-black uppercase leading-5 tracking-normal text-champagne">
              {project.isSample ? "Representative Visual · " : ""}
              {project.category} · {project.location} · {project.year}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold uppercase leading-[0.9] text-white md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 md:text-lg md:leading-9">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-neutral-950">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border border-neutral-200 bg-neutral-50 p-7">
            <p className="text-[14px] font-black uppercase leading-5 tracking-normal text-gold">
              Project Detail
            </p>
            {project.isSample ? (
              <p className="mt-4 text-base leading-7 text-neutral-600">
                Representative visual used to present Deacon Pro&apos;s service scope and case-study format. It is not presented as a completed client project.
              </p>
            ) : null}
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-[14px] font-black uppercase leading-5 tracking-normal text-neutral-500">
                  Category
                </dt>
                <dd className="mt-1 text-lg font-semibold capitalize">{project.category}</dd>
              </div>
              <div>
                <dt className="text-[14px] font-black uppercase leading-5 tracking-normal text-neutral-500">
                  Location
                </dt>
                <dd className="mt-1 text-lg font-semibold">{project.location}</dd>
              </div>
              <div>
                <dt className="text-[14px] font-black uppercase leading-5 tracking-normal text-neutral-500">
                  Year
                </dt>
                <dd className="mt-1 text-lg font-semibold">{project.year}</dd>
              </div>
              {project.clientName ? (
                <div>
                  <dt className="text-[14px] font-black uppercase leading-5 tracking-normal text-neutral-500">
                    Client
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">{project.clientName}</dd>
                </div>
              ) : null}
              {project.status ? (
                <div>
                  <dt className="text-[14px] font-black uppercase leading-5 tracking-normal text-neutral-500">
                    Status
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">{project.status}</dd>
                </div>
              ) : null}
            </dl>
            <Link
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-8 w-full px-6"
            >
              Consult Your Project
            </Link>
          </aside>

          <div>
            <p className="text-[14px] font-black uppercase leading-5 tracking-normal text-gold">
              Scope of Work
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.scopeOfWork.map((scope) => (
                <span
                  key={scope}
                  className="border border-neutral-300 px-4 py-3 text-[14px] font-black uppercase leading-5 tracking-normal"
                >
                  {scope}
                </span>
              ))}
            </div>

            {project.portableDescription?.length ? (
              <div className="mt-10 space-y-6">
                <PortableContent value={project.portableDescription} />
              </div>
            ) : (
              <p className="mt-10 text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
                {project.description}
              </p>
            )}

            <p className="mt-12 text-[14px] font-black uppercase leading-5 tracking-normal text-gold">
              Project Gallery
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <Image
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="section-space bg-neutral-100 text-neutral-950">
          <div className="container-x">
            <p className="text-[14px] font-black uppercase leading-5 tracking-normal text-gold">
              Related Projects
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.94] md:text-7xl">
              More {project.category} references.
            </h2>
            <div className="mt-10">
              <PortfolioCards items={relatedProjects} />
            </div>
          </div>
        </section>
      ) : null}
      <ContactCTA companyInfo={companyInfo} contact={contact} />
      <Footer companyInfo={companyInfo} footerContent={footer} />
    </main>
  );
}
