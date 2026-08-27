import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Megaphone, Compass, Users, Handshake, CheckCircle2, ClipboardList, Calendar, Repeat, BookOpen } from "lucide-react";
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
  { text: "Understand your team structure, roles, and challenges", icon: ClipboardList },
  { text: "Design programs aligned with your business context", icon: Compass },
  { text: "Deliver experiential, activity-driven sessions", icon: Users },
  { text: "Focus on application in real workplace scenarios", icon: BookOpen },
];

const outcomes = [
  "Confident speakers and presenters",
  "Stronger leadership at every level",
  "Better collaboration across teams",
  "Improved communication in client and internal environments",
];

const formats = [
  { text: "Workshops (half-day / full-day)", icon: Calendar },
  { text: "Leadership development programs", icon: Compass },
  { text: "Communication training series", icon: Megaphone },
  { text: "Ongoing capability-building partnerships", icon: Repeat },
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
              Build confident communicators and <span className="text-primary">effective leaders</span>
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
          <h2 ref={focusTitleRef} className="reveal text-3xl font-bold sm:text-4xl"><span className="text-primary">Core focus</span> areas</h2>
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

      {/* ─── How we work / Outcomes / Formats — Visual cards ─── */}
      <section className="border-b border-border">
        <div ref={detailsRef} className="container-page grid gap-8 py-16 md:py-20 lg:grid-cols-3">

          {/* How we work — dark card with numbered steps */}
          <div className="reveal-child overflow-hidden rounded-sm bg-ink text-ink-foreground">
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Process</p>
              <h2 className="mt-3 text-2xl font-bold">How we work</h2>
              <ol className="mt-8 space-y-0">
                {howWeWork.map((item, i) => (
                  <li key={item.text} className="flex items-start gap-4 border-t border-ink-foreground/10 py-5 first:border-0 first:pt-0 last:pb-0">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <p className="text-sm font-medium leading-relaxed text-ink-foreground/85">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Outcomes — white card with checkmarks */}
          <div className="reveal-child overflow-hidden rounded-sm border-2 border-primary/15 bg-card">
            <div className="border-b-2 border-primary/15 bg-accent/50 px-8 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What You Get</p>
              <h2 className="mt-2 text-2xl font-bold">Outcomes</h2>
            </div>
            <ul className="space-y-0 p-8">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border/60 py-4 first:pt-0 last:border-0 last:pb-0">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement formats — card with icon pills */}
          <div className="reveal-child overflow-hidden rounded-sm border border-border bg-card">
            <div className="border-b border-border bg-secondary px-8 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Flexible Options</p>
              <h2 className="mt-2 text-2xl font-bold">Engagement formats</h2>
            </div>
            <div className="space-y-4 p-8">
              {formats.map((item) => (
                <div key={item.text} className="card-lift flex items-center gap-4 rounded-sm border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/85">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div ref={ctaRef} className="reveal container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="max-w-2xl font-display text-xl font-bold sm:text-2xl">
            When communication improves, <span className="text-primary">performance follows</span>. When leadership improves,
            <span className="text-primary"> organizations grow</span>.
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
