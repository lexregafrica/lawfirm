import Image from "next/image";
import { contact, practiceAreas } from "@/lib/data";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-media">
        <Image src="/images/contact-bg.jpg" alt="Contact Adede & Co Advocates" fill sizes="(max-width: 1024px) 100vw, 50vw" />
        <div className="contact-media-overlay">
          <div>
            <span>Call us</span>
            <b>{contact.phone}</b>
          </div>
          <div>
            <span>Email us</span>
            <b>{contact.email}</b>
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
                  {practiceAreas.map((area) => (
                    <option key={area.slug} value={area.title}>
                      {area.title}
                    </option>
                  ))}
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
  );
}
