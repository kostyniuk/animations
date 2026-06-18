import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  /** Classes applied to the text itself, e.g. a `text-*` color. */
  textClassName?: string;
  variant?: "lime" | "yellow" | "pink" | "cyan" | "orange";
}

const highlightVariants: Record<NonNullable<HighlightTextProps["variant"]>, string> = {
  lime: "bg-accent-green",
  yellow: "bg-yellow-300",
  pink: "bg-pink-300",
  cyan: "bg-cyan-300",
  orange: "bg-orange-300",
};

export function HighlightText({
  children,
  className,
  textClassName,
  variant = "lime",
}: HighlightTextProps) {
  return (
    <span className="relative inline-block py-2">
      <span
        className={cn(
          "absolute inset-0 scale-x-110 -skew-y-1",
          highlightVariants[variant],
          className
        )}
        aria-hidden="true"
      />
      <span className={cn("relative", textClassName)}>{children}</span>
    </span>
  );
}
