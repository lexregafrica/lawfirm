import Image from "next/image";
import Link from "next/link";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="hero">
      <Ticker />
      <div className="hero-media">
        <Image
          src="/images/hero-gavel.jpg"
          alt="Judge's gavel"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-content">
          <h1>
            Breaking down the <span className="accent">law</span> for everyday use
          </h1>
          <div className="hero-actions">
            <Link href="/contact" className="btn">
              Free Consultation
            </Link>
            <div className="badge">
              <div>
                <b>
                  <span style={{ fontSize: 15 }}>⚖</span> 2012–2026
                </b>
                Serving Nairobi &amp; beyond
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
