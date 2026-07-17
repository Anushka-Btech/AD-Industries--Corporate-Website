import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-foreground/10 bg-background">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow font-display text-sm font-black text-black">
              AD
            </span>
            <span className="font-display text-lg font-bold">A.D. Industries</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Precision manufacturing engineered in Bhiwadi, Rajasthan. We craft
            components that power ambitious industries across India and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/10 text-muted-foreground transition hover:border-brand/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[["About","/about"],["Services","/services"],["Products","/products"],["Careers","/career"]].map(([l,h])=>(
                <li key={h}><Link to={h} className="text-foreground/80 hover:text-foreground">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[["Gallery","/gallery"],["Contact","/contact"],["Get a quote","/contact"]].map(([l,h])=>(
                <li key={l}><Link to={h} className="text-foreground/80 hover:text-foreground">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> RIICO Industrial Area, Bhiwadi, Rajasthan 301019</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> hello@adindustries.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} A.D. Industries. All rights reserved.</p>
          <p>Precision. Craft. Consistency.</p>
        </div>
      </div>
    </footer>
  );
}
