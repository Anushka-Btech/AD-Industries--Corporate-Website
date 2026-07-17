import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact A.D. Industries — Request a quote" },
      { name: "description", content: "Get in touch with A.D. Industries. Facility in RIICO Industrial Area, Bhiwadi, Rajasthan. Phone, email and WhatsApp." },
      { property: "og:title", content: "Contact A.D. Industries" },
      { property: "og:description", content: "Reach us — Bhiwadi, Rajasthan." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent", { description: "Thank you — we'll reply within one business day." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            Tell us about your <span className="text-gradient">next project</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Share drawings, specs or a rough idea. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { Icon: MapPin, t: "Facility", d: "RIICO Industrial Area, Bhiwadi, Rajasthan 301019, India" },
              { Icon: Phone, t: "Phone", d: "+91 98765 43210" },
              { Icon: Mail, t: "Email", d: "hello@adindustries.in" },
              { Icon: Clock, t: "Business hours", d: "Mon–Sat · 9:30am – 6:30pm IST" },
              { Icon: MessageSquare, t: "WhatsApp", d: "Chat with our team any time" },
            ].map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="glass hover-lift rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t}</div>
                      <div className="mt-1 font-medium">{d}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-3xl border border-foreground/10">
                <iframe
                  title="A.D. Industries location on map"
                  src="https://www.google.com/maps?q=RIICO%20Industrial%20Area%20Bhiwadi%20Rajasthan&output=embed"
                  loading="lazy"
                  className="aspect-video w-full grayscale-[35%]"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold">Request a quote</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tell us what you're building.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Input name="name" label="Full name" required />
                  <Input name="company" label="Company" />
                  <Input name="email" type="email" label="Email" required />
                  <Input name="phone" label="Phone" />
                </div>
                <div className="mt-4">
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">Project details</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Volumes, materials, tolerances, timelines…"
                    className="w-full rounded-2xl border border-foreground/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-brand/60"
                  />
                </div>
                <button
                  disabled={submitting}
                  className="btn-brand btn-brand-hover mt-6 justify-center disabled:opacity-60"
                >
                  {submitting ? "Sending…" : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-muted-foreground">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-foreground/10 bg-background/50 px-4 py-2.5 text-sm outline-none transition focus:border-brand/60"
      />
    </div>
  );
}
