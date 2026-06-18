import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
};

export const isSanityConfigured = Boolean(
  sanityEnv.projectId && sanityEnv.dataset && sanityEnv.apiVersion,
);

export default defineConfig({
  name: "deaconpro",
  title: "Deacon Pro CMS",
  projectId: sanityEnv.projectId || "deaconpro",
  dataset: sanityEnv.dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
