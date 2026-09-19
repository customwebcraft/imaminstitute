import { MessageCircle } from "lucide-react";
import { institute } from "@/lib/data";

export default function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${institute.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Imam Institute on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle size={27} strokeWidth={2.5} />
    </a>
  );
}
