import { createFileRoute } from "@tanstack/react-router";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";
import { Cog, Factory, Wrench, Gauge, ShieldCheck, Sparkles, ClipboardCheck, PackageCheck, Rocket, Ruler } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CNC, fabrication, finishing | A.D. Industries" },
      { name: "description", content: "Full-service manufacturing: CNC machining, sheet-metal fabrication, assembly, heat treatment, and surface finishing." },
      { property: "og:title", content: "Manufacturing services — A.D. Industries" },
      { property: "og:description", content: "End-to-end manufacturing under one roof." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const icons = [Cog, Factory, Wrench, Gauge, ShieldCheck, Sparkles];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            A full-stack workshop for <span className="text-gradient">demanding OEMs</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Everything from first prototype to production run — machined, fabricated,
            heat-treated and finished in one location.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="hover-lift h-full rounded-3xl border border-foreground/10 bg-card/60 p-7 backdrop-blur">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Process</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold sm:text-5xl">
            A predictable path from drawing to delivery.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[
            { Icon: ClipboardCheck, t: "Enquiry", d: "Share drawings — we sign NDAs the same day." },
            { Icon: Ruler, t: "DFM review", d: "Feedback within 48 hours for manufacturability." },
            { Icon: Rocket, t: "Prototype", d: "First articles with dimensional reports." },
            { Icon: Factory, t: "Production", d: "Scheduled runs with weekly status calls." },
            { Icon: PackageCheck, t: "Delivery", d: "Inspected, packed and shipped on time." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="relative h-full rounded-3xl border border-foreground/10 bg-card/60 p-6 backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">
                  <s.Icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-xs font-semibold text-muted-foreground">Step {i + 1}</div>
                <h3 className="mt-1 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
