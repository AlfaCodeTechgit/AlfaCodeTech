import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

interface SmoothTransitionProps {
  children: ReactNode;
  duration?: number;
}

/**
 * Componente de transição suave para aplicar em todo o site.
 * Cria uma animação suave de fade in/out entre transições de página.
 */
export function SmoothTransition({
  children,
  duration = 300,
}: SmoothTransitionProps) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, duration / 2);

    return () => clearTimeout(timer);
  }, [location.pathname, children, duration]);

  return (
    <div
      className="transition-all"
      style={{
        opacity: isTransitioning ? 0 : 1,
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      {displayChildren}
    </div>
  );
}

/**
 * Componente para animar elementos ao entrar na viewport
 */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, delay]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Componente para transições de slide suave
 */
interface SlideTransitionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SlideTransition({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style = {},
}: SlideTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, delay]);

  const getInitialTransform = () => {
    const distance = 30;
    switch (direction) {
      case "left":
        return `translateX(-${distance}px)`;
      case "right":
        return `translateX(${distance}px)`;
      case "down":
        return `translateY(${distance}px)`;
      case "up":
      default:
        return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={setRef}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getInitialTransform(),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Componente para escala suave (zoom)
 */
interface ScaleTransitionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleTransition({
  children,
  delay = 0,
  className = "",
}: ScaleTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, delay]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
      }}
    >
      {children}
    </div>
  );
}
