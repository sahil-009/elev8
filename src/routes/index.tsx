import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, Target, Users, TrendingUp, Award, BookOpen, Briefcase, Lightbulb, Presentation } from "lucide-react";
import { contact, gallery, photos, stats } from "@/lib/site";
import { useReveal, useRevealChildren } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Elev8 — Placement Training for Colleges & Corporate Programs" },
      {
        name: "description",
        content:
          "Elev8 helps colleges improve placements and companies build confident communicators and leaders. 14 years, 2,00,000+ professionals trained, 100+ college partners.",
      },
      { property: "og:title", content: "Elev8 — 14 Years of Building Better Talent" },
      {
        property: "og:description",
        content:
          "We partner with organizations and institutions to develop people who perform. Placement Accelerator programs for colleges and capability-building for corporates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/** Individual animated stat counter */
function AnimatedStat({ stat }: { stat: (typeof stats)[number] }) {
  const [display, ref] = useCountUp<HTMLParagraphElement>(stat.numericEnd, {
    duration: 2200,
    suffix: stat.suffix,
  });

  return (
    <div className="reveal-child text-center">
      <p ref={ref} className="stat-value font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-ink-foreground/70">{stat.label}</p>
    </div>
  );
}

function HomePage() {
  const heroTextRef = useReveal<HTMLDivElement>();
  const heroImgRef = useReveal<HTMLDivElement>();
  const statsRef = useRevealChildren<HTMLDivElement>();
  const missionRef = useReveal<HTMLDivElement>();
  const whoTitleRef = useReveal<HTMLHeadingElement>();
  const cardsRef = useRevealChildren<HTMLDivElement>();
  const snapTitleRef = useReveal<HTMLHeadingElement>();
  const snapCardsRef = useRevealChildren<HTMLDivElement>();
  const galleryTitleRef = useReveal<HTMLDivElement>();
  const galleryGridRef = useRevealChildren<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div ref={heroTextRef} className="reveal-left">
            <p className="inline-flex items-center rounded-sm border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              14 years of building better talent
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Your degree gets you the interview.{" "}
              <span className="text-primary">We get you the job.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We partner with organizations and institutions to develop people who perform — from
              corporate workforce development to campus employability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="cta-glow inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
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

          <div ref={heroImgRef} className="reveal-right relative">
            <img
              src={photos.auditoriumCelebration}
              alt="Students celebrating at the close of an Elev8 campus placement program"
              className="aspect-4/3 w-full rounded-sm object-cover"
              loading="eager"
            />
            <img
              src={photos.labSession}
              alt="Aptitude practice session in a college computer lab"
              className="float absolute -bottom-8 -left-8 hidden w-52 rounded-sm border-4 border-background object-cover shadow-xl lg:block"
            />
          </div>
        </div>
      </section>

      {/* ─── Animated Stats Bar ─────────────────────────── */}
      <section className="border-b border-border bg-ink text-ink-foreground">
        <div ref={statsRef} className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <AnimatedStat key={s.label} stat={s} />
          ))}
        </div>
      </section>

      {/* ─── Mission Statement ──────────────────────────── */}
      <section className="border-b border-border">
        <div ref={missionRef} className="reveal container-page py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              We deliver practical, <span className="text-primary">industry-aligned learning</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              From corporate workforce development to campus employability, our programs build
              capability, confidence, and performance. We don't teach theory — we build people who
              can perform in real-world settings.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-sm bg-accent">
                  <Target className="size-5 text-primary" />
                </div>
                <p className="text-sm font-semibold">Capability</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-sm bg-accent">
                  <TrendingUp className="size-5 text-primary" />
                </div>
                <p className="text-sm font-semibold">Confidence</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-sm bg-accent">
                  <Award className="size-5 text-primary" />
                </div>
                <p className="text-sm font-semibold">Performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who we work with ───────────────────────────── */}
      <section className="border-b border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 ref={whoTitleRef} className="reveal text-3xl font-bold sm:text-4xl">Who <span className="text-primary">we work with</span></h2>
          <div ref={cardsRef} className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Colleges Card */}
            <Link
              to="/colleges"
              className="card-lift reveal-child group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative">
                <img
                  src={photos.campusCohort}
                  alt="A college cohort at an Elev8 placement readiness program"
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Campus Programs</p>
                  <h3 className="mt-1 text-xl font-bold text-white">Colleges & Institutions</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="flex-1 text-sm text-muted-foreground">
                  Partnering to improve placement outcomes, student readiness, and campus hiring
                  success through structured, outcome-driven programs.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-2 rounded-sm bg-secondary p-3">
                    <BookOpen className="size-4 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">Aptitude</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-sm bg-secondary p-3">
                    <Presentation className="size-4 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">Interviews</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-sm bg-secondary p-3">
                    <GraduationCap className="size-4 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">Placement</span>
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  For Colleges{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* Corporates Card */}
            <Link
              to="/corporates"
              className="card-lift reveal-child group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative">
                <img
                  src={photos.corporateGroup}
                  alt="Corporate team during an Elev8 communication workshop"
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Workforce Development</p>
                  <h3 className="mt-1 text-xl font-bold text-white">Corporates & Teams</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="flex-1 text-sm text-muted-foreground">
                  Working with organizations to strengthen communication, leadership, and overall
                  team performance through practical, high-impact sessions.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-2 rounded-sm bg-secondary p-3">
                    <Users className="size-4 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">Teams</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-sm bg-secondary p-3">
                    <Lightbulb className="size-4 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">Leadership</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-sm bg-secondary p-3">
                    <Briefcase className="size-4 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">Speaking</span>
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  For Corporates{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Programs Snapshot ──────────────────────────── */}
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <h2 ref={snapTitleRef} className="reveal text-3xl font-bold sm:text-4xl">Programs <span className="text-primary">snapshot</span></h2>
          <div ref={snapCardsRef} className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-lift reveal-child rounded-sm border border-border bg-card p-8">
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

            <div className="card-lift reveal-child rounded-sm border border-border bg-card p-8">
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

      {/* ─── Gallery ────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <div ref={galleryTitleRef} className="reveal">
            <h2 className="text-3xl font-bold sm:text-4xl">On campus and <span className="text-primary">in the room</span></h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A look at sessions delivered across colleges and organizations.
            </p>
          </div>
          <div ref={galleryGridRef} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.src} className="gallery-img reveal-child rounded-sm">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-sm object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="bg-ink text-ink-foreground">
        <div ref={ctaRef} className="reveal container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to improve your <span className="text-primary">placement or team outcomes?</span>
            </h2>
            <p className="mt-2 text-ink-foreground/70">
              Call {contact.phoneDisplay} or send us a note — we'll design the program around you.
            </p>
          </div>
          <Link
            to="/contact"
            className="cta-glow inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Talk to Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
