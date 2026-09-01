import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "👤",
    title: "Client-first philosophy",
    desc: "Every strategy is built around your specific goals, timeline and budget.",
  },
  {
    icon: "📄",
    title: "Sector-tested experience",
    desc: "Corporate insurance-sector background brings global best practice into local advice.",
  },
  {
    icon: "💬",
    title: "Transparent communication",
    desc: "Clear guidance and honest advice, even in complex or difficult situations.",
  },
];

export default function ValuesSection() {
  return (
    <div className="values-section">
      <div className="values-banner">
        <Image src="/images/immigration-law.jpeg" alt="Fight for you" fill sizes="100vw" />
        <div className="values-banner-overlay">
          <h2>
            Fight back. Win
            <br />
            with <span className="accent">confidence</span>
          </h2>
        </div>
      </div>

      <div className="values-row">
        {values.map((v) => (
          <div className="value-item" key={v.title}>
            <div className="value-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
      <div className="pill-callout">
        <div className="pill-callout-left">
          <span className="icon-sm">✦</span>
          <p>Comprehensive legal coverage across 8 practice areas</p>
        </div>
        <Link href="/practice-areas" className="btn-outline">
          Work with us
        </Link>
      </div>
    </div>
  );
}
