import Image from "next/image";

const featured = [
  {
    title: "Corporate Law",
    desc: "Set-up and management of your corporate affairs in Kenya.",
    image: "/images/corporate-law.jpeg",
  },
  {
    title: "Commercial Law",
    desc: "Contract negotiation, transaction management, dispute resolution.",
    image: "/images/commercial-law.jpeg",
  },
  {
    title: "Conveyancing Law",
    desc: "Leases, transfers, charges, mortgages and licenses.",
    image: "/images/conveyancing-law.jpeg",
  },
];

export default function ServiceTeaser() {
  return (
    <section className="service-teaser">
      {featured.map((item) => (
        <div className="service-card" key={item.title}>
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 50vw, 33vw" />
          <div className="body">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
