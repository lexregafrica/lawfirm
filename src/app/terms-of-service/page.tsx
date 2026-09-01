import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service — Adede & Co Advocates",
  description: "Terms governing use of the Adede & Co Advocates website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="wrap">
        <section className="simple-hero">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Legal
          </div>
          <h1>Terms of Service</h1>
          <p>Last updated: September 2026</p>
        </section>

        <Reveal>
          <section className="detail-section centered" style={{ paddingBottom: 60 }}>
            <h2>Acceptance of terms</h2>
            <p>
              By using this website, you agree to these terms. If you do not agree, please do not use the
              site.
            </p>

            <h2>Not legal advice</h2>
            <p>
              The content on this website — including practice area descriptions and any articles — is
              provided for general information only and does not constitute legal advice. No
              advocate-client relationship is formed by browsing this site or submitting an enquiry.
              Specific matters require a formal consultation with our firm.
            </p>

            <h2>Use of this site</h2>
            <p>
              You may use this website for lawful purposes only. You agree not to misuse the site,
              interfere with its operation, or attempt to access it in a way that could damage or overload
              our systems.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The content, layout, and branding of this website belong to Adede &amp; Co Advocates unless
              otherwise credited. You may not reproduce or redistribute it without our prior written
              consent.
            </p>

            <h2>Third-party links and services</h2>
            <p>
              This site may link to third-party websites or use third-party services (such as our
              form-delivery provider) for functionality. We are not responsible for the content or privacy
              practices of external sites.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              This website and its content are provided &quot;as is&quot;, without warranties of any kind.
              To the extent permitted by law, Adede &amp; Co Advocates is not liable for any loss arising
              from your use of, or reliance on, this website.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of Kenya.</p>

            <h2>Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The &quot;Last updated&quot; date at the top of
              this page reflects the most recent revision.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about these terms can be sent to{" "}
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
