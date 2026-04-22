"use client";

import { useEffect, useMemo, useState } from "react";

type Options = {
  /** CSS margin passed to IntersectionObserver (tune for sticky header). */
  rootMargin?: string;
};

/**
 * Tracks which section id is most visible in the viewport for in-page nav highlighting.
 */
export function useScrollSpy(sectionIds: readonly string[], options: Options = {}) {
  const { rootMargin = "-20% 0px -55% 0px" } = options;
  const stableIds = useMemo(() => [...sectionIds], [sectionIds]);
  const [activeId, setActiveId] = useState<string>(() => stableIds[0] ?? "");

  useEffect(() => {
    const elements = stableIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const pickBest = () => {
      let bestId = stableIds[0] ?? "";
      let bestScore = -1;

      for (const id of stableIds) {
        const score = ratios.get(id) ?? 0;
        if (score >= bestScore) {
          bestScore = score;
          bestId = id;
        }
      }

      setActiveId(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id) continue;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        pickBest();
      },
      { root: null, rootMargin, threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1] },
    );

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, stableIds]);

  return activeId;
}
