"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}>
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && item.body && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div className={bodyClass}>{item.body}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}
