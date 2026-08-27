import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { contact, logoUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img src={logoUrl} alt="Elev8" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">
            Placement training for colleges and communication, leadership and team programs for
            organizations. 14 years, 2,00,000+ professionals trained.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/colleges" className="hover:text-primary">
                For Colleges
              </Link>
            </li>
            <li>
              <Link to="/corporates" className="hover:text-primary">
                For Corporates
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" /> {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="flex items-center gap-2 hover:text-primary">
                <Mail className="size-4" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="size-4" /> Elev8 Learning
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="size-4" /> {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page py-5 text-xs text-ink-foreground/50">
          © {new Date().getFullYear()} Elev8. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
