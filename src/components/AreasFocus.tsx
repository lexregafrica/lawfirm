import Link from "next/link";
import { practiceAreas } from "@/lib/data";

export default function AreasFocus() {
  const rowA = practiceAreas.slice(0, 4);
  const rowB = practiceAreas.slice(4, 8);
  const trackA = [...rowA, ...rowA];
  const trackB = [...rowB, ...rowB];

  return (
    <section className="areas-focus">
      <div className="focus-row">
        <div className="focus-track">
          {trackA.map((area, i) => (
            <div className="pill-tag" key={`${area.slug}-${i}`}>
              <span className="icon">{area.icon}</span>
              {area.title}
            </div>
          ))}
        </div>
      </div>
      <div className="focus-row reverse">
        <div className="focus-track">
          {trackB.map((area, i) => (
            <div className="pill-tag" key={`${area.slug}-${i}`}>
              <span className="icon">{area.icon}</span>
              {area.title}
            </div>
          ))}
        </div>
      </div>
      <div className="focus-circle">
        <span className="icon-lg">⚖</span>
        <h2>
          Areas of <span className="accent">focus</span>
        </h2>
        <Link href="/contact" className="btn">
          Discuss your case
        </Link>
      </div>
    </section>
  );
}
