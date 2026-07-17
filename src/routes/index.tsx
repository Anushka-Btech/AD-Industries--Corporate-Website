import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cog, Factory, Gauge, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import facilityImg from "@/assets/facility.jpg";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { products, services, industries, stats, testimonials, faq } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A.D. Industries — Precision Manufacturing in Bhiwadi" },
      { name: "description", content: "CNC machining, fabrication and assembly for OEMs. 22+ years in Bhiwadi, Rajasthan. ISO-certified, OEM-grade delivery." },
      { property: "og:title", content: "A.D. Industries — Precision Manufacturing" },
      { property: "og:description", content: "Precision components engineered in Bhiwadi. Trusted by 180+ OEMs across India and beyond." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <Products />
      <WhyUs />
      <Process />
      <Industries />
      <Stats />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Aurora />
      <div className="container-x relative z-10 grid gap-12 pb-24 pt-10 lg:grid-cols-12 lg:pt-16">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="grid h-1.5 w-1.5 place-items-center rounded-full bg-brand" />
            Manufacturing in Bhiwadi since 2002
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Precision, forged<br className="hidden sm:block" />
            into <span className="text-gradient">every component</span> we ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            A.D. Industries builds CNC-machined parts, sheet-metal fabrications and
            production-ready assemblies for OEMs across automotive, energy and
            automation — engineered from our facility in Bhiwadi, Rajasthan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/contact" className="btn-brand btn-brand-hover">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="btn-ghost-glass">
              Explore products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8 sm:gap-10">
            {stats.slice(0,3).map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold sm:text-3xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative lg:col-span-5"
        >
          <div className="glass relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={heroImg}
              alt="A.D. Industries CNC production floor"
              width={1920}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-6">
              <div className="glass-strong flex items-center gap-3 rounded-2xl p-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/20 text-brand">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">ISO 9001:2015 certified</div>
                  <div className="text-xs text-muted-foreground">100% inspection on critical parts</div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-float glass absolute -bottom-6 -left-6 hidden rounded-2xl p-4 sm:block">
            <div className="text-xs text-muted-foreground">On-time delivery</div>
            <div className="font-display text-2xl font-bold">99%</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["CNC Machining", "Fabrication", "Assembly", "Heat Treatment", "Finishing", "Reverse Engineering", "Prototyping"];
  const row = [...words, ...words];
  return (
    <section className="border-y border-foreground/10 bg-foreground/[0.02] py-6">
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4 text-brand" />
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-x py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Who we are</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            A quiet obsession with tolerance, finish and delivery.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="text-lg text-muted-foreground">
            Founded in 2002 in the RIICO Industrial Area of Bhiwadi, A.D. Industries
            has spent two decades earning the trust of OEMs who cannot afford variation.
            We invest in machines, people and process — and it shows up in what we ship.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["ISO 9001:2015 quality systems", "In-house CNC + fabrication + finishing", "Dedicated program managers", "Full PPAP documentation"].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" />
                <p className="text-sm text-foreground/80">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const svcIcons = [Cog, Factory, Wrench, Gauge, ShieldCheck, Sparkles];

function Services() {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Capabilities</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
              End-to-end manufacturing under one roof.
            </h2>
          </div>
          <Link to="/services" className="btn-ghost-glass text-sm">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = svcIcons[i % svcIcons.length];
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="hover-lift group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card/60 p-6 backdrop-blur hover:border-brand/40">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-glow/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Products</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Built to specification. Shipped on time.</h2>
          </div>
          <Link to="/products" className="btn-ghost-glass text-sm">
            View catalogue <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link to="/products" className="group block overflow-hidden rounded-3xl border border-foreground/10 bg-card/60 backdrop-blur transition hover:border-brand/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { t: "Two decades of OEM trust", d: "Since 2002, delivering to India's most demanding manufacturers." },
    { t: "In-house everything", d: "From raw material to finish — no supplier chains, no surprises." },
    { t: "Program-managed", d: "One point of contact, weekly reviews, transparent status." },
    { t: "Documentation-first", d: "Every part ships with inspection reports and revision history." },
  ];
  return (
    <section className="relative overflow-hidden py-24">
      <div className="aurora-bg" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Why A.D. Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">The partner OEMs quietly rely on.</h2>
          <p className="mt-6 text-muted-foreground">
            We're built for the boring, beautiful work of delivering the same
            quality every single week — for years.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="glass hover-lift rounded-3xl p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Enquiry & NDA", d: "Share drawings and specs — we sign a mutual NDA the same day." },
    { n: "02", t: "DFM & Quotation", d: "Design-for-manufacture feedback and a firm quote within 48–72 hours." },
    { n: "03", t: "Prototype & PPAP", d: "First articles with dimensional reports and material certificates." },
    { n: "04", t: "Production", d: "Scheduled runs with weekly status calls and on-time delivery guarantees." },
  ];
  return (
    <section className="container-x py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">How we work</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">A calm, predictable manufacturing process.</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <div className="relative h-full rounded-3xl border border-foreground/10 bg-card/60 p-6 backdrop-blur">
              <div className="font-display text-5xl font-black text-brand/30">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Industries served</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Parts you'll find in surprising places.</h2>
          </div>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {industries.map((n, i) => (
          <Reveal key={n} delay={i * 0.03}>
            <div className="hover-lift rounded-2xl border border-foreground/10 bg-card/60 px-5 py-6 text-sm font-medium backdrop-blur transition hover:border-brand/40 hover:text-brand">
              {n}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur sm:p-14">
        <div className="aurora-bg opacity-70" />
        <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-black sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <img
          src={facilityImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-x py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">Kind words</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">What partners say about working with us.</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="hover-lift h-full rounded-3xl border border-foreground/10 bg-card/60 p-6 backdrop-blur">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-4 text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 border-t border-foreground/10 pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="container-x py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Answers to what most partners ask.</h2>
          <p className="mt-4 text-muted-foreground">Can't find what you need? Write to us — we reply within one business day.</p>
        </Reveal>
        <div className="grid gap-3 lg:col-span-8">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group rounded-2xl border border-foreground/10 bg-card/60 p-5 backdrop-blur open:border-brand/40">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-foreground/10 text-xs transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-brand/20 via-card to-card/40 p-10 sm:p-16">
        <div className="aurora-bg opacity-90" />
        <div className="relative z-10 grid gap-6 sm:grid-cols-2 sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Ready to move a program to Bhiwadi?</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Share your drawings, tell us your volumes. We'll send a quote and a
              first-article plan within 72 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            <Link to="/contact" className="btn-brand btn-brand-hover">Start a project <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/products" className="btn-ghost-glass">See products</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
