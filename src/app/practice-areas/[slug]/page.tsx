import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/data";

const details: Record<
  string,
  {
    overview: string[];
    handle: string[];
    support: { title: string; text: string }[];
    approach: string[];
    why: string[];
  }
> = {
  "intellectual-property": {
    overview: [
      "Just as the law protects ownership of personal property and real estate, so too does it protect the exclusive control of intangible assets. Intellectual Property Law covers the protection and enforcement of rights in the creative and innovative work you produce.",
      "Whether you're a writer, designer, inventor, or business owner, your original work and brand carry property rights that can — and should — be protected from unlawful use.",
    ],
    handle: ["Patents and utility models", "Trade marks and service marks", "Copyrights", "Brand and business name protection"],
    support: [
      { title: "Patents & utility models", text: "Protecting inventions and technical innovations from unauthorised use." },
      { title: "Trade marks & service marks", text: "Registering and defending the marks that identify your business." },
      { title: "Copyrights", text: "Safeguarding original artistic, literary and creative works." },
      { title: "Enforcement", text: "Acting against infringement and unlawful exploitation of your IP." },
    ],
    approach: [
      "We start by identifying exactly what intangible assets your work or business holds, then build a protection strategy suited to your budget and goals.",
      "Where infringement occurs, we pursue enforcement firmly and efficiently to protect the value you've built.",
    ],
    why: ["Clear guidance through registration processes", "Practical enforcement strategy", "Transparent, responsive communication"],
  },
  "employment-law": {
    overview: [
      "The legal framework which governs the relationship between employers and employees is what we call employment law. This law governs rights and obligations from the point of recruitment to termination of employment.",
      "At Adede and Company Advocates, we provide comprehensive advisory and dispute resolution services in relation to employment matters.",
    ],
    handle: [
      "Recruitment and employment contracts",
      "Wages, benefits and leave management",
      "Workplace discrimination and grievance management",
      "Termination, redundancy and dismissal",
    ],
    support: [
      { title: "Contracts & policies", text: "Drafting and reviewing employment contracts and workplace policies." },
      { title: "Discipline & grievance", text: "Managing disciplinary processes fairly and compliantly." },
      { title: "Termination matters", text: "Advisory on retrenchment, redundancy and dismissal." },
      { title: "Dispute resolution", text: "Representation in employment disputes and tribunals." },
    ],
    approach: [
      "We work closely with employers and employees alike to understand the full context of a workplace matter before advising on the best path forward.",
      "Our goal is always a compliant, fair, and well-documented resolution.",
    ],
    why: ["Balanced advisory for employers and employees", "Practical, compliant documentation", "Responsive dispute support"],
  },
  "insurance-law": {
    overview: [
      "Every person and business is exposed to various risks of varying severity. An important risk management strategy is to take insurance cover for those risks which are insurable.",
      "At Adede and Company Advocates, we provide guidance on all legal aspects of insurance — from policyholders to insurance companies, agents and brokers.",
    ],
    handle: ["Motor insurance", "Property insurance", "Marine and goods-in-transit insurance", "Liability and professional indemnity insurance"],
    support: [
      { title: "Motor insurance", text: "Claims and policy disputes for motor vehicle cover." },
      { title: "Property insurance", text: "Advisory on property and asset insurance matters." },
      { title: "Marine insurance", text: "Guidance on marine and goods-in-transit cover." },
      { title: "Liability cover", text: "Professional indemnity and liability insurance advisory." },
    ],
    approach: [
      "Our founder's background in the insurance sector — including roles at Kenindia, First Assurance and AIG — informs a practical, industry-aware approach to every matter.",
      "We work with potential clients of insurance companies, policyholders, insurers, agents and brokers alike.",
    ],
    why: ["Insurance-sector industry experience", "Practical claims guidance", "Balanced perspective across the industry"],
  },
  "immigration-law": {
    overview: [
      "Are you a foreign national interested in or already residing in Kenya for investment, business, work, or study? Adede and Company Advocates is at hand to assist with all your immigration requirements.",
      "Our suite of services spans advisory, training, compliance health-checks, and rescue for clients in conflict with immigration authorities.",
    ],
    handle: ["Investor and work permits", "Special and dependency passes", "Alien cards", "Multiple-entry visas"],
    support: [
      { title: "Advisory", text: "Guidance on the best way to manage your immigration matters." },
      { title: "Compliance", text: "Obtaining and maintaining the documents needed to stay and work in Kenya." },
      { title: "Training", text: "Sensitising clients and teams on immigration matters." },
      { title: "Rescue", text: "Assistance for clients in conflict with immigration authorities." },
    ],
    approach: [
      "We assess your specific purpose in Kenya — investment, business, work or study — and map out the compliance pathway that fits.",
      "We stay engaged through renewal and compliance health-checks, not just the initial application.",
    ],
    why: ["End-to-end permit and visa support", "Proactive compliance health-checks", "Support if issues arise with authorities"],
  },
  "conveyancing-law": {
    overview: [
      "Conveyancing is the science and act of transferring titles to real estate from one person to another — including the investigation of title, and preparation of agreements, leases, and other legal instruments.",
      "Whether you're buying, selling, or managing rental property, our conveyancing practice handles the transaction from title investigation through to registration.",
    ],
    handle: ["Leases", "Transfers", "Charges and mortgages", "Licenses"],
    support: [
      { title: "Title investigation", text: "Verifying title before you commit to a transaction." },
      { title: "Sale & purchase", text: "Managing the legal process for buyers and sellers." },
      { title: "Charges & mortgages", text: "Handling the legal documentation for financed property." },
      { title: "Leases", text: "Drafting and reviewing lease agreements for landlords and tenants." },
    ],
    approach: [
      "We move conveyancing matters efficiently — our clients regularly complete transactions in days rather than the years some processes have taken elsewhere.",
      "Every step, from title search to registration, is handled with the same diligence.",
    ],
    why: ["Fast, diligent transaction handling", "Clear communication throughout", "Experience across sellers, buyers and landlords"],
  },
  "tax-law": {
    overview: [
      "The tax net in Kenya is growing wider and stronger as digitization makes the tax system more efficient — and tax evasion a real risk. It pays to stay compliant.",
      "We assist clients with understanding tax obligations, registering with the right agencies, and keeping accurate records.",
    ],
    handle: ["Income tax, PAYE, corporate tax", "Capital gains tax", "VAT, customs and excise", "County-level taxes"],
    support: [
      { title: "Compliance", text: "Registration and ongoing compliance with tax authorities." },
      { title: "Deductions & remittances", text: "Ensuring deductions and remittances are made on time." },
      { title: "Returns", text: "Filing accurate and timely tax returns." },
      { title: "Records", text: "Keeping proper tax records to withstand scrutiny." },
    ],
    approach: [
      "We help clients understand their obligations across both national and county-level tax regimes, then build habits and processes that keep them compliant.",
    ],
    why: ["Coverage across national and county tax", "Practical compliance processes", "Responsive advisory when questions arise"],
  },
  "commercial-law": {
    overview: [
      "Commercial law applies to the rights, relations, and conduct of persons and businesses engaged in commerce, merchandising, trade, and sales.",
      "Whether you're buying, selling, or negotiating an ongoing transaction, we help you manage the legal side of doing business.",
    ],
    handle: ["Contract negotiation", "Management of ongoing transactions", "Dispute resolution", "Commercial agreements"],
    support: [
      { title: "Contract negotiation", text: "Negotiating terms that protect your commercial interests." },
      { title: "Transaction management", text: "Managing the legal process of ongoing commercial deals." },
      { title: "Dispute resolution", text: "Resolving commercial disputes efficiently." },
      { title: "Agreements", text: "Drafting and reviewing commercial agreements." },
    ],
    approach: [
      "We work alongside you through negotiation and execution, keeping commercial terms clear and enforceable.",
    ],
    why: ["Practical, deal-focused advisory", "Clear contract drafting", "Efficient dispute resolution"],
  },
  "corporate-law": {
    overview: [
      "Corporate law involves general corporate matters — incorporation of companies, directors' and shareholders' rights, articles of association, board meetings, secretarial matters, and listing or delisting of companies.",
      "No two companies are alike, so competent legal advice is a must for the effective set-up and management of your corporate affairs.",
    ],
    handle: ["Company incorporation", "Directors' and shareholders' rights", "Board and secretarial matters", "Corporate governance"],
    support: [
      { title: "Incorporation", text: "Setting up the right corporate structure from the start." },
      { title: "Governance", text: "Advisory on directors' duties and corporate governance." },
      { title: "Secretarial matters", text: "Board meetings, minutes, and statutory filings." },
      { title: "Shareholder matters", text: "Protecting and structuring shareholder rights." },
    ],
    approach: [
      "We treat every company as unique, tailoring governance and structural advice to your specific stage and ambitions.",
    ],
    why: ["Tailored corporate structuring", "Ongoing secretarial support", "Governance advisory as you grow"],
  },
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata(props: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} — Adede & Co Advocates`,
    description: area.short,
  };
}

export default async function PracticeAreaDetail(props: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await props.params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();
  const detail = details[slug];
  const others = practiceAreas.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Header active="/practice-areas" />
      <main className="wrap">
        <section className="detail-hero">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Practice Area
          </div>
          <h1>{area.title}</h1>
          <p>{area.short}</p>
        </section>
        <div className="detail-hero-media">
          <Image src={area.image} alt={area.title} fill sizes="(max-width: 1024px) 100vw, 1200px" priority />
        </div>

        <Reveal>
        <section className="detail-section centered">
          <h2>Overview</h2>
          {detail.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
        </Reveal>

        <Reveal>
        <section className="detail-section centered">
          <h2>What we handle</h2>
          <ul className="checklist">
            {detail.handle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        </Reveal>

        <Reveal>
        <section className="detail-section centered">
          <h2>Detailed support areas</h2>
          <div className="support-grid">
            {detail.support.map((s) => (
              <div className="support-card" key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        <Reveal>
        <section className="detail-section centered">
          <h2>Our approach</h2>
          {detail.approach.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
        </Reveal>

        <Reveal>
        <section className="detail-section centered" style={{ paddingBottom: 60 }}>
          <h2>Why choose us</h2>
          <ul className="checklist">
            {detail.why.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        </Reveal>

        <Reveal>
        <section className="related-section">
          <h2>Other legal services</h2>
          <div className="related-grid">
            {others.map((o) => (
              <Link href={`/practice-areas/${o.slug}`} className="service-card" key={o.slug} style={{ height: 340 }}>
                <Image src={o.image} alt={o.title} fill sizes="33vw" />
                <div className="body">
                  <h3 style={{ fontSize: 18 }}>{o.title}</h3>
                  <p>{o.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        </Reveal>

        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
