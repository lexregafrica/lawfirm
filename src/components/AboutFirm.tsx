import Image from "next/image";
import Accordion from "./Accordion";

const items = [
  {
    title: "Our commitment to you",
    body: "Founded in 2012 with the express mandate of bringing accessibility, innovation, efficiency and cost-effectiveness to the legal profession.",
  },
  {
    title: "Our vision",
    body: "To deliver holistic legal solutions shaped by the local and global dynamics facing every client we serve.",
  },
  {
    title: "Our mission",
    body: "Breaking down the law for everyday use.",
  },
];

export default function AboutFirm() {
  return (
    <section className="about-firm">
      <div>
        <div className="img-wrap">
          <Image src="/images/hero-handshake.jpeg" alt="About the firm" fill sizes="(max-width: 1024px) 100vw, 45vw" />
          <div className="about-caption">
            <h3>
              Built on <span className="accent">trust</span> and <span className="accent">clarity</span>
            </h3>
            <p>Focused on your goals at every step</p>
          </div>
        </div>
      </div>
      <div>
        <div className="eyebrow">About the Firm</div>
        <h2>
          Where accessibility meets <span className="accent">legal excellence</span>
        </h2>
        <Accordion items={items} defaultOpen={0} />
      </div>
    </section>
  );
}
