import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
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
      singleton(S, "Site Settings", "siteSettings", "siteSettings"),
      singleton(S, "Homepage", "homepage", "homepage"),
      singleton(S, "About Us", "about", "about"),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("portfolio").title("Portfolio"),
      S.documentTypeListItem("processStep").title("Process"),
      S.documentTypeListItem("insight").title("Insight"),
      S.divider(),
      singleton(S, "Contact", "contact", "contact"),
      singleton(S, "Footer", "footer", "footer"),
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
