import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceTeaser from "@/components/ServiceTeaser";
import AreasFocus from "@/components/AreasFocus";
import Justice from "@/components/Justice";
import Testimonials from "@/components/Testimonials";
import AboutFirm from "@/components/AboutFirm";
import ValuesSection from "@/components/ValuesSection";
import Process from "@/components/Process";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header active="/" />
      <main className="wrap">
        <Hero />
        <Reveal>
          <ServiceTeaser />
        </Reveal>
        <Reveal>
          <AreasFocus />
        </Reveal>
        <Reveal>
          <Justice />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <AboutFirm />
        </Reveal>
        <Reveal>
          <ValuesSection />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
