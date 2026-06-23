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
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[60] grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-gold text-white shadow-[0_12px_30px_rgba(7,7,7,0.24)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-neutral-950 active:translate-y-0 active:scale-100 focus:outline-none focus:ring-4 focus:ring-gold/30 sm:bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] sm:right-5 sm:h-[3.25rem] sm:w-[3.25rem]"
    >
      <FaWhatsapp className="h-6 w-6 sm:h-6 sm:w-6" aria-hidden="true" />
    </a>
  );
}
