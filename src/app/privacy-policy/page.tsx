import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — Adede & Co Advocates",
  description: "How Adede & Co Advocates collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="wrap">
        <section className="simple-hero">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Legal
          </div>
          <h1>Privacy Policy</h1>
          <p>Last updated: September 2026</p>
        </section>

        <Reveal>
          <section className="detail-section centered" style={{ paddingBottom: 60 }}>
            <h2>Overview</h2>
            <p>
              Adede &amp; Co Advocates (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your
              privacy. This policy explains what information we collect through this website, how we use
              it, and the choices you have.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you submit our consultation or contact forms, we collect the details you provide: your
              full name, email address, phone number, the service you&apos;re enquiring about, and your
              message. We do not collect payment information, and we do not use tracking cookies or
              analytics scripts on this site.
            </p>

            <h2>How we use it</h2>
            <p>
              We use the information you submit solely to respond to your enquiry, assess whether we can
              assist with your matter, and follow up with you. We do not sell, rent, or use your
              information for marketing without your consent.
            </p>

            <h2>How submissions are delivered</h2>
            <p>
              Form submissions on this site are relayed to our inbox by a third-party form-delivery
              service. Your submission passes through that provider only to reach us — it is not stored or
              used by them beyond delivering your message.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain enquiry information for as long as reasonably necessary to respond to you and, where
              you become a client, in line with our professional record-keeping obligations as advocates.
            </p>

            <h2>Your rights</h2>
            <p>
              Under the Kenya Data Protection Act, 2019, you have the right to access, correct, or request
              deletion of your personal data held by us, and to object to or restrict certain processing.
              To exercise these rights, contact us using the details below.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the top of
              this page reflects the most recent revision.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy or your data can be sent to{" "}
              <a href={`mailto:${contact.email}`} style={{ color: "var(--accent)" }}>
                {contact.email}
              </a>{" "}
              or {contact.phone}.
            </p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
