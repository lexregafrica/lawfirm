import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ active = "/" }: { active?: string }) {
  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">A</span> Adede &amp; Co
        </Link>
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={active === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Link href="/contact" className="btn">
            Book Consultation
          </Link>
          <button className="menu-toggle" aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
