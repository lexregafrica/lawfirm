import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section className="testimonials">
      <div className="testi-panel">
        <div className="testi-left">
          <div>
            <div className="eyebrow">Hear from our clients</div>
            <h2>
              Proven results, <span className="accent">lasting trust</span>
            </h2>
          </div>
          <div className="testi-rating">
            <b>{average.toFixed(1)}</b>
            <span>
              Client rating
              <br />
              Based on {testimonials.length} review{testimonials.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>
        <div className="testi-cards">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <p>&quot;{t.quote}&quot;</p>
              </div>
              <div className="testi-person">
                <div className="avatar-initials">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-dots">
        {testimonials.map((t, i) => (
          <span key={t.name} className={i === 0 ? "active" : undefined}></span>
        ))}
      </div>
    </section>
  );
}
