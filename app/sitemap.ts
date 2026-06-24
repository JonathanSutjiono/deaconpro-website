import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";
import { getInsights, getProjects, getServices } from "@/sanity/lib/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, insights, services] = await Promise.all([getProjects(), getInsights(), getServices()]);
  const staticRoutes = [
    "",
    "/construction",
    "/interior",
    "/portfolio/construction",
    "/portfolio/interior",
    "/insight",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/portfolio/${project.slug}`,
      lastModified: new Date(),
    })),
    ...insights.map((insight) => ({
      url: `${siteUrl}/insight/${insight.slug}`,
      lastModified: new Date(insight.publishedAt),
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
  ];
}
