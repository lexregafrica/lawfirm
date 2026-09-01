"use client";

import { useState } from "react";

export type AccordionEntry = {
  title: string;
  body: string;
};

export default function Accordion({
  items,
  defaultOpen = 0,
  itemClass = "accordion-item",
  headClass = "accordion-head",
  bodyClass = "accordion-body",
}: {
  items: AccordionEntry[];
  defaultOpen?: number | null;
  itemClass?: string;
  headClass?: string;
  bodyClass?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <>
      {items.map((item, i) => (
        <div className={itemClass} key={item.title}>
          <button
            className={headClass}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.title}</span>
            <span>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && item.body && <div className={bodyClass}>{item.body}</div>}
        </div>
      ))}
    </>
  );
}
