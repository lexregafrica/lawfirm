import Image from "next/image";

export default function Justice() {
  return (
    <section className="justice">
      <div className="justice-watermark">Justice</div>
      <div className="justice-inner">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          The Adede Way
        </div>
        <div className="justice-portrait">
          <Image src="/images/justice-statue.jpg" alt="Scales of justice" fill sizes="64px" />
        </div>
        <h2>
          Holistic counsel, <span className="accent">client-centric</span> results
        </h2>
        <p>
          We always endeavour to understand not just the law but the environment and dynamics besetting our
          clients before developing solutions. We believe we thrive when our clients thrive.
        </p>
        <div className="stat-row">
          <div className="stat">
            <b>14+</b>
            <span>Years active</span>
          </div>
          <div className="stat">
            <b>8</b>
            <span>Practice areas</span>
          </div>
          <div className="stat">
            <b>98%</b>
            <span>Win rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
