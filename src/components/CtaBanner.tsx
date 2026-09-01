import Image from "next/image";
import Link from "next/link";

export default function CtaBanner({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="cta-banner">
      <Image src={image} alt="" fill sizes="100vw" />
      <div className="cta-banner-inner">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link href="/contact" className="btn">
          Schedule a free consultation
        </Link>
        <div className="cta-badges">
          <span>Attorney-client privilege</span>
          <span>Client-first approach</span>
        </div>
      </div>
    </div>
  );
}
