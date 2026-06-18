"use client";

import { NextStudio } from "next-sanity/studio";
import config, { isSanityConfigured } from "@/sanity.config";

function StudioSetupMessage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily:
          "Montserrat, Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          border: "1px solid rgba(255,255,255,0.16)",
          background: "rgba(255,255,255,0.04)",
          padding: "32px",
          boxShadow: "0 28px 90px rgba(0,0,0,0.45)",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#d6b25e",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Sanity Studio Setup
        </p>
        <h1
          style={{
            margin: "20px 0 0",
            fontSize: "clamp(28px, 5vw, 44px)",
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Sanity Studio is not configured yet.
        </h1>
        <p
          style={{
            margin: "20px 0 0",
            color: "#d4d4d4",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Please set NEXT_PUBLIC_SANITY_PROJECT_ID,
          NEXT_PUBLIC_SANITY_DATASET, and
          NEXT_PUBLIC_SANITY_API_VERSION.
        </p>
      </section>
    </main>
  );
}

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <StudioSetupMessage />;
  }

  return <NextStudio config={config} />;
}
