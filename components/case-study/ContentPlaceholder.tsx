export function ContentPlaceholder({ label }: { label: string }) {
  return (
    <p className="rounded-lg border border-dashed border-border-strong bg-surface px-4 py-3 text-sm italic text-muted">
      {label}
    </p>
  );
}
