import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Megaphone, Compass, Users, Handshake } from "lucide-react";
import { photos } from "@/lib/site";
import { useReveal, useRevealChildren } from "@/hooks/useReveal";

export const Route = createFileRoute("/corporates")({
  head: () => ({
    meta: [
      { title: "For Corporates — Communication, Leadership & Team Programs | Elev8" },
      {
        name: "description",
        content:
          "Elev8 partners with organizations on public speaking, leadership development, team building and workplace communication through practical, activity-driven training.",
      },
      { property: "og:title", content: "For Corporates — Elev8 Training Programs" },
      {
        property: "og:description",
        content:
          "Build confident communicators and effective leaders with experiential workshops designed around your business context.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/corporates" },
    ],
    links: [{ rel: "canonical", href: "/corporates" }],
  }),
  component: CorporatesPage,
});

const focusAreas = [
  {
    icon: Megaphone,
    title: "Public Speaking & Executive Communication",
    body: "Help teams communicate ideas with clarity and confidence — from meetings to presentations and client interactions.",
  },
  {
    icon: Compass,
    title: "Leadership Development",
    body: "Enable managers to lead with clarity, accountability, and influence — especially during the transition from individual contributor to team leader.",
  },
  {
    icon: Users,
    title: "Team Building & Collaboration",
    body: "Strengthen trust, alignment, and collaboration within teams through structured, activity-based learning.",
  },
  {
    icon: Handshake,
    title: "Workplace & Sales Communication",
    body: "Improve day-to-day communication, stakeholder handling, and client conversations.",
  },
];

const howWeWork = [
  "Understand your team structure, roles, and challenges",
  "Design programs aligned with your business context",
  "Deliver experiential, activity-driven sessions",
  "Focus on application in real workplace scenarios",
];

const outcomes = [
  "Confident speakers and presenters",
  "Stronger leadership at every level",
  "Better collaboration across teams",
  "Improved communication in client and internal environments",
];

const formats = [
  "Workshops (half-day / full-day)",
  "Leadership development programs",
  "Communication training series",
  "Ongoing capability-building partnerships",
];

function CorporatesPage() {
  const heroTextRef = useReveal<HTMLDivElement>();
  const heroImgRef = useReveal<HTMLImageElement>();
  const focusTitleRef = useReveal<HTMLHeadingElement>();
  const focusCardsRef = useRevealChildren<HTMLDivElement>();
  const detailsRef = useRevealChildren<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2">
          <div ref={heroTextRef} className="reveal-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              For Corporates
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Build confident communicators and effective leaders
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              As organizations grow, the biggest gaps are rarely technical. They show up in
              communication, leadership, and team alignment. Elev8 partners with organizations to
              develop these critical capabilities through practical, high-impact training programs.
            </p>
          </div>
          <img
            ref={heroImgRef}
            src={photos.teamSession}
            alt="Activity-based team building session with a corporate group"
            className="reveal-right aspect-4/3 w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 ref={focusTitleRef} className="reveal text-3xl font-bold sm:text-4xl">Core focus areas</h2>
          <div ref={focusCardsRef} className="mt-10 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="card-lift reveal-child rounded-sm border border-border bg-card p-8">
                <area.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold">{area.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div ref={detailsRef} className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-3">
          <div className="reveal-child">
            <h2 className="text-2xl font-bold">How we work</h2>
            <ol className="mt-6 space-y-4">
              {howWeWork.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm">
                  <span className="font-display font-bold text-primary">0{i + 1}</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal-child">
            <h2 className="text-2xl font-bold">Outcomes</h2>
            <ul className="mt-6 space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-child">
            <h2 className="text-2xl font-bold">Engagement formats</h2>
            <ul className="mt-6 space-y-4">
              {formats.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div ref={ctaRef} className="reveal container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="max-w-2xl font-display text-xl font-bold sm:text-2xl">
            When communication improves, performance follows. When leadership improves,
            organizations grow.
          </p>
          <Link
            to="/contact"
            className="cta-glow inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discuss your team <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
