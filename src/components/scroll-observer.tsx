"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollObserverProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ScrollObserver({
  children,
  className,
  stagger,
}: ScrollObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (stagger) applyStaggerIndices(el);

    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className ?? ""}`}>
      {children}
    </div>
  );
}

function applyStaggerIndices(parent: HTMLElement) {
  const children = parent.querySelectorAll(":scope > *");
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child instanceof HTMLElement) {
      child.classList.add("animate-on-scroll");
      child.style.setProperty("--stagger-index", String(i));
    }
  }
}
