import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconArrowRight, IconArrowUpRight } from "./icons";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";
type Arrow = "none" | "right" | "external";

const baseClasses =
  "group inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background whitespace-nowrap motion-reduce:transition-none";

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-sm hover:bg-accent-hover hover:shadow-md",
  secondary:
    "border border-border-strong text-foreground hover:border-foreground/40 hover:bg-surface-muted",
  ghost: "text-foreground/70 hover:text-foreground",
  inverse: "border border-border-strong bg-surface text-foreground hover:bg-surface-muted",
};

const arrowIconClasses = "transition-transform duration-150 group-hover:translate-x-0.5";

type ButtonProps = {
  href: string | null | undefined;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  arrow?: Arrow;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  arrow = "none",
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);
  const arrowIcon =
    arrow === "right" ? (
      <IconArrowRight className={arrowIconClasses} width={16} height={16} />
    ) : arrow === "external" ? (
      <IconArrowUpRight className={arrowIconClasses} width={16} height={16} />
    ) : null;

  if (!href) {
    return null;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
        {arrowIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {arrowIcon}
    </Link>
  );
}
