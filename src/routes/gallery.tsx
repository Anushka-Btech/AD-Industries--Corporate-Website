import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Factory, machinery and team | A.D. Industries" },
      { name: "description", content: "A look inside our Bhiwadi facility — CNC lines, robotic welding, quality inspection and finished components." },
      { property: "og:title", content: "Gallery — A.D. Industries" },
      { property: "og:description", content: "Inside our Bhiwadi manufacturing facility." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Gallery</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            A look inside our <span className="text-gradient">Bhiwadi facility</span>.
          </h1>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 6) * 0.03}>
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-foreground/10"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-transparent p-4 text-left opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm font-medium">{g.label}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md animate-fade-up"
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-foreground/20 bg-background/60"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={gallery[open].src}
            alt={gallery[open].label}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
