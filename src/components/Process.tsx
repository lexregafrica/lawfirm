const steps = [
  { n: "01", title: "Free consultation", desc: "A confidential conversation to explore your options." },
  { n: "02", title: "Discuss your case", desc: "A tailored legal strategy for your unique matter." },
  { n: "03", title: "Active representation", desc: "Full handling of filings, hearings and negotiations." },
  { n: "04", title: "Resolution & beyond", desc: "Strong outcomes with continued legal support." },
];

export default function Process() {
  return (
    <section className="process">
      {steps.map((step) => (
        <div className="process-item" key={step.n}>
          <b>{step.n}</b>
          <h4>{step.title}</h4>
          <p>{step.desc}</p>
        </div>
      ))}
    </section>
  );
}
