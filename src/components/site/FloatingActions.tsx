import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/917240027900"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M19.11 17.24c-.28-.14-1.66-.82-1.92-.92-.26-.1-.44-.14-.63.14-.19.28-.72.92-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49l-.54-.01c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.89 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.66 6.3L3 29l6.87-1.61A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-1.97 0-3.8-.55-5.37-1.5l-.38-.22-4.06.95.97-3.96-.24-.4A10.44 10.44 0 0 1 5.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5z"/>
        </svg>
      </a>
      <a
        href="tel:+917240027900"
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-glow text-black shadow-glow transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full border border-foreground/15 bg-background/70 text-foreground backdrop-blur transition hover:bg-foreground/10 animate-fade-up"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
