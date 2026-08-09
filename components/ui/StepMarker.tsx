interface StepMarkerProps {
  step: string;
  label: string;
}

export function StepMarker({ step, label }: StepMarkerProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
        {step}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}