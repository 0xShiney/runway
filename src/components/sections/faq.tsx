"use client";

import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({
  items,
  className,
}: {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}) {
  return (
    <Accordion className={className}>
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger className="py-5 text-[15px] font-medium text-off-black">
            {item.question}
          </AccordionTrigger>
          <AccordionPanel className="pb-5 text-[15px] leading-relaxed text-slate-gray">
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
