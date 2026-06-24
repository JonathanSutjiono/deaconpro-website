"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[220px] place-items-center bg-neutral-900 text-center sm:h-[240px] md:h-[270px]" role="status">
      <span className="text-[14px] font-bold uppercase leading-5 tracking-normal text-champagne">Loading office location</span>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.IntersectionObserver) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {shouldLoad ? <ContactMap {...props} /> : <div className="h-[220px] bg-neutral-900 sm:h-[240px] md:h-[270px]" aria-hidden="true" />}
    </div>
  );
}
