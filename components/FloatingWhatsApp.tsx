"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/company";
import type { CompanyInfo } from "@/data/company";

export default function FloatingWhatsApp({ companyInfo = company }: { companyInfo?: CompanyInfo }) {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact || !window.IntersectionObserver) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={companyInfo.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-4 z-[60] grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-gold text-white shadow-[0_12px_30px_rgba(7,7,7,0.24)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-neutral-950 active:translate-y-0 active:scale-100 focus:outline-none focus:ring-4 focus:ring-gold/30 sm:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] sm:right-5 sm:h-[3.25rem] sm:w-[3.25rem] ${contactVisible ? "pointer-events-none translate-y-3 opacity-0" : ""}`}
    >
      <FaWhatsapp className="h-6 w-6 sm:h-6 sm:w-6" aria-hidden="true" />
    </a>
  );
}
