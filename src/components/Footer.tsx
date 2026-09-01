import Link from "next/link";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: 20 }}>
              <span className="logo-mark">A</span> Adede &amp; Co
            </Link>
            <h2>
              Breaking down the law <span className="accent">for everyday use.</span>
            </h2>
          </div>
          <Link href="/contact" className="btn">
            Schedule a free consultation
          </Link>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h5>Pages</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/practice-areas">Practice Areas</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p>{contact.phone}</p>
            <p>{contact.phone2}</p>
            <p>{contact.address}</p>
            <p>{contact.postal}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Adede &amp; Co Advocates. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
