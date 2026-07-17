import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/career", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <div
        className={`container-x flex items-center justify-between rounded-full border transition-all duration-500 ${
          scrolled
            ? "glass-strong border-foreground/10 py-2 shadow-elegant"
            : "border-transparent bg-transparent py-3"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow font-display text-sm font-black text-black shadow-glow">
            AD
          </span>
          <span className="font-display text-sm font-bold tracking-tight sm:text-base">
            A.D. Industries
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-foreground/10" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 pr-1">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-90 sm:inline-flex"
          >
            Get a quote <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-foreground/10 bg-foreground/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-x mt-2 lg:hidden">
          <div className="glass-strong rounded-3xl p-3">
            <nav className="grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    pathname === item.to
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:bg-foreground/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
