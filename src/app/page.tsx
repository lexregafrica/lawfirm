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

export default function Home() {
  return (
    <>
      <Header active="/" />
      <main className="wrap">
        <Hero />
        <ServiceTeaser />
        <AreasFocus />
        <Justice />
        <Testimonials />
        <AboutFirm />
        <ValuesSection />
        <Process />
        <ContactSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
