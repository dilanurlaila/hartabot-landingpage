import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-haro-gold text-white shadow-[0_14px_32px_rgba(246,173,85,0.28)] hover:bg-haro-gold-hover hover:shadow-[0_18px_38px_rgba(226,149,59,0.32)]",
  secondary:
    "border-[1.5px] border-trust-navy bg-transparent text-trust-navy hover:bg-sage-clear",
  ghost: "text-trust-navy hover:bg-white/55",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-medium leading-none transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-haro-gold/25",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
