import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { logoUrl } from "@/lib/site";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/corporates", label: "For Corporates" },
  { to: "/colleges", label: "For Colleges" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highly optimized scroll listener using requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[padding,background-color] duration-300 ease-out ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container-page mx-auto transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out ${
          scrolled
            ? "border border-border/50 bg-background/80 shadow-lg backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
        style={{
          borderRadius: "9999px",
          transform: scrolled ? "scale(0.98)" : "scale(1)",
        }}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex shrink-0 items-center transition-transform hover:scale-105" onClick={() => setOpen(false)}>
            <img src={logoUrl} alt="Elev8" className="h-9 w-auto" />
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-1 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/50 p-1 shadow-sm backdrop-blur-md mr-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-primary text-primary-foreground font-semibold shadow-sm" }}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-accent hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="cta-glow rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:opacity-90"
            >
              Talk to Us
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-accent hover:text-primary md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full mt-2 origin-top transition-all duration-200 md:hidden ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-border/50 bg-background/95 shadow-xl backdrop-blur-lg">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-primary/10 text-primary font-bold border-l-4 border-primary pl-3" }}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-all hover:bg-accent hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              Talk to Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
