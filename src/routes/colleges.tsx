import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { photos } from "@/lib/site";
import { useReveal, useRevealChildren } from "@/hooks/useReveal";

export const Route = createFileRoute("/colleges")({
  head: () => ({
    meta: [
      { title: "For Colleges — Elev8 Placement Accelerator" },
      {
        name: "description",
        content:
          "A structured placement preparation system for colleges: pre-assessment, aptitude mastery, coding readiness, GD, technical and HR interviews, mock drives and measurable outcomes.",
      },
      { property: "og:title", content: "For Colleges — Elev8 Placement Accelerator" },
      {
        property: "og:description",
        content:
          "Every stage of the Placement Accelerator aligns with real recruitment rounds, so students are ready at each step of hiring.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/colleges" },
    ],
    links: [{ rel: "canonical", href: "/colleges" }],
  }),
  component: CollegesPage,
});

const steps = [
  {
    title: "Pre-Assessment",
    body: "Baseline evaluation of aptitude, communication, and technical skills to identify gaps and define the starting point.",
  },
  {
    title: "Aptitude Mastery (Core Focus)",
    body: "Quantitative Aptitude | Verbal Ability | Logical Reasoning. Build problem-solving ability, speed and accuracy — the primary screening stage in most hiring processes.",
  },
  {
    title: "Technical / Coding Readiness",
    body: "Core concepts and coding challenges aligned to roles and company expectations.",
  },
  {
    title: "Group Discussion (GD)",
    body: "Develop structured thinking and effective communication in group settings.",
  },
  {
    title: "Technical Interview Preparation",
    body: "Strengthen concept clarity, project articulation, and structured responses.",
  },
  {
    title: "HR Interview Preparation",
    body: "Prepare for behavioral and personal interviews with clarity and confidence.",
  },
  {
    title: "Mock Drives",
    body: "Simulated placement environments reflecting real hiring rounds, timelines, and evaluation standards.",
  },
  {
    title: "Post-Assessment",
    body: "Measure improvement across aptitude, technical skills, and interview performance with clear, trackable outcomes.",
  },
];

function CollegesPage() {
  const heroTextRef = useReveal<HTMLDivElement>();
  const heroImgRef = useReveal<HTMLImageElement>();
  const accelTitleRef = useReveal<HTMLDivElement>();
  const stepsRef = useRevealChildren<HTMLOListElement>();
  const outcomeRef = useReveal<HTMLDivElement>();
  const durationsRef = useRevealChildren<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2">
          <div ref={heroTextRef} className="reveal-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              For Colleges
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Preparing students for <span className="text-primary">the job they deserve</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We help colleges improve placements and make students job-ready through practical,
              outcome-driven training — and shape the leaders of tomorrow.
            </p>
          </div>
          <img
            ref={heroImgRef}
            src={photos.batchGroup}
            alt="An Elev8 placement training batch after a campus session"
            className="reveal-right aspect-4/3 w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <div ref={accelTitleRef} className="reveal">
            <h2 className="text-3xl font-bold sm:text-4xl">Elev8 <span className="text-primary">Placement Accelerator</span></h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              A structured, outcome-driven system designed around how companies actually hire, not how
              students typically prepare. Each stage aligns with real recruitment rounds, ensuring
              students are prepared at every step of the hiring process.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Placement preparation flow
            </h3>
            <ol ref={stepsRef} className="mt-8 space-y-0 border-l-2 border-primary/25 pl-8">
              {steps.map((step, i) => (
                <li key={step.title} className="reveal-child relative pb-10 last:pb-0">
                  <span className="step-number absolute -left-[2.6rem] flex size-8 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h4 className="text-lg font-bold">{step.title}</h4>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>

            <div ref={outcomeRef} className="reveal-scale mt-8 ml-0 rounded-sm border border-primary/30 bg-accent p-6 md:ml-8">
              <p className="font-display text-lg font-bold text-primary">Outcome: Placement Ready</p>
              <p className="mt-2 text-sm text-foreground/80">
                Students are prepared for each stage of the hiring process and able to perform with
                clarity, confidence, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div ref={durationsRef} className="container-page grid gap-10 py-16 md:grid-cols-3">
          {[
            { t: "30 hours", d: "A focused sprint covering aptitude and interview essentials." },
            { t: "60 hours", d: "Deeper coverage across aptitude, technical rounds, GD and mocks." },
            { t: "Full-year", d: "Year-long readiness building aligned to your placement calendar." },
          ].map((p) => (
            <div key={p.t} className="reveal-child border-t-2 border-ink pt-5">
              <h3 className="text-xl font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div ref={ctaRef} className="reveal container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="max-w-2xl font-display text-xl font-bold sm:text-2xl">
            From first assessment to final interview, every stage is structured for <span className="text-primary">one outcome —
            selection</span>.
          </p>
          <Link
            to="/contact"
            className="cta-glow inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Plan a program <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
