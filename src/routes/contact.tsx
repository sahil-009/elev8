import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/lib/site";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elev8 — Placement & Corporate Training Enquiries" },
      {
        name: "description",
        content:
          "Talk to Elev8 about placement training for your college or communication and leadership programs for your team. Call +91 99161 70317 or email skills.elev8@gmail.com.",
      },
      { property: "og:title", content: "Contact Elev8" },
      {
        property: "og:description",
        content: "Reach the Elev8 team for college placement programs or corporate training.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [audience, setAudience] = useState<"corporate" | "college">("corporate");
  const infoRef = useReveal<HTMLDivElement>();
  const formRef = useReveal<HTMLFormElement>();

  return (
    <section className="border-b border-border">
      <div className="container-page grid gap-14 py-16 md:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div ref={infoRef} className="reveal-left">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Talk <span className="text-primary">to us</span></h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Tell us about your college or your team, and we'll design the program around your
            outcomes.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-primary">
                <Phone className="size-5 text-primary" /> {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="flex items-center gap-3 hover:text-primary">
                <Mail className="size-5 text-primary" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary"
              >
                <Linkedin className="size-5 text-primary" /> Elev8 Learning
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary"
              >
                <Instagram className="size-5 text-primary" /> {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          className="reveal-right rounded-sm border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const subject = encodeURIComponent(
              `${audience === "college" ? "College" : "Corporate"} enquiry — ${String(data.get("organisation") ?? "")}`,
            );
            const body = encodeURIComponent(
              `Name: ${String(data.get("name") ?? "")}\nOrganisation: ${String(data.get("organisation") ?? "")}\nEmail: ${String(data.get("email") ?? "")}\nPhone: ${String(data.get("phone") ?? "")}\n\n${String(data.get("message") ?? "")}`,
            );
            window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`;
            toast.success("Opening your email app with the enquiry ready to send.");
          }}
        >
          <div className="flex gap-2">
            {(["corporate", "college"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAudience(option)}
                className={`flex-1 rounded-sm border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  audience === option
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary"
                }`}
              >
                {option === "corporate" ? "I'm a company" : "I'm a college"}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4">
            <Field label="Your name" name="name" required />
            <Field
              label={audience === "corporate" ? "Company name" : "College name"}
              name="organisation"
              required
            />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                What do you need?
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send enquiry
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            This opens your email app with the details filled in.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
