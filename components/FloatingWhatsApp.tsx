import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gold text-white shadow-2xl shadow-black/25 transition hover:scale-105 hover:bg-neutral-950 focus:outline-none focus:ring-4 focus:ring-gold/30"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
