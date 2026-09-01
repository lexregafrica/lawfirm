import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Adede & Co Advocates",
  description:
    "Adede and Company Advocates is a boutique Nairobi law firm founded in 2012, bringing accessibility, innovation, efficiency and cost-effectiveness to the legal profession.",
};

const founderQuals = [
  { n: "01", text: "LL.B, Bachelor of Laws" },
  { n: "02", text: "KSL Diploma in Law" },
  { n: "03", text: "Associate Diploma in Insurance (Marine)" },
  { n: "04", text: "Import/Export Diploma" },
];

const standFor = [
  {
    icon: "✦",
    title: "Client-first philosophy",
    desc: "Every strategy is focused on delivering the best outcome for our clients.",
  },
  {
    icon: "✦",
    title: "Sector-tested experience",
    desc: "Corporate insurance-sector background brings global best practice into local advice.",
  },
  {
    icon: "✦",
    title: "Excellence in execution",
    desc: "We deliver precise, well-planned legal solutions with attention to detail.",
  },
  {
    icon: "✦",
    title: "Results driven",
    desc: "Focused on strong outcomes through strategy and experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header active="/about" />
      <main className="wrap">
        <PageHero
          eyebrow="About Us"
          title="About Adede & Co Advocates"
          subtitle="A boutique law firm founded in 2012 with the express mandate of bringing accessibility, innovation, efficiency and cost-effectiveness to the legal profession."
          stats={[
            { value: "14+", label: "Years active" },
            { value: "8", label: "Practice areas" },
            { value: "98%", label: "Win rate" },
          ]}
        />

        <Reveal>
        <section className="detail-section centered" style={{ paddingTop: 60 }}>
          <div className="eyebrow">Who we are</div>
          <h2>
            Where accessibility meets <span className="accent">legal excellence</span>
          </h2>
          <p>
            Adede and Company Advocates is a boutique law firm which was founded in 2012 by Owinyo Charles Adede,
            Advocate, with the express mandate of bringing accessibility, innovation, efficiency and
            cost-effectiveness to the legal profession through the provision of holistic legal solutions to our
            clients.
          </p>
          <p>
            Our understanding and sensitivity to the legal challenges posed by the ever changing local and global
            social, political, cultural, business and legal environments makes us uniquely capable of delivering
            well-rounded client-centric legal solutions. We always endeavour to understand not just the law but the
            environment and the dynamics besetting our clients before developing solutions.
          </p>
          <p>
            <strong style={{ color: "var(--ink)" }}>Mission:</strong> Breaking down the law for everyday use.
          </p>
        </section>
        </Reveal>

        <Reveal>
        <section className="founder-section">
          <div>
            <div className="eyebrow">Meet our founder</div>
            <h2>Charles Adede Owinyo</h2>
            <p>
              Charles Adede Owinyo is an Advocate of the High Court of Kenya, a Commissioner for Oaths and a Notary
              Public with over 13 years of professional experience. He has extensive experience in the corporate
              sector, especially the insurance sector, where he worked at companies including Kenindia, First
              Assurance and AIG before venturing into private practice.
            </p>
            <p>
              From the corporate sector, Charles brings into practice an understanding of best business practices
              from a global perspective, especially in relation to client management and innovation. From the
              world of entrepreneurship, he brings the sensibility, flexibility and roundedness that typically
              characterise successful entrepreneurs.
            </p>
          </div>
          <div className="founder-photo">
            <Image src="/images/founder-photo.jpg" alt="Charles Adede Owinyo" fill sizes="(max-width: 1024px) 100vw, 30vw" />
          </div>
          <div className="founder-quals">
            <h4>Qualifications</h4>
            {founderQuals.map((q) => (
              <div className="founder-qual-item" key={q.n}>
                <b>{q.n}</b>
                <span>{q.text}</span>
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        <Reveal>
        <section className="stand-for">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            What we stand for
          </div>
          <h2>
            The values behind <span className="accent">every case</span>
          </h2>
          <div className="stand-for-grid">
            <div className="stand-for-col">
              {standFor.slice(0, 2).map((item) => (
                <div className="stand-for-item" key={item.title}>
                  <span className="icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="stand-for-center">
              <Image src="/images/justice-statue.jpg" alt="Scales of justice" fill sizes="260px" />
            </div>
            <div className="stand-for-col">
              {standFor.slice(2, 4).map((item) => (
                <div className="stand-for-item" key={item.title}>
                  <span className="icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal>
        <CtaBanner
          image="/images/cta-library.jpg"
          title="Begin your journey to resolution with us"
          subtitle="Tell us about your situation and we'll connect you with the right advocate — no obligation, fully confidential."
        />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
