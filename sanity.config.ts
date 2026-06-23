import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
import { CmsGuidePane } from "./sanity/components/CmsGuidePane";
import { schemaTypes } from "./sanity/schemaTypes";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
export const isSanityConfigured = Boolean(sanityProjectId);

const singleton = (S: Parameters<StructureResolver>[0], title: string, schemaType: string, documentId: string) =>
  S.listItem()
    .title(title)
    .schemaType(schemaType)
    .child(S.document().schemaType(schemaType).documentId(documentId).title(title));

const structure: StructureResolver = (S) =>
  S.list()
    .title("DEACON PRO CMS")
    .items([
      singleton(S, "Pengaturan Website", "siteSettings", "siteSettings"),
      singleton(S, "Halaman Utama", "homepage", "homepage"),
      singleton(S, "Tentang Deacon / About Us", "about", "about"),
      S.divider(),
      S.documentTypeListItem("service").title("Layanan / Services"),
      S.documentTypeListItem("portfolio").title("Portfolio / Proyek"),
      S.documentTypeListItem("processStep").title("Proses Kerja"),
      S.documentTypeListItem("insight").title("Insight / Artikel"),
      S.divider(),
      singleton(S, "Kontak dan Peta", "contact", "contact"),
      singleton(S, "Footer Website", "footer", "footer"),
      S.divider(),
      S.listItem()
        .title("Panduan CMS")
        .child(S.component(CmsGuidePane).title("Panduan CMS")),
    ]);

export default defineConfig({
  name: "deaconpro-cms",
  title: "DEACON PRO CMS",
  projectId: sanityProjectId || "v60v654p",
  dataset: sanityDataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
});
