export default function PageHero({
  eyebrow,
  title,
  subtitle,
  stats,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {stats && (
        <div className="stat-row">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
