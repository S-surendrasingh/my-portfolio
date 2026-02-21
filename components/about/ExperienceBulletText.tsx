const TECH_HIGHLIGHTS = [
  "Ruby on Rails",
  "PostgreSQL",
  "REST APIs",
  "AI/LLM",
  "CI/CD",
  "Python",
  "React",
  "Docker",
  "Node.js",
] as const;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const highlightPattern = new RegExp(
  `(${TECH_HIGHLIGHTS.map(escapeRegExp)
    .sort((a, b) => b.length - a.length)
    .join("|")})`,
  "gi"
);

const highlightClassName =
  "font-semibold text-purple-200 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20";

export function ExperienceBulletText({ text }: { text: string }) {
  const parts = text.split(highlightPattern).filter((part) => part.length > 0);

  return (
    <span className="text-sm leading-relaxed text-zinc-300">
      {parts.map((part, index) => {
        const isHighlight = TECH_HIGHLIGHTS.some(
          (term) => term.toLowerCase() === part.toLowerCase()
        );
        if (isHighlight) {
          return (
            <span key={`${part}-${index}`} className={highlightClassName}>
              {part}
            </span>
          );
        }
        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </span>
  );
}
