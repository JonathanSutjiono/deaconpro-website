import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: unknown) {
  if (!source) return undefined;
  return builder.image(source);
}

export function resolveImageUrl(
  source: unknown,
  fallback: string,
  width = 2400,
) {
  try {
    return (
      urlForImage(source)?.width(width).quality(88).auto("format").url() ??
      fallback
    );
  } catch {
    return fallback;
  }
}
