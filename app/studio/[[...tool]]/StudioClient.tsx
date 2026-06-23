"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioClient() {
  return (
    <div className="deacon-studio fixed inset-0 z-[100] bg-white">
      <NextStudio config={config} />
      <style jsx global>{`
        .deacon-studio [data-ui="Text"] {
          line-height: 1.55;
        }

        .deacon-studio [data-ui="FormField"] {
          max-width: 960px;
        }

        .deacon-studio [data-ui="TextInput"],
        .deacon-studio [data-ui="TextArea"] {
          font-size: 16px;
          line-height: 1.55;
        }
      `}</style>
    </div>
  );
}
