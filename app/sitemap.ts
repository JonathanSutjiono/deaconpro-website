import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
