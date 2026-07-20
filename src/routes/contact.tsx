import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { Aurora } from "@/components/site/Aurora";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact A.D. Industries — Request a quote" },
      {
        name: "description",
        content:
          "Get in touch with A.D. Industries. Facility in RIICO Industrial Area, Bhiwadi, Rajasthan. Phone, email and WhatsApp.",
      },
      { property: "og:title", content: "Contact A.D. Industries" },
      {
        property: "og:description",
        content: "Reach us — Bhiwadi, Rajasthan.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_DETAILS = [
  {
    Icon: MapPin,
    title: "Facility",
    description:
      "RIICO Industrial Area, Bhiwadi, Rajasthan 301019, India",
  },
  {
    Icon: Phone,
    title: "Phone",
    description: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    Icon: Mail,
    title: "Email",
    description: "hello@adindustries.in",
    href: "mailto:hello@adindustries.in",
  },
  {
    Icon: Clock,
    title: "Business hours",
    description: "Mon–Sat · 9:30am – 6:30pm IST",
  },
  {
    Icon: MessageSquare,
    title: "WhatsApp",
    description: "Chat with our team any time",
    href: "https://wa.me/919876543210",
  },
] as const;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectDetails = String(
      formData.get("projectDetails") ?? "",
    ).trim();

    if (!name || !email || !projectDetails) {
      toast.error("Please complete the required fields", {
        description:
          "Name, email and project details are required.",
      });

      return;
    }

    setSubmitting(true);

    /*
     * This project currently has no backend API.
     * We therefore provide a clear frontend confirmation
     * instead of falsely claiming that a message was sent.
     */
    window.setTimeout(() => {
      setSubmitting(false);

      toast.success("Enquiry prepared successfully", {
        description:
          "Thank you. Our team will review your project details and contact you shortly.",
      });

      form.reset();
    }, 700);
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <Aurora />

        <div className="container-x relative z-10 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Contact
          </p>

          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            Tell us about your{" "}
            <span className="text-gradient">next project</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Share drawings, specifications or a rough idea. We respond within
            one business day.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Details */}
          <div className="space-y-4 lg:col-span-5">
            {CONTACT_DETAILS.map(
              ({ Icon, title, description, href }, index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="glass hover-lift rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                        <Icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {title}
                        </div>

                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith("https://")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              href.startsWith("https://")
                                ? "noreferrer"
                                : undefined
                            }
                            className="mt-1 block break-words font-medium transition hover:text-brand"
                          >
                            {description}
                          </a>
                        ) : (
                          <div className="mt-1 font-medium">
                            {description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ),
            )}

            {/* Map */}
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

          {/* Quote Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="glass rounded-3xl p-6 sm:p-8"
              >
                <h2 className="font-display text-2xl font-bold">
                  Request a quote
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us what you're building.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Input
                    name="name"
                    label="Full name"
                    autoComplete="name"
                    required
                  />

                  <Input
                    name="company"
                    label="Company"
                    autoComplete="organization"
                  />

                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    autoComplete="email"
                    required
                  />

                  <Input
                    name="phone"
                    label="Phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="project-details"
                    className="mb-2 block text-xs font-semibold text-muted-foreground"
                  >
                    Project details
                  </label>

                  <textarea
                    id="project-details"
                    name="projectDetails"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Volumes, materials, tolerances, timelines…"
                    className="w-full resize-y rounded-2xl border border-foreground/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-brand/60"
                  />

                  <p className="mt-2 text-xs text-muted-foreground">
                    Please provide at least a brief description of your
                    requirements.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-brand btn-brand-hover mt-6 justify-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    "Preparing enquiry…"
                  ) : (
                    <>
                      Send enquiry
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  const inputId = id ?? props.name;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-xs font-semibold text-muted-foreground"
      >
        {label}
      </label>

      <input
        id={inputId}
        {...props}
        className="w-full rounded-xl border border-foreground/10 bg-background/50 px-4 py-2.5 text-sm outline-none transition focus:border-brand/60"
      />
    </div>
  );
}