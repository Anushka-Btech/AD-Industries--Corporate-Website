import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { timeline } from "@/lib/site-data";
import facilityImg from "@/assets/facility.jpg";
import galleryImg from "@/assets/gallery-1.jpg";
import { Compass, HeartHandshake, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About A.D. Industries — 22 years of precision manufacturing" },
      { name: "description", content: "Our history, vision, mission and team — building precision components from RIICO Industrial Area, Bhiwadi since 2002." },
      { property: "og:title", content: "About A.D. Industries" },
      { property: "og:description", content: "22 years of precision manufacturing from Bhiwadi, Rajasthan." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-x relative z-10 py-16 sm:py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-widest text-brand"
          >
            Our story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
          >
            A quiet workshop that grew into a <span className="text-gradient">precision manufacturer</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Two decades ago, A.D. Industries began with a handful of manual machines in
            Bhiwadi. Today, we run a modern facility with multi-axis CNCs, a
            fabrication line and a team obsessed with getting the details right.
          </motion.p>
        </div>
      </section>

      <section className="container-x grid gap-6 pb-24 md:grid-cols-3">
        {[
          { icon: Compass, t: "Vision", d: "To be the most trusted precision manufacturer for Indian OEMs building for the world." },
          { icon: Target, t: "Mission", d: "Deliver components with metronome-like consistency and treat every partner like our only one." },
          { icon: HeartHandshake, t: "Values", d: "Craft. Consistency. Candour. In that order — every day, every shift, every part." },
        ].map(({ icon: Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 0.05}>
            <div className="hover-lift h-full rounded-3xl border border-foreground/10 bg-card/60 p-7 backdrop-blur">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-foreground/10">
              <img src={galleryImg} alt="Chairman on the shop floor" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Chairman's message</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">"We chose the boring path — and it's why we're still here."</h2>
            <p className="mt-6 text-muted-foreground">
              When we started A.D. Industries, we made a decision to say no to shortcuts —
              on quality, on process, on people. Twenty-two years later, that's still the plan.
              Our job is to make manufacturing invisible to our partners: parts show up, on time,
              to spec, every single week. Everything we do is in service of that idea.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— A.D. Sharma, Chairman</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Timeline</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Two decades of steady growth.</h2>
        </Reveal>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand/60 via-foreground/10 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className={`relative grid gap-4 sm:grid-cols-2 ${i % 2 ? "sm:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                    <div className="glass hover-lift rounded-2xl p-6">
                      <div className="font-display text-2xl font-bold text-brand">{t.year}</div>
                      <h3 className="mt-1 font-display text-lg font-bold">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <span className="absolute left-[9px] top-6 grid h-3 w-3 place-items-center rounded-full bg-brand shadow-glow sm:left-1/2 sm:-translate-x-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10">
          <img src={facilityImg} alt="A.D. Industries manufacturing facility, Bhiwadi" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-12">
            <h3 className="font-display text-3xl font-bold sm:text-5xl">Our facility</h3>
            <p className="mt-3 max-w-xl text-muted-foreground">A 45,000 sq. ft. plant in RIICO Industrial Area, Bhiwadi — running CNC, fabrication, heat treatment and finishing lines under one roof.</p>
          </div>
        </div>
      </section>
    </>
  );
}
