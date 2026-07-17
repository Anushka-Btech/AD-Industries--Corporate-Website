import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, MapPin, Send, Upload } from "lucide-react";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { jobs } from "@/lib/site-data";
import { toast } from "sonner";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers at A.D. Industries — Build things that matter" },
      { name: "description", content: "Open roles at A.D. Industries in Bhiwadi and Delhi NCR — CNC programming, quality, production and design." },
      { property: "og:title", content: "Careers — A.D. Industries" },
      { property: "og:description", content: "Join the team building precision components in Bhiwadi." },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: CareerPage,
});

function CareerPage() {
  const [selected, setSelected] = useState<string>(jobs[0].title);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application received", { description: "Thank you — we'll get back to you within a week." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Careers</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            Build things that <span className="text-gradient">actually get made</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Join a team that ships real, physical components to some of India's most
            demanding OEMs. We hire for craft and character.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <Reveal><h2 className="font-display text-2xl font-bold sm:text-3xl">Open positions</h2></Reveal>
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.04}>
                <div
                  onClick={() => setSelected(j.title)}
                  className={`hover-lift cursor-pointer rounded-2xl border p-5 backdrop-blur transition ${
                    selected === j.title
                      ? "border-brand/50 bg-brand/10"
                      : "border-foreground/10 bg-card/60 hover:border-brand/30"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold">{j.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                        <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {j.type}</span>
                        <span>{j.exp}</span>
                      </div>
                    </div>
                    <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs">Apply</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold">Apply for {selected}</h3>
                <p className="mt-1 text-sm text-muted-foreground">We reply to every application.</p>
                <div className="mt-5 grid gap-4">
                  <Input name="name" label="Full name" required />
                  <Input name="email" type="email" label="Email" required />
                  <Input name="phone" label="Phone" />
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-muted-foreground">Resume (PDF)</label>
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-foreground/20 bg-background/40 px-4 py-6 text-sm text-muted-foreground transition hover:border-brand/50">
                      <Upload className="h-4 w-4" /> Drop your resume here
                      <input type="file" accept="application/pdf" className="hidden" />
                    </label>
                  </div>
                  <button
                    disabled={submitting}
                    className="btn-brand btn-brand-hover justify-center disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : (<>Send application <Send className="h-4 w-4" /></>)}
                  </button>
                </div>
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
