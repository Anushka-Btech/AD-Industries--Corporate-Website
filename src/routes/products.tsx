import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Precision components by A.D. Industries" },
      {
        name: "description",
        content:
          "Explore CNC-machined shafts, gear assemblies and sheet-metal enclosures. Request a quote from A.D. Industries.",
      },
      { property: "og:title", content: "Products by A.D. Industries" },
      {
        property: "og:description",
        content: "Precision components — CNC, fabrication and assembly.",
      },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const CATEGORIES = ["All", "CNC Machining", "Powertrain", "Fabrication"] as const;

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;

      if (!normalizedQuery) {
        return matchesCategory;
      }

      const searchableText = [product.name, product.category, product.tagline, product.description]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [query, category]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  const hasActiveFilters = query.trim().length > 0 || category !== "All";

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <Aurora />

        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Products</p>

          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            A catalogue built <span className="text-gradient">component by component</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse a selection of parts we routinely manufacture. Everything ships with inspection
            reports and full traceability.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="container-x pb-8">
        <div className="glass sticky top-24 z-20 rounded-2xl p-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>

              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />

              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products, categories or capabilities..."
                className="w-full rounded-xl border border-foreground/10 bg-background/60 py-2 pl-9 pr-10 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/60"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear product search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2" aria-label="Product categories">
              <div className="mr-1 hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filter:
              </div>

              {CATEGORIES.map((categoryOption) => {
                const isActive = category === categoryOption;

                return (
                  <button
                    key={categoryOption}
                    type="button"
                    onClick={() => setCategory(categoryOption)}
                    aria-pressed={isActive}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      isActive
                        ? "bg-foreground text-background"
                        : "border border-foreground/10 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {categoryOption}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-3 flex flex-col gap-2 border-t border-foreground/10 pt-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite">
              Showing{" "}
              <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="w-fit font-medium text-brand transition hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-card/60 backdrop-blur">
                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} — ${product.category}`}
                    loading={index < 3 ? "eager" : "lazy"}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {product.category}
                  </div>

                  <h2 className="mt-1 font-display text-xl font-bold">{product.name}</h2>

                  <p className="mt-2 text-sm font-medium text-foreground/80">{product.tagline}</p>

                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link to="/contact" className="btn-brand btn-brand-hover text-xs">
                      Inquire
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="col-span-full rounded-2xl border border-foreground/10 bg-card/40 p-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
                <Search className="h-5 w-5" />
              </div>

              <h2 className="mt-4 font-display text-xl font-bold">No products found</h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Try a different search term or remove one of the selected filters to see more
                products.
              </p>

              <button type="button" onClick={clearFilters} className="btn-ghost-glass mt-5 text-sm">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
