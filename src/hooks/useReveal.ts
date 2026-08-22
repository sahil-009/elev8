import { useEffect, useRef } from "react";

/**
 * Intersection-Observer hook that adds the `data-revealed` attribute
 * to an element when it scrolls into view.
 *
 * Usage:
 *   const ref = useReveal<HTMLDivElement>();
 *   <div ref={ref} className="reveal">…</div>
 *
 * Pair with the `.reveal` / `[data-revealed]` CSS rules in styles.css.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.setAttribute("data-revealed", "");
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Variant that applies reveal to multiple children with stagger.
 * Returns a ref to attach to the parent container — each direct
 * child with `.reveal-child` will be animated in sequence.
 */
export function useRevealChildren<T extends HTMLElement = HTMLElement>(
  threshold = 0.1,
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          const children = container.querySelectorAll(".reveal-child");
          children.forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
            child.setAttribute("data-revealed", "");
          });
          observer.unobserve(container);
        }
      },
      { threshold },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
