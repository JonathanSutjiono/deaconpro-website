import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/company";
import type { CompanyInfo } from "@/data/company";

export default function FloatingWhatsApp({ companyInfo = company }: { companyInfo?: CompanyInfo }) {
  return (
    <a
      href={companyInfo.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] grid h-12 w-12 place-items-center rounded-full bg-gold text-white shadow-2xl shadow-black/25 transition hover:scale-105 hover:bg-neutral-950 focus:outline-none focus:ring-4 focus:ring-gold/30 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
    </a>
  );
}
