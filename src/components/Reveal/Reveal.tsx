"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "blockquote";
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delay ? { ["--reveal-delay" as string]: `${delay}ms` } : {}),
  };

  return (
    <Tag
      ref={ref as never}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}
