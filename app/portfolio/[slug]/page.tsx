import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { company } from "@/data/company";
import { getProjectBySlug, projects } from "@/data/projects";
import { createPageMetadata } from "@/data/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: `Project Not Found | ${company.name}`,
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
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main>
      <Navbar />
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
            <p className="text-xs font-black uppercase tracking-[0.38em] text-champagne">
              {project.category} · {project.location} · {project.year}
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-tight text-white md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-neutral-950 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border border-neutral-200 bg-neutral-50 p-7">
            <p className="text-xs font-black uppercase tracking-widest text-gold">
              Project Detail
            </p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-black uppercase tracking-widest text-neutral-500">
                  Category
                </dt>
                <dd className="mt-1 text-lg font-semibold capitalize">{project.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase tracking-widest text-neutral-500">
                  Location
                </dt>
                <dd className="mt-1 text-lg font-semibold">{project.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase tracking-widest text-neutral-500">
                  Year
                </dt>
                <dd className="mt-1 text-lg font-semibold">{project.year}</dd>
              </div>
            </dl>
            <Link
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-gold px-6 text-sm font-black uppercase tracking-widest text-white transition hover:bg-neutral-950"
            >
              Chat WhatsApp
            </Link>
          </aside>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gold">
              Scope of Work
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.scopeOfWork.map((scope) => (
                <span
                  key={scope}
                  className="border border-neutral-300 px-4 py-3 text-sm font-black uppercase tracking-[0.14em]"
                >
                  {scope}
                </span>
              ))}
            </div>

            <p className="mt-10 text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
              {project.description}
            </p>

            <p className="mt-12 text-xs font-black uppercase tracking-widest text-gold">
              Gallery Placeholder
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
      <ContactCTA />
      <Footer />
    </main>
  );
}
