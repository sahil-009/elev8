import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap } from "lucide-react";
import { contact, gallery, photos, stats } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elev8 — Placement Training for Colleges & Corporate Programs" },
      {
        name: "description",
        content:
          "Elev8 helps colleges improve placements and companies build confident communicators and leaders. 14 years, 20,000+ students trained, 100+ college partners.",
      },
      { property: "og:title", content: "Elev8 — Your Degree Gets You the Interview. We Get You the Job." },
      {
        property: "og:description",
        content:
          "Placement Accelerator programs for colleges and communication, leadership and team building programs for corporates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex items-center rounded-sm border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              14 years of training excellence
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Your degree gets you the interview.{" "}
              <span className="text-primary">We get you the job.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We help colleges improve placements, students master interviews, and companies find
              and build the right talent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Talk to Us <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/colleges"
                className="inline-flex items-center gap-2 rounded-sm border border-ink px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                See Programs
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={photos.auditoriumCelebration}
              alt="Students celebrating at the close of an Elev8 campus placement program"
              className="aspect-4/3 w-full rounded-sm object-cover"
              loading="eager"
            />
            <img
              src={photos.labSession}
              alt="Aptitude practice session in a college computer lab"
              className="absolute -bottom-8 -left-8 hidden w-52 rounded-sm border-4 border-background object-cover shadow-xl lg:block"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
                <span className="text-ink-foreground">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-ink-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Who we work with</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              to="/colleges"
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary"
            >
              <img
                src={photos.campusCohort}
                alt="A college cohort at an Elev8 placement readiness program"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-7">
                <GraduationCap className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Colleges & Institutions</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  Partnering to improve placement outcomes, student readiness, and campus hiring
                  success through structured programs.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  For Colleges{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              to="/corporates"
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary"
            >
              <img
                src={photos.corporateGroup}
                alt="Corporate team during an Elev8 communication workshop"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-7">
                <Building2 className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Corporates & Teams</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  Working with organizations to strengthen communication, leadership, and overall
                  team performance.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  For Corporates{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Programs snapshot</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                For Colleges
              </p>
              <h3 className="mt-3 text-2xl font-bold">Placement Accelerator™ Programs</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Delivered as 30-hour, 60-hour, or full-year engagements, mapped to how companies
                actually hire.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["30 hours", "60 hours", "Full-year program"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                For Corporates
              </p>
              <h3 className="mt-3 text-2xl font-bold">Capability-building Workshops</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Practical, activity-driven sessions designed around your business context.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["Public Speaking", "Leadership", "Team Building", "Communication"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">On campus and in the room</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A look at sessions delivered across colleges and organizations.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-4/3 w-full rounded-sm object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to improve your placement or team outcomes?
            </h2>
            <p className="mt-2 text-ink-foreground/70">
              Call {contact.phoneDisplay} or send us a note — we'll design the program around you.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Talk to Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
