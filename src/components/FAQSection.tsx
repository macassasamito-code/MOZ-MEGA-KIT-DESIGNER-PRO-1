import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/landingContent";
import { Reveal } from "./Reveal";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80 text-[#0B1228]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal className="space-y-3 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Dúvidas Frequentes
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight text-[#0B1228]">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Respostas claras sobre o conteúdo, entrega em PDF e aquisição na
            plataforma lojou.app.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-colors duration-150 ${
                  isOpen
                    ? "bg-[#F8FAFF] border-[#2563EB]/40"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#0B1228]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="px-5 sm:px-6 pb-5 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
