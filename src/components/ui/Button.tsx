"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  shape?: "default" | "cloud-pill" | "blob" | "badge";
  cloudTone?: "red" | "cream";
  className?: string;
};

const classes = {
  primary:
    "bg-brand-red text-brand-sun border-brand-red hover:-translate-y-0.5",
  secondary:
    "bg-white text-brand-ink border-brand-border hover:border-brand-red hover:text-brand-red hover:bg-brand-peach/40",
  ghost:
    "bg-transparent text-brand-ink border-transparent hover:bg-white/70",
};

const shapes = {
  default: "rounded-full",
  "cloud-pill": "cloud-pill-button",
  blob: "cloud-blob-button",
  badge: "cloud-badge-button",
};

export function Button({
  children,
  href,
  variant = "primary",
  shape = "default",
  cloudTone = "red",
  className = "",
}: ButtonProps) {
  const commonClassName = `inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-colors ${classes[variant]} ${shapes[shape]} ${cloudTone === "cream" ? "cloud-cream" : ""} ${className}`;

  const content = (
    <motion.span whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className={commonClassName}>
      {children}
    </motion.span>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }

    return <Link href={href}>{content}</Link>;
  }

  return content;
}
