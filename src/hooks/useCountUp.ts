import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Animated count-up hook that starts when the element scrolls into view.
 *
 * Returns `[displayValue, ref]` — attach `ref` to the element that should
 * trigger the animation, and render `displayValue` as the visible number.
 *
 * The counter uses an ease-out curve so the last digits tick more slowly,
 * giving a satisfying "settling" feel.
 */
export function useCountUp<T extends HTMLElement = HTMLElement>(
  end: number,
  {
    duration = 2000,
    threshold = 0.3,
    separator = ",",
    prefix = "",
    suffix = "",
  }: {
    /** Animation duration in ms (default 2000) */
    duration?: number;
    /** IntersectionObserver threshold (default 0.3) */
    threshold?: number;
    /** Thousands separator (default ",") */
    separator?: string;
    /** String prepended to the number */
    prefix?: string;
    /** String appended to the number */
    suffix?: string;
  } = {},
): [string, React.RefObject<T | null>] {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  const formatNumber = useCallback(
    (n: number) => {
      // Indian-style grouping: first group of 3 from right, then groups of 2
      const str = Math.round(n).toString();
      if (separator === "") return `${prefix}${str}${suffix}`;

      // Use Intl for proper Indian formatting
      const formatted = new Intl.NumberFormat("en-IN").format(Math.round(n));
      return `${prefix}${formatted}${suffix}`;
    },
    [prefix, suffix, separator],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.unobserve(el);

          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for a smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(eased * end);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(end);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, threshold]);

  return [formatNumber(value), ref];
}
