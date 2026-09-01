import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us — Adede & Co Advocates",
  description: "Get in touch with Adede & Co Advocates in Lavington, Nairobi.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="/contact" />
      <main className="wrap">
        <section className="simple-hero">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h1>Let&apos;s start a conversation</h1>
        </section>

        <Reveal>
        <section className="contact-page-section">
          <div>
            <div className="eyebrow">Reach us directly</div>
            <div className="reach-list">
              <div className="reach-item">
                <div className="reach-icon">📞</div>
                <div>
                  <h4>Call us</h4>
                  <p>{contact.phone}</p>
                  <span>{contact.phone2}</span>
                </div>
              </div>
              <div className="reach-item">
                <div className="reach-icon">✉</div>
                <div>
                  <h4>Email us</h4>
                  <p>{contact.email}</p>
                </div>
              </div>
              <div className="reach-item">
                <div className="reach-icon">📍</div>
                <div>
                  <h4>Visit us</h4>
                  <p>{contact.address}</p>
                  <span>{contact.postal}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-frame">
            <div className="eyebrow">Response guaranteed within 1 business day</div>
            <div className="contact-form">
              <h3>Book a consultation</h3>
              <form action={`https://formsubmit.co/${contact.email}`} method="POST">
                <input type="hidden" name="_subject" value="New consultation request — Adede & Co website" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="fullName">Full name*</label>
                    <input id="fullName" name="Full name" placeholder="Enter your full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email address*</label>
                    <input id="email" name="Email address" type="email" placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="Phone number" placeholder="Your contact number" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service needed*</label>
                    <select id="service" name="Service needed" required defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Intellectual Property</option>
                      <option>Employment Law</option>
                      <option>Insurance Law</option>
                      <option>Immigration Law</option>
                      <option>Conveyancing Law</option>
                      <option>Tax Law</option>
                      <option>Commercial Law</option>
                      <option>Corporate Law</option>
                    </select>
                  </div>
                </div>
                <div className="field" style={{ marginBottom: 20 }}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="Message" placeholder="Write your message here..." />
                </div>
                <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        </Reveal>

        <Reveal>
          <Faq />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
