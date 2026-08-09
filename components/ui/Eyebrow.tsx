interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  );
}