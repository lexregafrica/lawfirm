import { testimonials } from "@/lib/data";

export default function Testimonials() {
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
            <b>—</b>
            <span>
              Client rating
              <br />
              (pending review data)
            </span>
          </div>
        </div>
        <div className="testi-cards">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div>
                <div className="stars">★★★★★</div>
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
          <div className="testi-card">
            <div>
              <div className="stars">★★★★★</div>
              <p>Placeholder testimonial — to be replaced with a real client quote.</p>
            </div>
            <div className="testi-person">
              <div className="avatar-initials">—</div>
              <div>
                <b>Client Name</b>
                <span className="placeholder-tag">placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testi-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
