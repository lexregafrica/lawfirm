import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import { practiceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Practice Areas — Adede & Co Advocates",
  description:
    "Eight practice areas: Intellectual Property, Employment, Insurance, Immigration, Conveyancing, Tax, Commercial and Corporate law.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Header active="/practice-areas" />
      <main className="wrap">
        <PageHero
          eyebrow="Practice Areas"
          title="Legal services built on experience and trust"
          subtitle="Focused on results that matter. Prepared for complexity and risk. Committed to clarity and speed."
        />

        <section className="practice-grid">
          {practiceAreas.map((area) => (
            <Link href={`/practice-areas/${area.slug}`} className="service-card" key={area.slug}>
              <Image src={area.image} alt={area.title} fill sizes="(max-width: 1024px) 50vw, 33vw" />
              <div className="body">
                <h3>{area.title}</h3>
                <p>{area.short}</p>
              </div>
            </Link>
          ))}
        </section>

        <Process />
        <ContactSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
