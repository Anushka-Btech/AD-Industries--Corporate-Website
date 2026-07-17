import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, Search, ArrowUpRight } from "lucide-react";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Precision components by A.D. Industries" },
      { name: "description", content: "Explore CNC-machined shafts, gear assemblies and sheet-metal enclosures. Download brochures or request a quote." },
      { property: "og:title", content: "Products by A.D. Industries" },
      { property: "og:description", content: "Precision components — CNC, fabrication and assembly." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const CATEGORIES = ["All", "CNC Machining", "Powertrain", "Fabrication"] as const;

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (cat === "All" || p.category === cat) &&
          (p.name.toLowerCase().includes(q.toLowerCase()) ||
            p.tagline.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Products</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            A catalogue built <span className="text-gradient">component by component</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse a selection of parts we routinely manufacture. Everything ships
            with inspection reports and full traceability.
          </p>
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="glass sticky top-24 z-20 flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-xl border border-foreground/10 bg-background/60 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  cat === c ? "bg-foreground text-background" : "border border-foreground/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <a href="#" className="btn-ghost-glass text-sm">
            <Download className="h-4 w-4" /> Brochure
          </a>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-card/60 backdrop-blur">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</div>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link to="/contact" className="btn-brand btn-brand-hover text-xs">
                      Inquire <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <a href="#" className="btn-ghost-glass text-xs">
                      <Download className="h-3.5 w-3.5" /> Datasheet
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-foreground/10 bg-card/40 p-10 text-center text-muted-foreground">
              No products match your search.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
