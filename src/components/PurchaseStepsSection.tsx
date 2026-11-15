import React from "react";
import { ArrowRight } from "lucide-react";
import { PURCHASE_STEPS } from "../data/landingContent";
import { Reveal } from "./Reveal";

export const PurchaseStepsSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFF] text-[#0B1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="max-w-3xl space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Como funciona a compra
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#0B1228]">
            COMO VAIS RECEBER O TEU MEGA KIT?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Todo o processo de compra e entrega do PDF com o link de acesso é
            realizado através da plataforma oficial Tutora.
          </p>
        </Reveal>

        {/* Passos com linha de progressão */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#6D28D9] to-[#15803D] opacity-25"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PURCHASE_STEPS.map((step, idx) => (
              <Reveal key={step.number} delay={idx * 0.07} className="h-full">
                <div className="h-full relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="w-11 h-11 rounded-xl bg-[#0B1228] text-[#FACC15] font-mono font-bold text-base flex items-center justify-center tabular-nums">
                      {step.number}
                    </span>
                    {idx < PURCHASE_STEPS.length - 1 && (
                      <ArrowRight
                        className="w-4 h-4 text-slate-400 hidden sm:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1228] tracking-tight mb-2">
                    {step.number} — {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
