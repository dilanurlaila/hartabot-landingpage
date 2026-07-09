import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-sage-active/35 bg-white/70 px-4 py-2 text-sm font-semibold text-trust-navy shadow-[0_8px_24px_rgba(26,54,93,0.06)] backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
