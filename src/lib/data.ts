export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  image: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Protecting patents, trade marks, service marks and copyrights.",
    icon: "🖋",
    image: "/images/ip-law.jpeg",
  },
  {
    slug: "employment-law",
    title: "Employment Law",
    short: "Advisory and dispute resolution across the employment relationship.",
    icon: "🤝",
    image: "/images/employment-law.jpeg",
  },
  {
    slug: "insurance-law",
    title: "Insurance Law",
    short: "Guidance on motor, property, marine and liability insurance.",
    icon: "🛡",
    image: "/images/insurance-law.jpeg",
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    short: "Advisory, training, compliance and rescue for immigration matters.",
    icon: "🌍",
    image: "/images/immigration-law.jpeg",
  },
  {
    slug: "conveyancing-law",
    title: "Conveyancing Law",
    short: "Leases, transfers, charges, mortgages and licenses.",
    icon: "🏠",
    image: "/images/conveyancing-law.jpeg",
  },
  {
    slug: "tax-law",
    title: "Tax Law",
    short: "Compliance, registration and management of national and county taxes.",
    icon: "💰",
    image: "/images/tax-law.jpeg",
  },
  {
    slug: "commercial-law",
    title: "Commercial Law",
    short: "Contract negotiation, transaction management, dispute resolution.",
    icon: "💼",
    image: "/images/commercial-law.jpeg",
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    short: "Set-up and management of your corporate affairs in Kenya.",
    icon: "🏛",
    image: "/images/corporate-law.jpeg",
  },
];

export const testimonials = [
  {
    quote:
      "I was introduced to the firm while in the process of conveyance which had troubled me for a long period. A process which had taken years with another company was completed in just a few days and I now have my title deed.",
    name: "J.M. Karuri",
    role: "Client",
    initials: "JK",
  },
  {
    quote:
      "Charles had been rendering legal, NCA registration, and visa application services to my company since its inception. At all times I have found him professional, responsible, accurate, courteous, and service oriented.",
    name: "Ram Riftin",
    role: "Director Finance, On Track (E.A.) Ltd",
    initials: "RR",
  },
];

export const faqs = [
  {
    q: "How can I schedule a consultation?",
    a: "Book through our online form, or contact us directly by phone or email. Our team responds promptly to confirm your appointment.",
  },
  {
    q: "What areas of law do you handle?",
    a: "We advise across eight practice areas: Intellectual Property, Employment Law, Insurance Law, Immigration Law, Conveyancing Law, Tax Law, Commercial Law and Corporate Law. If you're unsure which fits your matter, tell us what's going on and we'll point you the right way.",
  },
  {
    q: "Do you offer free initial consultations?",
    a: "Yes. Our first consultation is free and confidential, so you can explain your situation and understand your options before committing to anything.",
  },
  {
    q: "How long does a legal matter usually take?",
    a: "It depends on the type and complexity of the matter — a straightforward conveyance can close in days, while a contested dispute can take longer. We'll give you a realistic timeline once we've reviewed the details of your case.",
  },
  {
    q: "What are your legal fees and pricing structure?",
    a: "Fees vary by the type and scope of the matter. We agree the structure with you upfront — before any work begins — so there are no surprises.",
  },
];

export const contact = {
  phone: "0788-954-272",
  phone2: "+254-722-672-690",
  email: "adede@adedeadvocates.co.ke",
  address: "Intrade Africa Place, Ground Floor, Block B, Kauria Close, Off Muthangari Road, Lavington",
  postal: "P.O. Box 19118-00100, Nairobi",
};
