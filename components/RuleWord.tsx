type RuleWordProps = {
  children: string;
  className?: string;
};

export function RuleWord({ children, className = "" }: RuleWordProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      role="presentation"
    >
      <span className="h-px w-10 shrink-0 bg-rule sm:w-14" aria-hidden />
      <span className="label-caps text-[11px] text-ink-soft">{children}</span>
      <span className="h-px w-10 shrink-0 bg-rule sm:w-14" aria-hidden />
    </div>
  );
}
