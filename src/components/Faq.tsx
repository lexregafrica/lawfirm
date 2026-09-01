import Link from "next/link";
import Accordion from "./Accordion";
import { faqs } from "@/lib/data";

export default function Faq() {
  const items = faqs.map((f) => ({ title: f.q, body: f.a }));
  return (
    <section className="faq">
      <div className="faq-left">
        <div className="eyebrow">Frequently asked questions</div>
        <h2>
          Still have <span className="accent">questions?</span>
        </h2>
        <p>Get clear answers and expert legal guidance today.</p>
        <Link href="/contact" className="btn">
          Schedule free consultation
        </Link>
      </div>
      <div className="faq-list">
        <Accordion items={items} defaultOpen={0} itemClass="faq-item" headClass="faq-q" bodyClass="faq-a" />
      </div>
    </section>
  );
}
