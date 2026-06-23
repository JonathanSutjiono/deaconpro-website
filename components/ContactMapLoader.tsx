"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[220px] place-items-center bg-neutral-900 text-center sm:h-[240px] md:h-[270px]" role="status">
      <span className="text-[13px] font-bold uppercase leading-5 tracking-normal text-champagne">Loading office location</span>
    </div>
  ),
});

type ContactMapLoaderProps = {
  latitude: number;
  longitude: number;
  zoom: number;
  markerLabel: string;
};

export default function ContactMapLoader(props: ContactMapLoaderProps) {
  return <ContactMap {...props} />;
}
